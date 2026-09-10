import type { ReadinessDetail } from "../engine/readiness";
// lib/pdf/renderAssessmentPdf.ts
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

type PrettyRiskFlag = { text: string; severity: "low" | "medium" | "high" };

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
    prettyFlags?: PrettyRiskFlag[];
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

const A4 = { w: 595.28, h: 841.89 };

export async function renderAssessmentPdf(report: Report) {
  const detail = report.readiness;
  const doc = await PDFDocument.create();
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const serif = await doc.embedFont(StandardFonts.TimesRoman);
  const ink = rgb(0.07, 0.07, 0.07);
  const muted = rgb(0.38, 0.38, 0.38);
  const yellow = rgb(1, 0.97, 0.36);
  const margin = 44;
  const width = A4.w - margin * 2;
  let page = doc.addPage([A4.w, A4.h]);
  let y = 744;
  // Standard PDF fonts cannot encode every Unicode character. Keep export robust.
  const safe = (value: unknown) => Array.from(String(value ?? "").replace(/[–—]/g, "-")).map((ch) => {
    try { regular.encodeText(ch); return ch; } catch { return "?"; }
  }).join("");
  const text = (value: unknown, x: number, top: number, size = 10, font = regular, color = ink) => {
    page.drawText(safe(value), { x, y: top, size, font, color });
  };
  const header = () => {
    page.drawRectangle({ x: 0, y: 829, width: A4.w, height: 13, color: yellow });
    text("Waaza", margin, 789, 25, serif);
    text("FINANCING READINESS / PRIVATE & CONFIDENTIAL", margin, 767, 8, regular, muted);
  };
  const newPage = () => { page = doc.addPage([A4.w, A4.h]); y = 732; header(); };
  const ensure = (height: number) => { if (y - height < 65) newPage(); };
  const lines = (value: string, maxWidth = width, size = 10) => {
    const result: string[] = [];
    let line = "";
    for (const word of safe(value).split(/\s+/)) {
      const candidate = line ? `${line} ${word}` : word;
      if (regular.widthOfTextAtSize(candidate, size) <= maxWidth) { line = candidate; continue; }
      if (line) result.push(line);
      line = "";
      for (const ch of word) {
        if (regular.widthOfTextAtSize(line + ch, size) > maxWidth) { result.push(line); line = ""; }
        line += ch;
      }
    }
    if (line) result.push(line);
    return result;
  };
  const paragraph = (value: string, size = 10, color = muted) => {
    for (const line of lines(value, width, size)) { ensure(16); text(line, margin, y, size, regular, color); y -= 16; }
    y -= 8;
  };
  const section = (number: string, title: string) => {
    ensure(75);
    y -= 14;
    page.drawLine({ start: { x: margin, y }, end: { x: A4.w - margin, y }, thickness: 0.6, color: rgb(0.83, 0.83, 0.81) });
    y -= 28;
    text(number, margin, y, 9, bold, muted);
    text(title, margin + 30, y, 20, serif);
    y -= 28;
  };
  const item = (label: string, value: string) => {
    const wrapped = lines(value, width - 150);
    ensure(wrapped.length * 16 + 10);
    text(label, margin, y, 10, regular, muted);
    for (const line of wrapped) { text(line, margin + 150, y); y -= 16; }
    y -= 5;
  };
  const amount = (n: number) => (report.currency ? `${report.currency} ` : "") + new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(n);
  const pretty = (s: string) => s.replaceAll("_", " ").toLowerCase();
  header();
  doc.setTitle("Waaza | Financing Readiness Report");
  doc.setAuthor("Waaza");
  y = 724;
  text("Your financing outlook", margin, y, 30, serif); y -= 31;
  paragraph(`Prepared for ${report.parties.buyer.name}`, 12);
  paragraph(`Generated ${report.meta.generatedAtISO.slice(0, 10)} | Reference ${report.meta.assessmentId ?? "Preview"}`, 9);
  ensure(133);
  page.drawRectangle({ x: margin, y: y - 111, width, height: 125, color: yellow });
  text(`${report.headline.readinessScore}`, margin + 18, y - 40, 48, serif);
  text("/ 100 readiness", margin + 18, y - 63, 10);
  text(detail ? (report.headline.readinessScore >= 80 ? "Well prepared for review" : report.headline.readinessScore >= 50 ? "Preparation gaps" : "Plan needs work") : pretty(report.headline.tier), margin + 18, y - 91, 11, bold);
  text(detail ? `${detail.requestedLtv}%` : `${report.headline.ltvBand.min}-${report.headline.ltvBand.max}%`, margin + 264, y - 37, 30, serif);
  text(detail ? "Requested loan-to-price" : "Indicative loan-to-value", margin + 264, y - 63, 10);
  text(detail ? "Your plan, not an approved loan amount" : "Model estimate, subject to underwriting", margin + 264, y - 88, 9);
  y -= 143;
  paragraph(report.headline.explainer, 12, ink);
  section("01", "Recommended direction");
  paragraph(report.recommendations.recommendedPath, 12, ink);
  section("02", "Purchase & liquidity");
  const price = report.parties.vessel.purchasePrice;
  const low = price * report.headline.ltvBand.min / 100;
  const high = price * report.headline.ltvBand.max / 100;
  item("Purchase price", amount(price));
  if (detail) {
    item("Requested borrowing", amount(price - detail.depositRequired));
    item("Buyer contribution", amount(detail.depositRequired));
    item("Purchase cash shortfall", amount(detail.cashGap));
    item("Cash remaining", amount(detail.remainingCash));
    item(`Payment at ${detail.assumptions.ratePct}%`, `${amount(detail.monthlyPayment)} / month`);
    item(`Stress at ${detail.assumptions.stressRatePct}%`, `${amount(detail.stressedPayment)} / month`);
    paragraph(`Fully repaying loan over ${detail.assumptions.termYears} years; no balloon. Rates are planning assumptions, not a quote.`, 9);
  } else {
    item("Illustrative borrowing", `${amount(low)} - ${amount(high)}`);
    item("Buyer contribution", `${amount(price - high)} - ${amount(price - low)}`);
  }
  item("Reported liquidity", amount(report.parties.buyer.liquidityAvailable));
  paragraph(`${report.currency ? `Amounts in ${report.currency}.` : "Currency was not recorded for this assessment; confirm it before sharing."} Buyer contribution excludes taxes, fees and operating reserves. Borrowing is a model illustration, not an offer.`, 9);
  newPage();
  section("03", "Assessment inputs");
  item("Buyer / reference", report.parties.buyer.name);
  item("Tax residency", report.parties.buyer.residency);
  item("Income source", pretty(report.parties.buyer.incomeType));
  if (report.parties.buyer.netWorthBand !== "unknown") item("Net worth band", pretty(report.parties.buyer.netWorthBand));
  item("Ownership", pretty(report.parties.buyer.ownershipIntent));
  item("Vessel year", String(report.parties.vessel.yearBuilt));
  item("Intended use", pretty(report.parties.vessel.usageType));
  item("Intended flag", pretty(report.parties.vessel.intendedFlag ?? "Not confirmed"));
  section("04", "Points to resolve");
  paragraph(report.risk.summary);
  const flags = report.risk.prettyFlags?.length ? report.risk.prettyFlags : report.risk.flags.map(text => ({ text, severity: "medium" }));
  if (!flags.length) paragraph("No flags were triggered by the current rules. Supporting documents and lender checks are still required.");
  for (const flag of flags) item(flag.severity.toUpperCase(), flag.text);
  section("05", "Your next steps");
  report.recommendations.nextSteps.forEach((step, i) => item(String(i + 1).padStart(2, "0"), step));
  if (detail) {
    newPage();
    section("A", "Your score, explained");
    paragraph(`Component total: ${detail.rawScore}/100. Final score: ${report.headline.readinessScore}/100. These are Waaza preparation targets, not lender eligibility criteria.`);
    for (const reason of detail.capReasons) paragraph(`Score capped at 49: ${reason}`, 11, ink);
    for (const factor of detail.factors) {
      ensure(135);
      item(`${factor.points} / ${factor.max}`, factor.label);
      paragraph(factor.explanation);
      paragraph(`Next step: ${factor.action}`);
    }
    paragraph("Deposit: up to 30 points at a 50% contribution, reduced when cash does not cover the contribution and costs. Repayment: up to 30 points at 1.5 times stressed payment coverage. Reserves: up to 15 points at six months of running costs plus stressed payments. Documents: 0/8/15; vessel checks: 0/5/10. All inputs are self-reported.", 9);
  }
  newPage();
  section("06", "Document preparation");
  paragraph("Use this as a starting checklist for a broker review. The final requirements depend on the lender, vessel and ownership structure.");
  report.recommendations.documentsChecklist.forEach((entry, i) => item(String(i + 1).padStart(2, "0"), entry));
  section("07", "How to read this assessment");
  paragraph("This is an indicative, rules-based readiness assessment using the supplied information. It is not a credit approval, finance offer, valuation or guarantee of terms. The readiness score is not a probability of approval. Confirm the information and currency before using this report for a financing decision.");
  item("Assessment rules", report.meta.ruleSetVersion);
  item("Engine", report.meta.engineVersion ?? "Not recorded");
  item("Matched / unmatched", `${report.transparency.matchedRules.length} / ${report.transparency.unmatchedRulesCount}`);
  item(detail ? "Component points" : "Net score adjustment", String(report.transparency.scoreDeltaSum));
  paragraph(detail ? "Component points are added from zero, with a cap of 49 when the cash or repayment plan has a shortfall. This model has not been calibrated against lender outcomes." : "The engine applies rule adjustments to its starting score and caps the final result between 0 and 100. The entries below show the recorded matched rules.", 9);
  for (const rule of report.transparency.matchedRules) item(`${rule.delta > 0 ? "+" : ""}${rule.delta} points`, pretty(rule.flag ?? rule.ruleId));
  const pages = doc.getPages();
  pages.forEach((p, i) => {
    p.drawText("WAAZA  /  Indicative assessment", { x: margin, y: 32, size: 8, font: regular, color: muted });
    p.drawText(`${i + 1} / ${pages.length}`, { x: A4.w - margin - 30, y: 32, size: 8, font: regular, color: muted });
  });
  return doc.save();
}
