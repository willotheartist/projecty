// lib/engine/runAssessment.ts

import { prisma } from "@/lib/prisma";
import type { Prisma, Client, Vessel } from "@prisma/client";
import {
  clamp,
  evaluateRule,
  RuleRow,
  EvalHit,
  RiskSeverity,
  RuleCondition,
  RuleEffect,
} from "./rules";

type RunArgs = {
  clientId: string;
  vesselId: string;
  ruleSetVersion?: string;
  actorEmail?: string;
  assessmentId?: string;
};

type WhatIfArgs = {
  clientId: string;
  vesselId: string;
  ruleSetVersion?: string;
  overrides?: unknown; // flexible: UI can send any JSON-like shape
};

const ENGINE_VERSION = "engine_v2";

type AssessmentContext = {
  client: Client;
  vessel: Vessel;
};

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

function recommendedPathFromContext(ctx: AssessmentContext, score: number) {
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

/**
 * Prisma JSON columns cannot safely store Dates/BigInt/etc.
 * We normalise by JSON round-tripping.
 */
function toInputJsonValue(value: unknown): Prisma.InputJsonValue {
  const s = JSON.stringify(value);
  return (s ? (JSON.parse(s) as unknown) : null) as Prisma.InputJsonValue;
}

function buildInputSnapshot(client: Client, vessel: Vessel): Prisma.InputJsonValue {
  return toInputJsonValue({ client, vessel });
}

function severityRank(s: RiskSeverity) {
  const map: Record<RiskSeverity, number> = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
    CRITICAL: 4,
  };
  return map[s];
}

function compute(client: Client, vessel: Vessel, rules: RuleRow[]) {
  const ctx: AssessmentContext = { client, vessel };
  const ctxRecord: Record<string, unknown> = { client, vessel };

  let score = 60;
  const hits: EvalHit[] = [];

  for (const rule of rules) {
    const hit = evaluateRule(rule, ctxRecord);
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

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/**
 * Apply lightweight overrides to cloned client/vessel (no DB write).
 * Supported shapes:
 *  - { client: { ... }, vessel: { ... } }
 *  - { client: {...} } or { vessel: {...} }
 */
function applyOverrides(base: AssessmentContext, overrides: unknown): AssessmentContext {
  if (!overrides || !isRecord(overrides)) return base;

  const nextClient = isRecord(overrides.client)
    ? ({ ...base.client, ...(overrides.client as Record<string, unknown>) } as Client)
    : base.client;

  const nextVessel = isRecord(overrides.vessel)
    ? ({ ...base.vessel, ...(overrides.vessel as Record<string, unknown>) } as Vessel)
    : base.vessel;

  return { client: nextClient, vessel: nextVessel };
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
    condition: r.condition as unknown as RuleCondition,
    weight: r.weight,
    effect: r.effect as unknown as RuleEffect,
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
          riskFlags: toInputJsonValue(computed.riskFlags),
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
          riskFlags: toInputJsonValue(computed.riskFlags),
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
      hits: toInputJsonValue(computed.hits),
      outputSnapshot: toInputJsonValue(computed),
    },
  });

  return {
    assessmentId: assessment.id,
    assessmentRunId: run.id,
    ruleSetVersion: version,
    ...computed,
  };
}

/**
 * What-if runner: compute an assessment result without creating Assessment/AssessmentRun rows.
 * Returns an object compatible with your /whatif route builder.
 */
export async function whatIfAssessment({
  clientId,
  vesselId,
  ruleSetVersion,
  overrides,
}: WhatIfArgs) {
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
    condition: r.condition as unknown as RuleCondition,
    weight: r.weight,
    effect: r.effect as unknown as RuleEffect,
  }));

  const baseCtx: AssessmentContext = { client, vessel };
  const ctx = applyOverrides(baseCtx, overrides);

  const computed = compute(ctx.client, ctx.vessel, rules);

  return {
    ruleSetVersion: version,
    engineVersion: ENGINE_VERSION,
    inputSnapshot: buildInputSnapshot(ctx.client, ctx.vessel),
  
    outputSnapshot: toInputJsonValue(computed),
    ...computed,
  };
}
