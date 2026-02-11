// lib/pdf/renderAssessmentPdf.ts
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

type PrettyRiskFlag = { text: string; severity: "low" | "medium" | "high" };

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

const COLORS = {
  bg: rgb(0.965, 0.957, 0.94),
  card: rgb(1, 1, 1),
  ink: rgb(0.08, 0.08, 0.08),
  sub: rgb(0.35, 0.35, 0.35),
  line: rgb(0.86, 0.86, 0.86),
  yellow: rgb(0.98, 0.93, 0.34),
  soft: rgb(0.96, 0.96, 0.96),
};

function wrapText(text: string, maxChars: number): string[] {
  const words = String(text ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);

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

function safe(s: unknown) {
  return String(s ?? "")
    .replaceAll("€", "EUR ")
    .replaceAll("–", "-")
    .replaceAll("—", "-")
    .replace(/\u00A0/g, " ");
}

function fmtEUR(n: number) {
  const x = Number(n ?? 0);
  try {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    })
      .format(x)
      .replace("€", "EUR ");
  } catch {
    return `EUR ${Math.round(x).toLocaleString()}`;
  }
}

function severityPill(sev: "low" | "medium" | "high") {
  if (sev === "high") return { label: "HIGH", fill: rgb(1, 0.92, 0.92), ink: rgb(0.55, 0.1, 0.1) };
  if (sev === "medium") return { label: "MEDIUM", fill: rgb(1, 0.97, 0.9), ink: rgb(0.45, 0.32, 0.1) };
  return { label: "LOW", fill: rgb(0.93, 0.98, 0.93), ink: rgb(0.12, 0.42, 0.18) };
}

export async function renderAssessmentPdf(report: Report) {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let page = pdfDoc.addPage([A4.w, A4.h]);
  const margin = 44;

  const paintBg = () => {
    page.drawRectangle({ x: 0, y: 0, width: A4.w, height: A4.h, color: COLORS.bg });
  };

  paintBg();

  let y = A4.h - margin;

  const ensureSpace = (need: number) => {
    if (y - need > margin) return;
    page = pdfDoc.addPage([A4.w, A4.h]);
    paintBg();
    y = A4.h - margin;
  };

  const drawText = (txt: string, x: number, yPos: number, size: number, bold = false, color = COLORS.ink) => {
    page.drawText(safe(txt), {
      x,
      y: yPos,
      size,
      font: bold ? fontBold : fontRegular,
      color,
    });
  };

  const drawParagraph = (txt: string, x: number, maxWChars: number, size: number, color = COLORS.sub, leading = 14) => {
    const lines = wrapText(safe(txt), maxWChars);
    for (const line of lines) {
      ensureSpace(leading + 10);
      drawText(line, x, y - leading, size, false, color);
      y -= leading;
    }
  };

  const card = (height: number) => {
    ensureSpace(height + 16);
    const x = margin;
    const w = A4.w - margin * 2;
    const top = y;
    page.drawRectangle({
      x,
      y: top - height,
      width: w,
      height,
      color: COLORS.card,
      borderColor: COLORS.line,
      borderWidth: 1,
    });
    y = top - height - 16;
    return { x, yTop: top, w, h: height };
  };

  // header stripe
  page.drawRectangle({ x: 0, y: A4.h - 18, width: A4.w, height: 18, color: COLORS.yellow });

  drawText("Waaza", margin, A4.h - 54, 20, true, COLORS.ink);
  drawText("Financing Readiness Report", margin, A4.h - 74, 12, false, COLORS.sub);

  const metaRightX = A4.w - margin - 220;
  drawText(`RuleSet: ${safe(report.meta.ruleSetVersion)}`, metaRightX, A4.h - 56, 9, false, COLORS.sub);
  drawText(`Engine: ${safe(report.meta.engineVersion ?? "-")}`, metaRightX, A4.h - 70, 9, false, COLORS.sub);
  drawText(`Generated: ${safe(report.meta.generatedAtISO)}`, metaRightX, A4.h - 84, 9, false, COLORS.sub);

  y = A4.h - 110;

  // summary card
  const c1 = card(170);
  const cx = c1.x + 18;
  const top = c1.yTop - 18;

  drawText("Financing Readiness Summary", cx, top, 16, true, COLORS.ink);

  const score = Number(report.headline.readinessScore ?? 0);
  drawText(String(score), cx, top - 54, 44, true, COLORS.ink);

  const pillW = 150;
  const pillH = 22;
  page.drawRectangle({
    x: cx,
    y: top - 88,
    width: pillW,
    height: pillH,
    color: COLORS.yellow,
    borderColor: COLORS.line,
    borderWidth: 1,
  });
  drawText(safe(report.headline.tier), cx + 10, top - 82, 10, true, COLORS.ink);

  drawText(
    `Indicative LTV: ${report.headline.ltvBand.min}%–${report.headline.ltvBand.max}%`,
    cx,
    top - 112,
    10,
    false,
    COLORS.sub
  );

  const explainerX = cx + 260;
  drawText("What this score means", explainerX, top - 28, 11, true, COLORS.ink);

  const savedY = y;
  y = top - 42;
  drawParagraph(report.headline.explainer, explainerX, 46, 10, COLORS.sub, 14);
  y = savedY;

  // recommended direction
  const c2 = card(92);
  const dx = c2.x + 18;
  const dTop = c2.yTop - 18;

  drawText("Recommended direction", dx, dTop, 11, true, COLORS.ink);
  y = dTop - 16;
  drawParagraph(report.recommendations.recommendedPath, dx, 90, 11, COLORS.ink, 15);

  // buyer + vessel cards
  const colGap = 14;
  const colW = (A4.w - margin * 2 - colGap) / 2;

  ensureSpace(180);
  const rowTop = y;

  page.drawRectangle({
    x: margin,
    y: rowTop - 160,
    width: colW,
    height: 160,
    color: COLORS.card,
    borderColor: COLORS.line,
    borderWidth: 1,
  });
  page.drawRectangle({
    x: margin + colW + colGap,
    y: rowTop - 160,
    width: colW,
    height: 160,
    color: COLORS.card,
    borderColor: COLORS.line,
    borderWidth: 1,
  });

  const bX = margin + 16;
  const vX = margin + colW + colGap + 16;

  drawText("Buyer", bX, rowTop - 28, 12, true, COLORS.ink);
  drawText("Vessel", vX, rowTop - 28, 12, true, COLORS.ink);

  const kv = (x: number, y0: number, k: string, v: string) => {
    drawText(k, x, y0, 9, true, COLORS.sub);
    drawText(v, x + 120, y0, 9, false, COLORS.ink);
  };

  let by = rowTop - 54;
  kv(bX, by, "Name", safe(report.parties.buyer.name));
  by -= 16;
  kv(bX, by, "Residency", safe(report.parties.buyer.residency));
  by -= 16;
  kv(bX, by, "Income", safe(report.parties.buyer.incomeType));
  by -= 16;
  kv(bX, by, "Net worth", safe(report.parties.buyer.netWorthBand));
  by -= 16;
  kv(bX, by, "Liquidity", fmtEUR(report.parties.buyer.liquidityAvailable));
  by -= 16;
  kv(bX, by, "Ownership", safe(report.parties.buyer.ownershipIntent));

  let vy = rowTop - 54;
  kv(vX, vy, "Price", fmtEUR(report.parties.vessel.purchasePrice));
  vy -= 16;
  kv(vX, vy, "Year", safe(report.parties.vessel.yearBuilt));
  vy -= 16;
  kv(vX, vy, "Usage", safe(report.parties.vessel.usageType));
  vy -= 16;
  kv(vX, vy, "Flag", safe(report.parties.vessel.intendedFlag ?? "-"));

  y = rowTop - 160 - 16;

  // risk flags card
  const flagsCard = card(170);
  const fx = flagsCard.x + 18;
  const fTop = flagsCard.yTop - 18;

  drawText("Key risk flags", fx, fTop, 12, true, COLORS.ink);
  drawText(report.risk.summary, fx, fTop - 18, 10, false, COLORS.sub);

  const pretty = Array.isArray(report.risk.prettyFlags) ? report.risk.prettyFlags : [];
  const list =
    pretty.length > 0
      ? pretty
      : (report.risk.flags ?? []).map((t) => ({ text: String(t), severity: "medium" as const }));

  let ly = fTop - 46;
  if (!list.length) {
    drawText("None triggered.", fx, ly, 10, false, COLORS.sub);
  } else {
    for (let i = 0; i < Math.min(list.length, 6); i++) {
      const item = list[i];
      const pill = severityPill(item.severity);

      page.drawRectangle({
        x: fx,
        y: ly - 14,
        width: flagsCard.w - 36,
        height: 28,
        color: COLORS.soft,
        borderColor: COLORS.line,
        borderWidth: 1,
      });

      drawText(item.text, fx + 10, ly - 4, 10, false, COLORS.ink);

      const pw = 70;
      page.drawRectangle({
        x: fx + (flagsCard.w - 36) - pw - 10,
        y: ly - 10,
        width: pw,
        height: 20,
        color: pill.fill,
        borderColor: COLORS.line,
        borderWidth: 1,
      });
      drawText(pill.label, fx + (flagsCard.w - 36) - pw - 10 + 18, ly - 5, 9, true, pill.ink);

      ly -= 36;
      if (ly < margin + 40) break;
    }
  }

  // steps & docs
  ensureSpace(240);

  const stepsCard = card(170);
  const sx = stepsCard.x + 18;
  const sTop = stepsCard.yTop - 18;

  drawText("Recommended next steps", sx, sTop, 12, true, COLORS.ink);
  let sy = sTop - 28;
  for (const s of report.recommendations.nextSteps ?? []) {
    drawText("• " + safe(s), sx, sy, 10, false, COLORS.ink);
    sy -= 16;
  }

  const docsCard = card(170);
  const dx2 = docsCard.x + 18;
  const dTop2 = docsCard.yTop - 18;

  drawText("Documents checklist", dx2, dTop2, 12, true, COLORS.ink);
  let dy2 = dTop2 - 28;
  for (const d of report.recommendations.documentsChecklist ?? []) {
    drawText("• " + safe(d), dx2, dy2, 10, false, COLORS.ink);
    dy2 -= 16;
  }

  // transparency
  const tCard = card(110);
  const tx = tCard.x + 18;
  const tTop = tCard.yTop - 18;

  drawText("Transparency", tx, tTop, 12, true, COLORS.ink);
  drawText(
    `Matched rules: ${report.transparency.matchedRules.length}   ·   Unmatched rules: ${report.transparency.unmatchedRulesCount}   ·   Score delta sum: ${report.transparency.scoreDeltaSum}`,
    tx,
    tTop - 20,
    10,
    false,
    COLORS.sub
  );

  let ty = tTop - 44;
  const mr = report.transparency.matchedRules ?? [];
  for (let i = 0; i < Math.min(mr.length, 3); i++) {
    const r = mr[i];
    const line =
      r.flag && String(r.flag).trim()
        ? `${safe(r.flag)} (delta ${Number(r.delta ?? 0)})`
        : `${safe(r.ruleId)} (delta ${Number(r.delta ?? 0)})`;

    drawText("• " + line, tx, ty, 10, false, COLORS.ink);
    ty -= 16;
  }

  return await pdfDoc.save();
}
