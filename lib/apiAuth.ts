// lib/apiAuth.ts
import { prisma } from "./prisma";

const PREFIX = "wza_";

/**
 * Generate a new API key for a user.
 * Returns the raw key (only shown once) and the DB record.
 */
export async function generateApiKey(userId: string, name = "Default") {
  // Generate 32 random bytes → base64url
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const raw = PREFIX + Buffer.from(bytes).toString("base64url");

  // Hash the key for storage
  const keyHash = await hashKey(raw);
  const prefix = raw.slice(0, 12) + "...";

  const record = await prisma.apiKey.create({
    data: {
      userId,
      name,
      keyHash,
      prefix,
    },
  });

  return { rawKey: raw, record };
}

/**
 * Validate an API key from a request header.
 * Returns the user if valid, null if not.
 */
export async function validateApiKey(key: string) {
  if (!key || !key.startsWith(PREFIX)) return null;

  const keyHash = await hashKey(key);

  const apiKey = await prisma.apiKey.findUnique({
    where: { keyHash },
    include: {
      user: {
        select: { id: true, email: true, name: true, role: true },
      },
    },
  });

  if (!apiKey || !apiKey.active) return null;

  // Basic rate limiting check (per-hour window)
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

  if (apiKey.lastUsedAt && apiKey.lastUsedAt > oneHourAgo) {
    if (apiKey.requestCount >= apiKey.rateLimit) {
      return { error: "rate_limit_exceeded" as const, user: null, apiKeyId: apiKey.id };
    }
  }

  // Update usage stats
  const shouldResetCount =
    !apiKey.lastUsedAt || apiKey.lastUsedAt <= oneHourAgo;

  await prisma.apiKey.update({
    where: { id: apiKey.id },
    data: {
      lastUsedAt: new Date(),
      requestCount: shouldResetCount ? 1 : { increment: 1 },
    },
  });

  return { user: apiKey.user, apiKeyId: apiKey.id, error: null };
}

/**
 * Revoke (deactivate) an API key.
 */
export async function revokeApiKey(keyId: string, userId: string) {
  return prisma.apiKey.updateMany({
    where: { id: keyId, userId },
    data: { active: false },
  });
}

/**
 * List API keys for a user (never returns the actual key).
 */
export async function listApiKeys(userId: string) {
  return prisma.apiKey.findMany({
    where: { userId },
    select: {
      id: true,
      name: true,
      prefix: true,
      active: true,
      lastUsedAt: true,
      requestCount: true,
      rateLimit: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });
}

async function hashKey(key: string): Promise<string> {
  const enc = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest("SHA-256", enc.encode(key));
  return Buffer.from(hashBuffer).toString("hex");
}