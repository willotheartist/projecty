/** Waaza preparation rubric, not a lender underwriting or approval model. */
export const READINESS_VERSION = "readiness_v3.0";
export type ReadinessInputs = {
  currency?: "EUR" | "USD";
  purchasePrice: number;
  liquidityAvailable: number;
  requestedLoan: number;
  financeTermYears: number;
  planningRatePct: number;
  monthlySurplus: number;
  closingCosts: number;
  monthlyOwnershipCosts: number;
  documentsReadiness: "ready" | "partial" | "not_started";
  vesselReadiness: "verified" | "pending" | "not_started";
};
export type ReadinessFactor = { key: string; label: string; points: number; max: number; explanation: string; action: string };
export type ReadinessDetail = {
  version: string;
  currency?: "EUR" | "USD";
  factors: ReadinessFactor[];
  rawScore: number;
  capReasons: string[];
  requestedLtv: number;
  depositRequired: number;
  cashGap: number;
  remainingCash: number;
  monthlyPayment: number;
  stressedPayment: number;
  paymentCoverage: number;
  reserveMonths: number;
  assumptions: { ratePct: number; stressRatePct: number; termYears: number };
};
export function validateReadiness(value: unknown): value is ReadinessInputs {
  if (!value || typeof value !== "object") return false;
  const a = value as ReadinessInputs;
  const positive = [a.purchasePrice, a.requestedLoan, a.financeTermYears, a.monthlyOwnershipCosts];
  const nonnegative = [a.liquidityAvailable, a.planningRatePct, a.monthlySurplus, a.closingCosts];
  return positive.every(n => typeof n === "number" && Number.isFinite(n) && n > 0)
    && nonnegative.every(n => typeof n === "number" && Number.isFinite(n) && n >= 0)
    && a.purchasePrice <= 1e10 && a.liquidityAvailable <= 1e11 && a.monthlySurplus <= 1e9
    && a.closingCosts <= 1e10 && a.monthlyOwnershipCosts <= 1e9
    && a.requestedLoan <= a.purchasePrice && Number.isInteger(a.financeTermYears)
    && a.financeTermYears <= 20 && a.planningRatePct <= 30
    && ["ready", "partial", "not_started"].includes(a.documentsReadiness)
    && ["verified", "pending", "not_started"].includes(a.vesselReadiness);
}
export function monthlyPayment(principal: number, ratePct: number, years: number) {
  const rate = ratePct / 1200;
  const months = years * 12;
  return rate === 0 ? principal / months : principal * rate / (1 - (1 + rate) ** -months);
}
export function assessReadiness(a: ReadinessInputs) {
  if (!validateReadiness(a)) throw new Error("Complete the financing plan with valid amounts before assessing.");
  const round = (v: number) => Math.round(v * 100) / 100;
  const pct = (v: number) => `${Math.round(v * 100)}%`;
  const ltv = a.requestedLoan / a.purchasePrice;
  const deposit = a.purchasePrice - a.requestedLoan;
  const cashNeeded = deposit + a.closingCosts;
  const cashGap = Math.max(0, cashNeeded - a.liquidityAvailable);
  const remainingCash = Math.max(0, a.liquidityAvailable - cashNeeded);
  const payment = monthlyPayment(a.requestedLoan, a.planningRatePct, a.financeTermYears);
  const stress = monthlyPayment(a.requestedLoan, a.planningRatePct + 2, a.financeTermYears);
  const coverage = a.monthlySurplus / stress;
  const reserves = remainingCash / (a.monthlyOwnershipCosts + stress);
  // Linear bounded components avoid arbitrary absolute-wealth thresholds and penalty stacking.
  const depositPoints = Math.round(30 * Math.min(1, Math.max(0, (1 - ltv) / 0.5)) * (cashNeeded === 0 ? 1 : Math.min(1, a.liquidityAvailable / cashNeeded)));
  const paymentPoints = Math.round(30 * Math.min(1, coverage / 1.5));
  const reservePoints = Math.round(15 * Math.min(1, reserves / 6));
  const docsPoints = { ready: 15, partial: 8, not_started: 0 }[a.documentsReadiness];
  const vesselPoints = { verified: 10, pending: 5, not_started: 0 }[a.vesselReadiness];
  const factors: ReadinessFactor[] = [
    { key: "deposit", label: "Deposit & purchase costs", points: depositPoints, max: 30,
      explanation: `Your planned contribution is ${pct(1 - ltv)} of the price. ${cashGap > 0 ? "Available cash does not cover the contribution and entered purchase costs." : "Available cash covers the contribution and entered purchase costs."}`,
      action: cashGap > 0 ? "Close the cash shortfall or revise the purchase and borrowing plan." : "Check the price, fees and taxes; a larger contribution can improve this component but reduces your remaining reserves." },
    { key: "repayment", label: "Repayment capacity", points: paymentPoints, max: 30,
      explanation: `Your monthly surplus covers ${coverage.toFixed(2)}x the modelled payment at ${a.planningRatePct + 2}% interest. Surplus must already exclude existing debts, living costs and yacht running costs.`,
      action: coverage < 1.5 ? "Review a smaller loan or a lower purchase price and confirm recurring disposable income." : "Prepare evidence of the income and commitments behind your monthly surplus." },
    { key: "reserves", label: "Cash left after purchase", points: reservePoints, max: 15,
      explanation: `Remaining cash covers ${reserves.toFixed(1)} months of the entered yacht running costs plus the stressed loan payment.`,
      action: reserves < 6 ? "Plan more cash beyond the deposit, taxes and fees; avoid using all liquidity at completion." : "Keep the reserve accessible and confirm the ownership-cost budget." },
    { key: "documents", label: "Buyer documentation", points: docsPoints, max: 15,
      explanation: { ready: "You report that identity, source-of-funds, income and existing-debt evidence is ready.", partial: "Some buyer evidence is still being gathered.", not_started: "The buyer evidence pack has not been prepared." }[a.documentsReadiness],
      action: "Gather identity, proof of address, source-of-funds evidence, income records and an asset/debt schedule. Company income needs supporting accounts." },
    { key: "vessel", label: "Vessel & structure checks", points: vesselPoints, max: 10,
      explanation: { verified: "You report that valuation/survey, title and the proposed ownership, flag and use have been professionally reviewed.", pending: "Vessel or ownership checks are in progress.", not_started: "Vessel and ownership checks have not started." }[a.vesselReadiness],
      action: "Arrange an age-appropriate survey/valuation, title checks and review of ownership, flag and private/charter use." },
  ];
  const rawScore = factors.reduce((sum, factor) => sum + factor.points, 0);
  const capReasons: string[] = [];
  if (cashGap > 0) capReasons.push("Available cash does not cover your planned contribution and purchase costs.");
  if (coverage < 1) capReasons.push("Monthly surplus is below the modelled stressed loan payment.");
  const readinessScore = capReasons.length ? Math.min(rawScore, 49) : rawScore;
  const detail: ReadinessDetail = {
    version: READINESS_VERSION, currency: a.currency, factors, rawScore, capReasons,
    requestedLtv: round(ltv * 100), depositRequired: round(deposit), cashGap: round(cashGap),
    remainingCash: round(remainingCash), monthlyPayment: round(payment), stressedPayment: round(stress),
    paymentCoverage: round(coverage), reserveMonths: round(reserves),
    assumptions: { ratePct: a.planningRatePct, stressRatePct: a.planningRatePct + 2, termYears: a.financeTermYears },
  };
  const tier = readinessScore >= 80 ? "FINANCE_READY" : readinessScore >= 50 ? "CONDITIONAL" : "HIGH_RISK";
  const priorities = [...factors].sort((a, b) => (b.max - b.points) - (a.max - a.points)).filter(f => f.points < f.max);
  return {
    readinessScore, tier, readiness: detail,
    // Compatibility only: this is requested LTV, never a lender estimate. Persistence stores null estimates.
    ltv: { min: Math.round(ltv * 100), max: Math.round(ltv * 100) },
    hits: factors.map(f => ({ ruleId: f.key, matched: true, weightedDelta: f.points })),
    riskFlags: capReasons.map((_, i) => ({ code: cashGap > 0 && i === 0 ? "PURCHASE_CASH_SHORTFALL" : "REPAYMENT_SHORTFALL", severity: "HIGH" as const })),
    recommendedPath: capReasons.length ? `${capReasons.join(" ")} Resolve these gaps before lender outreach.` : priorities[0]?.action ?? "Your preparation is strong under this rubric. Have a broker verify the evidence and lender fit.",
  };
}
