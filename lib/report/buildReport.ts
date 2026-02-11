// lib/report/buildReport.ts

export type Hit = {
  ruleId: string;
  matched: boolean;
  delta: number;
  flag?: string;
};

export type PrettyRiskFlag = {
  text: string;
  severity: "low" | "medium" | "high";
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
    explainer: string;
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
    flags: string[]; // raw text flags (deduped)
    prettyFlags: PrettyRiskFlag[]; // for UI/PDF rendering
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

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function normalizeTier(tier: string) {
  const t = String(tier ?? "").trim();
  if (!t) return "UNKNOWN";
  return t;
}

function tierTitle(tier: string) {
  const t = tier.toUpperCase();
  if (t.includes("FINANCE_READY")) return "Finance readiness: strong";
  if (t.includes("CONDITIONAL")) return "Finance readiness: conditional";
  if (t.includes("HIGH")) return "Finance readiness: high complexity";
  if (t.includes("RISK")) return "Finance readiness: high risk";
  return "Finance readiness: summary";
}

function tierSubtitle(tier: string) {
  const t = tier.toUpperCase();
  if (t.includes("FINANCE_READY"))
    return "You can move toward lender outreach with a structured pack.";
  if (t.includes("CONDITIONAL"))
    return "Viable, but expect conditions and tighter lender filters.";
  return "Likely to be declined without changes — use this as a starting point for improvements.";
}

function scoreExplainer(score: number) {
  const s = clamp(Number(score ?? 0), 0, 100);

  if (s >= 85)
    return "Very strong profile. Most lenders will view this as straightforward, assuming documentation matches the story.";
  if (s >= 70)
    return "Strong profile. Financing is typically feasible; expect standard underwriting and lender-specific constraints.";
  if (s >= 50)
    return "Mixed profile. Financing can work, but lenders may apply conditions (deposit size, structure, or additional docs).";
  if (s >= 30)
    return "Weak profile. Financing may be possible, but only with structuring work and/or a stronger liquidity position.";
  return "Very low readiness right now. Treat this as a diagnostic — improving liquidity, vessel profile, or structure can move the result quickly.";
}

function toSeverityFromText(text: string): "low" | "medium" | "high" {
  const t = text.toLowerCase();
  // crude but safe defaulting
  if (t.includes("low liquidity") || t.includes("older vessel") || t.includes("significant leverage"))
    return "high";
  if (t.includes("complex") || t.includes("cross-border") || t.includes("structuring") || t.includes("business income"))
    return "medium";
  return "low";
}

function titleCaseLoose(s: string) {
  const x = String(s ?? "").replaceAll("_", " ").trim();
  if (!x) return "";
  return x.charAt(0).toUpperCase() + x.slice(1);
}

function normalizeRiskFlags(input: any): { raw: string[]; pretty: PrettyRiskFlag[] } {
  const rawStrings: string[] = [];

  const pushText = (t: any) => {
    const text = String(t ?? "").trim();
    if (!text) return;
    rawStrings.push(text);
  };

  if (Array.isArray(input)) {
    for (const item of input) {
      if (typeof item === "string") {
        pushText(item);
        continue;
      }
      // object shapes: {code,label,severity} or {flag,...} or {text,...}
      if (item && typeof item === "object") {
        if (typeof item.label === "string") pushText(item.label);
        else if (typeof item.flag === "string") pushText(item.flag);
        else if (typeof item.text === "string") pushText(item.text);
        else if (typeof item.code === "string") pushText(titleCaseLoose(item.code));
        else pushText(JSON.stringify(item));
      }
    }
  } else if (typeof input === "string") {
    pushText(input);
  }

  // Dedup + cleanup "LOW_LIQUIDITY_BUFFER" style
  const cleaned = rawStrings
    .map((s) => {
      // if user accidentally passed constant-like strings, make it readable
      if (/^[A-Z0-9_]+$/.test(s)) return titleCaseLoose(s);
      return s;
    })
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const unique = Array.from(new Set(cleaned));

  const pretty: PrettyRiskFlag[] = unique.map((text) => ({
    text,
    severity: toSeverityFromText(text),
  }));

  // sort high -> low
  const rank = { high: 3, medium: 2, low: 1 } as const;
  pretty.sort((a, b) => rank[b.severity] - rank[a.severity]);

  return { raw: unique, pretty };
}

export function buildReport(input: {
  assessmentId?: string;
  assessmentRunId?: string;
  ruleSetVersion: string;
  engineVersion?: string;

  readinessScore: number;
  tier: string;
  ltvBand: { min: number; max: number };
  riskFlags: any; // <-- intentionally flexible
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
    tier: tierRaw,
    ltvBand,
    riskFlags,
    recommendedPath,
    buyer,
    vessel,
    hits,
  } = input;

  const tier = normalizeTier(tierRaw);

  const title = tierTitle(tier);
  const subtitle = tierSubtitle(tier);
  const explainer = scoreExplainer(readinessScore);

  const nextSteps =
    tier.toUpperCase().includes("FINANCE_READY")
      ? [
          "Confirm target LTV and desired term range.",
          "Prepare proof-of-funds and liquidity statements.",
          "Align ownership structure.",
          "Run lender shortlist and pre-screen.",
        ]
      : tier.toUpperCase().includes("CONDITIONAL")
        ? [
            "Clarify income provenance and documentation.",
            "Consider larger deposit or collateral support.",
            "Review vessel profile impact (age/usage) on lender set.",
            "Pre-screen lenders before making an offer.",
          ]
        : [
            "Increase liquidity buffer or adjust deposit strategy.",
            "Reassess vessel profile (age/usage) vs lender appetite.",
            "Clarify ownership, residency and structuring route.",
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

  const matched = (hits ?? []).filter((h) => !!h?.matched);
  const matchedRules = matched.map((h) => ({
    ruleId: String(h.ruleId),
    delta: Number(h.delta ?? 0),
    flag: h.flag ? String(h.flag) : undefined,
  }));

  const scoreDeltaSum = matched.reduce((sum, h) => sum + Number(h.delta || 0), 0);
  const unmatchedRulesCount = (hits ?? []).filter((h) => !h?.matched).length;

  const normalized = normalizeRiskFlags(riskFlags);

  const riskSummary =
    normalized.raw.length === 0
      ? "No major red flags triggered by the current ruleset."
      : `Triggered ${normalized.raw.length} risk flag(s) that may reduce lender appetite or tighten terms.`;

  return {
    meta: {
      assessmentId,
      assessmentRunId,
      generatedAtISO: new Date().toISOString(),
      ruleSetVersion: String(ruleSetVersion ?? "unknown"),
      engineVersion: engineVersion ? String(engineVersion) : undefined,
    },
    headline: {
      title,
      subtitle,
      readinessScore: clamp(Math.round(Number(readinessScore ?? 0)), 0, 100),
      tier,
      ltvBand: {
        min: clamp(Math.round(Number(ltvBand?.min ?? 0)), 0, 100),
        max: clamp(Math.round(Number(ltvBand?.max ?? 0)), 0, 100),
      },
      explainer,
    },
    parties: {
      buyer,
      vessel,
    },
    risk: {
      flags: normalized.raw,
      prettyFlags: normalized.pretty,
      summary: riskSummary,
    },
    recommendations: {
      recommendedPath: String(recommendedPath ?? ""),
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
