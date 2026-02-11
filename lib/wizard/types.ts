// /lib/wizard/types.ts

export type Currency = "EUR" | "USD";

export type UsageIntent = "private" | "private_plus_charter" | "commercial_charter";

export type VesselCondition = "new" | "preowned_private" | "preowned_chartered";

export type IntendedFlag = "unknown" | "eu_flag" | "non_eu_flag" | "specific_country";

export type LiquidityHeld = "personal" | "spv" | "mixed";

export type IncomeType = "salary" | "business_owner" | "investments_dividends" | "mixed";

export type NetWorthBand =
  | "under_250k"
  | "250k_1m"
  | "1_3m"
  | "3_10m"
  | "10_30m"
  | "30m_plus";

export type TaxResidentEU = "yes" | "no" | "multi";

export type OwnershipIntent = "personal" | "spv" | "unsure";

export type ProceedTimeline = "0_3m" | "3_6m" | "6_12m";

export type RiskFlag =
  | "existing_significant_leverage"
  | "complex_income_structure"
  | "first_financed_yacht"
  | "cross_border_ownership";

export type RiskFlagSeverity = "low" | "medium" | "high";

export type AssessmentRisk = {
  code: RiskFlag;
  label: string;
  severity: RiskFlagSeverity;
};

export type AssessmentResult = {
  readinessScore: number;
  tier: string;
  ltvEstimateMin: number;
  ltvEstimateMax: number;
  riskFlags: AssessmentRisk[];
  recommendedPath: string;
};

export type WizardAnswers = {
  currency: Currency;

  purchasePrice: number | null;

  usageIntent: UsageIntent | null;

  yearBuilt: number | null;

  vesselCondition: VesselCondition | null;

  intendedFlag: IntendedFlag | null;
  intendedFlagCountry?: string | null;

  liquidityAvailable: number | null;

  liquidityHeld: LiquidityHeld | null;

  incomeType: IncomeType | null;

  netWorthBand: NetWorthBand | null;

  taxResidencyCountry: string | null;

  isTaxResidentEU: TaxResidentEU | null;

  ownershipIntent: OwnershipIntent | null;

  riskFlags: RiskFlag[];

  proceedTimeline: ProceedTimeline | null;
};
