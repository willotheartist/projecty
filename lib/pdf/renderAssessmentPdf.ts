// lib/pdf/renderAssessmentPdf.ts
import { PDFDocument, StandardFonts } from "pdf-lib";

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

function fmtEUR(n: number) {
  try {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `€${Math.round(n).toLocaleString()}`;
  }
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length <= maxChars) cur = next;
    else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

// ✅ pdf-lib standard fonts are WinAnsi.
// Replace characters WinAnsi can’t encode (like Δ) with safe ASCII.
function sanitizeWinAnsi(s: string) {
  return s
    .replaceAll("Δ", "d") // delta
    .replaceAll("€", "EUR ") // safest
    .replaceAll("–", "-") // en-dash
    .replaceAll("—", "-") // em-dash
    .replace(/\u00A0/g, " "); // nbsp
}

export async function renderAssessmentPdf(report: Report) {
  const pdfDoc = await PDFDocument.create();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const page = pdfDoc.addPage([595.28, 841.89]); // A4 portrait
  const { width, height } = page.getSize();

  const margin = 48;
  let y = height - margin;

  const drawH1 = (text: string) => {
    const t = sanitizeWinAnsi(text);
    page.drawText(t, { x: margin, y: y - 26, size: 18, font: fontBold });
    y -= 34;
  };

  const drawH2 = (text: string) => {
    const t = sanitizeWinAnsi(text);
    page.drawText(t, { x: margin, y: y - 20, size: 12, font: fontBold });
    y -= 26;
  };

  const drawLine = () => {
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 1,
    });
    y -= 16;
  };

  const drawBody = (text: string) => {
    const lines = wrapText(sanitizeWinAnsi(text), 95);
    for (const line of lines) {
      page.drawText(line, {
        x: margin,
        y: y - 14,
        size: 10,
        font: fontRegular,
      });
      y -= 14;
    }
    y -= 6;
  };

  const drawKV = (k: string, v: string) => {
    const kk = sanitizeWinAnsi(k);
    const vv = sanitizeWinAnsi(v);
    page.drawText(kk, { x: margin, y: y - 14, size: 10, font: fontBold });
    page.drawText(vv, { x: margin + 180, y: y - 14, size: 10, font: fontRegular });
    y -= 16;
  };

  // Title
  drawH1("ProjectY — Financing Readiness Report");
  drawBody(report.headline.subtitle);

  drawLine();

  // Meta
  drawH2("Summary");
  drawKV("Readiness Score", `${report.headline.readinessScore}/100 (${report.headline.tier})`);
  drawKV("Indicative LTV Band", `${report.headline.ltvBand.min}-${report.headline.ltvBand.max}%`);
  drawKV("Recommended Path", report.recommendations.recommendedPath);
  drawKV("RuleSet / Engine", `${report.meta.ruleSetVersion} / ${report.meta.engineVersion ?? "-"}`);
  drawKV("Generated At", report.meta.generatedAtISO);
  drawLine();

  // Buyer
  drawH2("Buyer");
  drawKV("Name", report.parties.buyer.name);
  drawKV("Residency", report.parties.buyer.residency);
  drawKV("Income Type", report.parties.buyer.incomeType);
  drawKV("Net Worth Band", report.parties.buyer.netWorthBand);
  drawKV("Liquidity Available", fmtEUR(report.parties.buyer.liquidityAvailable));
  drawKV("Ownership Intent", report.parties.buyer.ownershipIntent);
  drawLine();

  // Vessel
  drawH2("Vessel");
  drawKV("Purchase Price", fmtEUR(report.parties.vessel.purchasePrice));
  drawKV("Year Built", String(report.parties.vessel.yearBuilt));
  drawKV("Usage Type", report.parties.vessel.usageType);
  drawKV("Intended Flag", String(report.parties.vessel.intendedFlag ?? "-"));
  drawLine();

  // Risk
  drawH2("Risk Flags");
  drawBody(report.risk.summary);
  if (report.risk.flags.length) {
    for (const f of report.risk.flags) drawBody(`• ${f}`);
  } else {
    drawBody("• None");
  }
  drawLine();

  // Next steps
  drawH2("Recommended Next Steps");
  for (const s of report.recommendations.nextSteps) drawBody(`• ${s}`);
  drawLine();

  // Docs
  drawH2("Documents Checklist");
  for (const d of report.recommendations.documentsChecklist) drawBody(`• ${d}`);
  drawLine();

  // Transparency
  drawH2("Transparency (Rule Hits)");
  drawKV("Matched Rules", String(report.transparency.matchedRules.length));
  drawKV("Unmatched Rules", String(report.transparency.unmatchedRulesCount));
  drawKV("Score Delta Sum", String(report.transparency.scoreDeltaSum));

  if (report.transparency.matchedRules.length) {
    y -= 6;
    for (const r of report.transparency.matchedRules) {
      // ✅ remove Δ character (was causing your crash)
      const line = `${r.ruleId}  |  delta ${r.delta}${r.flag ? `  |  ${r.flag}` : ""}`;
      drawBody(`• ${line}`);
    }
  }

  const bytes = await pdfDoc.save();
  return bytes;
}
