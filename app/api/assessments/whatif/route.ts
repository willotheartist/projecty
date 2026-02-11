// app/api/assessments/whatif/route.ts
import { NextResponse } from "next/server";
import { whatIfAssessment } from "@/lib/engine/runAssessment";
import { buildReport, Hit } from "@/lib/report/buildReport";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const clientId = String(body?.clientId ?? "");
    const vesselId = String(body?.vesselId ?? "");
    const ruleSetVersion = body?.ruleSetVersion ? String(body.ruleSetVersion) : undefined;

    if (!clientId || !vesselId) {
      return NextResponse.json(
        { ok: false, error: "Missing clientId or vesselId" },
        { status: 400 }
      );
    }

    const result = await whatIfAssessment({
      clientId,
      vesselId,
      ruleSetVersion,
      overrides: body?.overrides ?? undefined,
    });

    const snap: any = result.inputSnapshot;
    const hits: Hit[] = (result.hits as any[]) ?? [];

    const report = buildReport({
      assessmentId: undefined,
      assessmentRunId: undefined,
      ruleSetVersion: String(result.ruleSetVersion),
      engineVersion: "engine_v1",

      readinessScore: Number(result.readinessScore),
      tier: String(result.tier),
      ltvBand: { min: Number(result.ltv.min), max: Number(result.ltv.max) },
      riskFlags: result.riskFlags,
      recommendedPath: String(result.recommendedPath),

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

    return NextResponse.json({ ok: true, result, report });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? "Unknown error" }, { status: 500 });
  }
}
