// app/dashboard/[id]/assessment-detail.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentPale: "#fffde0",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  green: "#16a34a",
  amber: "#d97706",
  red: "#dc2626",
};

interface AssessmentData {
  id: string;
  ruleSetVersion: string;
  readinessScore: number | null;
  tier: string | null;
  ltvEstimateMin: number | null;
  ltvEstimateMax: number | null;
  riskFlags: string[];
  recommendedPath: string | null;
  createdAt: string;
  client: {
    name: string;
    residency: string;
    liquidityAvailable: number;
    netWorthBand: string;
    incomeType: string;
    ownershipIntent: string;
  };
  vessel: {
    purchasePrice: number;
    yearBuilt: number;
    usageType: string;
    intendedFlag: string | null;
  };
  runs: Array<{
    id: string;
    ruleSetVersion: string;
    engineVersion: string;
    hits: Array<{ ruleId: string; label: string; delta: number; detail: string }>;
    outputSnapshot: Record<string, unknown>;
    createdAt: string;
  }>;
}

function tierColor(tier: string | null) {
  if (!tier) return C.gray4;
  const t = tier.toLowerCase();
  if (t.includes("ready")) return C.green;
  if (t.includes("conditional")) return C.amber;
  return C.red;
}

function tierBg(tier: string | null) {
  if (!tier) return C.gray6;
  const t = tier.toLowerCase();
  if (t.includes("ready")) return "#dcfce7";
  if (t.includes("conditional")) return "#fef3c7";
  return "#fef2f2";
}

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AssessmentDetail({ assessmentId }: { assessmentId: string }) {
  const router = useRouter();
  const [data, setData] = useState<AssessmentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [pdfLoading, setPdfLoading] = useState(false);

  useEffect(() => {
    fetch(`/api/dashboard/${assessmentId}`)
      .then((r) => r.json())
      .then((d) => setData(d.assessment))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [assessmentId]);

  const downloadPdf = async () => {
    setPdfLoading(true);
    try {
      const res = await fetch("/api/assessments/report.pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assessmentId }),
      });
      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `waaza-report-${assessmentId.slice(0, 8)}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error("PDF download failed:", err);
    } finally {
      setPdfLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.gray4,
          fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
        }}
      >
        Loading assessment...
      </div>
    );
  }

  if (!data) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>Assessment not found</h2>
          <button
            onClick={() => router.push("/dashboard")}
            style={{
              padding: "10px 20px",
              background: C.black,
              color: "#fff",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              fontFamily: "inherit",
            }}
          >
            Back to dashboard
          </button>
        </div>
      </div>
    );
  }

  const latestRun = data.runs?.[0];
  const hits = (latestRun?.hits as AssessmentData["runs"][0]["hits"]) || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
        color: C.black,
      }}
    >
      <div style={{ padding: "32px clamp(24px,5vw,80px) 60px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Back + actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 32,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <button
              onClick={() => router.push("/dashboard")}
              style={{
                background: "none",
                border: "none",
                fontSize: 14,
                color: C.gray3,
                cursor: "pointer",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ← Back to dashboard
            </button>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={downloadPdf}
                disabled={pdfLoading}
                style={{
                  padding: "10px 20px",
                  background: C.black,
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  borderRadius: 10,
                  border: "none",
                  cursor: pdfLoading ? "not-allowed" : "pointer",
                  opacity: pdfLoading ? 0.6 : 1,
                  fontFamily: "inherit",
                }}
              >
                {pdfLoading ? "Generating..." : "Download PDF Report"}
              </button>
            </div>
          </div>

          {/* Top: Score hero + client/vessel info */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr",
              gap: 20,
              marginBottom: 20,
            }}
          >
            {/* Score card */}
            <div
              style={{
                background: C.white,
                borderRadius: 20,
                padding: "36px 32px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: C.gray4,
                  marginBottom: 16,
                }}
              >
                READINESS SCORE
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                  fontSize: 88,
                  lineHeight: 1,
                  color: tierColor(data.tier),
                  marginBottom: 12,
                }}
              >
                {data.readinessScore ?? "—"}
              </div>
              <div
                style={{
                  display: "inline-block",
                  padding: "5px 16px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 700,
                  background: tierBg(data.tier),
                  color: tierColor(data.tier),
                  marginBottom: 20,
                }}
              >
                {data.tier ?? "Unscored"}
              </div>
              <div
                style={{
                  borderTop: `1px solid ${C.gray6}`,
                  paddingTop: 16,
                  fontSize: 13,
                  color: C.gray3,
                }}
              >
                <div style={{ marginBottom: 8 }}>
                  <span style={{ color: C.gray4 }}>LTV Band</span>{" "}
                  <span style={{ fontWeight: 600, color: C.gray1 }}>
                    {data.ltvEstimateMin && data.ltvEstimateMax
                      ? `${data.ltvEstimateMin}–${data.ltvEstimateMax}%`
                      : "—"}
                  </span>
                </div>
                <div>
                  <span style={{ color: C.gray4 }}>Rule Version</span>{" "}
                  <span style={{ fontWeight: 500 }}>{data.ruleSetVersion}</span>
                </div>
              </div>
            </div>

            {/* Client + Vessel details */}
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 20 }}>
              <div style={{ background: C.white, borderRadius: 20, padding: "24px 28px" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: C.gray4,
                    marginBottom: 16,
                  }}
                >
                  BUYER PROFILE
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                  <DetailItem label="Name" value={data.client.name} />
                  <DetailItem label="Residency" value={data.client.residency} />
                  <DetailItem label="Liquidity" value={formatPrice(data.client.liquidityAvailable)} />
                  <DetailItem label="Net Worth" value={data.client.netWorthBand} />
                  <DetailItem label="Income" value={data.client.incomeType.toLowerCase()} />
                  <DetailItem
                    label="Ownership"
                    value={data.client.ownershipIntent.toLowerCase()}
                  />
                </div>
              </div>
              <div style={{ background: C.white, borderRadius: 20, padding: "24px 28px" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: C.gray4,
                    marginBottom: 16,
                  }}
                >
                  VESSEL
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16 }}>
                  <DetailItem label="Price" value={formatPrice(data.vessel.purchasePrice)} />
                  <DetailItem label="Year Built" value={String(data.vessel.yearBuilt)} />
                  <DetailItem label="Usage" value={data.vessel.usageType.toLowerCase()} />
                  <DetailItem label="Flag" value={data.vessel.intendedFlag || "—"} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row: Structuring + Risk Flags + Score Breakdown */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
            }}
          >
            {/* Recommended Path */}
            <div style={{ background: C.white, borderRadius: 20, padding: "24px 28px" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: C.gray4,
                  marginBottom: 16,
                }}
              >
                RECOMMENDED PATH
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                  fontSize: 22,
                  lineHeight: 1.3,
                  marginBottom: 12,
                }}
              >
                {data.recommendedPath || "No recommendation available"}
              </div>
              <div style={{ fontSize: 13, color: C.gray3, lineHeight: 1.6 }}>
                Based on buyer profile, vessel characteristics, and jurisdiction analysis.
              </div>
            </div>

            {/* Risk Flags */}
            <div style={{ background: C.white, borderRadius: 20, padding: "24px 28px" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: C.gray4,
                  marginBottom: 16,
                }}
              >
                RISK FLAGS ({(data.riskFlags as string[]).length})
              </div>
              {(data.riskFlags as Array<string | {code: string; severity: string}>).length === 0 ? (
                <p style={{ fontSize: 14, color: C.gray4 }}>No risk flags identified.</p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {(data.riskFlags as Array<string | {code: string; severity: string}>).map((flag, i) => {
                    const text = typeof flag === "string" ? flag : flag.code;
                    const severity = typeof flag === "string" ? null : flag.severity;
                    return (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: 10,
                          padding: "10px 14px",
                          borderRadius: 10,
                          background: severity === "HIGH" || severity === "CRITICAL" ? "#fef2f2" : "#fef3c7",
                          fontSize: 13,
                          color: severity === "HIGH" || severity === "CRITICAL" ? C.red : C.amber,
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <span style={{ flexShrink: 0, marginTop: 1 }}>⚠</span>
                          {text}
                        </div>
                        {severity && (
                          <span style={{ fontSize: 11, letterSpacing: 1, textTransform: "uppercase", opacity: 0.7 }}>
                            {severity}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Score Breakdown (from hits) */}
            <div style={{ background: C.white, borderRadius: 20, padding: "24px 28px" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: C.gray4,
                  marginBottom: 16,
                }}
              >
                SCORE BREAKDOWN
              </div>
              {hits.length === 0 ? (
                <p style={{ fontSize: 14, color: C.gray4 }}>
                  Detailed breakdown not available for this assessment.
                </p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {hits.map((hit, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px 0",
                        borderBottom:
                          i < hits.length - 1 ? `1px solid ${C.gray6}` : "none",
                        fontSize: 13,
                      }}
                    >
                      <span style={{ color: C.gray2 }}>{hit.label || hit.ruleId}</span>
                      <span
                        style={{
                          fontWeight: 600,
                          fontVariantNumeric: "tabular-nums",
                          color: hit.delta > 0 ? C.green : hit.delta < 0 ? C.red : C.gray4,
                        }}
                      >
                        {hit.delta > 0 ? "+" : ""}
                        {hit.delta}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Timestamp */}
          <div style={{ marginTop: 32, fontSize: 12, color: C.gray4, textAlign: "center" }}>
            Assessment created {formatDate(data.createdAt)}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: C.gray4, fontWeight: 500, marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: C.gray1, textTransform: "capitalize" }}>
        {value}
      </div>
    </div>
  );
}