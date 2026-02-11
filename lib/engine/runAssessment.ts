// lib/engine/runAssessment.ts

import { prisma } from "@/lib/prisma";
import {
  clamp,
  evaluateRule,
  RuleRow,
  EvalHit,
  RiskSeverity,
} from "./rules";

type RunArgs = {
  clientId: string;
  vesselId: string;
  ruleSetVersion?: string;
  actorEmail?: string;
  assessmentId?: string;
};

const ENGINE_VERSION = "engine_v2";

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

function recommendedPathFromContext(ctx: any, score: number) {
  if (score < 50)
    return "High complexity profile. Structured review required before lender outreach.";

  if (ctx.vessel.usageType === "CHARTER")
    return "Charter usage increases structuring complexity. Recommend ownership and VAT planning review.";

  return "Structured financing feasible. Prepare documentation and shortlist suitable lenders.";
}

async function getLatestRuleSetVersion(): Promise<string> {
  const latest = await prisma.ruleSet.findFirst({
    orderBy: { createdAt: "desc" },
    select: { version: true },
  });
  return latest?.version ?? "v2.0";
}

function buildInputSnapshot(client: any, vessel: any) {
  return {
    client,
    vessel,
  };
}

function compute(client: any, vessel: any, rules: RuleRow[]) {
  const ctx = { client, vessel };

  let score = 60;
  const hits: EvalHit[] = [];

  for (const rule of rules) {
    const hit = evaluateRule(rule, ctx);
    hits.push(hit);
    score += hit.weightedDelta;
  }

  score = clamp(Math.round(score), 0, 100);

  const tier = tierFromScore(score);
  const ltv = ltvFromScore(score);

  const riskFlags = hits
    .filter((h) => h.matched && h.flagCode)
    .map((h) => ({
      code: h.flagCode!,
      severity: h.severity ?? "LOW",
    }))
    .sort((a, b) => severityRank(b.severity) - severityRank(a.severity));

  const recommendedPath = recommendedPathFromContext(ctx, score);

  return {
    hits,
    readinessScore: score,
    tier,
    ltv,
    riskFlags,
    recommendedPath,
  };
}

function severityRank(s: RiskSeverity) {
  const map = { LOW: 1, MEDIUM: 2, HIGH: 3, CRITICAL: 4 };
  return map[s];
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
      outputSnapshot: computed,
    },
  });

  return {
    assessmentId: assessment.id,
    assessmentRunId: run.id,
    ruleSetVersion: version,
    ...computed,
  };
}
