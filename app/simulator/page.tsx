// app/simulator/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { simulateAmortizedLoan } from "@/lib/engine/loanSimulator";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentHover: "#f0ec5a",
  accentPale: "#fffde0",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  tint: "#f0efea",
};

function formatMoney(n: number, currency: "EUR" | "USD") {
  const symbol = currency === "USD" ? "$" : "€";
  const v = Number.isFinite(n) ? n : 0;
  return (
    symbol +
    new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(Math.round(v))
  );
}

function formatPct(n: number) {
  const v = Number.isFinite(n) ? n : 0;
  return `${v.toFixed(2)}%`;
}

function parseMoney(v: string) {
  const cleaned = v.replace(/[^\d]/g, "");
  if (!cleaned) return 0;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

export default function SimulatorPage() {
  const [currency, setCurrency] = useState<"EUR" | "USD">("EUR");
  const [price, setPrice] = useState<number>(3500000);
  const [deposit, setDeposit] = useState<number>(1050000);
  const [termYears, setTermYears] = useState<number>(15);
  const [rate, setRate] = useState<number>(5.8);

  const loan = Math.max(0, price - deposit);

  const sim = useMemo(() => {
    return simulateAmortizedLoan({ principal: loan, annualRatePct: rate, termYears });
  }, [loan, rate, termYears]);

  return (
    <>
      <style>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        html{-webkit-font-smoothing:antialiased}
        body{background:${C.bg}; overflow-x:hidden;}
        a{text-decoration:none;color:inherit}
        input:focus, select:focus{outline:none;border-color:${C.accent}!important}
        .btnY:hover{background:${C.accentHover};transform:translateY(-1px);box-shadow:0 6px 20px rgba(232,227,72,.3)}
        .card:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,.06)}
        @media(max-width:900px){
          .grid{grid-template-columns:1fr!important}
          .h1{font-size:40px!important}
        }
      `}</style>

      <div style={{ fontFamily: "var(--font-sans), 'DM Sans', sans-serif", color: C.black, background: C.bg, minHeight: "100vh" }}>
        <div style={{ padding: "32px clamp(20px,5vw,80px) 20px" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <div style={{ fontWeight: 800, letterSpacing: -0.3 }}>Waaza</div>
              <div style={{ color: C.gray3, fontSize: 13 }}>Financing Simulator</div>
            </div>
            <a
              href="/wizard"
              className="btnY"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                background: C.accent,
                color: C.black,
                fontWeight: 700,
                borderRadius: 10,
                transition: "all .2s",
              }}
            >
              Get personalised proposal →
            </a>
          </div>
        </div>

        <section style={{ padding: "16px clamp(20px,5vw,80px) 80px" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <h1
              className="h1"
              style={{
                fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                fontSize: 56,
                fontWeight: 400,
                letterSpacing: -1.6,
                lineHeight: 1.05,
                maxWidth: 900,
                marginBottom: 14,
              }}
            >
              Simulate your yacht financing in seconds.
            </h1>
            <p style={{ color: C.gray2, fontSize: 16, lineHeight: 1.7, maxWidth: 720, marginBottom: 28 }}>
              Adjust deposit, term and rate to see monthly payment and total cost. For a derived rate and bank-grade output, run the full intake.
            </p>

            <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 0.95fr", gap: 16, alignItems: "start" }}>
              {/* Inputs */}
              <div className="card" style={{ background: C.white, borderRadius: 20, padding: 22, transition: "all .25s" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: C.gray4, textTransform: "uppercase" as const, marginBottom: 8 }}>
                      Currency
                    </div>
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value as any)}
                      style={{
                        width: "100%",
                        padding: "12px 12px",
                        borderRadius: 10,
                        border: `1px solid ${C.gray5}`,
                        background: C.bg,
                        fontSize: 14,
                      }}
                    >
                      <option value="EUR">€ EUR</option>
                      <option value="USD">$ USD</option>
                    </select>
                  </div>

                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: C.gray4, textTransform: "uppercase" as const, marginBottom: 8 }}>
                      Term
                    </div>
                    <select
                      value={termYears}
                      onChange={(e) => setTermYears(Number(e.target.value))}
                      style={{
                        width: "100%",
                        padding: "12px 12px",
                        borderRadius: 10,
                        border: `1px solid ${C.gray5}`,
                        background: C.bg,
                        fontSize: 14,
                      }}
                    >
                      <option value={10}>10 years</option>
                      <option value={15}>15 years</option>
                      <option value={20}>20 years</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: 14 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: C.gray4, textTransform: "uppercase" as const, marginBottom: 8 }}>
                    Purchase price
                  </div>
                  <input
                    value={new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(price)}
                    onChange={(e) => setPrice(parseMoney(e.target.value))}
                    inputMode="numeric"
                    style={{
                      width: "100%",
                      padding: "12px 12px",
                      borderRadius: 10,
                      border: `1px solid ${C.gray5}`,
                      background: C.bg,
                      fontSize: 15,
                    }}
                  />
                </div>

                <div style={{ marginTop: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: C.gray4, textTransform: "uppercase" as const }}>
                      Deposit
                    </div>
                    <div style={{ fontSize: 13, color: C.gray2, fontWeight: 700 }}>
                      {formatMoney(deposit, currency)} ({price > 0 ? Math.round((deposit / price) * 100) : 0}%)
                    </div>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={Math.max(0, price)}
                    step={Math.max(1000, Math.round(price / 1000))}
                    value={Math.min(deposit, price)}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 160px", gap: 10, marginTop: 10 }}>
                    <input
                      value={new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(deposit)}
                      onChange={(e) => setDeposit(parseMoney(e.target.value))}
                      inputMode="numeric"
                      style={{
                        width: "100%",
                        padding: "12px 12px",
                        borderRadius: 10,
                        border: `1px solid ${C.gray5}`,
                        background: C.bg,
                        fontSize: 14,
                      }}
                    />
                    <div style={{ padding: "12px 12px", borderRadius: 10, border: `1px solid ${C.gray6}`, background: C.tint }}>
                      <div style={{ fontSize: 12, color: C.gray3 }}>Loan</div>
                      <div style={{ fontWeight: 800 }}>{formatMoney(loan, currency)}</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: C.gray4, textTransform: "uppercase" as const }}>
                      Rate (annual)
                    </div>
                    <div style={{ fontSize: 13, color: C.gray2, fontWeight: 700 }}>{formatPct(rate)}</div>
                  </div>

                  <input
                    type="range"
                    min={3.5}
                    max={11.5}
                    step={0.05}
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />

                  <input
                    value={rate.toFixed(2)}
                    onChange={(e) => setRate(Number(e.target.value))}
                    inputMode="decimal"
                    style={{
                      width: 140,
                      marginTop: 10,
                      padding: "12px 12px",
                      borderRadius: 10,
                      border: `1px solid ${C.gray5}`,
                      background: C.bg,
                      fontSize: 14,
                    }}
                  />
                </div>

                <div style={{ marginTop: 18, fontSize: 12, color: C.gray3, lineHeight: 1.6 }}>
                  Indicative simulator only. For a derived rate and structured lender-ready output, run the full intake.
                </div>
              </div>

              {/* Results */}
              <div className="card" style={{ background: C.white, borderRadius: 20, padding: 22, transition: "all .25s" }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: C.gray4, textTransform: "uppercase" as const }}>
                  Indicative result
                </div>

                <div style={{ marginTop: 12, background: C.tint, borderRadius: 16, padding: 18, border: `1px solid ${C.gray6}` }}>
                  <div style={{ color: C.gray3, fontSize: 12 }}>Monthly payment</div>
                  <div style={{ fontFamily: "var(--font-serif), 'Instrument Serif', serif", fontSize: 44, letterSpacing: -1, lineHeight: 1.05, marginTop: 6 }}>
                    {formatMoney(sim.monthlyPayment, currency)}
                    <span style={{ fontSize: 14, color: C.gray3, marginLeft: 8, fontFamily: "var(--font-sans), 'DM Sans', sans-serif" }}>
                      / month
                    </span>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 14 }}>
                  <div style={{ background: C.bg, borderRadius: 14, padding: 14, border: `1px solid ${C.gray6}` }}>
                    <div style={{ fontSize: 12, color: C.gray3 }}>Loan amount</div>
                    <div style={{ fontWeight: 800, marginTop: 4 }}>{formatMoney(loan, currency)}</div>
                  </div>

                  <div style={{ background: C.bg, borderRadius: 14, padding: 14, border: `1px solid ${C.gray6}` }}>
                    <div style={{ fontSize: 12, color: C.gray3 }}>Term</div>
                    <div style={{ fontWeight: 800, marginTop: 4 }}>{termYears} years</div>
                  </div>

                  <div style={{ background: C.bg, borderRadius: 14, padding: 14, border: `1px solid ${C.gray6}` }}>
                    <div style={{ fontSize: 12, color: C.gray3 }}>Total interest</div>
                    <div style={{ fontWeight: 800, marginTop: 4 }}>{formatMoney(sim.totalInterest, currency)}</div>
                  </div>

                  <div style={{ background: C.bg, borderRadius: 14, padding: 14, border: `1px solid ${C.gray6}` }}>
                    <div style={{ fontSize: 12, color: C.gray3 }}>Total cost</div>
                    <div style={{ fontWeight: 800, marginTop: 4 }}>{formatMoney(sim.totalCost, currency)}</div>
                  </div>
                </div>

                <a
                  href="/wizard"
                  className="btnY"
                  style={{
                    marginTop: 16,
                    display: "inline-flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "14px 16px",
                    background: C.accent,
                    borderRadius: 12,
                    fontWeight: 800,
                    transition: "all .2s",
                  }}
                >
                  Get my derived rate + proposal →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
