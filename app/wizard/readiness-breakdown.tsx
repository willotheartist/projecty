import type { ReadinessDetail } from "@/lib/engine/readiness";

export function ReadinessBreakdown({ detail, currency = "EUR" }: { detail: ReadinessDetail; currency?: string }) {
  const money = (n: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency, maximumFractionDigits: 0 }).format(n);
  return <div className="panel" style={{ gridColumn: "1 / -1", display: "grid", gap: 22 }}>
    <div><h2 style={{ fontSize: 24, margin: "0 0 8px" }}>What makes up your score</h2>
      <p style={{ margin: 0, lineHeight: 1.6 }}>Each section earns points towards 100. The figures below use your entered budget and a fully repaying loan over {detail.assumptions.termYears} years.</p></div>
    <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, margin: 0 }}>
      {[
        ["Planned buyer contribution", money(detail.depositRequired)],
        ["Cash shortfall at purchase", money(detail.cashGap)],
        ["Cash remaining after purchase", money(detail.remainingCash)],
        [`Payment at ${detail.assumptions.ratePct}%`, `${money(detail.monthlyPayment)}/mo`],
        [`Stress payment at ${detail.assumptions.stressRatePct}%`, `${money(detail.stressedPayment)}/mo`],
        ["Remaining ownership reserve", `${detail.reserveMonths.toFixed(1)} months`],
      ].map(([label, value]) => <div key={label}><dt style={{ color: "#666", fontSize: 13 }}>{label}</dt><dd style={{ margin: "6px 0 0", fontSize: 21 }}>{value}</dd></div>)}
    </dl>
    {detail.capReasons.length > 0 && <div style={{ padding: 18, background: "#fff5e4", borderRadius: 12 }}>
      <strong>Why the overall score is capped at 49</strong>
      {detail.capReasons.map(reason => <p key={reason}>{reason}</p>)}
      <p style={{ marginBottom: 0 }}>Your components total {detail.rawScore}/100. Completing documents cannot offset a cash or repayment shortfall.</p>
    </div>}
    {detail.factors.map(factor => <section key={factor.key} style={{ borderTop: "1px solid #e7e6df", paddingTop: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}><h3 style={{ margin: 0, fontSize: 17 }}>{factor.label}</h3><strong>{factor.points}/{factor.max}</strong></div>
      <progress value={factor.points} max={factor.max} aria-label={factor.label} style={{ width: "100%", height: 7, accentColor: "#aaa100", marginTop: 12 }} />
      <p style={{ lineHeight: 1.6 }}>{factor.explanation}</p>
      <p style={{ lineHeight: 1.6, color: "#555", marginBottom: 0 }}><strong>Next step:</strong> {factor.action}</p>
    </section>)}
    <details><summary style={{ cursor: "pointer" }}>How the maths works</summary>
      <p style={{ lineHeight: 1.7 }}>Deposit: up to 30 points, increasing with your contribution to 50% of the price and reduced if cash does not cover the contribution plus purchase costs. Repayment: up to 30 points, reaching full points when monthly surplus covers 1.5 times the stressed payment. Reserves: up to 15 points, reaching full points at six months of running costs plus stressed loan payments. Documents: 0, 8 or 15 points. Vessel checks: 0, 5 or 10 points.</p>
      <p style={{ lineHeight: 1.7 }}>These are Waaza preparation targets, not universal lender criteria. Inputs are self-reported and unverified. The score does not determine an approved loan amount or interest rate.</p>
    </details>
  </div>;
}
