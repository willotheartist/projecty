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

type Errorish = { error?: unknown; message?: unknown };

async function readJsonSafe(res: Response): Promise<unknown | null> {
  const text = await res.text().catch(() => "");
  if (!text) return null;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return null;
  }
}

function isErrorish(v: unknown): v is Errorish {
  return typeof v === "object" && v !== null;
}

function getErrorMessage(v: unknown): string | null {
  if (!isErrorish(v)) return null;

  const err = (v as Errorish).error;
  const msg = (v as Errorish).message;

  if (typeof err === "string" && err.trim()) return err;
  if (typeof msg === "string" && msg.trim()) return msg;

  return null;
}

function isDemoResponse(v: unknown): v is DemoResponse {
  if (typeof v !== "object" || v === null) return false;
  const o = v as Partial<DemoResponse>;
  return o.ok === true && typeof o.ids?.assessmentId === "string" && typeof o.result?.readinessScore === "number";
}

export default function DemoPanel() {
  const [loading, setLoading] = useState(false);
  const [demo, setDemo] = useState<DemoResponse | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const headline = useMemo(() => {
    if (!demo) return null;
    const tier = String(demo.result.tier || "").toUpperCase();
    if (tier === "READY")
      return {
        title: "Finance readiness: ready",
        sub: "Strong profile. Expect broad lender appetite.",
      };
    if (tier === "CONDITIONAL")
      return {
        title: "Finance readiness: conditional",
        sub: "Viable, but expect conditions and tighter filters.",
      };
    if (tier === "HIGH_RISK")
      return {
        title: "Finance readiness: high risk",
        sub: "Expect limited appetite. Mitigation needed before proceeding.",
      };
    return { title: `Finance readiness: ${tier.toLowerCase()}`, sub: "Assessment generated." };
  }, [demo]);

  async function runDemo() {
    setLoading(true);
    setErr(null);

    try {
      const res = await fetch("/api/dev/demo?mode=create", {
        method: "GET",
        cache: "no-store",
      });

      const jsonUnknown = await readJsonSafe(res);

      if (!res.ok) {
        const msg = getErrorMessage(jsonUnknown) ?? `Request failed (${res.status})`;
        throw new Error(msg);
      }

      if (!isDemoResponse(jsonUnknown)) {
        const msg = getErrorMessage(jsonUnknown) ?? "Unexpected response shape";
        throw new Error(msg);
      }

      setDemo(jsonUnknown);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      setErr(msg);
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
    a.download = `Waaza_Assessment_${demo.ids.assessmentId}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  return (
    <div
      style={{
        borderRadius: 20,
        border: "1px solid rgba(0,0,0,0.10)",
        background: "#ffffff",
        padding: 24,
        boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" as const }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", color: "rgba(0,0,0,0.46)", textTransform: "uppercase" as const }}>
            LIVE DEMO
          </div>
          <div style={{ marginTop: 8, fontSize: 15, fontWeight: 500 }}>Generate a real assessment from your engine + DB.</div>
          <div style={{ marginTop: 4, fontSize: 13, color: "rgba(0,0,0,0.62)" }}>This calls your /api/dev/demo endpoint and renders the output.</div>
        </div>

        <button
          onClick={runDemo}
          disabled={loading}
          style={{
            height: 44,
            flexShrink: 0,
            borderRadius: 10,
            background: "#FFF86C",
            padding: "0 20px",
            fontSize: 14,
            fontWeight: 600,
            color: "#0a0a0a",
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Running…" : "Run demo assessment"}
        </button>
      </div>

      {err ? (
        <div
          style={{
            marginTop: 20,
            borderRadius: 14,
            border: "1px solid rgba(210,60,60,0.2)",
            background: "rgba(210,60,60,0.05)",
            padding: "12px 16px",
            fontSize: 13,
            color: "rgba(210,60,60,0.9)",
          }}
        >
          {err}
        </div>
      ) : null}

      {demo ? (
        <div style={{ marginTop: 24 }}>
          <div
            style={{
              borderRadius: 16,
              border: "1px solid rgba(0,0,0,0.10)",
              background: "#f9f8f5",
              padding: 20,
            }}
          >
            <div style={{ fontSize: 11, letterSpacing: "0.22em", color: "rgba(0,0,0,0.46)", textTransform: "uppercase" as const }}>
              ASSESSMENT RESULT
            </div>

            <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap" as const, alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif), 'Instrument Serif', serif", fontSize: 44, lineHeight: 1, letterSpacing: "-0.03em" }}>
                  {demo.result.readinessScore}
                  <span style={{ marginLeft: 8, fontSize: 16, color: "rgba(0,0,0,0.46)" }}>/100</span>
                </div>
                <div
                  style={{
                    marginTop: 8,
                    display: "inline-block",
                    padding: "4px 12px",
                    background: "#FFF86C",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0a0a0a",
                  }}
                >
                  {headline?.title}
                </div>
                <div style={{ marginTop: 6, fontSize: 13, color: "rgba(0,0,0,0.62)" }}>{headline?.sub}</div>
              </div>

              <div style={{ textAlign: "right" as const }}>
                <div style={{ fontSize: 12, color: "rgba(0,0,0,0.46)" }}>Indicative LTV</div>
                <div style={{ marginTop: 4, fontFamily: "var(--font-serif), 'Instrument Serif', serif", fontSize: 26, letterSpacing: "-0.02em" }}>
                  {demo.result.ltv.min}–{demo.result.ltv.max}%
                </div>

                <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end" }}>
                  <button
                    onClick={() => downloadPdf().catch((e: unknown) => setErr(e instanceof Error ? e.message : "PDF error"))}
                    style={{
                      height: 40,
                      borderRadius: 10,
                      border: "1px solid rgba(0,0,0,0.12)",
                      background: "#ffffff",
                      padding: "0 16px",
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ borderRadius: 14, border: "1px solid rgba(0,0,0,0.10)", background: "#ffffff", padding: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 500 }}>Risk flags</div>
                {demo.result.riskFlags?.length ? (
                  <div style={{ marginTop: 8 }}>
                    {demo.result.riskFlags.map((f, i) => (
                      <div key={i} style={{ fontSize: 13, color: "rgba(0,0,0,0.62)", marginBottom: 4 }}>
                        • {f}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ marginTop: 8, fontSize: 13, color: "rgba(0,0,0,0.46)" }}>None</div>
                )}
              </div>

              <div style={{ borderRadius: 14, border: "1px solid rgba(0,0,0,0.10)", background: "#ffffff", padding: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 500 }}>Recommended path</div>
                <div style={{ marginTop: 8, fontSize: 13, color: "rgba(0,0,0,0.62)" }}>{demo.result.recommendedPath}</div>

                <div style={{ marginTop: 16, fontSize: 12, color: "rgba(0,0,0,0.46)" }}>
                  Assessment ID: <span style={{ color: "rgba(0,0,0,0.92)" }}>{demo.ids.assessmentId}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
