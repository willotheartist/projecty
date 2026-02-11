// app/api/assessments/report/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buildReport, Hit } from "@/lib/report/buildReport";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const assessmentId = String(body?.assessmentId ?? "");

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

    const snap = run.inputSnapshot as any;

    const hits: Hit[] = (run.hits as any[]) ?? [];

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
      riskFlags: Array.isArray(assessment.riskFlags) ? (assessment.riskFlags as any) : [],
      recommendedPath: String(assessment.recommendedPath ?? "UNKNOWN"),

      buyer: {
        name: String(snap?.client?.name ?? "Unknown"),
        residency: String(snap?.client?.residency ?? "Unknown"),
        incomeType: String(snap?.client?.incomeType ?? "Unknown"),
        netWorthBand: String(snap?.client?.netWorthBand ?? "Unknown"),
        liquidityAvailable: Number(snap?.client?.liquidityAvailable ?? 0),
        ownershipIntent: String(snap?.client?.ownershipIntent ?? "Unknown"),
      },
      vessel: {
        purchasePrice: Number(snap?.vessel?.purchasePrice ?? 0),
        yearBuilt: Number(snap?.vessel?.yearBuilt ?? 0),
        usageType: String(snap?.vessel?.usageType ?? "Unknown"),
        intendedFlag: snap?.vessel?.intendedFlag ?? null,
      },

      hits,
    });

    return NextResponse.json({ ok: true, report });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? "Unknown error" }, { status: 500 });
  }
}
