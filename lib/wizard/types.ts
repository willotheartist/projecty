export type Currency = "EUR" | "USD";

export type UsageIntent = "private" | "private_plus_charter" | "commercial_charter";

export type VesselCondition = "new" | "preowned_private" | "preowned_chartered";

export type IntendedFlag =
  | "unknown"
  | "eu_flag"
  | "non_eu_flag"
  | "specific_country";

export type LiquidityHeld =
  | "personal"
  | "spv"
  | "mixed";

export type IncomeType =
  | "salary"
  | "business_owner"
  | "investments_dividends"
  | "mixed";

export type NetWorthBand =
  | "1_3m"
  | "3_10m"
  | "10_30m"
  | "30m_plus";

export type OwnershipIntent =
  | "personal"
  | "spv"
  | "unsure";

export type ProceedTimeline =
  | "0_3m"
  | "3_6m"
  | "6_12m";

export type RiskFlag =
  | "existing_significant_leverage"
  | "complex_income_structure"
  | "first_financed_yacht"
  | "cross_border_ownership";

export type WizardAnswers = {
  purchasePrice: number | null;
  currency: Currency;

  usageIntent: UsageIntent | null;

  yearBuilt: number | null;
  vesselCondition: VesselCondition | null;

  intendedFlag: IntendedFlag | null;
  intendedFlagCountry?: string;

  liquidityAvailable: number | null;
  liquidityHeld: LiquidityHeld | null;

  incomeType: IncomeType | null;
  netWorthBand: NetWorthBand | null;

  taxResidencyCountry: string | null;
  isTaxResidentEU: "yes" | "no" | "multi" | null;

  ownershipIntent: OwnershipIntent | null;

  riskFlags: RiskFlag[];

  proceedTimeline: ProceedTimeline | null;
};

export type AssessmentResult = {
  readinessScore: number; // 0-100
  tier: "Finance Ready" | "Conditional Structuring Required" | "High Complexity";
  ltvEstimateMin: number; // %
  ltvEstimateMax: number; // %
  riskFlags: { code: string; label: string; severity: "low" | "medium" | "high" }[];
  recommendedPath: string;
};
