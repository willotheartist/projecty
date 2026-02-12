// lib/wizard/scoring.ts
import {
  AssessmentResult,
  NetWorthBand,
  WizardAnswers,
} from "./types";
import { riskFlagLabel } from "./labels";

/**
 * Deterministic v1 scoring.
 * Transparent and tweakable (aligns with your docs: rule-based readiness engine).
 */
export function scoreAssessment(a: WizardAnswers): AssessmentResult {
  // ---- Guard defaults (avoid NaN) ----
  const price = a.purchasePrice ?? 0;
  const liquidity = a.liquidityAvailable ?? 0;
  const yearBuilt = a.yearBuilt ?? new Date().getFullYear();

  // ---- Base score ----
  let score = 50;

  // ---- Liquidity strength (biggest driver) ----
  // Simple proxy: liquidity ratio vs price
  const ratio = price > 0 ? liquidity / price : 0;

  if (ratio >= 0.6) score += 25;
  else if (ratio >= 0.4) score += 18;
  else if (ratio >= 0.25) score += 10;
  else if (ratio >= 0.15) score += 2;
  else score -= 10;

  // ---- Net worth band (credibility buffer) ----
  score += netWorthDelta(a.netWorthBand);

  // ---- Income stability ----
  if (a.incomeType === "salary") score += 6;
  if (a.incomeType === "investments_dividends") score += 4;
  if (a.incomeType === "mixed") score += 2;
  if (a.incomeType === "business_owner") score += 1;

  // ---- Asset quality (age + condition) ----
  const vesselAge = Math.max(0, new Date().getFullYear() - yearBuilt);

  if (vesselAge <= 3) score += 8;
  else if (vesselAge <= 8) score += 4;
  else if (vesselAge <= 15) score -= 2;
  else if (vesselAge <= 25) score -= 8;
  else score -= 14;

  if (a.vesselCondition === "new") score += 4;
  if (a.vesselCondition === "preowned_private") score += 1;
  if (a.vesselCondition === "preowned_chartered") score -= 3;

  // ---- Usage (charter adds complexity) ----
  if (a.usageIntent === "private") score += 3;
  if (a.usageIntent === "private_plus_charter") score -= 3;
  if (a.usageIntent === "commercial_charter") score -= 6;

  // ---- Structuring complexity ----
  if (a.ownershipIntent === "personal") score += 2;
  if (a.ownershipIntent === "unsure") score -= 2;
  if (a.ownershipIntent === "spv") score -= 3;

  // ---- Jurisdiction sensitivity (coarse v1) ----
  if (a.isTaxResidentEU === "yes") score += 1;
  if (a.isTaxResidentEU === "multi") score -= 3;

  // ---- Risk flags ----
  const riskOutputs: AssessmentResult["riskFlags"] = [];
  for (const rf of a.riskFlags) {
    const severity =
      rf === "existing_significant_leverage"
        ? "high"
        : rf === "complex_income_structure"
          ? "medium"
          : rf === "cross_border_ownership"
            ? "medium"
            : "low";

    riskOutputs.push({ code: rf, label: riskFlagLabel[rf], severity });

    // scoring impact
    if (severity === "high") score -= 10;
    if (severity === "medium") score -= 6;
    if (severity === "low") score -= 3;
  }

  // ---- Timeline (sooner = slightly better; it means seriousness + prepared docs) ----
  if (a.proceedTimeline === "0_3m") score += 2;
  if (a.proceedTimeline === "6_12m") score -= 1;

  // clamp
  score = clamp(Math.round(score), 0, 100);

  // Tier thresholds (matches your plan)
  const tier =
    score >= 80
      ? "Finance Ready"
      : score >= 50
        ? "Conditional Structuring Required"
        : "High Complexity";

  // LTV band estimate (simple)
  const { ltvMin, ltvMax } = estimateLtv(score, vesselAge);

  // Recommended path (high-level for v1)
  const recommendedPath = recommendPath(a, score, vesselAge);

  return {
    readinessScore: score,
    tier,
    ltvEstimateMin: ltvMin,
    ltvEstimateMax: ltvMax,
    riskFlags: riskOutputs.sort(sortBySeverity),
    recommendedPath,
  };
}

function netWorthDelta(band: NetWorthBand | null) {
  switch (band) {
    case "30m_plus":
      return 10;
    case "10_30m":
      return 6;
    case "3_10m":
      return 2;
    case "1_3m":
      return -2;
    default:
      return 0;
  }
}

function estimateLtv(score: number, vesselAge: number) {
  // Score drives base, vessel age caps
  let baseMin = 35;
  let baseMax = 55;

  if (score >= 80) {
    baseMin = 45;
    baseMax = 65;
  } else if (score >= 50) {
    baseMin = 35;
    baseMax = 55;
  } else {
    baseMin = 25;
    baseMax = 45;
  }

  // age penalty
  if (vesselAge > 15) {
    baseMin -= 5;
    baseMax -= 8;
  }
  if (vesselAge > 25) {
    baseMin -= 6;
    baseMax -= 10;
  }

  return {
    ltvMin: clamp(baseMin, 10, 70),
    ltvMax: clamp(baseMax, 20, 75),
  };
}

function recommendPath(a: WizardAnswers, score: number, vesselAge: number) {
  // V1: high level "direction", not full scenario modeling.
  if (score < 50) {
    return "High complexity profile. Recommend structuring review before lender outreach.";
  }

  if (a.usageIntent !== "private") {
    return "Charter intent increases complexity. Recommend structured ownership planning and VAT strategy review.";
  }

  if (a.isTaxResidentEU === "yes" && a.ownershipIntent !== "personal") {
    return "EU tax residency + entity ownership suggests VAT/structuring review. Recommend structured SPV approach with compliance checklist.";
  }

  if (vesselAge > 20) {
    return "Older vessel profile may reduce lender appetite. Recommend conservative LTV expectations and stronger liquidity positioning.";
  }

  return "Structured financing is feasible. Recommend preparing documentation pack and shortlisting suitable lenders based on profile.";
}

function sortBySeverity(
  a: { severity: "low" | "medium" | "high" },
  b: { severity: "low" | "medium" | "high" }
) {
  const rank = { high: 3, medium: 2, low: 1 };
  return rank[b.severity] - rank[a.severity];
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
