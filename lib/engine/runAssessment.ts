// lib/engine/runAssessment.ts
import { prisma } from "@/lib/prisma";
import { clamp, evaluateRule, RuleRow, EvalHit } from "./rules";

type RunArgs = {
  clientId: string;
  vesselId: string;
  ruleSetVersion?: string; // default latest if omitted
  actorEmail?: string;
  assessmentId?: string; // update existing if provided
};

const ENGINE_VERSION = "engine_v1";

function tierFromScore(score: number) {
  if (score >= 80) return "FINANCE_READY";
  if (score >= 50) return "CONDITIONAL";
  return "HIGH_RISK";
}

function ltvFromScore(score: number) {
  if (score >= 80) return { min: 50, max: 65 };
  if (score >= 50) return { min: 35, max: 50 };
  return { min: 20, max: 35 };
}

function recommendedPathFromContext(ctx: any) {
  if (ctx.vessel.usageType === "CHARTER") return "CHARTER_STRUCTURE_REVIEW";
  if (String(ctx.client.residency).toUpperCase().includes("UK")) return "STANDARD_LOAN_PATH";
  return "STRUCTURING_REVIEW";
}

async function getLatestRuleSetVersion(): Promise<string> {
  const latest = await prisma.ruleSet.findFirst({
    orderBy: { createdAt: "desc" },
    select: { version: true },
  });
  return latest?.version ?? "v1.0";
}

function buildInputSnapshot(client: any, vessel: any) {
  return {
    client: {
      id: client.id,
      name: client.name,
      residency: client.residency,
      liquidityAvailable: client.liquidityAvailable,
      netWorthBand: client.netWorthBand,
      incomeType: client.incomeType,
      ownershipIntent: client.ownershipIntent,
    },
    vessel: {
      id: vessel.id,
      clientId: vessel.clientId,
      purchasePrice: vessel.purchasePrice,
      yearBuilt: vessel.yearBuilt,
      usageType: vessel.usageType,
      intendedFlag: vessel.intendedFlag ?? null,
    },
  };
}

function compute(client: any, vessel: any, rules: RuleRow[]) {
  const ctx = { client, vessel };

  let score = 60;
  const hits: EvalHit[] = rules.map((rule) => evaluateRule(rule, ctx));
  for (const h of hits) score += h.delta;
  score = clamp(score, 0, 100);

  const tier = tierFromScore(score);
  const ltv = ltvFromScore(score);
  const recommendedPath = recommendedPathFromContext(ctx);

  const riskFlags = hits
    .filter((h) => h.matched && h.flag)
    .map((h) => String(h.flag));

  return {
    ctx,
    hits,
    readinessScore: score,
    tier,
    ltv,
    riskFlags,
    recommendedPath,
  };
}

export async function runAssessment({
  clientId,
  vesselId,
  ruleSetVersion,
  actorEmail = "founder@projecty.local",
  assessmentId,
}: RunArgs) {
  const version = ruleSetVersion ?? (await getLatestRuleSetVersion());

  const [client, vessel, ruleSet] = await Promise.all([
    prisma.client.findUnique({ where: { id: clientId } }),
    prisma.vessel.findUnique({ where: { id: vesselId } }),
    prisma.ruleSet.findUnique({
      where: { version },
      include: { rules: true },
    }),
  ]);

  if (!client) throw new Error("Client not found");
  if (!vessel) throw new Error("Vessel not found");
  if (!ruleSet) throw new Error(`RuleSet not found: ${version}`);

  const rules: RuleRow[] = ruleSet.rules.map((r) => ({
    id: r.id,
    condition: r.condition as any,
    weight: r.weight,
    effect: r.effect as any,
  }));

  const computed = compute(client, vessel, rules);

  const actor = await prisma.user.upsert({
    where: { email: actorEmail },
    update: {},
    create: { email: actorEmail, role: "ADMIN" },
  });

  const assessment = assessmentId
    ? await prisma.assessment.update({
        where: { id: assessmentId },
        data: {
          clientId: client.id,
          vesselId: vessel.id,
          createdById: actor.id,
          ruleSetVersion: version,
          readinessScore: computed.readinessScore,
          tier: computed.tier,
          ltvEstimateMin: computed.ltv.min,
          ltvEstimateMax: computed.ltv.max,
          riskFlags: computed.riskFlags,
          recommendedPath: computed.recommendedPath,
        },
      })
    : await prisma.assessment.create({
        data: {
          clientId: client.id,
          vesselId: vessel.id,
          createdById: actor.id,
          ruleSetVersion: version,
          readinessScore: computed.readinessScore,
          tier: computed.tier,
          ltvEstimateMin: computed.ltv.min,
          ltvEstimateMax: computed.ltv.max,
          riskFlags: computed.riskFlags,
          recommendedPath: computed.recommendedPath,
        },
      });

  const run = await prisma.assessmentRun.create({
    data: {
      assessmentId: assessment.id,
      actorId: actor.id,
      ruleSetVersion: version,
      engineVersion: ENGINE_VERSION,
      inputSnapshot: buildInputSnapshot(client, vessel),
      hits: computed.hits,
      outputSnapshot: {
        readinessScore: computed.readinessScore,
        tier: computed.tier,
        ltv: computed.ltv,
        riskFlags: computed.riskFlags,
        recommendedPath: computed.recommendedPath,
      },
    },
  });

  await prisma.auditLog.create({
    data: {
      entityType: "Assessment",
      entityId: assessment.id,
      action: assessmentId ? "ASSESSMENT_UPDATE_RUN" : "ASSESSMENT_RUN",
      ruleSetVersion: version,
      actorId: actor.id,
    },
  });

  return {
    assessmentId: assessment.id,
    assessmentRunId: run.id,
    ruleSetVersion: version,
    readinessScore: computed.readinessScore,
    tier: computed.tier,
    ltv: computed.ltv,
    riskFlags: computed.riskFlags,
    recommendedPath: computed.recommendedPath,
    hits: computed.hits,
  };
}

export async function whatIfAssessment(args: {
  clientId: string;
  vesselId: string;
  ruleSetVersion?: string;
  overrides?: { client?: Record<string, any>; vessel?: Record<string, any> };
}) {
  const version = args.ruleSetVersion ?? (await getLatestRuleSetVersion());

  const [client0, vessel0, ruleSet] = await Promise.all([
    prisma.client.findUnique({ where: { id: args.clientId } }),
    prisma.vessel.findUnique({ where: { id: args.vesselId } }),
    prisma.ruleSet.findUnique({
      where: { version },
      include: { rules: true },
    }),
  ]);

  if (!client0) throw new Error("Client not found");
  if (!vessel0) throw new Error("Vessel not found");
  if (!ruleSet) throw new Error(`RuleSet not found: ${version}`);

  const client = { ...client0, ...(args.overrides?.client ?? {}) };
  const vessel = { ...vessel0, ...(args.overrides?.vessel ?? {}) };

  const rules: RuleRow[] = ruleSet.rules.map((r) => ({
    id: r.id,
    condition: r.condition as any,
    weight: r.weight,
    effect: r.effect as any,
  }));

  const computed = compute(client, vessel, rules);

  return {
    ruleSetVersion: version,
    inputSnapshot: buildInputSnapshot(client, vessel),
    readinessScore: computed.readinessScore,
    tier: computed.tier,
    ltv: computed.ltv,
    riskFlags: computed.riskFlags,
    recommendedPath: computed.recommendedPath,
    hits: computed.hits,
  };
}
