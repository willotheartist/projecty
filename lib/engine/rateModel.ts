// lib/engine/rateModel.ts
export type TierKey = "FINANCE_READY" | "CONDITIONAL" | "HIGH_RISK" | string;

export type RateContext = {
  yearBuilt?: number | null;
  usageIntent?: "private" | "private_plus_charter" | "commercial_charter" | string | null;
  purchasePrice?: number | null;
  deposit?: number | null;
};

export type RateModelResult = {
  baseRatePct: number;
  adjustedRatePct: number;
  adjustments: Array<{ label: string; deltaPct: number }>;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function tierBaseRate(tier: TierKey): number {
  const t = String(tier || "").toUpperCase();
  if (t === "FINANCE_READY") return 5.6;
  if (t === "CONDITIONAL") return 6.8;
  if (t === "HIGH_RISK") return 8.2;
  // fallback (unknown tier)
  return 7.2;
}

export function deriveIndicativeRate(tier: TierKey, ctx: RateContext): RateModelResult {
  const base = tierBaseRate(tier);
  const adjustments: Array<{ label: string; deltaPct: number }> = [];

  const nowYear = new Date().getFullYear();
  const yearBuilt = ctx.yearBuilt ? Number(ctx.yearBuilt) : null;
  const vesselAge = yearBuilt ? clamp(nowYear - yearBuilt, 0, 80) : null;

  if (vesselAge != null && vesselAge > 20) {
    adjustments.push({ label: "Vessel age > 20 years", deltaPct: 0.25 });
  }

  const usage = String(ctx.usageIntent || "");
  if (usage === "commercial_charter") {
    adjustments.push({ label: "Commercial charter usage", deltaPct: 0.30 });
  } else if (usage === "private_plus_charter") {
    adjustments.push({ label: "Occasional charter", deltaPct: 0.15 });
  }

  const price = ctx.purchasePrice ? Number(ctx.purchasePrice) : 0;
  const deposit = ctx.deposit ? Number(ctx.deposit) : 0;
  const loan = Math.max(0, price - deposit);
  const ltv = price > 0 ? loan / price : 0;

  if (ltv > 0.6) {
    adjustments.push({ label: "Higher LTV (> 60%)", deltaPct: 0.20 });
  }

  const totalDelta = adjustments.reduce((sum, a) => sum + a.deltaPct, 0);
  const adjusted = clamp(base + totalDelta, 3.5, 11.5);

  return { baseRatePct: base, adjustedRatePct: adjusted, adjustments };
}
