// app/api/keys/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { generateApiKey, listApiKeys, revokeApiKey } from "@/lib/apiAuth";

export const dynamic = "force-dynamic";

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

/**
 * GET /api/keys — list current user's API keys
 */
export async function GET() {
  const user = await getSessionUser();
  if (!user) return json({ error: "Unauthorized" }, 401);

  const keys = await listApiKeys(user.id);
  return json({ keys });
}

/**
 * POST /api/keys — generate a new API key
 * Body: { "name": "My Integration" }
 */
export async function POST(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) return json({ error: "Unauthorized" }, 401);

  const body = await req.json().catch(() => ({}));
  const name = body?.name || "Default";

  const { rawKey, record } = await generateApiKey(user.id, name);

  // rawKey is only returned ONCE — user must copy it immediately
  return json({
    key: rawKey,
    id: record.id,
    name: record.name,
    prefix: record.prefix,
    createdAt: record.createdAt.toISOString(),
    warning: "This key will only be shown once. Copy it now.",
  }, 201);
}

/**
 * DELETE /api/keys — revoke an API key
 * Body: { "keyId": "..." }
 */
export async function DELETE(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) return json({ error: "Unauthorized" }, 401);

  const body = await req.json().catch(() => ({}));
  const keyId = body?.keyId;

  if (!keyId) return json({ error: "keyId is required" }, 400);

  await revokeApiKey(keyId, user.id);
  return json({ ok: true });
}