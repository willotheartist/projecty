// app/api/assessments/report.pdf/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buildReport, Hit } from "@/lib/report/buildReport";
import { renderAssessmentPdf } from "@/lib/pdf/renderAssessmentPdf";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function asRecordOrNull(v: unknown): Record<string, unknown> | null {
  return isRecord(v) ? v : null;
}

function asHits(v: unknown): Hit[] {
  return Array.isArray(v) ? (v as Hit[]) : [];
}

export async function POST(req: Request) {
  try {
    const raw = (await req.json()) as unknown;
    const body = isRecord(raw) ? raw : {};
    const assessmentId = String(body.assessmentId ?? "");

    if (!assessmentId) {
      return NextResponse.json({ ok: false, error: "Missing assessmentId" }, { status: 400 });
    }

    const assessment = await prisma.assessment.findUnique({
      where: { id: assessmentId },
    });

    if (!assessment) {
      return NextResponse.json({ ok: false, error: "Assessment not found" }, { status: 404 });
    }

    const run = await prisma.assessmentRun.findFirst({
      where: { assessmentId },
      orderBy: { createdAt: "desc" },
    });

    if (!run) {
      return NextResponse.json(
        { ok: false, error: "No AssessmentRun found. Run /api/assessments/run first." },
        { status: 404 }
      );
    }

    const snap = asRecordOrNull(run.inputSnapshot) ?? {};
    const snapClient = asRecordOrNull(snap.client) ?? {};
    const snapVessel = asRecordOrNull(snap.vessel) ?? {};

    const hits: Hit[] = asHits(run.hits);

    const riskFlags = Array.isArray(assessment.riskFlags)
      ? (assessment.riskFlags as unknown[])
      : [];

    const report = buildReport({
      assessmentId,
      assessmentRunId: run.id,
      ruleSetVersion: String(run.ruleSetVersion),
      engineVersion: String(run.engineVersion),

      readinessScore: Number(assessment.readinessScore ?? 0),
      tier: String(assessment.tier ?? "UNKNOWN"),
      ltvBand: {
        min: Number(assessment.ltvEstimateMin ?? 0),
        max: Number(assessment.ltvEstimateMax ?? 0),
      },
      riskFlags,
      recommendedPath: String(assessment.recommendedPath ?? "UNKNOWN"),

      buyer: {
        name: String(snapClient.name ?? "Unknown"),
        residency: String(snapClient.residency ?? "Unknown"),
        incomeType: String(snapClient.incomeType ?? "Unknown"),
        netWorthBand: String(snapClient.netWorthBand ?? "Unknown"),
        liquidityAvailable: Number(snapClient.liquidityAvailable ?? 0),
        ownershipIntent: String(snapClient.ownershipIntent ?? "Unknown"),
      },
      vessel: {
        purchasePrice: Number(snapVessel.purchasePrice ?? 0),
        yearBuilt: Number(snapVessel.yearBuilt ?? 0),
        usageType: String(snapVessel.usageType ?? "Unknown"),
        intendedFlag: (snapVessel.intendedFlag as string | null | undefined) ?? null,
      },

      hits,
    });

    const pdfBytes = await renderAssessmentPdf(report);

    // Node-safe bytes
    const buf = Buffer.from(pdfBytes);

    // Quick sanity: all PDFs begin with "%PDF-"
    const magic = buf.subarray(0, 5).toString("utf8");
    if (magic !== "%PDF-") {
      console.error("PDF magic mismatch:", magic);
      return NextResponse.json(
        { ok: false, error: "PDF generation failed: magic header mismatch" },
        { status: 500 }
      );
    }

    return new NextResponse(buf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="ProjectY_Assessment_${assessmentId}.pdf"`,
        "Content-Length": String(buf.length),
        "Cache-Control": "no-store",
      },
    });
  } catch (err: unknown) {
    console.error("report.pdf error:", err);
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
