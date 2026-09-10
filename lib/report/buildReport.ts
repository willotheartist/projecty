import type { ReadinessDetail } from "../engine/readiness";
// lib/report/buildReport.ts

export type Hit = {
  ruleId: string;
  matched: boolean;
  delta?: number;
  weightedDelta?: number;
  flagCode?: string;
  flag?: string;
};

export type PrettyRiskFlag = {
  text: string;
  severity: "low" | "medium" | "high";
};

type Report = {
  readiness?: ReadinessDetail;
  currency?: "EUR" | "USD";
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
    flags: string[];
    prettyFlags: PrettyRiskFlag[];
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
  return "Resolve the key issues and reassess before lender outreach.";
}

function scoreExplainer(score: number) {
  const s = clamp(Number(score ?? 0), 0, 100);

  if (s >= 80)
    return "Strong readiness under the current assessment rules. Confirm the supporting documents and lender requirements before proceeding.";
  if (s >= 50)
    return "Conditional readiness. Review the flagged issues, available deposit and ownership structure before lender outreach.";
  return "High complexity under the current rules. Resolve the key issues and reassess before lender outreach. This score is not a lending decision.";
}

function toSeverityFromText(text: string): "low" | "medium" | "high" {
  const t = text.toLowerCase();
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

function normalizeRiskFlags(input: unknown): { raw: string[]; pretty: PrettyRiskFlag[] } {
  const rawStrings: string[] = [];

  const pushText = (t: unknown) => {
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
      if (item && typeof item === "object") {
        const obj = item as Record<string, unknown>;
        if (typeof obj.label === "string") pushText(obj.label);
        else if (typeof obj.flag === "string") pushText(obj.flag);
        else if (typeof obj.text === "string") pushText(obj.text);
        else if (typeof obj.code === "string") pushText(titleCaseLoose(obj.code));
        else pushText(JSON.stringify(obj));
      }
    }
  } else if (typeof input === "string") {
    pushText(input);
  }

  const cleaned = rawStrings
    .map((s) => (/^[A-Z0-9_]+$/.test(s) ? titleCaseLoose(s) : s))
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const unique = Array.from(new Set(cleaned));

  const explicitSeverities = new Map<string, PrettyRiskFlag["severity"]>();
  for (const item of Array.isArray(input) ? input : []) {
    if (!item || typeof item !== "object") continue;
    const obj = item as Record<string, unknown>;
    const label = String(obj.label ?? obj.flag ?? obj.text ?? titleCaseLoose(String(obj.code ?? ""))).replace(/\s+/g, " ").trim();
    const severity = String(obj.severity ?? "").toUpperCase();
    if (["CRITICAL", "HIGH", "MEDIUM", "LOW"].includes(severity)) {
      explicitSeverities.set(label, severity === "CRITICAL" || severity === "HIGH" ? "high" : severity === "MEDIUM" ? "medium" : "low");
    }
  }
  const pretty: PrettyRiskFlag[] = unique.map((text) => ({
    text,
    severity: explicitSeverities.get(text) ?? toSeverityFromText(text),
  }));

  const rank = { high: 3, medium: 2, low: 1 } as const;
  pretty.sort((a, b) => rank[b.severity] - rank[a.severity]);

  return { raw: unique, pretty };
}

export function buildReport(input: {
  readiness?: ReadinessDetail;
  currency?: "EUR" | "USD";
  assessmentId?: string;
  assessmentRunId?: string;
  ruleSetVersion: string;
  engineVersion?: string;

  readinessScore: number;
  tier: string;
  ltvBand: { min: number; max: number };
  riskFlags: unknown; // ✅ no any
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
    delta: Number(h.weightedDelta ?? h.delta ?? 0),
    flag: h.flagCode || h.flag || undefined,
  }));

  const scoreDeltaSum = matched.reduce((sum, h) => sum + Number(h.weightedDelta ?? h.delta ?? 0), 0);
  const unmatchedRulesCount = (hits ?? []).filter((h) => !h?.matched).length;

  const normalized = normalizeRiskFlags(riskFlags);

  const riskSummary =
    normalized.raw.length === 0
      ? "No major red flags triggered by the current ruleset."
      : `Triggered ${normalized.raw.length} risk flag(s) that may reduce lender appetite or tighten terms.`;

  return {
    readiness: input.readiness,
    currency: input.currency,
    meta: {
      assessmentId,
      assessmentRunId,
      generatedAtISO: new Date().toISOString(),
      ruleSetVersion: String(ruleSetVersion ?? "unknown"),
      engineVersion: engineVersion ? String(engineVersion) : undefined,
    },
    headline: {
      title: input.readiness ? "Your financing preparation" : title,
      subtitle: input.readiness ? "A review of your plan and self-reported evidence." : subtitle,
      readinessScore: clamp(Math.round(Number(readinessScore ?? 0)), 0, 100),
      tier,
      ltvBand: {
        min: clamp(Math.round(Number(ltvBand?.min ?? 0)), 0, 100),
        max: clamp(Math.round(Number(ltvBand?.max ?? 0)), 0, 100),
      },
      explainer: input.readiness ? "A preparation score based on your financial plan and reported evidence. It is not a credit score or a probability of finance approval." : explainer,
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
      nextSteps: input.readiness ? [...input.readiness.factors].sort((a,b) => (b.max-b.points)-(a.max-a.points)).map(f => f.action) : nextSteps,
      documentsChecklist,
    },
    transparency: {
      matchedRules,
      unmatchedRulesCount,
      scoreDeltaSum,
    },
  };
}
