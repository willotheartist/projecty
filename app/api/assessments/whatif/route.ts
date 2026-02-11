// app/api/assessments/whatif/route.ts
import { NextResponse } from "next/server";
import { whatIfAssessment } from "@/lib/engine/runAssessment";
import { buildReport, Hit } from "@/lib/report/buildReport";

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

    const clientId = String(body.clientId ?? "");
    const vesselId = String(body.vesselId ?? "");
    const ruleSetVersion = body.ruleSetVersion ? String(body.ruleSetVersion) : undefined;

    if (!clientId || !vesselId) {
      return NextResponse.json({ ok: false, error: "Missing clientId or vesselId" }, { status: 400 });
    }

    const overrides = body.overrides;
    const result = await whatIfAssessment({
      clientId,
      vesselId,
      ruleSetVersion,
      overrides: overrides === undefined ? undefined : overrides,
    });

    const snap = asRecordOrNull(result.inputSnapshot) ?? {};
    const snapClient = asRecordOrNull(snap.client) ?? {};
    const snapVessel = asRecordOrNull(snap.vessel) ?? {};

    const hits: Hit[] = asHits(result.hits);

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

    return NextResponse.json({ ok: true, result, report });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
