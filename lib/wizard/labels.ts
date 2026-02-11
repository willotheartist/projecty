import { RiskFlag } from "./types";

export const riskFlagLabel: Record<RiskFlag, string> = {
  existing_significant_leverage: "Existing significant leverage",
  complex_income_structure: "Complex income structure",
  first_financed_yacht: "First financed yacht",
  cross_border_ownership: "Cross-border ownership",
};

export function countryLabel(value: string) {
  return value; // keep simple for now (you can replace with ISO mapping later)
}
