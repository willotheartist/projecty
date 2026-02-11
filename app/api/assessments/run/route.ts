// app/api/assessments/run/route.ts
import { NextResponse } from "next/server";
import { runAssessment } from "@/lib/engine/runAssessment";

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export async function POST(req: Request) {
  try {
    const raw = (await req.json()) as unknown;
    const body = isRecord(raw) ? raw : {};

    const clientId = String(body.clientId ?? "");
    const vesselId = String(body.vesselId ?? "");
    const ruleSetVersion = body.ruleSetVersion ? String(body.ruleSetVersion) : undefined;
    const assessmentId = body.assessmentId ? String(body.assessmentId) : undefined;

    if (!clientId || !vesselId) {
      return NextResponse.json({ ok: false, error: "Missing clientId or vesselId" }, { status: 400 });
    }

    const result = await runAssessment({
      clientId,
      vesselId,
      ruleSetVersion,
      assessmentId,
      actorEmail: "founder@projecty.local",
    });

    return NextResponse.json({ ok: true, result });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
