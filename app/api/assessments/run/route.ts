// app/api/assessments/run/route.ts
import { NextResponse } from "next/server";
import { runAssessment } from "@/lib/engine/runAssessment";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const clientId = String(body?.clientId ?? "");
    const vesselId = String(body?.vesselId ?? "");
    const ruleSetVersion = body?.ruleSetVersion ? String(body.ruleSetVersion) : undefined;
    const assessmentId = body?.assessmentId ? String(body.assessmentId) : undefined;

    if (!clientId || !vesselId) {
      return NextResponse.json(
        { ok: false, error: "Missing clientId or vesselId" },
        { status: 400 }
      );
    }

    const result = await runAssessment({
      clientId,
      vesselId,
      ruleSetVersion,
      assessmentId,
      actorEmail: "founder@projecty.local",
    });

    return NextResponse.json({ ok: true, result });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
