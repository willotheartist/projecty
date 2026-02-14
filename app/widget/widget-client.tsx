// app/widget/widget-client.tsx
"use client";

import { useState } from "react";

/*
  Waaza Embeddable Widget
  -----------------------
  Lightweight financing readiness preview.
  Renders inside an iframe on any broker website.
  
  Fields: Purchase price, Year built, Liquidity, Residency, Income type
  Output: Readiness score preview + CTA to full assessment
*/

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentHover: "#f0ec5a",
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

type WidgetState = "form" | "loading" | "result";

interface WidgetResult {
  readinessScore: number;
  tier: string;
  ltvEstimate: { min: number; max: number };
  recommendedPath: string;
  riskFlags: Array<{ code: string; severity: string }>;
}

function tierColor(tier: string) {
  const t = tier.toLowerCase();
  if (t.includes("ready") || t === "finance_ready") return C.green;
  if (t.includes("conditional")) return C.amber;
  return C.red;
}

function tierLabel(tier: string) {
  const t = tier.toUpperCase();
  if (t === "FINANCE_READY") return "Finance Ready";
  if (t === "CONDITIONAL") return "Conditional";
  return "High Complexity";
}

function tierBg(tier: string) {
  const t = tier.toLowerCase();
  if (t.includes("ready") || t === "finance_ready") return "#dcfce7";
  if (t.includes("conditional")) return "#fef3c7";
  return "#fef2f2";
}

export default function WidgetClient() {
  const [state, setState] = useState<WidgetState>("form");
  const [result, setResult] = useState<WidgetResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Form fields
  const [price, setPrice] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [liquidity, setLiquidity] = useState("");
  const [residency, setResidency] = useState("");
  const [incomeType, setIncomeType] = useState("");

  // Read config from URL params
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const apiKey = params?.get("key") || "";
  const origin = params?.get("origin") || "https://www.waaza.co";
  const theme = params?.get("theme") || "light";

  const bgColor = theme === "dark" ? "#1a1a1a" : C.bg;
  const cardColor = theme === "dark" ? "#2a2a2a" : C.white;
  const textColor = theme === "dark" ? "#e5e7eb" : C.black;
  const mutedColor = theme === "dark" ? "#9ca3af" : C.gray3;
  const borderColor = theme === "dark" ? "rgba(255,255,255,0.1)" : C.gray6;
  const inputBg = theme === "dark" ? "#333" : "#f9f8f5";

  async function runAssessment() {
    setError(null);

    const purchasePrice = Number(price.replace(/[^\d]/g, ""));
    const year = Number(yearBuilt);
    const liq = Number(liquidity.replace(/[^\d]/g, ""));

    if (!purchasePrice || purchasePrice <= 0) {
      setError("Enter a purchase price");
      return;
    }
    if (!year || year < 1950 || year > new Date().getFullYear() + 1) {
      setError("Enter a valid build year");
      return;
    }
    if (!liq || liq <= 0) {
      setError("Enter available liquidity");
      return;
    }
    if (!residency.trim()) {
      setError("Enter residency country");
      return;
    }
    if (!incomeType) {
      setError("Select income type");
      return;
    }

    setState("loading");

    try {
      // Use public API if key provided, otherwise use internal endpoint
      const endpoint = apiKey
        ? `${origin}/api/v1/assessments`
        : "/api/widget/assess";

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (apiKey) {
        headers["Authorization"] = `Bearer ${apiKey}`;
      }

      const body = apiKey
        ? {
            buyer: {
              name: "Widget Visitor",
              residency: residency.trim(),
              liquidityAvailable: liq,
              netWorthBand: "unknown",
              incomeType: incomeType,
              ownershipIntent: "unsure",
            },
            vessel: {
              purchasePrice,
              yearBuilt: year,
              usageType: "private",
            },
          }
        : {
            purchasePrice,
            yearBuilt: year,
            liquidityAvailable: liq,
            residency: residency.trim(),
            incomeType,
          };

      const res = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok || (data.error && !data.readinessScore)) {
        throw new Error(data.error || "Assessment failed");
      }

      setResult({
        readinessScore: data.readinessScore,
        tier: data.tier,
        ltvEstimate: data.ltvEstimate || data.ltv || { min: 0, max: 0 },
        recommendedPath: data.recommendedPath || "",
        riskFlags: data.riskFlags || [],
      });
      setState("result");

      // Notify parent frame
      if (window.parent !== window) {
        window.parent.postMessage(
          {
            type: "waaza:result",
            score: data.readinessScore,
            tier: data.tier,
          },
          "*"
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("form");
    }
  }

  function reset() {
    setState("form");
    setResult(null);
    setError(null);
  }

  const fullAssessmentUrl = `${origin}/wizard`;

    return (
    <div
      style={{
        minHeight: "100vh",
        background: bgColor,
        padding: 16,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: textColor,
      }}
    >
      <style>{`
        .wdg-input:focus, .wdg-select:focus { outline: none; border-color: rgba(255,248,108,0.7) !important; box-shadow: 0 0 0 4px rgba(255,248,108,0.15); }
      `}</style>
      <div
          style={{
            maxWidth: 420,
            margin: "0 auto",
            background: cardColor,
            borderRadius: 20,
            overflow: "hidden",
            border: `1px solid ${borderColor}`,
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: `1px solid ${borderColor}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: -0.3,
                  color: textColor,
                }}
              >
                Financing Readiness
              </div>
              <div style={{ fontSize: 12, color: mutedColor, marginTop: 2 }}>
                Quick assessment preview
              </div>
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: mutedColor,
                opacity: 0.6,
              }}
            >
              Powered by Waaza
            </div>
          </div>

          <div style={{ padding: "20px 20px 24px" }}>
            {state === "form" && (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {/* Purchase Price */}
                  <div>
                    <label style={labelStyle(mutedColor)}>Purchase Price (€)</label>
                    <input
                      inputMode="numeric"
                      placeholder="e.g. 3,500,000"
                      value={price}
                      onChange={(e) => setPrice(formatNum(e.target.value))}
                      style={inputStyle(inputBg, borderColor, textColor)}
                    />
                  </div>

                  {/* Year Built */}
                  <div>
                    <label style={labelStyle(mutedColor)}>Year Built</label>
                    <input
                      inputMode="numeric"
                      placeholder="e.g. 2019"
                      value={yearBuilt}
                      onChange={(e) => setYearBuilt(e.target.value.replace(/[^\d]/g, "").slice(0, 4))}
                      style={inputStyle(inputBg, borderColor, textColor)}
                    />
                  </div>

                  {/* Liquidity */}
                  <div>
                    <label style={labelStyle(mutedColor)}>Available Liquidity (€)</label>
                    <input
                      inputMode="numeric"
                      placeholder="e.g. 1,500,000"
                      value={liquidity}
                      onChange={(e) => setLiquidity(formatNum(e.target.value))}
                      style={inputStyle(inputBg, borderColor, textColor)}
                    />
                  </div>

                  {/* Residency */}
                  <div>
                    <label style={labelStyle(mutedColor)}>Country of Residency</label>
                    <input
                      placeholder="e.g. United Kingdom"
                      value={residency}
                      onChange={(e) => setResidency(e.target.value)}
                      style={inputStyle(inputBg, borderColor, textColor)}
                    />
                  </div>

                  {/* Income Type */}
                  <div>
                    <label style={labelStyle(mutedColor)}>Income Type</label>
                    <select
                      value={incomeType}
                      onChange={(e) => setIncomeType(e.target.value)}
                      style={{
                        ...inputStyle(inputBg, borderColor, textColor),
                        cursor: "pointer",
                      }}
                    >
                      <option value="">Select…</option>
                      <option value="salary">Salary</option>
                      <option value="business">Business owner</option>
                      <option value="passive">Investments / dividends</option>
                      <option value="mixed">Mixed</option>
                    </select>
                  </div>
                </div>

                {error && (
                  <div
                    style={{
                      marginTop: 12,
                      padding: "8px 12px",
                      borderRadius: 8,
                      background: "#fef2f2",
                      color: C.red,
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    {error}
                  </div>
                )}

                <button
                  onClick={runAssessment}
                  style={{
                    width: "100%",
                    marginTop: 18,
                    padding: "14px 20px",
                    background: C.accent,
                    color: C.black,
                    fontSize: 15,
                    fontWeight: 700,
                    borderRadius: 12,
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    letterSpacing: -0.2,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = C.accentHover;
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = C.accent;
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  }}
                >
                  Check Readiness →
                </button>
              </>
            )}

            {state === "loading" && (
              <div
                style={{
                  textAlign: "center",
                  padding: "48px 0",
                  color: mutedColor,
                  fontSize: 14,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    border: `3px solid ${borderColor}`,
                    borderTopColor: C.accent,
                    borderRadius: "50%",
                    margin: "0 auto 16px",
                    animation: "spin 0.8s linear infinite",
                  }}
                />
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                Calculating readiness…
              </div>
            )}

            {state === "result" && result && (
              <>
                {/* Score */}
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                  <div
                    style={{
                      fontSize: 64,
                      fontWeight: 300,
                      lineHeight: 1,
                      color: tierColor(result.tier),
                      letterSpacing: -2,
                    }}
                  >
                    {result.readinessScore}
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      marginTop: 8,
                      padding: "4px 14px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 700,
                      background: tierBg(result.tier),
                      color: tierColor(result.tier),
                    }}
                  >
                    {tierLabel(result.tier)}
                  </div>
                </div>

                {/* Key metrics */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: 12,
                      background: inputBg,
                      border: `1px solid ${borderColor}`,
                    }}
                  >
                    <div style={{ fontSize: 11, color: mutedColor, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>
                      LTV Band
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4, color: textColor }}>
                      {result.ltvEstimate.min}–{result.ltvEstimate.max}%
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: 12,
                      background: inputBg,
                      border: `1px solid ${borderColor}`,
                    }}
                  >
                    <div style={{ fontSize: 11, color: mutedColor, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>
                      Risk Flags
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4, color: textColor }}>
                      {result.riskFlags.length}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={fullAssessmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "14px 20px",
                    background: C.black,
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 700,
                    borderRadius: 12,
                    border: "none",
                    cursor: "pointer",
                    textAlign: "center",
                    textDecoration: "none",
                    letterSpacing: -0.2,
                    transition: "all 0.2s",
                  }}
                >
                  Get Full Assessment →
                </a>

                <button
                  onClick={reset}
                  style={{
                    width: "100%",
                    marginTop: 10,
                    padding: "10px",
                    background: "transparent",
                    border: `1px solid ${borderColor}`,
                    borderRadius: 10,
                    color: mutedColor,
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Run another
                </button>
              </>
            )}
          </div>
        </div>
      
    </div>
  );
}

/* ── Style helpers ── */

function labelStyle(color: string): React.CSSProperties {
  return {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color,
    marginBottom: 5,
    letterSpacing: 0.3,
  };
}

function inputStyle(bg: string, border: string, color: string): React.CSSProperties {
  return {
    width: "100%",
    height: 44,
    padding: "0 14px",
    fontSize: 14,
    border: `1px solid ${border}`,
    borderRadius: 10,
    background: bg,
    color,
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };
}

function formatNum(v: string) {
  const cleaned = v.replace(/[^\d]/g, "");
  if (!cleaned) return "";
  return Number(cleaned).toLocaleString("en-GB");
}