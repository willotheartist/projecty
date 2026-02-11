// app/api/dev/ping-db/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Mode = "reuse" | "create";

function parseModeFromUrl(req: Request): Mode {
  const { searchParams } = new URL(req.url);
  const m = (searchParams.get("mode") ?? "").toLowerCase();
  return m === "create" ? "create" : "reuse";
}

function parseModeFromBody(body: any): Mode {
  const m = String(body?.mode ?? "").toLowerCase();
  return m === "create" ? "create" : "reuse";
}

async function ensureRuleSet() {
  const ruleSet = await prisma.ruleSet.findUnique({
    where: { version: "v1.0" },
  });

  if (!ruleSet) {
    return {
      ok: false as const,
      res: NextResponse.json(
        { ok: false, error: "RuleSet v1.0 missing (run pnpm prisma db seed)" },
        { status: 400 }
      ),
    };
  }

  return { ok: true as const, ruleSet };
}

async function ensureFounder() {
  const user = await prisma.user.upsert({
    where: { email: "founder@projecty.local" },
    update: {},
    create: { email: "founder@projecty.local", role: "ADMIN" },
  });
  return user;
}

// "Sample" constants (single source of truth)
const SAMPLE = {
  client: {
    name: "Sample Buyer",
    residency: "UK",
    liquidityAvailable: 650000,
    netWorthBand: "5-10M",
    incomeType: "BUSINESS" as const,
    ownershipIntent: "SPV" as const,
  },
  vessel: {
    purchasePrice: 3200000,
    yearBuilt: 2012,
    usageType: "PRIVATE" as const,
    intendedFlag: "Malta",
  },
};

async function createFresh(userId: string) {
  const client = await prisma.client.create({
    data: {
      ...SAMPLE.client,
      createdById: userId,
    },
  });

  const vessel = await prisma.vessel.create({
    data: {
      clientId: client.id,
      ...SAMPLE.vessel,
    },
  });

  const assessment = await prisma.assessment.create({
    data: {
      clientId: client.id,
      vesselId: vessel.id,
      createdById: userId,
      ruleSetVersion: "v1.0",
      readinessScore: null,
      tier: null,
      ltvEstimateMin: null,
      ltvEstimateMax: null,
      riskFlags: [],
      recommendedPath: null,
    },
  });

  return { userId, client, vessel, assessment, reused: false };
}

async function reuseOrCreate(userId: string) {
  // Reuse latest client for this founder with the sample name, otherwise create
  const existingClient = await prisma.client.findFirst({
    where: {
      createdById: userId,
      name: SAMPLE.client.name,
    },
    orderBy: { createdAt: "desc" },
  });

  if (!existingClient) {
    return createFresh(userId);
  }

  // Reuse latest vessel for that client, otherwise create it
  const existingVessel = await prisma.vessel.findFirst({
    where: { clientId: existingClient.id },
    orderBy: { createdAt: "desc" },
  });

  const vessel =
    existingVessel ??
    (await prisma.vessel.create({
      data: {
        clientId: existingClient.id,
        ...SAMPLE.vessel,
      },
    }));

  // Reuse latest assessment for that client+vessel+ruleset, otherwise create it
  const existingAssessment = await prisma.assessment.findFirst({
    where: {
      createdById: userId,
      clientId: existingClient.id,
      vesselId: vessel.id,
      ruleSetVersion: "v1.0",
    },
    orderBy: { createdAt: "desc" },
  });

  const assessment =
    existingAssessment ??
    (await prisma.assessment.create({
      data: {
        clientId: existingClient.id,
        vesselId: vessel.id,
        createdById: userId,
        ruleSetVersion: "v1.0",
        readinessScore: null,
        tier: null,
        ltvEstimateMin: null,
        ltvEstimateMax: null,
        riskFlags: [],
        recommendedPath: null,
      },
    }));

  return {
    userId,
    client: existingClient,
    vessel,
    assessment,
    reused: true,
  };
}

async function handler(mode: Mode) {
  const rs = await ensureRuleSet();
  if (!rs.ok) return rs.res;

  const user = await ensureFounder();

  const result =
    mode === "create" ? await createFresh(user.id) : await reuseOrCreate(user.id);

  return NextResponse.json({
    ok: true,
    mode,
    reused: result.reused,
    created: {
      user: { id: user.id, email: user.email },
      client: { id: result.client.id },
      vessel: { id: result.vessel.id },
      assessment: { id: result.assessment.id },
    },
  });
}

export async function GET(req: Request) {
  const mode = parseModeFromUrl(req);
  return handler(mode);
}

export async function POST(req: Request) {
  let mode: Mode = "reuse";
  try {
    const body = await req.json().catch(() => ({}));
    mode = parseModeFromBody(body);
  } catch {
    // ignore
  }
  return handler(mode);
}
