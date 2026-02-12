"use client";

import React, { useMemo, useState, useCallback, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   WAAZA — Yacht Financing Simulator
   Two-tab tool: Monthly Payment ↔ Borrowing Capacity
   Smart derived rate from vessel context (rateModel logic)
   ═══════════════════════════════════════════════════════════ */

// ─── Design tokens ───────────────────────────────────────
const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentHover: "#f0ec5a",
  accentPale: "#fffde0",
  accentSoft: "rgba(255,248,108,0.18)",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  tint: "#f0efea",
  green: "#16a34a",
  greenSoft: "rgba(22,163,74,0.08)",
  amber: "#d97706",
  amberSoft: "rgba(217,119,6,0.08)",
};

// ─── Types ───────────────────────────────────────────────
type Currency = "EUR" | "USD";
type TabMode = "monthly" | "capacity";
type UsageType = "private" | "private_plus_charter" | "commercial_charter";

// ─── Formatting helpers ──────────────────────────────────
const sym = (c: Currency) => (c === "USD" ? "$" : "€");
const fmtMoney = (n: number, c: Currency) =>
  sym(c) + new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(Math.round(Math.max(0, n)));
const fmtPct = (n: number) => `${n.toFixed(2)}%`;
const parseMoney = (v: string) => {
  const cleaned = v.replace(/[^\d]/g, "");
  if (!cleaned) return 0;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
};
const fmtInput = (n: number) =>
  n > 0 ? new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(n) : "";

// ─── Loan math ───────────────────────────────────────────
function calcMonthlyPayment(principal: number, annualPct: number, years: number) {
  const n = Math.round(years * 12);
  if (!principal || !n) return 0;
  const r = annualPct / 100 / 12;
  if (r === 0) return principal / n;
  const pow = Math.pow(1 + r, n);
  return principal * ((r * pow) / (pow - 1));
}

function calcBorrowingCapacity(monthlyBudget: number, annualPct: number, years: number) {
  const n = Math.round(years * 12);
  if (!monthlyBudget || !n) return 0;
  const r = annualPct / 100 / 12;
  if (r === 0) return monthlyBudget * n;
  const pow = Math.pow(1 + r, n);
  return monthlyBudget * ((pow - 1) / (r * pow));
}

// ─── Rate model (inline from rateModel.ts) ───────────────
type RateAdjustment = { label: string; deltaPct: number };

function deriveRate(vesselAge: number | null, usage: UsageType): { base: number; adjusted: number; adjustments: RateAdjustment[] } {
  // Base rate: yacht marine lending typical mid-market
  const base = 5.80;
  const adjustments: RateAdjustment[] = [];

  if (vesselAge != null) {
    if (vesselAge > 25) {
      adjustments.push({ label: "Vessel age > 25 years", deltaPct: 0.45 });
    } else if (vesselAge > 20) {
      adjustments.push({ label: "Vessel age > 20 years", deltaPct: 0.25 });
    } else if (vesselAge > 15) {
      adjustments.push({ label: "Vessel age > 15 years", deltaPct: 0.15 });
    } else if (vesselAge <= 3) {
      adjustments.push({ label: "New / near-new vessel", deltaPct: -0.20 });
    }
  }

  if (usage === "commercial_charter") {
    adjustments.push({ label: "Commercial charter usage", deltaPct: 0.30 });
  } else if (usage === "private_plus_charter") {
    adjustments.push({ label: "Occasional charter", deltaPct: 0.15 });
  }

  const totalDelta = adjustments.reduce((s, a) => s + a.deltaPct, 0);
  const adjusted = Math.max(3.5, Math.min(11.5, base + totalDelta));

  return { base, adjusted, adjustments };
}

// ─── Custom slider component ─────────────────────────────
function Slider({
  min, max, step, value, onChange, formatLabel, accent = false,
}: {
  min: number; max: number; step: number; value: number;
  onChange: (v: number) => void; formatLabel?: (v: number) => string; accent?: boolean;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  const trackColor = accent ? C.accent : C.gray5;

  return (
    <div style={{ position: "relative", padding: "8px 0" }}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: "100%",
          height: 6,
          appearance: "none",
          WebkitAppearance: "none",
          background: `linear-gradient(to right, ${trackColor} ${pct}%, ${C.gray6} ${pct}%)`,
          borderRadius: 999,
          outline: "none",
          cursor: "pointer",
        }}
      />
      {formatLabel && (
        <div style={{
          position: "absolute",
          top: -2,
          left: `calc(${pct}% - ${pct * 0.2}px)`,
          transform: "translateX(-50%)",
          fontSize: 11,
          fontWeight: 700,
          color: C.gray3,
          pointerEvents: "none",
          whiteSpace: "nowrap",
          opacity: 0,
        }}>
          {formatLabel(value)}
        </div>
      )}
    </div>
  );
}

// ─── Field label ─────────────────────────────────────────
function Label({ children, right }: { children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      marginBottom: 8,
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: 1.6,
        color: C.gray4, textTransform: "uppercase",
      }}>
        {children}
      </div>
      {right && (
        <div style={{ fontSize: 13, color: C.gray2, fontWeight: 700 }}>{right}</div>
      )}
    </div>
  );
}

// ─── Input field ─────────────────────────────────────────
function InputField({
  value, onChange, placeholder, suffix, prefix, inputMode = "text", style: extraStyle,
}: {
  value: string; onChange: (v: string) => void; placeholder?: string;
  suffix?: string; prefix?: string; inputMode?: "text" | "numeric" | "decimal";
  style?: React.CSSProperties;
}) {
  return (
    <div style={{
      position: "relative", display: "flex", alignItems: "center",
      background: C.bg, borderRadius: 12, border: `1px solid ${C.gray5}`,
      transition: "border-color 200ms",
      ...extraStyle,
    }}>
      {prefix && (
        <span style={{ paddingLeft: 14, fontSize: 14, color: C.gray3, fontWeight: 600, flexShrink: 0 }}>
          {prefix}
        </span>
      )}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        style={{
          width: "100%", padding: prefix ? "12px 14px 12px 6px" : "12px 14px",
          border: "none", background: "transparent", fontSize: 15,
          outline: "none", color: C.black,
        }}
      />
      {suffix && (
        <span style={{ paddingRight: 14, fontSize: 13, color: C.gray4, fontWeight: 600, flexShrink: 0 }}>
          {suffix}
        </span>
      )}
    </div>
  );
}

// ─── Select field ────────────────────────────────────────
function SelectField({
  value, onChange, options, style: extraStyle,
}: {
  value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[];
  style?: React.CSSProperties;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%", padding: "12px 14px", borderRadius: 12,
        border: `1px solid ${C.gray5}`, background: C.bg, fontSize: 14,
        color: C.black, outline: "none", cursor: "pointer",
        appearance: "none", WebkitAppearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%239ca3af' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 14px center",
        paddingRight: 36,
        ...extraStyle,
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

// ─── Stat card ───────────────────────────────────────────
function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{
      background: highlight ? C.accentSoft : C.bg,
      borderRadius: 14, padding: "14px 16px",
      border: `1px solid ${highlight ? "rgba(255,248,108,0.4)" : C.gray6}`,
    }}>
      <div style={{ fontSize: 12, color: C.gray3, marginBottom: 4 }}>{label}</div>
      <div style={{ fontWeight: 800, fontSize: 16, color: C.black }}>{value}</div>
    </div>
  );
}

// ─── Rate adjustment pill ────────────────────────────────
function RateChip({ label, delta }: { label: string; delta: number }) {
  const isNeg = delta < 0;
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "8px 12px", borderRadius: 10,
      background: isNeg ? C.greenSoft : C.amberSoft,
      fontSize: 13,
    }}>
      <span style={{ color: C.gray2 }}>{label}</span>
      <span style={{
        fontWeight: 700, fontVariantNumeric: "tabular-nums",
        color: isNeg ? C.green : C.amber,
      }}>
        {isNeg ? "" : "+"}{delta.toFixed(2)}%
      </span>
    </div>
  );
}

// ═════════════════════════════════════════════════════════
// MAIN SIMULATOR COMPONENT
// ═════════════════════════════════════════════════════════
export default function SimulatorPage() {
  const [tab, setTab] = useState<TabMode>("monthly");
  const [currency, setCurrency] = useState<Currency>("EUR");

  // ── Vessel context (feeds rate model) ──
  const [yearBuilt, setYearBuilt] = useState<number>(2019);
  const [usage, setUsage] = useState<UsageType>("private");

  // ── Tab 1: Monthly Payment inputs ──
  const [price, setPrice] = useState<number>(3500000);
  const [deposit, setDeposit] = useState<number>(1050000);
  const [termYears, setTermYears] = useState<number>(15);

  // ── Tab 2: Capacity inputs ──
  const [monthlyBudget, setMonthlyBudget] = useState<number>(25000);
  const [capacityTerm, setCapacityTerm] = useState<number>(15);
  const [capacityDeposit, setCapacityDeposit] = useState<number>(500000);

  // ── Rate (derived or manual) ──
  const [useSmartRate, setUseSmartRate] = useState(true);
  const [manualRate, setManualRate] = useState<number>(5.80);

  const vesselAge = Math.max(0, new Date().getFullYear() - yearBuilt);
  const rateData = useMemo(() => deriveRate(vesselAge, usage), [vesselAge, usage]);
  const effectiveRate = useSmartRate ? rateData.adjusted : manualRate;

  // Sync manual rate when switching to smart
  useEffect(() => {
    if (useSmartRate) setManualRate(rateData.adjusted);
  }, [useSmartRate, rateData.adjusted]);

  // ── Tab 1 calculations ──
  const loan = Math.max(0, price - deposit);
  const monthlyPayment = useMemo(
    () => calcMonthlyPayment(loan, effectiveRate, termYears),
    [loan, effectiveRate, termYears]
  );
  const totalCost = monthlyPayment * termYears * 12;
  const totalInterest = totalCost - loan;

  // ── Tab 2 calculations ──
  const maxLoan = useMemo(
    () => calcBorrowingCapacity(monthlyBudget, effectiveRate, capacityTerm),
    [monthlyBudget, effectiveRate, capacityTerm]
  );
  const maxPurchase = maxLoan + capacityDeposit;
  const capacityTotalCost = monthlyBudget * capacityTerm * 12;
  const capacityTotalInterest = capacityTotalCost - maxLoan;

  // ── Animated number ──
  const AnimatedNumber = ({ value, currency: cur }: { value: number; currency: Currency }) => {
    const [display, setDisplay] = useState(value);
    const rafRef = useRef<number>(0);

    useEffect(() => {
      const start = display;
      const diff = value - start;
      if (Math.abs(diff) < 1) { setDisplay(value); return; }
      const duration = 300;
      const startTime = performance.now();

      const animate = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(start + diff * eased);
        if (progress < 1) rafRef.current = requestAnimationFrame(animate);
      };
      rafRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return <>{fmtMoney(display, cur)}</>;
  };

  return (
    <>
      <style>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        html{-webkit-font-smoothing:antialiased}
        body{background:${C.bg};overflow-x:hidden}
        a{text-decoration:none;color:inherit}
        input:focus,select:focus{outline:none}
        input[type="range"]{cursor:pointer}
        input[type="range"]::-webkit-slider-thumb{
          -webkit-appearance:none;appearance:none;
          width:20px;height:20px;border-radius:50%;
          background:${C.white};border:2px solid ${C.gray5};
          box-shadow:0 1px 4px rgba(0,0,0,0.12);
          cursor:pointer;transition:border-color .2s,box-shadow .2s;
        }
        input[type="range"]::-webkit-slider-thumb:hover{
          border-color:${C.accent};box-shadow:0 0 0 6px ${C.accentSoft};
        }
        input[type="range"]::-moz-range-thumb{
          width:20px;height:20px;border-radius:50%;
          background:${C.white};border:2px solid ${C.gray5};
          box-shadow:0 1px 4px rgba(0,0,0,0.12);
          cursor:pointer;
        }
        .sim-cta{transition:all .2s}
        .sim-cta:hover{background:${C.accentHover}!important;transform:translateY(-1px);box-shadow:0 6px 20px rgba(232,227,72,.3)}
        .sim-card{transition:transform .25s,box-shadow .25s}
        .sim-card:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,.06)}
        .tab-btn{transition:all .2s;cursor:pointer;user-select:none}
        .tab-btn:hover{color:${C.black}}
        .rate-toggle{transition:all .2s;cursor:pointer;user-select:none}
        .rate-toggle:hover{background:${C.accentSoft}}

        @media(max-width:900px){
          .sim-grid{grid-template-columns:1fr!important}
          .sim-h1{font-size:40px!important}
          .top-row{flex-direction:column;align-items:flex-start!important}
        }
        @media(max-width:600px){
          .sim-h1{font-size:32px!important}
          .big-number{font-size:36px!important}
          .vessel-row{grid-template-columns:1fr!important}
          .input-row-2{grid-template-columns:1fr!important}
        }
      `}</style>

      <div style={{ fontFamily: "var(--font-sans), 'DM Sans', sans-serif", color: C.black, background: C.bg, minHeight: "100vh" }}>

        {/* ── Header ── */}
        <div style={{ padding: "28px clamp(20px,5vw,80px) 20px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <div style={{ fontWeight: 800, letterSpacing: -0.3, fontSize: 16 }}>Waaza</div>
              <div style={{ color: C.gray3, fontSize: 13 }}>Financing Simulator</div>
            </div>
            <a href="/wizard" className="sim-cta" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 20px", background: C.accent, color: C.black,
              fontWeight: 700, borderRadius: 10, fontSize: 14,
            }}>
              Full readiness intake
              <span style={{ fontSize: 16 }}>→</span>
            </a>
          </div>
        </div>

        {/* ── Hero ── */}
        <section style={{ padding: "12px clamp(20px,5vw,80px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h1 className="sim-h1" style={{
              fontFamily: "var(--font-serif), 'Instrument Serif', serif",
              fontSize: 52, fontWeight: 400, letterSpacing: -1.4,
              lineHeight: 1.08, maxWidth: 800, marginBottom: 12,
            }}>
              Simulate your yacht financing.
            </h1>
            <p style={{ color: C.gray2, fontSize: 15, lineHeight: 1.7, maxWidth: 640, marginBottom: 32 }}>
              Adjust vessel details to get a derived indicative rate — then explore monthly payments or calculate your borrowing capacity.
            </p>
          </div>
        </section>

        {/* ── Vessel context strip ── */}
        <section style={{ padding: "0 clamp(20px,5vw,80px) 20px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{
              background: C.white, borderRadius: 16, padding: "16px 20px",
              border: `1px solid ${C.gray6}`,
            }}>
              <div className="vessel-row" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 14, alignItems: "end",
              }}>
                <div>
                  <Label>Currency</Label>
                  <SelectField value={currency} onChange={(v) => setCurrency(v as Currency)} options={[
                    { value: "EUR", label: "€ EUR" },
                    { value: "USD", label: "$ USD" },
                  ]} />
                </div>
                <div>
                  <Label>Year built</Label>
                  <InputField
                    value={yearBuilt ? String(yearBuilt) : ""}
                    onChange={(v) => {
                      const n = parseInt(v.replace(/\D/g, ""), 10);
                      if (Number.isFinite(n)) setYearBuilt(n);
                      else if (!v) setYearBuilt(new Date().getFullYear());
                    }}
                    placeholder="e.g. 2019"
                    inputMode="numeric"
                  />
                </div>
                <div>
                  <Label>Usage intent</Label>
                  <SelectField value={usage} onChange={(v) => setUsage(v as UsageType)} options={[
                    { value: "private", label: "Private use" },
                    { value: "private_plus_charter", label: "Private + charter" },
                    { value: "commercial_charter", label: "Commercial charter" },
                  ]} />
                </div>
                <div>
                  <Label right={
                    <span
                      className="rate-toggle"
                      onClick={() => setUseSmartRate(!useSmartRate)}
                      style={{
                        fontSize: 11, padding: "3px 8px", borderRadius: 6,
                        background: useSmartRate ? C.accentSoft : "transparent",
                        border: `1px solid ${useSmartRate ? "rgba(255,248,108,0.5)" : C.gray5}`,
                        cursor: "pointer",
                      }}
                    >
                      {useSmartRate ? "● Smart" : "○ Manual"}
                    </span>
                  }>
                    Indicative rate
                  </Label>
                  {useSmartRate ? (
                    <div style={{
                      padding: "12px 14px", borderRadius: 12,
                      background: C.accentPale, border: `1px solid rgba(255,248,108,0.4)`,
                      fontSize: 15, fontWeight: 800,
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}>
                      <span>{fmtPct(rateData.adjusted)}</span>
                      <span style={{ fontSize: 11, fontWeight: 500, color: C.gray3 }}>derived</span>
                    </div>
                  ) : (
                    <InputField
                      value={manualRate.toFixed(2)}
                      onChange={(v) => {
                        const n = parseFloat(v);
                        if (Number.isFinite(n)) setManualRate(Math.max(0, Math.min(15, n)));
                      }}
                      suffix="%"
                      inputMode="decimal"
                    />
                  )}
                </div>
              </div>

              {/* Rate adjustments breakdown */}
              {useSmartRate && rateData.adjustments.length > 0 && (
                <div style={{
                  marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8,
                }}>
                  <div style={{
                    fontSize: 12, color: C.gray3, padding: "6px 0",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    <span style={{ fontWeight: 700 }}>Base {fmtPct(rateData.base)}</span>
                    <span style={{ color: C.gray5 }}>│</span>
                  </div>
                  {rateData.adjustments.map((a, i) => (
                    <RateChip key={i} label={a.label} delta={a.deltaPct} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Tab selector ── */}
        <section style={{ padding: "24px clamp(20px,5vw,80px) 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 0, borderBottom: `2px solid ${C.gray6}` }}>
              {([
                { key: "monthly" as TabMode, label: "Estimate monthly payment" },
                { key: "capacity" as TabMode, label: "Estimate borrowing capacity" },
              ]).map((t) => (
                <div
                  key={t.key}
                  className="tab-btn"
                  onClick={() => setTab(t.key)}
                  style={{
                    padding: "14px 24px",
                    fontSize: 15,
                    fontWeight: tab === t.key ? 700 : 500,
                    color: tab === t.key ? C.black : C.gray3,
                    borderBottom: tab === t.key ? `3px solid ${C.black}` : "3px solid transparent",
                    marginBottom: -2,
                  }}
                >
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Content ── */}
        <section style={{ padding: "28px clamp(20px,5vw,80px) 80px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>

            {tab === "monthly" ? (
              /* ═══ TAB 1: Monthly Payment ═══ */
              <div className="sim-grid" style={{
                display: "grid", gridTemplateColumns: "1fr 0.95fr", gap: 20, alignItems: "start",
              }}>
                {/* Inputs */}
                <div className="sim-card" style={{
                  background: C.white, borderRadius: 20, padding: 24,
                  border: `1px solid ${C.gray6}`,
                }}>
                  <div style={{ marginBottom: 18 }}>
                    <Label>Purchase price</Label>
                    <InputField
                      value={fmtInput(price)}
                      onChange={(v) => setPrice(parseMoney(v))}
                      prefix={sym(currency)}
                      inputMode="numeric"
                    />
                  </div>

                  <div style={{ marginBottom: 18 }}>
                    <Label right={`${fmtMoney(deposit, currency)} (${price > 0 ? Math.round((deposit / price) * 100) : 0}%)`}>
                      Deposit
                    </Label>
                    <Slider
                      min={0}
                      max={Math.max(0, price)}
                      step={Math.max(1000, Math.round(price / 200))}
                      value={Math.min(deposit, price)}
                      onChange={setDeposit}
                    />
                    <div className="input-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 160px", gap: 10, marginTop: 10 }}>
                      <InputField
                        value={fmtInput(deposit)}
                        onChange={(v) => setDeposit(parseMoney(v))}
                        prefix={sym(currency)}
                        inputMode="numeric"
                      />
                      <div style={{
                        padding: "10px 14px", borderRadius: 12,
                        border: `1px solid ${C.gray6}`, background: C.tint,
                      }}>
                        <div style={{ fontSize: 11, color: C.gray3 }}>Loan</div>
                        <div style={{ fontWeight: 800, fontSize: 15 }}>{fmtMoney(loan, currency)}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: 18 }}>
                    <Label>Loan term</Label>
                    <SelectField value={String(termYears)} onChange={(v) => setTermYears(Number(v))} options={[
                      { value: "5", label: "5 years" },
                      { value: "8", label: "8 years" },
                      { value: "10", label: "10 years" },
                      { value: "12", label: "12 years" },
                      { value: "15", label: "15 years" },
                      { value: "20", label: "20 years" },
                    ]} />
                  </div>

                  {!useSmartRate && (
                    <div style={{ marginBottom: 18 }}>
                      <Label right={fmtPct(manualRate)}>Rate override</Label>
                      <Slider
                        min={3.5}
                        max={11.5}
                        step={0.05}
                        value={manualRate}
                        onChange={setManualRate}
                      />
                    </div>
                  )}

                  <div style={{
                    marginTop: 6, fontSize: 12, color: C.gray3, lineHeight: 1.6,
                    padding: "12px 0 0", borderTop: `1px solid ${C.gray6}`,
                  }}>
                    Indicative only. For a personalised rate and structured lender-ready output,{" "}
                    <a href="/wizard" style={{ fontWeight: 700, color: C.black, textDecoration: "underline", textUnderlineOffset: 2 }}>
                      run the full intake
                    </a>.
                  </div>
                </div>

                {/* Results */}
                <div className="sim-card" style={{
                  background: C.white, borderRadius: 20, padding: 24,
                  border: `1px solid ${C.gray6}`,
                }}>
                  <div style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: 1.6,
                    color: C.gray4, textTransform: "uppercase", marginBottom: 14,
                  }}>
                    Indicative result
                  </div>

                  <div style={{
                    background: C.tint, borderRadius: 16, padding: 22,
                    border: `1px solid ${C.gray6}`,
                  }}>
                    <div style={{ color: C.gray3, fontSize: 12, marginBottom: 6 }}>Monthly payment</div>
                    <div className="big-number" style={{
                      fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                      fontSize: 48, letterSpacing: -1.2, lineHeight: 1.05,
                    }}>
                      <AnimatedNumber value={monthlyPayment} currency={currency} />
                      <span style={{
                        fontSize: 14, color: C.gray3, marginLeft: 8,
                        fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
                      }}>
                        / month
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 }}>
                    <Stat label="Loan amount" value={fmtMoney(loan, currency)} />
                    <Stat label="Term" value={`${termYears} years`} />
                    <Stat label="Total interest" value={fmtMoney(totalInterest, currency)} />
                    <Stat label="Total cost" value={fmtMoney(totalCost, currency)} highlight />
                  </div>

                  <div style={{
                    marginTop: 14, padding: "14px 16px", borderRadius: 14,
                    background: C.bg, border: `1px solid ${C.gray6}`,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontSize: 12, color: C.gray3 }}>Effective rate</div>
                      <div style={{ fontWeight: 800 }}>{fmtPct(effectiveRate)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: C.gray3 }}>LTV</div>
                      <div style={{ fontWeight: 800 }}>{price > 0 ? Math.round((loan / price) * 100) : 0}%</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: C.gray3 }}>Vessel age</div>
                      <div style={{ fontWeight: 800 }}>{vesselAge} yr{vesselAge !== 1 ? "s" : ""}</div>
                    </div>
                  </div>

                  <a href="/wizard" className="sim-cta" style={{
                    marginTop: 16, display: "flex", width: "100%", justifyContent: "center",
                    alignItems: "center", padding: "15px 16px", background: C.accent,
                    borderRadius: 12, fontWeight: 800, fontSize: 15,
                    color: C.black, gap: 8,
                  }}>
                    Get my full readiness score + proposal
                    <span>→</span>
                  </a>
                </div>
              </div>

            ) : (
              /* ═══ TAB 2: Borrowing Capacity ═══ */
              <div className="sim-grid" style={{
                display: "grid", gridTemplateColumns: "1fr 0.95fr", gap: 20, alignItems: "start",
              }}>
                {/* Inputs */}
                <div className="sim-card" style={{
                  background: C.white, borderRadius: 20, padding: 24,
                  border: `1px solid ${C.gray6}`,
                }}>
                  <div style={{ marginBottom: 18 }}>
                    <Label>Monthly budget</Label>
                    <InputField
                      value={fmtInput(monthlyBudget)}
                      onChange={(v) => setMonthlyBudget(parseMoney(v))}
                      prefix={sym(currency)}
                      suffix="/ month"
                      inputMode="numeric"
                    />
                    <Slider
                      min={2000}
                      max={100000}
                      step={500}
                      value={monthlyBudget}
                      onChange={setMonthlyBudget}
                    />
                  </div>

                  <div style={{ marginBottom: 18 }}>
                    <Label>Available deposit</Label>
                    <InputField
                      value={fmtInput(capacityDeposit)}
                      onChange={(v) => setCapacityDeposit(parseMoney(v))}
                      prefix={sym(currency)}
                      inputMode="numeric"
                    />
                  </div>

                  <div style={{ marginBottom: 18 }}>
                    <Label>Loan term</Label>
                    <SelectField value={String(capacityTerm)} onChange={(v) => setCapacityTerm(Number(v))} options={[
                      { value: "5", label: "5 years" },
                      { value: "8", label: "8 years" },
                      { value: "10", label: "10 years" },
                      { value: "12", label: "12 years" },
                      { value: "15", label: "15 years" },
                      { value: "20", label: "20 years" },
                    ]} />
                  </div>

                  {!useSmartRate && (
                    <div style={{ marginBottom: 18 }}>
                      <Label right={fmtPct(manualRate)}>Rate override</Label>
                      <Slider
                        min={3.5}
                        max={11.5}
                        step={0.05}
                        value={manualRate}
                        onChange={setManualRate}
                      />
                    </div>
                  )}

                  <div style={{
                    marginTop: 6, fontSize: 12, color: C.gray3, lineHeight: 1.6,
                    padding: "12px 0 0", borderTop: `1px solid ${C.gray6}`,
                  }}>
                    Estimates how much you could finance based on a monthly budget. For a full readiness assessment,{" "}
                    <a href="/wizard" style={{ fontWeight: 700, color: C.black, textDecoration: "underline", textUnderlineOffset: 2 }}>
                      run the intake
                    </a>.
                  </div>
                </div>

                {/* Results */}
                <div className="sim-card" style={{
                  background: C.white, borderRadius: 20, padding: 24,
                  border: `1px solid ${C.gray6}`,
                }}>
                  <div style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: 1.6,
                    color: C.gray4, textTransform: "uppercase", marginBottom: 14,
                  }}>
                    Your borrowing capacity
                  </div>

                  <div style={{
                    background: C.accentPale, borderRadius: 16, padding: 22,
                    border: `1px solid rgba(255,248,108,0.4)`,
                  }}>
                    <div style={{ color: C.gray3, fontSize: 12, marginBottom: 6 }}>You could purchase up to</div>
                    <div className="big-number" style={{
                      fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                      fontSize: 48, letterSpacing: -1.2, lineHeight: 1.05,
                    }}>
                      <AnimatedNumber value={maxPurchase} currency={currency} />
                    </div>
                    <div style={{ marginTop: 8, fontSize: 13, color: C.gray2 }}>
                      {fmtMoney(maxLoan, currency)} financed + {fmtMoney(capacityDeposit, currency)} deposit
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 }}>
                    <Stat label="Max loan amount" value={fmtMoney(maxLoan, currency)} highlight />
                    <Stat label="Term" value={`${capacityTerm} years`} />
                    <Stat label="Total interest" value={fmtMoney(capacityTotalInterest, currency)} />
                    <Stat label="Total repayment" value={fmtMoney(capacityTotalCost, currency)} />
                  </div>

                  <div style={{
                    marginTop: 14, padding: "14px 16px", borderRadius: 14,
                    background: C.bg, border: `1px solid ${C.gray6}`,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontSize: 12, color: C.gray3 }}>Effective rate</div>
                      <div style={{ fontWeight: 800 }}>{fmtPct(effectiveRate)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: C.gray3 }}>Monthly budget</div>
                      <div style={{ fontWeight: 800 }}>{fmtMoney(monthlyBudget, currency)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: C.gray3 }}>Vessel age</div>
                      <div style={{ fontWeight: 800 }}>{vesselAge} yr{vesselAge !== 1 ? "s" : ""}</div>
                    </div>
                  </div>

                  <a href="/wizard" className="sim-cta" style={{
                    marginTop: 16, display: "flex", width: "100%", justifyContent: "center",
                    alignItems: "center", padding: "15px 16px", background: C.accent,
                    borderRadius: 12, fontWeight: 800, fontSize: 15,
                    color: C.black, gap: 8,
                  }}>
                    Get my full readiness score + proposal
                    <span>→</span>
                  </a>
                </div>
              </div>
            )}

          </div>
        </section>

      </div>
    </>
  );
}