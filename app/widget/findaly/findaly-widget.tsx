// app/widget/findaly/findaly-widget.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

/*
  Waaza × Findaly — Inline Financing Widget (no outer card)
  - Full-width, no grey box, no shadows
  - No "score"
  - Deposit is editable; % is derived live
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

  // Price
  const [price, setPrice] = useState(initialPrice || 685000);
  const [priceInput, setPriceInput] = useState(fmt(initialPrice || 685000));

  // Deposit (editable)
  const defaultDeposit = Math.round((initialPrice || 685000) * 0.3);
  const [deposit, setDeposit] = useState(defaultDeposit);
  const [depositInput, setDepositInput] = useState(fmt(defaultDeposit));

  const [termYears, setTermYears] = useState(20);

  // Keep inputs formatted when external params change (rare, but safe)
  useEffect(() => {
    setPriceInput(fmt(price));
  }, [price]);

  // Derived
  const loan = useMemo(() => Math.max(price - deposit, 0), [price, deposit]);
  const depositPct = useMemo(() => {
    if (price <= 0) return 0;
    return Math.max(0, Math.min(100, Math.round((deposit / price) * 100)));
  }, [deposit, price]);

  const ltvPct = useMemo(() => (price > 0 ? Math.round((loan / price) * 100) : 0), [loan, price]);
  const rate = useMemo(() => getIndicativeRate(termYears, ltvPct), [termYears, ltvPct]);
  const monthly = useMemo(() => calcMonthly(loan, rate, termYears), [loan, rate, termYears]);

  const termIndex = TERM_STEPS.indexOf(termYears);
  const termPct = termIndex >= 0 ? (termIndex / (TERM_STEPS.length - 1)) * 100 : 50;

  function onPriceChange(v: string) {
    setPriceInput(v);
    const n = parseMoney(v);
    if (n > 0) setPrice(n);
  }

  function onDepositChange(v: string) {
    setDepositInput(v);
    const n = parseMoney(v);
    setDeposit(Math.max(0, Math.min(price, n)));
  }

  function onDepositBlur() {
    // clamp + reformat on blur
    const n = Math.max(0, Math.min(price, deposit));
    setDeposit(n);
    setDepositInput(fmt(n));
  }

  const wizardUrl =
    `/wizard?price=${price}` +
    `&year=${initialYear}` +
    `&usage=${encodeURIComponent(initialUsage)}` +
    `&liquidity=${deposit}` +
    `&country=${encodeURIComponent(country || "")}`;

  // Inline, no “outer card” styles.
  return (
    <div
      style={{
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#1a1a1a",
        width: "100%",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "flex-start",
          marginBottom: 14,
        }}
      >
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: -0.2 }}>
            How much would this boat cost me?
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
            powered by <span style={{ fontWeight: 700, color: "#1a1a1a" }}>Waaza</span>
          </div>
        </div>

        {/* Small rate badge (optional, compact, no score) */}
        <div
          style={{
            padding: "6px 10px",
            borderRadius: 10,
            fontSize: 12,
            fontWeight: 800,
            background: "#fffde0",
            border: "1px solid rgba(255,248,108,0.65)",
            color: "#0a0a0a",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
        >
          Rate {rate}%
        </div>
      </div>

      {/* Inputs row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginBottom: 14,
        }}
      >
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
            Deposit{" "}
            <span style={{ fontWeight: 500, color: "#9ca3af" }}>
              ({depositPct}% of price)
            </span>
          </label>
          <div style={inputWrap}>
            <span style={pre}>{sym}</span>
            <input
              value={depositInput}
              onChange={(e) => onDepositChange(e.target.value)}
              onBlur={onDepositBlur}
              inputMode="numeric"
              style={inp}
            />
          </div>
        </div>
      </div>

      {/* Term slider */}
      <div style={{ marginBottom: 14 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 8,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, color: "#4b5563" }}>Loan term</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>
            {termYears} years
          </span>
        </div>

        <div style={{ position: "relative", height: 28, userSelect: "none" }}>
          <div
            style={{
              position: "absolute",
              top: 11,
              left: 0,
              right: 0,
              height: 5,
              borderRadius: 3,
              background: "#e8e8e4",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 11,
              left: 0,
              width: `${termPct}%`,
              height: 5,
              borderRadius: 3,
              background: "linear-gradient(90deg, #FFF86C, #e8e060)",
            }}
          />
          <input
            type="range"
            min={0}
            max={TERM_STEPS.length - 1}
            step={1}
            value={termIndex >= 0 ? termIndex : 2}
            onChange={(e) => setTermYears(TERM_STEPS[Number(e.target.value)])}
            style={{
              position: "absolute",
              top: 2,
              left: -2,
              width: "calc(100% + 4px)",
              height: 24,
              opacity: 0,
              cursor: "pointer",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 5,
              left: `calc(${termPct}% - 8px)`,
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#FFF86C",
              border: "2.5px solid #1a1a1a",
              boxShadow: "none", // <- no shadow
              pointerEvents: "none",
              transition: "left 0.12s ease",
            }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
          {TERM_STEPS.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 11,
                fontWeight: termYears === t ? 800 : 500,
                color: termYears === t ? "#1a1a1a" : "#b0b0a8",
              }}
            >
              {t} years
            </span>
          ))}
        </div>
      </div>

      {/* Result row */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 14px",
          background: "transparent", // <- no grey box
          borderRadius: 12,
          border: "1px solid #e8e8e4",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.9, lineHeight: 1 }}>
            {fmt(monthly)}
            <span style={{ fontSize: 14, fontWeight: 600, color: "#6b7280" }}>
              {sym}/month
            </span>
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4 }}>
            Total interest: {sym}
            {fmt(Math.max(monthly * termYears * 12 - loan, 0))} · LTV: {ltvPct}%
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
            fontWeight: 800,
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.12)",
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
  );
}

/* styles */
const lbl: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 700,
  color: "#374151",
  marginBottom: 6,
};

const inputWrap: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

const pre: React.CSSProperties = {
  position: "absolute",
  left: 12,
  fontSize: 13,
  fontWeight: 700,
  color: "#9ca3af",
  pointerEvents: "none",
};

const inp: React.CSSProperties = {
  width: "100%",
  height: 40,
  paddingLeft: 28,
  paddingRight: 12,
  fontSize: 14,
  fontWeight: 800,
  fontFamily: "inherit",
  border: "1px solid #e8e8e4",
  borderRadius: 10,
  background: "transparent", // <- no grey field
  color: "#111827",
  boxSizing: "border-box",
};
