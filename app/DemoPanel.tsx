// app/DemoPanel.tsx
"use client";

import { useMemo, useState } from "react";

type DemoResponse = {
  ok: boolean;
  ids: {
    assessmentId: string;
    assessmentRunId: string;
    clientId: string;
    vesselId: string;
    userId: string;
  };
  result: {
    readinessScore: number;
    tier: string;
    ltv: { min: number; max: number };
    riskFlags: string[];
    recommendedPath: string;
  };
  pdf: {
    endpoint: string;
    method: "POST";
    body: { assessmentId: string };
  };
};

async function readJsonSafe(res: Response) {
  const text = await res.text().catch(() => "");
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export default function DemoPanel() {
  const [loading, setLoading] = useState(false);
  const [demo, setDemo] = useState<DemoResponse | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const headline = useMemo(() => {
    if (!demo) return null;
    const tier = String(demo.result.tier || "").toUpperCase();
    if (tier === "READY") return { title: "Finance readiness: ready", sub: "Strong profile. Expect broad lender appetite." };
    if (tier === "CONDITIONAL") return { title: "Finance readiness: conditional", sub: "Viable, but expect conditions and tighter filters." };
    if (tier === "HIGH_RISK") return { title: "Finance readiness: high risk", sub: "Expect limited appetite. Mitigation needed before proceeding." };
    return { title: `Finance readiness: ${tier.toLowerCase()}`, sub: "Assessment generated." };
  }, [demo]);

  async function runDemo() {
    setLoading(true);
    setErr(null);

    try {
      // ✅ your /api/dev/demo is GET-only
      const res = await fetch("/api/dev/demo?mode=create", {
        method: "GET",
        cache: "no-store",
      });

      const json = (await readJsonSafe(res)) as DemoResponse | null;

      if (!res.ok || !json?.ok) {
        const msg =
          (json as any)?.error ||
          (json as any)?.message ||
          `Request failed (${res.status})`;
        throw new Error(msg);
      }

      setDemo(json);
    } catch (e: any) {
      setErr(e?.message ?? "Unknown error");
      setDemo(null);
    } finally {
      setLoading(false);
    }
  }

  async function downloadPdf() {
    if (!demo) return;

    const res = await fetch("/api/assessments/report.pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ assessmentId: demo.ids.assessmentId }),
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(txt || `PDF request failed (${res.status})`);
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `ProjectY_Assessment_${demo.ids.assessmentId}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  return (
    <div className="rounded-3xl border border-(--border) bg-white/70 p-6 shadow-md">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-[11px] tracking-[0.22em] text-(--muted)">LIVE DEMO</div>
          <div className="mt-2 text-[15px] font-medium">Generate a real assessment from your engine + DB.</div>
          <div className="mt-1 text-[13px] text-(--muted)">This calls your /api/dev/demo endpoint and renders the output.</div>
        </div>

        <button
          onClick={runDemo}
          disabled={loading}
          className="h-11 shrink-0 rounded-full bg-(--accent) px-5 text-[13px] font-medium text-white shadow-md hover:brightness-105 active:brightness-95 disabled:opacity-60"
        >
          {loading ? "Running…" : "Run demo assessment"}
        </button>
      </div>

      {err ? (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700">
          {err}
        </div>
      ) : null}

      {demo ? (
        <div className="mt-6">
          <div className="rounded-2xl border border-(--border) bg-white p-5">
            <div className="text-[11px] tracking-[0.22em] text-(--muted)">ASSESSMENT RESULT</div>

            <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="text-[44px] leading-none tracking-[-0.03em]" style={{ fontFamily: "var(--font-serif)" }}>
                  {demo.result.readinessScore}
                  <span className="ml-2 text-[16px] text-(--muted)">/100</span>
                </div>
                <div className="mt-2 text-[14px] font-medium">{headline?.title}</div>
                <div className="mt-1 text-[13px] text-(--muted)">{headline?.sub}</div>
              </div>

              <div className="text-right">
                <div className="text-[12px] text-(--muted)">Indicative LTV</div>
                <div className="mt-1 text-[26px] tracking-[-0.02em]" style={{ fontFamily: "var(--font-serif)" }}>
                  {demo.result.ltv.min}–{demo.result.ltv.max}%
                </div>

                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => downloadPdf().catch((e) => setErr(e?.message ?? "PDF error"))}
                    className="h-10 rounded-full border border-(--border) bg-white px-4 text-[13px] font-medium hover:bg-zinc-50"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-(--border) bg-white/70 p-4">
                <div className="text-[12px] font-medium">Risk flags</div>
                {demo.result.riskFlags?.length ? (
                  <ul className="mt-2 space-y-1 text-[13px] text-(--muted)">
                    {demo.result.riskFlags.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-2 text-[13px] text-(--muted)">None</div>
                )}
              </div>

              <div className="rounded-2xl border border-(--border) bg-white/70 p-4">
                <div className="text-[12px] font-medium">Recommended path</div>
                <div className="mt-2 text-[13px] text-(--muted)">{demo.result.recommendedPath}</div>

                <div className="mt-4 text-[12px] text-(--muted)">
                  Assessment ID: <span className="text-(--text)">{demo.ids.assessmentId}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
