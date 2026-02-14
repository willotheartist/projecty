// lib/auth.ts
import { cookies } from "next/headers";
import { prisma } from "./prisma";

/* ─────────────────────────────────────────────
   Password hashing using PBKDF2 (Web Crypto)
   ───────────────────────────────────────────── */

const SALT_LEN = 16;
const ITERATIONS = 100_000;
const KEY_LEN = 32;

async function deriveKey(password: string, salt: Uint8Array): Promise<string> {
  const enc = new TextEncoder();

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password) as BufferSource,
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  // 👇 Force salt into proper ArrayBufferView<ArrayBuffer>
  const cleanSalt = new Uint8Array(
    salt.buffer.slice(salt.byteOffset, salt.byteOffset + salt.byteLength)
  );

  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: cleanSalt as BufferSource,
      iterations: ITERATIONS,
      hash: "SHA-256",
    },
    keyMaterial,
    KEY_LEN * 8
  );

  return Buffer.from(bits).toString("hex");
}

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LEN));
  const hash = await deriveKey(password, salt);
  return `${Buffer.from(salt).toString("hex")}:${hash}`;
}

export async function verifyPassword(
  password: string,
  stored: string
): Promise<boolean> {
  const [saltHex, expectedHash] = stored.split(":");
  if (!saltHex || !expectedHash) return false;

  const salt = Uint8Array.from(Buffer.from(saltHex, "hex"));
  const hash = await deriveKey(password, salt);

  return hash === expectedHash;
}

/* ─────────────────────────────────────────────
   JWT using HMAC-SHA256
   ───────────────────────────────────────────── */

const JWT_SECRET =
  process.env.JWT_SECRET || "waaza-dev-secret-change-me";

const TOKEN_EXPIRY = 7 * 24 * 60 * 60;

function base64url(input: string | Uint8Array | ArrayBuffer): string {
  const bytes =
    typeof input === "string"
      ? new TextEncoder().encode(input)
      : input instanceof ArrayBuffer
      ? new Uint8Array(input)
      : input;

  return Buffer.from(bytes)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function hmacSign(data: string): Promise<string> {
  const enc = new TextEncoder();

  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(JWT_SECRET) as BufferSource,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return base64url(sig);
}

export async function createToken(payload: {
  userId: string;
  role: string;
}): Promise<string> {
  const header = base64url(
    JSON.stringify({ alg: "HS256", typ: "JWT" })
  );

  const body = base64url(
    JSON.stringify({
      ...payload,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + TOKEN_EXPIRY,
    })
  );

  const signature = await hmacSign(`${header}.${body}`);
  return `${header}.${body}.${signature}`;
}

export async function verifyToken(
  token: string
): Promise<{ userId: string; role: string } | null> {
  try {
    const [header, body, signature] = token.split(".");

    const expectedSig = await hmacSign(`${header}.${body}`);
    if (signature !== expectedSig) return null;

    const decoded = JSON.parse(
      Buffer.from(body, "base64url").toString()
    );

    if (decoded.exp < Math.floor(Date.now() / 1000)) return null;

    return {
      userId: decoded.userId,
      role: decoded.role,
    };
  } catch {
    return null;
  }
}

/* ─────────────────────────────────────────────
   Session helpers
   ───────────────────────────────────────────── */

const COOKIE_NAME = "waaza_session";

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: TOKEN_EXPIRY,
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getSessionUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;

  const payload = await verifyToken(token);
  if (!payload) return null;

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, email: true, name: true, role: true },
  });

  return user;
}
