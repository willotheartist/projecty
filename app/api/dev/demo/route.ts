// app/api/dev/demo/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type DemoMode = "reuse" | "create";

function baseUrlFromReq(req: Request) {
  const u = new URL(req.url);
  return `${u.protocol}//${u.host}`;
}

function modeFromReq(req: Request): DemoMode {
  const u = new URL(req.url);
  const m = (u.searchParams.get("mode") ?? "").toLowerCase();
  return m === "create" ? "create" : "reuse";
}

export async function GET(req: Request) {
  const base = baseUrlFromReq(req);
  const mode = modeFromReq(req);

  // 1) Create/reuse sample IDs (GET ping-db)
  const pingRes = await fetch(`${base}/api/dev/ping-db?mode=${mode}`, {
    method: "GET",
    cache: "no-store",
  });

  const pingJson = await pingRes.json().catch(() => null);
  if (!pingRes.ok || !pingJson?.ok) {
    return NextResponse.json(
      { ok: false, step: "ping-db", status: pingRes.status, error: pingJson?.error ?? "Ping failed" },
      { status: 500 }
    );
  }

  const clientId = String(pingJson?.created?.client?.id ?? "");
  const vesselId = String(pingJson?.created?.vessel?.id ?? "");
  const assessmentId = String(pingJson?.created?.assessment?.id ?? "");

  if (!clientId || !vesselId || !assessmentId) {
    return NextResponse.json(
      { ok: false, step: "ping-db", error: "Missing ids from ping-db response" },
      { status: 500 }
    );
  }

  // 2) Run assessment (POST /api/assessments/run)
  const runRes = await fetch(`${base}/api/assessments/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({
      assessmentId,
      clientId,
      vesselId,
      // ruleSetVersion optional; engine decides default/latest
      // ruleSetVersion: "v1.1",
    }),
  });

  const runJson = await runRes.json().catch(() => null);
  if (!runRes.ok || !runJson?.ok) {
    return NextResponse.json(
      { ok: false, step: "run", status: runRes.status, error: runJson?.error ?? "Run failed" },
      { status: 500 }
    );
  }

  const assessmentRunId = String(runJson?.result?.assessmentRunId ?? "");

  // 3) Build report (POST /api/assessments/report)
  const reportRes = await fetch(`${base}/api/assessments/report`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ assessmentId }),
  });

  const reportJson = await reportRes.json().catch(() => null);
  if (!reportRes.ok || !reportJson?.ok) {
    return NextResponse.json(
      { ok: false, step: "report", status: reportRes.status, error: reportJson?.error ?? "Report failed" },
      { status: 500 }
    );
  }

  // Handy URLs
  const pdfUrl = `${base}/api/assessments/report.pdf`;
  const pdfCurl = `curl -sS -X POST ${pdfUrl} -H "Content-Type: application/json" -d '{"assessmentId":"${assessmentId}"}' -o report.pdf`;

  return NextResponse.json({
    ok: true,
    mode,
    reused: Boolean(pingJson?.reused),
    ids: {
      userId: String(pingJson?.created?.user?.id ?? ""),
      clientId,
      vesselId,
      assessmentId,
      assessmentRunId,
    },
    result: runJson.result,
    report: reportJson.report,
    pdf: {
      endpoint: "/api/assessments/report.pdf",
      method: "POST",
      body: { assessmentId },
      curl: pdfCurl,
    },
  });
}
