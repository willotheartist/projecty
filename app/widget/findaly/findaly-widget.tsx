// app/widget/findaly/findaly-widget.tsx
"use client";

import { useState, useMemo } from "react";

/*
  Waaza × Findaly — Minimal Financing Widget
  Two inputs. One slider. One number. Done.
*/

function getRate(years: number, ltv: number): number {
  let r = 3.8;
  if (years <= 10) r = 3.2;
  else if (years <= 15) r = 3.5;
  else if (years <= 20) r = 3.8;
  else r = 4.1;
  if (ltv > 70) r += 0.6;
  else if (ltv > 60) r += 0.3;
  else if (ltv > 50) r += 0.1;
  return Math.round(r * 10) / 10;
}

function pmt(principal: number, rate: number, years: number): number {
  if (principal <= 0 || years <= 0) return 0;
  const r = rate / 100 / 12;
  const n = years * 12;
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

const TERMS = [10, 15, 20, 25];

export default function FindalyWidget() {
  const p = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const initPrice = Number(p?.get("price") || 0) || 685000;
  const initYear = Number(p?.get("year") || 2020);
  const usage = p?.get("usage") || "private";
  const cur = (p?.get("currency") || "EUR").toUpperCase();
  const sym = cur === "GBP" ? "£" : cur === "USD" ? "$" : "€";

  const [price, setPrice] = useState(initPrice);
  const [priceStr, setPriceStr] = useState(fmt(initPrice));
  const [depositStr, setDepositStr] = useState(fmt(Math.round(initPrice * 0.3)));
  const [deposit, setDeposit] = useState(Math.round(initPrice * 0.3));
  const [term, setTerm] = useState(20);

  const loan = useMemo(() => Math.max(price - deposit, 0), [price, deposit]);
  const ltv = useMemo(() => (price > 0 ? Math.round((loan / price) * 100) : 0), [loan, price]);
  const rate = useMemo(() => getRate(term, ltv), [term, ltv]);
  const monthly = useMemo(() => pmt(loan, rate, term), [loan, rate, term]);

  const ti = TERMS.indexOf(term);
  const tPct = ti >= 0 ? (ti / (TERMS.length - 1)) * 100 : 50;

  const depositPct = price > 0 ? Math.round((deposit / price) * 100) : 0;

  const wizardUrl = `/wizard?price=${price}&year=${initYear}&usage=${usage}&liquidity=${deposit}`;

  return (
    <div style={{ fontFamily: "'DM Sans',-apple-system,BlinkMacSystemFont,sans-serif", color: "#1a1a1a" }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{
        maxWidth: 460,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 12,
        border: "1px solid #e5e5e0",
        padding: "16px 20px 18px",
      }}>
        {/* Title */}
        <div style={{ marginBottom: 14 }}>
          <span style={{ fontSize: 14, fontWeight: 700 }}>How much would this boat cost me?</span>
          <span style={{ fontSize: 11, color: "#aaa", marginLeft: 8 }}>thanks to our partner <b style={{ color: "#1a1a1a" }}>Waaza</b></span>
        </div>

        {/* Two inputs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
          <Field
            label="Price of vessel"
            sym={sym}
            value={priceStr}
            onChange={(v) => {
              setPriceStr(v);
              const n = parseMoney(v);
              if (n > 0) setPrice(n);
            }}
            onBlur={() => setPriceStr(fmt(price))}
          />
          <Field
            label={`Deposit (${depositPct}% recommended)`}
            sym={sym}
            value={depositStr}
            onChange={(v) => {
              setDepositStr(v);
              const n = parseMoney(v);
              if (n >= 0) setDeposit(n);
            }}
            onBlur={() => setDepositStr(fmt(deposit))}
          />
        </div>

        {/* Slider */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#555" }}>Loan term – Rate {rate}</span>
          </div>
          <div style={{ position: "relative", height: 24, userSelect: "none" }}>
            <div style={{ position: "absolute", top: 10, left: 0, right: 0, height: 4, borderRadius: 2, background: "#e8e8e3" }} />
            <div style={{ position: "absolute", top: 10, left: 0, width: `${tPct}%`, height: 4, borderRadius: 2, background: "#c8d946" }} />
            <input
              type="range" min={0} max={TERMS.length - 1} step={1}
              value={ti >= 0 ? ti : 2}
              onChange={(e) => setTerm(TERMS[Number(e.target.value)])}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 24, opacity: 0, cursor: "pointer", zIndex: 2 }}
            />
            <div style={{
              position: "absolute", top: 4, left: `calc(${tPct}% - 8px)`,
              width: 16, height: 16, borderRadius: "50%",
              background: "#c8d946", border: "2px solid #fff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
              pointerEvents: "none", transition: "left 0.1s",
            }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
            {TERMS.map((t) => (
              <span key={t} style={{ fontSize: 11, fontWeight: term === t ? 700 : 400, color: term === t ? "#1a1a1a" : "#bbb" }}>
                {t} years
              </span>
            ))}
          </div>
        </div>

        {/* Result */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div>
            <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: -1 }}>{fmt(monthly)} {sym}</span>
            <span style={{ fontSize: 14, color: "#888", marginLeft: 2 }}>/month</span>
          </div>
          <a
            href={wizardUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "9px 16px",
              background: "#c8d946",
              color: "#1a1a1a",
              fontSize: 13,
              fontWeight: 700,
              borderRadius: 8,
              textDecoration: "none",
              whiteSpace: "nowrap",
              fontFamily: "inherit",
            }}
          >
            Refine my project
          </a>
        </div>
      </div>
    </div>
  );
}

function Field({ label, sym, value, onChange, onBlur }: {
  label: string; sym: string; value: string;
  onChange: (v: string) => void; onBlur: () => void;
}) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 500, color: "#777", marginBottom: 3 }}>{label}</div>
      <div style={{ position: "relative" }}>
        <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", fontSize: 13, color: "#aaa", pointerEvents: "none" }}>{sym}</span>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          inputMode="numeric"
          style={{
            width: "100%", height: 36, paddingLeft: 24, paddingRight: 8,
            fontSize: 14, fontWeight: 600, fontFamily: "inherit",
            border: "1px solid #e5e5e0", borderRadius: 8, background: "#fafaf7",
            color: "#1a1a1a", boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );
}