// app/wizard/wizard-client.tsx
"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultAnswers } from "@/lib/wizard/defaults";
import { WizardAnswers, RiskFlag } from "@/lib/wizard/types";
import { riskFlagLabel, prettyEngineFlag } from "@/lib/wizard/labels";

type StepId =
  | "client_name"
  | "purchase_price"
  | "usage_intent"
  | "year_built"
  | "vessel_condition"
  | "intended_flag"
  | "liquidity_available"
  | "liquidity_held"
  | "income_type"
  | "net_worth_band"
  | "tax_residency_country"
  | "tax_resident_eu"
  | "ownership_intent"
  | "risk_flags"
  | "proceed_timeline"
  | "results";

type Step = {
  id: StepId;
  title: string;
  hint?: string;
};

const STEPS: Step[] = [
  {
    id: "client_name",
    title: "Who is this assessment for?",
    hint: "Enter the buyer's name or a reference. This helps you identify the assessment later.",
  },
  {
    id: "purchase_price",
    title: "What is the approximate purchase price of the yacht?",
    hint: "An estimate is sufficient. This helps us model financing range.",
  },
  {
    id: "usage_intent",
    title: "Is this purchase primarily for:",
    hint: "This affects structuring complexity and VAT sensitivity.",
  },
  {
    id: "year_built",
    title: "What is the year of build of the vessel?",
    hint: "Vessel age impacts lender appetite and LTV limits.",
  },
  {
    id: "vessel_condition",
    title: "Is the yacht:",
    hint: "Charter history can affect underwriting and valuation assumptions.",
  },
  {
    id: "intended_flag",
    title: "Intended flag (if known):",
    hint: "You can change this later. If unknown, select 'Not decided yet'.",
  },
  {
    id: "liquidity_available",
    title: "How much liquidity is available for this purchase?",
    hint: "Cash or near-cash assets available within 30–60 days.",
  },
  {
    id: "liquidity_held",
    title: "Is the liquidity held:",
    hint: "This helps anticipate documentation and structure requirements.",
  },
  {
    id: "income_type",
    title: "Primary income source:",
    hint: "We use this to estimate income stability at a high level.",
  },
  {
    id: "net_worth_band",
    title: "Net worth band:",
    hint: "This stays high-level — no exact numbers required.",
  },
  {
    id: "tax_residency_country",
    title: "Tax residency:",
    hint: "Jurisdiction influences structuring routes and lender policies.",
  },
  {
    id: "tax_resident_eu",
    title: "Are you currently tax resident in the EU?",
    hint: "If multiple jurisdictions, select 'Multiple'.",
  },
  {
    id: "ownership_intent",
    title: "Intended ownership structure:",
    hint: "'Not sure' is common — we'll still produce a valid output.",
  },
  {
    id: "risk_flags",
    title: "Do any of the following apply?",
    hint: "Optional — selecting these improves accuracy and reduces surprises later.",
  },
  {
    id: "proceed_timeline",
    title: "How soon do you intend to proceed?",
    hint: "This helps set expectations on readiness and next steps.",
  },
  { id: "results", title: "Financing Readiness Summary" },
];

/** ---------- Engine response types ---------- */

type RiskSeverity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

type EngineRiskFlag = {
  code: string;
  severity: RiskSeverity;
};

type EngineHit = {
  ruleId: string;
  matched: boolean;
  weightedDelta: number;
  flagCode?: string;
  severity?: RiskSeverity;
};

type EngineResult = {
  assessmentId: string;
  assessmentRunId: string;
  ruleSetVersion: string;
  readinessScore: number;
  tier: string;
  ltv: { min: number; max: number };
  riskFlags: EngineRiskFlag[];
  recommendedPath: string;
  hits: EngineHit[];
};

type EngineAssessResponse = {
  ok: boolean;
  error?: string;
  ids?: {
    clientId: string;
    vesselId: string;
    assessmentId: string;
    assessmentRunId: string;
  };
  result?: EngineResult;
  authenticated?: boolean;
};

/** ---------- tiny helpers ---------- */

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  try {
    return JSON.stringify(e);
  } catch {
    return "Unknown error";
  }
}

export default function WizardClient() {
  const router = useRouter();
  const [answers, setAnswers] = useState<WizardAnswers>(defaultAnswers);
  const [idx, setIdx] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const [engineRes, setEngineRes] = useState<EngineAssessResponse | null>(null);
  const [isAssessing, setIsAssessing] = useState(false);
  const [isPdfLoading, setIsPdfLoading] = useState(false);

  // Track client name separately (not in WizardAnswers type)
  const [clientName, setClientName] = useState("");

  const step = STEPS[idx];
  const isResults = step.id === "results";
  const totalQuestions = STEPS.length - 1;
  const currentQuestionNumber = Math.min(idx + 1, totalQuestions);

  const progressPct = useMemo(() => {
    if (isResults) return 100;
    return Math.round((idx / totalQuestions) * 100);
  }, [idx, isResults, totalQuestions]);

  function next(draft?: WizardAnswers) {
    setError(null);

    const a = draft ?? answers;
    const v = validateStep(step.id, a, clientName);
    if (!v.ok) {
      setError(v.message);
      return;
    }

    if (draft) setAnswers(draft);
    setIdx((p) => Math.min(p + 1, STEPS.length - 1));
  }

  function nextWithPatch(patch: Partial<WizardAnswers>) {
    const merged = { ...answers, ...patch } as WizardAnswers;
    next(merged);
  }

  function back() {
    setError(null);
    setIdx((p) => Math.max(p - 1, 0));
  }

  function reset() {
    setAnswers(defaultAnswers);
    setClientName("");
    setIdx(0);
    setError(null);
    setEngineRes(null);
    setIsAssessing(false);
    setIsPdfLoading(false);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") back();
      if (e.key === "Enter" && !isResults) next();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResults, idx, answers, clientName]);

  useEffect(() => {
    if (!isResults) return;

    let cancelled = false;

    async function run() {
      setError(null);
      setIsAssessing(true);
      setEngineRes(null);

      try {
        const res = await fetch("/api/wizard/assess", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...answers,
            clientName: clientName.trim() || "Assessment Buyer",
          }),
        });

        const jsonUnknown = (await res.json()) as unknown;
        if (cancelled) return;

        const json = jsonUnknown as EngineAssessResponse;

        if (!json.ok) {
          setError(json.error ?? "Assessment failed.");
          setEngineRes(null);
          setIsAssessing(false);
          return;
        }

        setEngineRes(json);
        setIsAssessing(false);
      } catch (e: unknown) {
        if (cancelled) return;
        setError(getErrorMessage(e) || "Assessment failed.");
        setEngineRes(null);
        setIsAssessing(false);
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [isResults, answers, clientName]);

  async function generatePdf() {
    const assessmentId = engineRes?.ids?.assessmentId ?? engineRes?.result?.assessmentId;
    if (!assessmentId) {
      setError("Missing assessmentId. Please re-run the assessment.");
      return;
    }

    setError(null);
    setIsPdfLoading(true);

    try {
      const res = await fetch("/api/assessments/report.pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assessmentId }),
      });

      if (!res.ok) {
        const jUnknown = (await res.json().catch(() => null)) as unknown;
        const msg =
          isRecord(jUnknown) && typeof jUnknown.error === "string"
            ? jUnknown.error
            : `PDF request failed (${res.status})`;
        throw new Error(msg);
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      window.open(url, "_blank", "noopener,noreferrer");
      setTimeout(() => URL.revokeObjectURL(url), 60_000);

      setIsPdfLoading(false);
    } catch (e: unknown) {
      setIsPdfLoading(false);
      setError(getErrorMessage(e) || "PDF generation failed.");
    }
  }

  return (
    <div className="wz-wrap">
      <div className="wz-shell">
        <div className="wz-top">
          <div className="wz-brand">
            <div className="title">Waaza</div>
            <div className="subtitle">Financing Readiness Intake</div>
          </div>

          {!isResults ? (
            <div className="wz-step">
              Step {currentQuestionNumber} of {totalQuestions}
            </div>
          ) : (
            <div className="wz-step">Complete</div>
          )}
        </div>

        <div className="wz-progress" aria-hidden="true">
          <div style={{ width: `${progressPct}%` }} />
        </div>

        <div className="wz-card">
          <div className="wz-card-inner">
            <h1 className="wz-q">{step.title}</h1>
            {step.hint && <p className="wz-hint">{step.hint}</p>}

            {!isResults ? (
              <div className="wz-field">
                {renderStep(step.id, answers, setAnswers, nextWithPatch, clientName, setClientName)}
                {error && <div className="wz-error">{error}</div>}
              </div>
            ) : (
              <div className="wz-field">
                {isAssessing ? (
                  <div style={{ padding: 8, color: "rgba(0,0,0,0.62)" }}>
                    Calculating financing readiness…
                  </div>
                ) : engineRes?.ok && engineRes.result ? (
                  <ResultsView
                    engine={engineRes.result}
                    authenticated={engineRes.authenticated ?? false}
                    assessmentId={engineRes.ids?.assessmentId}
                    onViewDashboard={() => {
                      if (engineRes.ids?.assessmentId) {
                        router.push(`/dashboard/${engineRes.ids.assessmentId}`);
                      } else {
                        router.push("/dashboard");
                      }
                    }}
                  />
                ) : (
                  <div style={{ padding: 8, color: "rgba(0,0,0,0.62)" }}>
                    {error ? "Assessment failed." : "No result yet."}
                  </div>
                )}

                {error && <div className="wz-error">{error}</div>}
              </div>
            )}
          </div>

          <div className="wz-actions">
            <button className="btn" onClick={back} disabled={idx === 0}>
              Back
            </button>

            <div className="mini">
              {isResults ? <>You can refine inputs any time.</> : <>Enter to continue</>}
            </div>

            {isResults ? (
              <div style={{ display: "flex", gap: 10 }}>
                <button className="btn" onClick={reset} disabled={isAssessing || isPdfLoading}>
                  Start over
                </button>
                <button
                  className="btn btnPrimary"
                  onClick={generatePdf}
                  disabled={isAssessing || isPdfLoading || !engineRes?.ok}
                >
                  {isPdfLoading ? "Generating…" : "Generate Report"}
                </button>
              </div>
            ) : (
              <button className="btn btnPrimary" onClick={() => next()}>
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type Currency = WizardAnswers["currency"];
type UsageIntent = WizardAnswers["usageIntent"];
type VesselCondition = WizardAnswers["vesselCondition"];
type IntendedFlag = WizardAnswers["intendedFlag"];
type LiquidityHeld = WizardAnswers["liquidityHeld"];
type IncomeType = WizardAnswers["incomeType"];
type NetWorthBand = WizardAnswers["netWorthBand"];
type IsTaxResidentEU = WizardAnswers["isTaxResidentEU"];
type OwnershipIntent = WizardAnswers["ownershipIntent"];
type ProceedTimeline = WizardAnswers["proceedTimeline"];

function renderStep(
  id: StepId,
  a: WizardAnswers,
  setA: React.Dispatch<React.SetStateAction<WizardAnswers>>,
  nextWithPatch: (patch: Partial<WizardAnswers>) => void,
  clientName: string,
  setClientName: React.Dispatch<React.SetStateAction<string>>
) {
  switch (id) {
    case "client_name":
      return (
        <input
          className="input"
          placeholder="e.g. John Smith or Deal Reference #42"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          autoFocus
        />
      );

    case "purchase_price":
      return (
        <div className="wz-inputRow">
          <select
            className="select"
            style={{ maxWidth: 160 }}
            value={a.currency}
            onChange={(e) =>
              setA((p) => ({
                ...p,
                currency: e.target.value as Currency,
              }))
            }
          >
            <option value="EUR">€ EUR</option>
            <option value="USD">$ USD</option>
          </select>

          <input
            className="input"
            inputMode="numeric"
            placeholder="e.g. 3,500,000"
            value={formatIntWithCommas(a.purchasePrice)}
            onChange={(e) =>
              setA((p) => ({
                ...p,
                purchasePrice: parseMoney(e.target.value),
              }))
            }
          />
        </div>
      );

    case "usage_intent":
      return (
        <OptionList
          options={[
            { key: "private", label: "Private use" },
            { key: "private_plus_charter", label: "Private + occasional charter" },
            { key: "commercial_charter", label: "Commercial charter" },
          ]}
          activeKey={a.usageIntent ?? ""}
          onSelect={(key) => nextWithPatch({ usageIntent: key as UsageIntent })}
        />
      );

    case "year_built":
      return (
        <input
          className="input"
          inputMode="numeric"
          placeholder="e.g. 2021"
          value={a.yearBuilt ?? ""}
          onChange={(e) =>
            setA((p) => ({
              ...p,
              yearBuilt: parseIntSafe(e.target.value),
            }))
          }
        />
      );

    case "vessel_condition":
      return (
        <OptionList
          options={[
            { key: "new", label: "New" },
            { key: "preowned_private", label: "Pre-owned (never chartered)" },
            { key: "preowned_chartered", label: "Pre-owned (previously chartered)" },
          ]}
          activeKey={a.vesselCondition ?? ""}
          onSelect={(key) => nextWithPatch({ vesselCondition: key as VesselCondition })}
        />
      );

    case "intended_flag":
      return (
        <>
          <select
            className="select"
            value={a.intendedFlag ?? ""}
            onChange={(e) =>
              setA((p) => ({
                ...p,
                intendedFlag: e.target.value as IntendedFlag,
              }))
            }
          >
            <option value="" disabled>
              Select…
            </option>
            <option value="unknown">Not decided yet</option>
            <option value="eu_flag">EU flag</option>
            <option value="non_eu_flag">Non-EU flag</option>
            <option value="specific_country">Specific country</option>
          </select>

          {a.intendedFlag === "specific_country" && (
            <input
              className="input"
              placeholder="Country name"
              value={a.intendedFlagCountry ?? ""}
              onChange={(e) =>
                setA((p) => ({
                  ...p,
                  intendedFlagCountry: e.target.value,
                }))
              }
            />
          )}
        </>
      );

    case "liquidity_available":
      return (
        <input
          className="input"
          inputMode="numeric"
          placeholder="e.g. 1,250,000"
          value={formatIntWithCommas(a.liquidityAvailable)}
          onChange={(e) =>
            setA((p) => ({
              ...p,
              liquidityAvailable: parseMoney(e.target.value),
            }))
          }
        />
      );

    case "liquidity_held":
      return (
        <OptionList
          options={[
            { key: "personal", label: "Personally" },
            { key: "spv", label: "Through a company / SPV" },
            { key: "mixed", label: "Mixed" },
          ]}
          activeKey={a.liquidityHeld ?? ""}
          onSelect={(key) => nextWithPatch({ liquidityHeld: key as LiquidityHeld })}
        />
      );

    case "income_type":
      return (
        <OptionList
          options={[
            { key: "salary", label: "Salary" },
            { key: "business_owner", label: "Business owner" },
            { key: "investments_dividends", label: "Investments / dividends" },
            { key: "mixed", label: "Mixed" },
          ]}
          activeKey={a.incomeType ?? ""}
          onSelect={(key) => nextWithPatch({ incomeType: key as IncomeType })}
        />
      );

    case "net_worth_band":
      return (
        <OptionList
          options={[
            { key: "under_250k", label: "Under €250k" },
            { key: "250k_1m", label: "€250k–€1m" },
            { key: "1_3m", label: "€1–€3m" },
            { key: "3_10m", label: "€3–€10m" },
            { key: "10_30m", label: "€10–€30m" },
            { key: "30m_plus", label: "€30m+" },
          ]}
          activeKey={a.netWorthBand ?? ""}
          onSelect={(key) => nextWithPatch({ netWorthBand: key as NetWorthBand })}
        />
      );

    case "tax_residency_country":
      return (
        <input
          className="input"
          placeholder="e.g. United Kingdom"
          value={a.taxResidencyCountry ?? ""}
          onChange={(e) =>
            setA((p) => ({
              ...p,
              taxResidencyCountry: e.target.value,
            }))
          }
        />
      );

    case "tax_resident_eu":
      return (
        <OptionList
          options={[
            { key: "yes", label: "Yes" },
            { key: "no", label: "No" },
            { key: "multi", label: "Multiple jurisdictions" },
          ]}
          activeKey={a.isTaxResidentEU ?? ""}
          onSelect={(key) => nextWithPatch({ isTaxResidentEU: key as IsTaxResidentEU })}
        />
      );

    case "ownership_intent":
      return (
        <OptionList
          options={[
            { key: "personal", label: "Personal ownership" },
            { key: "spv", label: "Company / SPV" },
            { key: "unsure", label: "Not sure yet" },
          ]}
          activeKey={a.ownershipIntent ?? ""}
          onSelect={(key) => nextWithPatch({ ownershipIntent: key as OwnershipIntent })}
        />
      );

    case "risk_flags":
      return (
        <div className="checkRow">
          {(
            [
              "existing_significant_leverage",
              "complex_income_structure",
              "first_financed_yacht",
              "cross_border_ownership",
            ] as RiskFlag[]
          ).map((rf) => (
            <label key={rf} className="check">
              <input
                type="checkbox"
                checked={a.riskFlags.includes(rf)}
                onChange={() =>
                  setA((p) => ({
                    ...p,
                    riskFlags: toggleInArray(p.riskFlags, rf),
                  }))
                }
              />
              <span>{riskFlagLabel[rf]}</span>
            </label>
          ))}
        </div>
      );

    case "proceed_timeline":
      return (
        <OptionList
          options={[
            { key: "0_3m", label: "0–3 months" },
            { key: "3_6m", label: "3–6 months" },
            { key: "6_12m", label: "6–12 months" },
          ]}
          activeKey={a.proceedTimeline ?? ""}
          onSelect={(key) => nextWithPatch({ proceedTimeline: key as ProceedTimeline })}
        />
      );

    default:
      return null;
  }
}

function OptionList(props: {
  options: { key: string; label: string }[];
  activeKey: string;
  onSelect: (key: string) => void;
}) {
  const { options, onSelect } = props;

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const n = Number(e.key);
      if (!Number.isFinite(n) || n < 1 || n > options.length) return;
      const opt = options[n - 1];
      if (opt) onSelect(opt.key);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [options, onSelect]);

  return (
    <div className="optionList">
      {props.options.map((o, i) => (
        <div
          key={o.key}
          className="option"
          data-active={props.activeKey === o.key ? "true" : "false"}
          onClick={() => props.onSelect(o.key)}
          role="button"
          tabIndex={0}
        >
          <div className="label">{o.label}</div>
          <div className="kbd">{i + 1}</div>
        </div>
      ))}
    </div>
  );
}

function ResultsView(props: {
  engine: EngineResult;
  authenticated: boolean;
  assessmentId?: string;
  onViewDashboard: () => void;
}) {
  const { engine, authenticated, onViewDashboard } = props;

  const tierLabel = humanTier(engine.tier);
  const meaning = scoreMeaning(engine.readinessScore);

  const prettyFlags = buildPrettyFlags(engine.riskFlags, engine.hits);

  return (
    <div className="resultsGrid">
      <div className="panel">
        <div className="bigScore">{engine.readinessScore}</div>
        <div className="tier">{tierLabel}</div>

        <div style={{ marginTop: 14, color: "rgba(0,0,0,0.62)", fontSize: 14 }}>
          Indicative LTV:{" "}
          <strong>
            {engine.ltv.min}%–{engine.ltv.max}%
          </strong>
        </div>

        <div style={{ marginTop: 14, color: "rgba(0,0,0,0.72)", fontSize: 14, lineHeight: 1.5 }}>
          <strong>What this means:</strong> {meaning}
        </div>
      </div>

      <div className="panel">
        <div style={{ fontSize: 14, color: "rgba(0,0,0,0.62)" }}>Recommended direction</div>
        <div style={{ marginTop: 8, fontSize: 16, lineHeight: 1.45 }}>{engine.recommendedPath}</div>

        {/* Dashboard CTA */}
        {authenticated && (
          <button
            onClick={onViewDashboard}
            style={{
              marginTop: 20,
              width: "100%",
              padding: "12px 16px",
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.12)",
              background: "#0a0a0a",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font), inherit",
              transition: "background 0.2s",
            }}
          >
            View on Dashboard →
          </button>
        )}

        {!authenticated && (
          <a
            href="/login"
            style={{
              display: "block",
              marginTop: 20,
              width: "100%",
              padding: "12px 16px",
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.12)",
              background: "rgba(255,248,108,0.15)",
              color: "#0a0a0a",
              fontSize: 13,
              fontWeight: 500,
              textAlign: "center",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Sign in to save assessments to your dashboard
          </a>
        )}
      </div>

      <div className="panel" style={{ gridColumn: "1 / -1" }}>
        <div style={{ fontSize: 14, color: "rgba(0,0,0,0.62)" }}>Key risk flags</div>

        {prettyFlags.length === 0 ? (
          <div style={{ marginTop: 10, color: "rgba(0,0,0,0.55)" }}>No major flags triggered.</div>
        ) : (
          <div className="flagList">
            {prettyFlags.map((f, i) => (
              <div className="flagItem" key={`${f.id}:${i}`}>
                <div>{f.text}</div>
                <div className="sev">{f.severity}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function validateStep(
  id: StepId,
  a: WizardAnswers,
  clientName: string
): { ok: true } | { ok: false; message: string } {
  switch (id) {
    case "client_name":
      if (!clientName.trim())
        return { ok: false, message: "Please enter a buyer name or reference." };
      return { ok: true };
    case "purchase_price":
      if (!a.purchasePrice || a.purchasePrice <= 0)
        return { ok: false, message: "Please enter an approximate purchase price." };
      return { ok: true };
    case "usage_intent":
      if (!a.usageIntent) return { ok: false, message: "Please select a primary usage intent." };
      return { ok: true };
    case "year_built":
      if (!a.yearBuilt || a.yearBuilt < 1950 || a.yearBuilt > new Date().getFullYear() + 1) {
        return { ok: false, message: "Please enter a valid build year." };
      }
      return { ok: true };
    case "vessel_condition":
      if (!a.vesselCondition) return { ok: false, message: "Please select the vessel condition." };
      return { ok: true };
    case "intended_flag":
      if (!a.intendedFlag) return { ok: false, message: "Please select an intended flag option." };
      if (a.intendedFlag === "specific_country" && !(a.intendedFlagCountry ?? "").trim()) {
        return { ok: false, message: "Please enter the intended flag country." };
      }
      return { ok: true };
    case "liquidity_available":
      if (!a.liquidityAvailable || a.liquidityAvailable <= 0)
        return { ok: false, message: "Please enter available liquidity." };
      return { ok: true };
    case "liquidity_held":
      if (!a.liquidityHeld) return { ok: false, message: "Please select how liquidity is held." };
      return { ok: true };
    case "income_type":
      if (!a.incomeType) return { ok: false, message: "Please select an income source." };
      return { ok: true };
    case "net_worth_band":
      if (!a.netWorthBand) return { ok: false, message: "Please select a net worth band." };
      return { ok: true };
    case "tax_residency_country":
      if (!(a.taxResidencyCountry ?? "").trim())
        return { ok: false, message: "Please enter a tax residency country." };
      return { ok: true };
    case "tax_resident_eu":
      if (!a.isTaxResidentEU) return { ok: false, message: "Please select EU tax residency status." };
      return { ok: true };
    case "ownership_intent":
      if (!a.ownershipIntent) return { ok: false, message: "Please select an ownership intent." };
      return { ok: true };
    case "risk_flags":
      return { ok: true };
    case "proceed_timeline":
      if (!a.proceedTimeline) return { ok: false, message: "Please select a timeline." };
      return { ok: true };
    default:
      return { ok: true };
  }
}

function toggleInArray<T>(arr: T[], item: T) {
  return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
}

function parseMoney(v: string): number | null {
  const cleaned = v.replace(/[^\d]/g, "");
  if (!cleaned) return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function parseIntSafe(v: string): number | null {
  const cleaned = v.replace(/[^\d]/g, "");
  if (!cleaned) return null;
  const n = parseInt(cleaned, 10);
  return Number.isFinite(n) ? n : null;
}

function formatIntWithCommas(n: number | null | undefined) {
  if (n == null) return "";
  if (!Number.isFinite(Number(n))) return "";
  try {
    return new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(Number(n));
  } catch {
    return String(n);
  }
}

function humanTier(tier: string) {
  const t = String(tier || "").toUpperCase();
  if (t === "FINANCE_READY" || t === "FINANCE_READY") return "Finance Ready";
  if (t === "CONDITIONAL") return "Conditional";
  if (t === "HIGH_RISK" || t === "HIGH_COMPLEXITY") return "High Complexity";
  return tier || "Unknown";
}

function scoreMeaning(score: number) {
  const s = Number(score ?? 0);
  if (s >= 80)
    return "Strong finance readiness. With a clean document pack, you can move toward lender outreach with normal expectations on structure and terms.";
  if (s >= 50)
    return "Feasible, but expect conditions. You'll likely need tighter documentation, structuring clarity, or adjustments to deposit/LTV expectations.";
  return "High complexity profile. In its current form it may be declined — treat this as a diagnostic to improve liquidity, structure, or vessel profile before outreach.";
}

function severityFromRiskSeverity(sev: RiskSeverity): "low" | "medium" | "high" {
  const s = String(sev ?? "").toUpperCase();
  if (s === "CRITICAL" || s === "HIGH") return "high";
  if (s === "MEDIUM") return "medium";
  return "low";
}

type PrettyFlag = { id: string; text: string; severity: "low" | "medium" | "high" };

function buildPrettyFlags(riskFlagsRaw: EngineRiskFlag[] | unknown, hits: EngineHit[]): PrettyFlag[] {
  const riskFlags: EngineRiskFlag[] = Array.isArray(riskFlagsRaw)
    ? (riskFlagsRaw.filter((x): x is EngineRiskFlag => {
        return (
          isRecord(x) &&
          typeof x.code === "string" &&
          typeof x.severity === "string"
        );
      }) as EngineRiskFlag[])
    : [];

  const byFlag = new Map<string, number>();
  for (const h of hits ?? []) {
    if (!h?.matched) continue;
    if (!h?.flagCode) continue;
    const key = String(h.flagCode);
    const prev = byFlag.get(key);
    const d = Number(h.weightedDelta ?? 0);
    if (prev == null) byFlag.set(key, d);
    else byFlag.set(key, Math.min(prev, d));
  }

  const out: PrettyFlag[] = [];

  for (const f of riskFlags) {
    const code = String(f.code);
    out.push({
      id: code,
      text: prettyEngineFlag(code),
      severity: severityFromRiskSeverity(f.severity),
    });
  }

  const seen = new Set<string>();
  return out.filter((x) => {
    if (seen.has(x.id)) return false;
    seen.add(x.id);
    return true;
  });
}