// lib/engine/runAssessment.ts
import { prisma } from "@/lib/prisma";
import { clamp, evaluateRule, RuleRow } from "./rules";

type RunArgs = {
  clientId: string;
  vesselId: string;
  ruleSetVersion?: string; // default v1.0
  actorEmail?: string; // for audit (internal)
};

function tierFromScore(score: number) {
  if (score >= 80) return "FINANCE_READY";
  if (score >= 50) return "CONDITIONAL";
  return "HIGH_RISK";
}

function ltvFromScore(score: number) {
  // super rough v1 bands (we’ll replace later with lender matrix)
  if (score >= 80) return { min: 50, max: 65 };
  if (score >= 50) return { min: 35, max: 50 };
  return { min: 20, max: 35 };
}

function recommendedPathFromContext(ctx: any) {
  // v1 heuristic; refine later with leasing/jurisdiction engine
  if (ctx.vessel.usageType === "CHARTER") return "CHARTER_STRUCTURE_REVIEW";
  if (String(ctx.client.residency).toUpperCase().includes("UK")) return "STANDARD_LOAN_PATH";
  return "STRUCTURING_REVIEW";
}

export async function runAssessment({
  clientId,
  vesselId,
  ruleSetVersion = "v1.0",
  actorEmail = "system@projecty.local",
}: RunArgs) {
  const [client, vessel, ruleSet] = await Promise.all([
    prisma.client.findUnique({ where: { id: clientId } }),
    prisma.vessel.findUnique({ where: { id: vesselId } }),
    prisma.ruleSet.findUnique({
      where: { version: ruleSetVersion },
      include: { rules: true },
    }),
  ]);

  if (!client) throw new Error("Client not found");
  if (!vessel) throw new Error("Vessel not found");
  if (!ruleSet) throw new Error(`RuleSet not found: ${ruleSetVersion}`);

  const ctx = {
    client,
    vessel,
  };

  // Normalize Rule rows from DB (Json -> typed)
  const rules: RuleRow[] = ruleSet.rules.map((r) => ({
    id: r.id,
    condition: r.condition as any,
    weight: r.weight,
    effect: r.effect as any,
  }));

  // baseline score v1 (neutral midpoint)
  let score = 60;

  const hits = rules.map((rule) => evaluateRule(rule, ctx));

  const riskFlags = hits
    .filter((h) => h.matched && h.flag)
    .map((h) => String(h.flag));

  for (const h of hits) score += h.delta;

  score = clamp(score, 0, 100);

  const tier = tierFromScore(score);
  const ltv = ltvFromScore(score);
  const recommendedPath = recommendedPathFromContext(ctx);

  // ensure actor user exists (for audit + createdById on Assessment)
  const actor = await prisma.user.upsert({
    where: { email: actorEmail },
    update: {},
    create: { email: actorEmail, role: "ADMIN" },
  });

  // create assessment row
  const assessment = await prisma.assessment.create({
    data: {
      clientId: client.id,
      vesselId: vessel.id,
      createdById: actor.id,
      ruleSetVersion,
      readinessScore: score,
      tier,
      ltvEstimateMin: ltv.min,
      ltvEstimateMax: ltv.max,
      riskFlags,
      recommendedPath,
    },
  });

  // audit log
  await prisma.auditLog.create({
    data: {
      entityType: "Assessment",
      entityId: assessment.id,
      action: "ASSESSMENT_RUN",
      ruleSetVersion,
      actorId: actor.id,
    },
  });

  return {
    assessmentId: assessment.id,
    ruleSetVersion,
    readinessScore: score,
    tier,
    ltv,
    riskFlags,
    recommendedPath,
    hits,
  };
}
