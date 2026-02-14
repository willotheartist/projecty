// app/widget/findaly/findaly-widget.tsx
"use client";

import { useState, useEffect, useMemo, useCallback } from "react";

/*
  Waaza × Findaly Inline Financing Widget
  ----------------------------------------
  Pretto-style calculator for boat listing pages.
  
  Embed on Findaly:
  <div id="waaza-finance" data-price="685000" data-year="2019" data-usage="private"></div>
  <script src="https://www.waaza.co/widget/findaly.js"></script>
*/

/* ── Rate model (simplified — mirrors lib/engine/rateModel.ts) ── */

function getIndicativeRate(termYears: number, ltvPct: number): number {
  // Base rates by term
  let base = 3.8;
  if (termYears <= 10) base = 3.2;
  else if (termYears <= 15) base = 3.5;
  else if (termYears <= 20) base = 3.8;
  else base = 4.1;

  // LTV adjustment
  if (ltvPct > 70) base += 0.6;
  else if (ltvPct > 60) base += 0.3;
  else if (ltvPct > 50) base += 0.1;

  return Math.round(base * 10) / 10;
}

function calcMonthlyPayment(principal: number, annualRate: number, termYears: number): number {
  if (principal <= 0 || termYears <= 0) return 0;
  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

/* ── Formatting ── */

function fmt(n: number): string {
  return new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(Math.round(n));
}

function parseMoney(v: string): number {
  const cleaned = v.replace(/[^\d]/g, "");
  return cleaned ? Number(cleaned) : 0;
}

/* ── Component ── */

const TERM_STEPS = [10, 15, 20, 25];
const DEPOSIT_PCTS = [10, 20, 30, 40, 50, 60];

export default function FindalyWidget() {
  // Read config from URL params (passed by embed script or direct load)
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const initialPrice = Number(params?.get("price") || 0);
  const initialYear = Number(params?.get("year") || 2020);
  const initialUsage = params?.get("usage") || "private";

  const [price, setPrice] = useState(initialPrice || 685000);
  const [priceInput, setPriceInput] = useState(fmt(initialPrice || 685000));
  const [depositPct, setDepositPct] = useState(30);
  const [termYears, setTermYears] = useState(20);
  const [readiness, setReadiness] = useState<{ score: number; tier: string } | null>(null);
  const [loadingScore, setLoadingScore] = useState(false);

  // Derived calculations
  const deposit = useMemo(() => Math.round(price * depositPct / 100), [price, depositPct]);
  const loanAmount = useMemo(() => Math.max(price - deposit, 0), [price, deposit]);
  const ltvPct = useMemo(() => price > 0 ? Math.round((loanAmount / price) * 100) : 0, [loanAmount, price]);
  const rate = useMemo(() => getIndicativeRate(termYears, ltvPct), [termYears, ltvPct]);
  const monthly = useMemo(() => calcMonthlyPayment(loanAmount, rate, termYears), [loanAmount, rate, termYears]);
  const totalCost = useMemo(() => monthly * termYears * 12, [monthly, termYears]);
  const totalInterest = useMemo(() => Math.max(totalCost - loanAmount, 0), [totalCost, loanAmount]);

  // Fetch readiness score when inputs change (debounced)
  const fetchScore = useCallback(async () => {
    if (price <= 0 || deposit <= 0) return;
    setLoadingScore(true);
    try {
      const res = await fetch("/api/widget/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          purchasePrice: price,
          yearBuilt: initialYear,
          liquidityAvailable: deposit,
          residency: "Unknown",
          incomeType: "mixed",
        }),
      });
      const data = await res.json();
      if (data.readinessScore != null) {
        setReadiness({ score: data.readinessScore, tier: data.tier });
      }
    } catch {
      // Silent fail for widget
    } finally {
      setLoadingScore(false);
    }
  }, [price, deposit, initialYear]);

  useEffect(() => {
    const t = setTimeout(fetchScore, 800);
    return () => clearTimeout(t);
  }, [fetchScore]);

  // Handle price input
  function onPriceChange(v: string) {
    setPriceInput(v);
    const n = parseMoney(v);
    if (n > 0) setPrice(n);
  }

  function onPriceBlur() {
    setPriceInput(fmt(price));
  }

  // Term slider position
  const termIndex = TERM_STEPS.indexOf(termYears);
  const termPct = termIndex >= 0 ? (termIndex / (TERM_STEPS.length - 1)) * 100 : 50;

  // Full assessment URL (pre-fills data)
  const wizardUrl = `/wizard?price=${price}&year=${initialYear}&usage=${initialUsage}&liquidity=${deposit}`;

  return (
    <div style={{ 
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      color: "#1a1a1a",
      padding: "0 16px 16px",
    }}>
      {/* Google Fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{
        maxWidth: 560,
        margin: "0 auto",
        background: "#ffffff",
        borderRadius: 16,
        border: "1px solid #e8e8e4",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          padding: "18px 24px",
          borderBottom: "1px solid #f0efeb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.3, color: "#1a1a1a" }}>
              How much would this boat cost me?
            </div>
            <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 3 }}>
              thanks to our partner <span style={{ fontWeight: 600, color: "#1a1a1a" }}>Waaza</span>
            </div>
          </div>
          {readiness && !loadingScore && (
            <div style={{
              padding: "6px 12px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 700,
              background: readiness.score >= 80 ? "#dcfce7" : readiness.score >= 50 ? "#fef3c7" : "#fef2f2",
              color: readiness.score >= 80 ? "#16a34a" : readiness.score >= 50 ? "#d97706" : "#dc2626",
            }}>
              Score: {readiness.score}
            </div>
          )}
        </div>

        <div style={{ padding: "20px 24px 24px" }}>
          {/* Price + Deposit row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
            {/* Price */}
            <div>
              <label style={labelStyle}>Price of vessel</label>
              <div style={inputWrapStyle}>
                <span style={prefixStyle}>€</span>
                <input
                  value={priceInput}
                  onChange={(e) => onPriceChange(e.target.value)}
                  onBlur={onPriceBlur}
                  inputMode="numeric"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Deposit */}
            <div>
              <label style={labelStyle}>
                Deposit
                <span style={{ fontWeight: 400, color: "#9ca3af", marginLeft: 6 }}>
                  ({depositPct}% recommended)
                </span>
              </label>
              <div style={inputWrapStyle}>
                <span style={prefixStyle}>€</span>
                <input
                  value={fmt(deposit)}
                  readOnly
                  style={{ ...inputStyle, color: "#6b7280" }}
                />
              </div>
            </div>
          </div>

          {/* Deposit % selector */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {DEPOSIT_PCTS.map((pct) => (
                <button
                  key={pct}
                  onClick={() => setDepositPct(pct)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 8,
                    border: depositPct === pct ? "2px solid #FFF86C" : "1px solid #e8e8e4",
                    background: depositPct === pct ? "#fffde0" : "#f9f8f5",
                    fontSize: 13,
                    fontWeight: depositPct === pct ? 700 : 500,
                    color: depositPct === pct ? "#1a1a1a" : "#6b7280",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.15s",
                  }}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* Loan term slider */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Loan term</label>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>
                Rate {rate}%
              </span>
            </div>

            {/* Custom slider track */}
            <div style={{ position: "relative", height: 40, userSelect: "none" }}>
              {/* Track background */}
              <div style={{
                position: "absolute",
                top: 16,
                left: 0,
                right: 0,
                height: 6,
                borderRadius: 3,
                background: "#e8e8e4",
              }} />
              {/* Track filled */}
              <div style={{
                position: "absolute",
                top: 16,
                left: 0,
                width: `${termPct}%`,
                height: 6,
                borderRadius: 3,
                background: "linear-gradient(90deg, #FFF86C, #e8e060)",
              }} />
              {/* Native range input (invisible, on top for interaction) */}
              <input
                type="range"
                min={0}
                max={TERM_STEPS.length - 1}
                step={1}
                value={termIndex >= 0 ? termIndex : 2}
                onChange={(e) => setTermYears(TERM_STEPS[Number(e.target.value)])}
                style={{
                  position: "absolute",
                  top: 6,
                  left: -2,
                  width: "calc(100% + 4px)",
                  height: 28,
                  opacity: 0,
                  cursor: "pointer",
                  zIndex: 2,
                }}
              />
              {/* Custom thumb */}
              <div style={{
                position: "absolute",
                top: 9,
                left: `calc(${termPct}% - 10px)`,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#FFF86C",
                border: "3px solid #1a1a1a",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                pointerEvents: "none",
                transition: "left 0.15s ease",
              }} />
            </div>

            {/* Term labels */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
              {TERM_STEPS.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 12,
                    fontWeight: termYears === t ? 700 : 400,
                    color: termYears === t ? "#1a1a1a" : "#9ca3af",
                    transition: "all 0.15s",
                  }}
                >
                  {t} years
                </span>
              ))}
            </div>
          </div>

          {/* Results bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            background: "#f9f8f5",
            borderRadius: 12,
            border: "1px solid #e8e8e4",
            marginBottom: 16,
          }}>
            <div>
              <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -1, color: "#1a1a1a" }}>
                {fmt(monthly)} €<span style={{ fontSize: 15, fontWeight: 500, color: "#6b7280" }}>/month</span>
              </div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>
                Total interest: €{fmt(totalInterest)} · LTV: {ltvPct}%
              </div>
            </div>
            <a
              href={wizardUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 20px",
                background: "#FFF86C",
                color: "#1a1a1a",
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
                transition: "all 0.15s",
                flexShrink: 0,
              }}
            >
              Refine my project
            </a>
          </div>

          {/* Breakdown (collapsible feel) */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 10,
          }}>
            <MiniStat label="Loan amount" value={`€${fmt(loanAmount)}`} />
            <MiniStat label="Term" value={`${termYears} years`} />
            <MiniStat label="Rate" value={`${rate}% fixed`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      padding: "10px 12px",
      borderRadius: 10,
      background: "#f9f8f5",
      border: "1px solid #f0efeb",
    }}>
      <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500, marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>{value}</div>
    </div>
  );
}

/* ── Shared styles ── */

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#4b5563",
  marginBottom: 6,
};

const inputWrapStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

const prefixStyle: React.CSSProperties = {
  position: "absolute",
  left: 12,
  fontSize: 14,
  fontWeight: 500,
  color: "#9ca3af",
  pointerEvents: "none",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: 44,
  paddingLeft: 28,
  paddingRight: 14,
  fontSize: 15,
  fontWeight: 600,
  fontFamily: "inherit",
  border: "1px solid #e8e8e4",
  borderRadius: 10,
  background: "#f9f8f5",
  color: "#1a1a1a",
  boxSizing: "border-box",
  transition: "border-color 0.15s",
};