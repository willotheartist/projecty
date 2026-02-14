// app/widget/findaly/findaly-widget.tsx
"use client";

import { useState, useEffect, useMemo, useCallback } from "react";

/*
  Waaza × Findaly — Compact Financing Widget
  Pretto-density: everything visible without scrolling.
*/

function getIndicativeRate(termYears: number, ltvPct: number): number {
  let base = 3.8;
  if (termYears <= 10) base = 3.2;
  else if (termYears <= 15) base = 3.5;
  else if (termYears <= 20) base = 3.8;
  else base = 4.1;
  if (ltvPct > 70) base += 0.6;
  else if (ltvPct > 60) base += 0.3;
  else if (ltvPct > 50) base += 0.1;
  return Math.round(base * 10) / 10;
}

function calcMonthly(principal: number, annualRate: number, termYears: number): number {
  if (principal <= 0 || termYears <= 0) return 0;
  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function fmt(n: number): string {
  return new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(Math.round(n));
}

function parseMoney(v: string): number {
  const c = v.replace(/[^\d]/g, "");
  return c ? Number(c) : 0;
}

const TERM_STEPS = [10, 15, 20, 25];

export default function FindalyWidget() {
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const initialPrice = Number(params?.get("price") || 0);
  const initialYear = Number(params?.get("year") || 2020);
  const initialUsage = params?.get("usage") || "private";
  const currency = (params?.get("currency") || "EUR").toUpperCase();
  const country = params?.get("country") || "";

  const sym = currency === "GBP" ? "£" : currency === "USD" ? "$" : "€";

  const [price, setPrice] = useState(initialPrice || 685000);
  const [priceInput, setPriceInput] = useState(fmt(initialPrice || 685000));
  const [depositPct, setDepositPct] = useState(30);
  const [termYears, setTermYears] = useState(20);
  const [score, setScore] = useState<number | null>(null);
  const [loadingScore, setLoadingScore] = useState(false);

  const deposit = useMemo(() => Math.round(price * depositPct / 100), [price, depositPct]);
  const loan = useMemo(() => Math.max(price - deposit, 0), [price, deposit]);
  const ltvPct = useMemo(() => price > 0 ? Math.round((loan / price) * 100) : 0, [loan, price]);
  const rate = useMemo(() => getIndicativeRate(termYears, ltvPct), [termYears, ltvPct]);
  const monthly = useMemo(() => calcMonthly(loan, rate, termYears), [loan, rate, termYears]);

  const termIndex = TERM_STEPS.indexOf(termYears);
  const termPct = termIndex >= 0 ? (termIndex / (TERM_STEPS.length - 1)) * 100 : 50;

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
          residency: country || "Unknown",
          incomeType: "mixed",
        }),
      });
      const data = await res.json();
      if (data.readinessScore != null) setScore(data.readinessScore);
    } catch { /* silent */ } finally {
      setLoadingScore(false);
    }
  }, [price, deposit, initialYear, country]);

  useEffect(() => {
    const t = setTimeout(fetchScore, 800);
    return () => clearTimeout(t);
  }, [fetchScore]);

  function onPriceChange(v: string) {
    setPriceInput(v);
    const n = parseMoney(v);
    if (n > 0) setPrice(n);
  }

  const wizardUrl = `/wizard?price=${price}&year=${initialYear}&usage=${initialUsage}&liquidity=${deposit}`;

  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      color: "#1a1a1a",
      padding: "0 16px",
    }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{
        maxWidth: 480,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 14,
        border: "1px solid #e8e8e4",
        padding: "18px 22px 20px",
      }}>
        {/* Header row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: -0.2 }}>
              How much would this boat cost me?
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 1 }}>
              thanks to our partner <span style={{ fontWeight: 600, color: "#1a1a1a" }}>Waaza</span>
            </div>
          </div>
          {score !== null && !loadingScore && (
            <div style={{
              padding: "4px 10px",
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 700,
              background: score >= 80 ? "#dcfce7" : score >= 50 ? "#fef3c7" : "#fef2f2",
              color: score >= 80 ? "#16a34a" : score >= 50 ? "#d97706" : "#dc2626",
              whiteSpace: "nowrap",
            }}>
              Score: {score}
            </div>
          )}
        </div>

        {/* Price + Deposit row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <div>
            <label style={lbl}>Price of vessel</label>
            <div style={inputWrap}>
              <span style={pre}>{sym}</span>
              <input
                value={priceInput}
                onChange={(e) => onPriceChange(e.target.value)}
                onBlur={() => setPriceInput(fmt(price))}
                inputMode="numeric"
                style={inp}
              />
            </div>
          </div>
          <div>
            <label style={lbl}>
              Deposit <span style={{ fontWeight: 400, color: "#b0b0a8" }}>({depositPct}% recommended)</span>
            </label>
            <div style={inputWrap}>
              <span style={pre}>{sym}</span>
              <input value={fmt(deposit)} readOnly style={{ ...inp, color: "#6b7280" }} />
            </div>
          </div>
        </div>

        {/* Deposit % pills — single compact row */}
        <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
          {[10, 20, 30, 40, 50, 60].map((pct) => (
            <button
              key={pct}
              onClick={() => setDepositPct(pct)}
              style={{
                flex: 1,
                padding: "5px 0",
                borderRadius: 6,
                border: depositPct === pct ? "2px solid #FFF86C" : "1px solid #e8e8e4",
                background: depositPct === pct ? "#fffde0" : "transparent",
                fontSize: 12,
                fontWeight: depositPct === pct ? 700 : 500,
                color: depositPct === pct ? "#1a1a1a" : "#9ca3af",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.12s",
              }}
            >
              {pct}%
            </button>
          ))}
        </div>

        {/* Loan term — compact slider with rate */}
        <div style={{ marginBottom: 16 }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 8,
          }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#4b5563" }}>Loan term</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>Rate {rate}%</span>
          </div>

          {/* Slider */}
          <div style={{ position: "relative", height: 28, userSelect: "none" }}>
            <div style={{
              position: "absolute", top: 11, left: 0, right: 0,
              height: 5, borderRadius: 3, background: "#e8e8e4",
            }} />
            <div style={{
              position: "absolute", top: 11, left: 0,
              width: `${termPct}%`, height: 5, borderRadius: 3,
              background: "linear-gradient(90deg, #FFF86C, #e8e060)",
            }} />
            <input
              type="range" min={0} max={TERM_STEPS.length - 1} step={1}
              value={termIndex >= 0 ? termIndex : 2}
              onChange={(e) => setTermYears(TERM_STEPS[Number(e.target.value)])}
              style={{
                position: "absolute", top: 2, left: -2, width: "calc(100% + 4px)",
                height: 24, opacity: 0, cursor: "pointer", zIndex: 2,
              }}
            />
            <div style={{
              position: "absolute", top: 5, left: `calc(${termPct}% - 8px)`,
              width: 16, height: 16, borderRadius: "50%",
              background: "#FFF86C", border: "2.5px solid #1a1a1a",
              boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
              pointerEvents: "none", transition: "left 0.12s ease",
            }} />
          </div>

          {/* Labels */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
            {TERM_STEPS.map((t) => (
              <span key={t} style={{
                fontSize: 11,
                fontWeight: termYears === t ? 700 : 400,
                color: termYears === t ? "#1a1a1a" : "#b0b0a8",
              }}>
                {t} years
              </span>
            ))}
          </div>
        </div>

        {/* Result bar — monthly payment + CTA on one line */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          background: "#f9f8f5",
          borderRadius: 10,
          border: "1px solid #e8e8e4",
        }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.8, lineHeight: 1 }}>
              {fmt(monthly)} {sym}<span style={{ fontSize: 14, fontWeight: 500, color: "#6b7280" }}>/month</span>
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 3 }}>
              Total interest: {sym}{fmt(Math.max(monthly * termYears * 12 - loan, 0))} · LTV: {ltvPct}%
            </div>
          </div>
          <a
            href={wizardUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 16px",
              background: "#FFF86C",
              color: "#1a1a1a",
              fontSize: 13,
              fontWeight: 700,
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              whiteSpace: "nowrap",
              fontFamily: "inherit",
              flexShrink: 0,
            }}
          >
            Refine my project
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Compact styles ── */

const lbl: React.CSSProperties = {
  display: "block", fontSize: 12, fontWeight: 600, color: "#4b5563", marginBottom: 4,
};
const inputWrap: React.CSSProperties = {
  position: "relative", display: "flex", alignItems: "center",
};
const pre: React.CSSProperties = {
  position: "absolute", left: 10, fontSize: 13, fontWeight: 500, color: "#9ca3af", pointerEvents: "none",
};
const inp: React.CSSProperties = {
  width: "100%", height: 38, paddingLeft: 26, paddingRight: 10,
  fontSize: 14, fontWeight: 600, fontFamily: "inherit",
  border: "1px solid #e8e8e4", borderRadius: 8, background: "#f9f8f5",
  color: "#1a1a1a", boxSizing: "border-box",
};