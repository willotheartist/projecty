// lib/wizard/labels.ts
import { RiskFlag } from "./types";

export const riskFlagLabel: Record<RiskFlag, string> = {
  existing_significant_leverage: "Existing significant leverage",
  complex_income_structure: "Complex income structure",
  first_financed_yacht: "First financed yacht",
  cross_border_ownership: "Cross-border ownership",
};

export function countryLabel(value: string) {
  return value;
}

/**
 * Engine risk flags (these are the codes you saw in the UI).
 * Map them to human labels so we NEVER show raw enums in the wizard.
 */
const engineRiskFlagLabel: Record<string, string> = {
  LOW_LIQUIDITY_BUFFER: "Low liquidity buffer vs purchase price",
  OLDER_VESSEL_LIMITED_LENDER_APPETITE: "Older vessel may reduce lender appetite",
  BUSINESS_INCOME_UNDERWRITING_COMPLEXITY: "Business income may require deeper underwriting",

  // optional extras (safe defaults if you add more rules later)
  CHARTER_USAGE_COMPLIANCE_COMPLEXITY: "Charter usage increases compliance complexity",
  SPV_STRUCTURING_REVIEW: "SPV ownership may require structuring review",
};

function titleCaseFromSnake(s: string) {
  return s
    .toLowerCase()
    .split("_")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Best-effort pretty label for engine flags:
 * - If it exists in mapping: use mapping
 * - Else: convert SNAKE_CASE to Title Case
 * - Else: return original
 */
export function prettyEngineFlag(flag: string) {
  const f = String(flag || "").trim();
  if (!f) return "";
  if (engineRiskFlagLabel[f]) return engineRiskFlagLabel[f];
  if (/^[A-Z0-9_]+$/.test(f)) return titleCaseFromSnake(f);
  return f;
}
