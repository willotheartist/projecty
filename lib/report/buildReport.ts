// lib/report/buildReport.ts
export type Hit = {
  ruleId: string;
  matched: boolean;
  delta: number;
  flag?: string;
};

type Report = {
  meta: {
    assessmentId?: string;
    assessmentRunId?: string;
    generatedAtISO: string;
    ruleSetVersion: string;
    engineVersion?: string;
  };
  headline: {
    title: string;
    subtitle: string;
    readinessScore: number;
    tier: string;
    ltvBand: { min: number; max: number };
  };
  parties: {
    buyer: {
      name: string;
      residency: string;
      incomeType: string;
      netWorthBand: string;
      liquidityAvailable: number;
      ownershipIntent: string;
    };
    vessel: {
      purchasePrice: number;
      yearBuilt: number;
      usageType: string;
      intendedFlag?: string | null;
    };
  };
  risk: {
    flags: string[];
    summary: string;
  };
  recommendations: {
    recommendedPath: string;
    nextSteps: string[];
    documentsChecklist: string[];
  };
  transparency: {
    matchedRules: Array<{ ruleId: string; delta: number; flag?: string }>;
    unmatchedRulesCount: number;
    scoreDeltaSum: number;
  };
};

export function buildReport(input: {
  assessmentId?: string;
  assessmentRunId?: string;
  ruleSetVersion: string;
  engineVersion?: string;

  readinessScore: number;
  tier: string;
  ltvBand: { min: number; max: number };
  riskFlags: string[];
  recommendedPath: string;

  buyer: {
    name: string;
    residency: string;
    incomeType: string;
    netWorthBand: string;
    liquidityAvailable: number;
    ownershipIntent: string;
  };

  vessel: {
    purchasePrice: number;
    yearBuilt: number;
    usageType: string;
    intendedFlag?: string | null;
  };

  hits: Hit[];
}): Report {
  const {
    assessmentId,
    assessmentRunId,
    ruleSetVersion,
    engineVersion,
    readinessScore,
    tier,
    ltvBand,
    riskFlags,
    recommendedPath,
    buyer,
    vessel,
    hits,
  } = input;

  const title =
    tier === "FINANCE_READY"
      ? "Finance readiness: strong"
      : tier === "CONDITIONAL"
      ? "Finance readiness: conditional"
      : "Finance readiness: high risk";

  const subtitle =
    tier === "FINANCE_READY"
      ? "You can move toward lender outreach with a structured pack."
      : tier === "CONDITIONAL"
      ? "Viable, but expect conditions and tighter lender filters."
      : "Needs restructuring or stronger buyer readiness before lender outreach.";

  const nextSteps =
    tier === "FINANCE_READY"
      ? [
          "Confirm target LTV and desired term range.",
          "Prepare proof-of-funds and liquidity statements.",
          "Align ownership structure.",
          "Run lender shortlist and pre-screen.",
        ]
      : tier === "CONDITIONAL"
      ? [
          "Clarify income provenance.",
          "Consider larger deposit or collateral.",
          "Review vessel age and usage impact.",
          "Pre-screen lenders before offer.",
        ]
      : [
          "Increase liquidity buffer.",
          "Adjust vessel profile.",
          "Restructure ownership and residency.",
          "Re-run assessment after changes.",
        ];

  const documentsChecklist = [
    "Passport / ID",
    "Proof of address",
    "Bank statements (3–6 months)",
    "Source of funds explanation",
    "Income evidence",
    "Asset & liability overview",
    "Vessel spec sheet",
    "Purchase timeline and usage statement",
  ];

  const matched = hits.filter((h) => h.matched);
  const matchedRules = matched.map((h) => ({
    ruleId: h.ruleId,
    delta: h.delta,
    flag: h.flag,
  }));

  const scoreDeltaSum = matched.reduce((sum, h) => sum + Number(h.delta || 0), 0);
  const unmatchedRulesCount = hits.filter((h) => !h.matched).length;

  const riskSummary =
    riskFlags.length === 0
      ? "No major red flags triggered by the current ruleset."
      : `Triggered ${riskFlags.length} risk flag(s) that may reduce lender appetite or tighten terms.`;

  return {
    meta: {
      assessmentId,
      assessmentRunId,
      generatedAtISO: new Date().toISOString(),
      ruleSetVersion,
      engineVersion,
    },
    headline: {
      title,
      subtitle,
      readinessScore,
      tier,
      ltvBand,
    },
    parties: {
      buyer,
      vessel,
    },
    risk: {
      flags: riskFlags,
      summary: riskSummary,
    },
    recommendations: {
      recommendedPath,
      nextSteps,
      documentsChecklist,
    },
    transparency: {
      matchedRules,
      unmatchedRulesCount,
      scoreDeltaSum,
    },
  };
}
