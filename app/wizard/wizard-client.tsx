"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, FileText, RotateCcw } from "lucide-react";
import { defaultAnswers } from "@/lib/wizard/defaults";
import type { WizardAnswers } from "@/lib/wizard/types";
import { validateReadiness, type ReadinessInputs } from "@/lib/engine/readiness";
import { PlannerResults, type PlannerResponse } from "./planner-results";

const stages = [
  { title: "The buyer", description: "Who’s buying, and how?", heading: "Let’s start with you.", help: "A little context helps make your report useful. Your income type and location guide the review, rather than automatically lowering your score." },
  { title: "The yacht", description: "Price, condition and use", heading: "Tell us about the yacht.", help: "An approximate purchase price is fine. Keep taxes, fees and initial works separate—we’ll account for those in your funding plan." },
  { title: "Your funding", description: "Cash, borrowing and costs", heading: "Build your funding plan.", help: "Balance the cash you put into the purchase with what you want to keep in reserve. All amounts use your selected currency." },
  { title: "Monthly budget", description: "Repayments and running costs", heading: "Make room for ownership.", help: "A yacht needs a budget beyond its purchase price. Include maintenance, mooring, insurance and crew where applicable." },
  { title: "Readiness", description: "Documents and vessel checks", heading: "How much is already in place?", help: "Be honest about what’s ready. Outstanding paperwork is a next step, and your report will explain its effect on the score." },
  { title: "Review", description: "Check your plan", heading: "Your plan, at a glance.", help: "Check these figures before we calculate your readiness. You’ll be able to explore alternative plans on the next screen." },
];

export function toPlan(a: WizardAnswers): ReadinessInputs | null {
  const plan = { currency: a.currency, purchasePrice: a.purchasePrice, liquidityAvailable: a.liquidityAvailable, requestedLoan: a.requestedLoan, financeTermYears: a.financeTermYears, planningRatePct: a.planningRatePct, monthlySurplus: a.monthlySurplus, closingCosts: a.closingCosts, monthlyOwnershipCosts: a.monthlyOwnershipCosts, documentsReadiness: a.documentsReadiness, vesselReadiness: a.vesselReadiness };
  return validateReadiness(plan) ? plan : null;
}

function errorFor(stage: number, a: WizardAnswers, name: string): string | null {
  if (stage === 0 && (!name.trim() || !a.taxResidencyCountry?.trim() || !a.incomeType || !a.ownershipIntent)) return "Add a buyer name, tax residency, income source and ownership intention.";
  if (stage === 1) {
    if (!a.purchasePrice || !Number.isFinite(a.purchasePrice) || a.purchasePrice > 1e10) return "Enter a purchase price above zero.";
    if (!a.yearBuilt || !Number.isInteger(a.yearBuilt) || a.yearBuilt < 1950 || a.yearBuilt > new Date().getFullYear() + 1) return "Enter a valid build year.";
    if (!a.vesselCondition || !a.usageIntent || !a.intendedFlag) return "Select the vessel condition, intended use and flag status.";
    if (a.intendedFlag === "specific_country" && !a.intendedFlagCountry?.trim()) return "Enter the intended flag country.";
  }
  if (stage === 2 && (a.liquidityAvailable == null || a.liquidityAvailable < 0 || a.requestedLoan == null || a.requestedLoan <= 0 || a.requestedLoan > (a.purchasePrice ?? 0) || a.closingCosts == null || a.closingCosts < 0)) return "Enter available cash, a loan amount up to the purchase price, and purchase costs (0 if none).";
  if (stage === 3 && (a.monthlyOwnershipCosts == null || a.monthlyOwnershipCosts <= 0 || a.monthlySurplus == null || a.monthlySurplus < 0 || !Number.isInteger(a.financeTermYears) || a.financeTermYears! < 1 || a.financeTermYears! > 20 || a.planningRatePct == null || a.planningRatePct < 0 || a.planningRatePct > 30)) return "Enter monthly costs and surplus, a term of 1–20 years, and a planning rate of 0–30%.";
  if (stage === 4 && (!a.documentsReadiness || !a.vesselReadiness)) return "Select the status of both your buyer documents and vessel checks.";
  if (stage === 5 && !toPlan(a)) return "Review the funding and budget figures. Some values are missing or outside the supported range.";
  return null;
}

function MoneyField({ label, hint, value, currency, onChange }: { label: string; hint?: string; value: number | null | undefined; currency: string; onChange: (n: number | null) => void }) {
  return <label className="wz-label"><span>{label}</span><div className="wz-money"><span>{currency}</span><input inputMode="numeric" placeholder="0" value={value == null ? "" : value.toLocaleString("en-GB")} onChange={e => {const digits = e.target.value.replace(/[^\d]/g, ""); onChange(digits ? Number(digits) : null);}} /></div>{hint && <small>{hint}</small>}</label>;
}
function SelectField({ label, value, options, onChange }: {label:string;value:string|null|undefined;options:[string,string][];onChange:(value:string)=>void}) {
  return <label className="wz-label"><span>{label}</span><select value={value ?? ""} onChange={e=>onChange(e.target.value)}><option value="" disabled>Select an option</option>{options.map(([key,title])=><option key={key} value={key}>{title}</option>)}</select></label>;
}

export default function WizardClient() {
  const [answers, setAnswers] = useState<WizardAnswers>(defaultAnswers);
  const [name, setName] = useState("");
  const [stage, setStage] = useState(0);
  const [result, setResult] = useState<PlannerResponse | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [furthest, setFurthest] = useState(0);
  const [resetOpen, setResetOpen] = useState(false);
  const submitting = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const patch = (value: Partial<WizardAnswers>) => setAnswers(a => ({...a,...value}));
  const money = (value: number | null | undefined) => value == null ? "Not entered" : new Intl.NumberFormat("en-GB", {style:"currency",currency:answers.currency,maximumFractionDigits:0}).format(value);
  const go = (next: number) => {setStage(next);setError(null);requestAnimationFrame(()=>heading.current?.focus());};
  const reset = () => {setAnswers(defaultAnswers);setName("");setResult(null);setFurthest(0);setResetOpen(false);go(0);};
  async function submit(nextAnswers = answers) {
    if (submitting.current) return;
    for (let i=0;i<stages.length;i++) {const message=errorFor(i,nextAnswers,name);if(message){go(i);setError(message);return;}}
    submitting.current=true;setBusy(true);setError(null);
    try {
      const response=await fetch("/api/wizard/assess",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...nextAnswers,clientName:name.trim()})});
      const json=await response.json() as PlannerResponse;
      if(!response.ok || !json.ok || !json.result?.readiness) throw new Error("Your assessment couldn’t be completed. Your plan is still here—please try again shortly.");
      setAnswers(nextAnswers);setResult(json);
      window.scrollTo({top:0,behavior:"smooth"});
    } catch {setError("Your assessment couldn’t be completed. Your plan is still here—please try again shortly.");}
    finally{submitting.current=false;setBusy(false);}
  }
  async function download() {
    if(!result?.ids?.assessmentId)return;
    setPdfBusy(true);setError(null);
    try{
      const response=await fetch("/api/assessments/report.pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({assessmentId:result.ids.assessmentId})});
      if(!response.ok)throw new Error("report");
      const url=URL.createObjectURL(await response.blob());const a=document.createElement("a");a.href=url;a.download=`Waaza_Financing_Plan_${result.ids.assessmentId}.pdf`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
    }catch{setError("We couldn’t download your report. Your assessment is safe on this screen. Please try again.");}finally{setPdfBusy(false);}
  }
  const intro = stages[stage];
  return <main className="wz-app">
    <div className="wz-mast"><a href="/wizard" className="wz-wordmark">Waaza<span> / Financing planner</span></a><span className="wz-mast-note">Clarity before commitment.</span></div>
    {result?.result?.readiness ? <PlannerResults key={result.ids?.assessmentId} response={result} name={name} plan={toPlan(answers)!} onEdit={()=>{setResult(null);go(2);}} onDownload={download} pdfBusy={pdfBusy} busy={busy} onApply={plan=>submit({...answers,...plan})} /> :
    <div className="wz-layout">
      <aside className="wz-side"><span className="wz-eyebrow">YOUR NEXT CHAPTER</span><h2>A clearer course<br/>to ownership.</h2><p>Understand the numbers.<br/>Know what to prepare.<br/>Move forward with a plan.</p>
        <nav aria-label="Assessment sections">{stages.map((item,i)=><button key={item.title} type="button" disabled={i>furthest||busy} aria-current={stage===i?"step":undefined} onClick={()=>go(i)}><span className="wz-stage-number">{i<stage?<Check size={15}/>:String(i+1).padStart(2,"0")}</span><span><strong>{item.title}</strong><small>{item.description}</small></span></button>)}</nav>
        <div className="wz-side-foot"><FileText size={18}/><span>Includes a personalised report<br/>and interactive scenarios.</span></div>
      </aside>
      <section className="wz-workspace"><div className="wz-stage-meta"><span>SECTION {String(stage+1).padStart(2,"0")} / 06</span><span>{intro.title}</span></div><div className="wz-progress"><div style={{width:`${(stage+1)/6*100}%`}}/></div>
        <form className="wz-form" onSubmit={e=>{e.preventDefault();const message=errorFor(stage,answers,name);if(message){setError(message);return;}if(stage===5){void submit();return;}setFurthest(n=>Math.max(n,stage+1));go(stage+1);}}>
          <h1 tabIndex={-1} ref={heading}>{intro.heading}</h1><p className="wz-intro">{intro.help}</p>
          <fieldset className="wz-fields" disabled={busy}>
          {stage===0&&<><label className="wz-label wz-full"><span>Buyer name or reference</span><input autoComplete="off" value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. Alex Morgan / Yacht purchase" /></label><label className="wz-label"><span>Tax residency</span><input value={answers.taxResidencyCountry??""} onChange={e=>patch({taxResidencyCountry:e.target.value})} placeholder="Country" /></label><SelectField label="Primary income source" value={answers.incomeType} options={[["salary","Employment income"],["business_owner","Business owner"],["investments_dividends","Investments / dividends"],["mixed","A combination"]]} onChange={v=>patch({incomeType:v as WizardAnswers["incomeType"]})}/><SelectField label="Intended ownership" value={answers.ownershipIntent} options={[["personal","Personal ownership"],["spv","Company / SPV"],["unsure","Not decided yet"]]} onChange={v=>patch({ownershipIntent:v as WizardAnswers["ownershipIntent"]})}/></>}
          {stage===1&&<><SelectField label="Currency for your plan" value={answers.currency} options={[["EUR","EUR — Euro"],["USD","USD — US dollar"]]} onChange={v=>patch({currency:v as WizardAnswers["currency"]})}/><MoneyField label="Approximate purchase price" value={answers.purchasePrice} currency={answers.currency} onChange={purchasePrice=>patch({purchasePrice})}/><label className="wz-label"><span>Year built / expected delivery</span><input type="number" min="1950" max={new Date().getFullYear()+1} value={answers.yearBuilt??""} onChange={e=>patch({yearBuilt:e.target.value?Number(e.target.value):null})} placeholder="e.g. 2020"/></label><SelectField label="Vessel condition" value={answers.vesselCondition} options={[["new","New build"],["preowned_private","Pre-owned / private use"],["preowned_chartered","Pre-owned / previously chartered"]]} onChange={v=>patch({vesselCondition:v as WizardAnswers["vesselCondition"]})}/><SelectField label="Your intended use" value={answers.usageIntent} options={[["private","Private use"],["private_plus_charter","Private + occasional charter"],["commercial_charter","Commercial charter"]]} onChange={v=>patch({usageIntent:v as WizardAnswers["usageIntent"]})}/><SelectField label="Intended flag" value={answers.intendedFlag} options={[["unknown","Not decided yet"],["eu_flag","EU flag"],["non_eu_flag","Non-EU flag"],["specific_country","A specific country"]]} onChange={v=>patch({intendedFlag:v as WizardAnswers["intendedFlag"]})}/>{answers.intendedFlag==="specific_country"&&<label className="wz-label"><span>Flag country</span><input value={answers.intendedFlagCountry??""} onChange={e=>patch({intendedFlagCountry:e.target.value})}/></label>}<p className="wz-note wz-full">Changing currency changes the unit labels, not the amounts. Update any figures you have already entered.</p></>}
          {stage===2&&<><MoneyField label="Cash available for this plan" hint="Include the cash you want to retain as a reserve. Exclude assets you cannot access in time." value={answers.liquidityAvailable} currency={answers.currency} onChange={liquidityAvailable=>patch({liquidityAvailable})}/><MoneyField label="Amount you want to borrow" hint="Enter an amount above zero, up to the yacht’s purchase price." value={answers.requestedLoan} currency={answers.currency} onChange={requestedLoan=>patch({requestedLoan})}/><MoneyField label="Purchase costs & initial works" hint="Taxes, fees, survey, transport and any immediate works. Enter 0 if none." value={answers.closingCosts} currency={answers.currency} onChange={closingCosts=>patch({closingCosts})}/><div className="wz-calculation"><span>YOUR PLANNED CONTRIBUTION</span><strong>{answers.purchasePrice!=null&&answers.requestedLoan!=null?money(Math.max(0,answers.purchasePrice-answers.requestedLoan)):"—"}</strong><small>Purchase price minus borrowing. Purchase costs are additional.</small></div></>}
          {stage===3&&<><MoneyField label="Monthly yacht running costs" hint="Include maintenance, mooring, insurance and crew. Exclude loan repayments." value={answers.monthlyOwnershipCosts} currency={answers.currency} onChange={monthlyOwnershipCosts=>patch({monthlyOwnershipCosts})}/><MoneyField label="Monthly surplus for the new loan" hint="What remains AFTER tax, living costs, existing debts AND the yacht running costs entered here. Enter 0 if none." value={answers.monthlySurplus} currency={answers.currency} onChange={monthlySurplus=>patch({monthlySurplus})}/><label className="wz-label"><span>Planning term (years)</span><input type="number" min="1" max="20" value={answers.financeTermYears??10} onChange={e=>patch({financeTermYears:Number(e.target.value)})}/></label><label className="wz-label"><span>Planning annual interest rate (%)</span><input type="number" min="0" max="30" step="0.25" value={answers.planningRatePct??8} onChange={e=>patch({planningRatePct:Number(e.target.value)})}/></label><div className="wz-note wz-full"><strong>Assumptions you control.</strong> We model a fully repaying loan with no balloon, then stress-test it at 2 percentage points above your chosen rate. These are planning assumptions, not a quote.</div></>}
          {stage===4&&<><fieldset className="wz-choice-group wz-full"><legend>Buyer documents</legend><p>Identity, address, source of funds, income evidence and existing-debt records.</p>{[["ready","Ready to share","The complete evidence pack is available."],["partial","Partly ready","Some documents are ready; others are outstanding."],["not_started","Not started","I need to begin gathering the evidence."]].map(([v,title,desc])=><label key={v} className="wz-choice"><input type="radio" name="documents" checked={answers.documentsReadiness===v} onChange={()=>patch({documentsReadiness:v as WizardAnswers["documentsReadiness"]})}/><span><strong>{title}</strong><small>{desc}</small></span></label>)}</fieldset><fieldset className="wz-choice-group wz-full"><legend>Vessel & ownership checks</legend><p>Survey / new-build review, valuation, title, proposed ownership, flag and use.</p>{[["verified","Professionally reviewed","Checks are complete and supporting evidence is available."],["pending","In progress","Some checks or decisions remain outstanding."],["not_started","Not started","The yacht may not be selected yet."]].map(([v,title,desc])=><label key={v} className="wz-choice"><input type="radio" name="vessel" checked={answers.vesselReadiness===v} onChange={()=>patch({vesselReadiness:v as WizardAnswers["vesselReadiness"]})}/><span><strong>{title}</strong><small>{desc}</small></span></label>)}</fieldset></>}
          {stage===5&&<><div className="wz-review-title wz-full"><CheckCircle2 size={22}/><span>Prepared for <strong>{name}</strong></span></div>{[["The yacht",`${money(answers.purchasePrice)} · ${answers.yearBuilt}`,1],["Your borrowing",money(answers.requestedLoan),2],["Available cash",money(answers.liquidityAvailable),2],["Purchase costs",money(answers.closingCosts),2],["Monthly running costs",money(answers.monthlyOwnershipCosts),3],["Monthly repayment surplus",money(answers.monthlySurplus),3],["Planning assumptions",`${answers.planningRatePct}% · ${answers.financeTermYears} years`,3],["Evidence status",`${answers.documentsReadiness==="ready"?"Buyer documents ready":"Buyer documents outstanding"} · ${answers.vesselReadiness==="verified"?"vessel reviewed":"vessel checks outstanding"}`,4]].map(([label,value,index])=><div className="wz-review-row wz-full" key={String(label)}><span>{label}</span><strong>{value}</strong><button type="button" onClick={()=>go(Number(index))}>Edit</button></div>)}<div className="wz-note wz-full">Your score describes preparation and the financial plan you entered. It does not represent a credit decision or a probability of approval.</div></>}
          </fieldset>
          {error&&<div className="wz-alert" role="alert">{error}</div>}
          <div className="wz-form-actions"><button className="wz-button wz-button-quiet" type="button" onClick={()=>go(stage-1)} disabled={stage===0||busy}><ArrowLeft size={16}/>Back</button><span>{stage===5?"Ready when you are.":"Your answers stay here as you go."}</span><button type="submit" className="wz-button wz-button-primary" disabled={busy}>{busy?"Preparing your assessment…":stage===5?"See my financing plan":"Continue"}<ArrowRight size={16}/></button></div>
        </form>
      </section>
    </div>}
    {result&&error&&<div className="wz-alert" role="alert">{error}</div>}
    <footer className="wz-bottom"><span>WAAZA · FINANCING CLARITY</span>{resetOpen?<div><span>Discard this plan?</span><button className="wz-button wz-button-quiet" onClick={()=>setResetOpen(false)}>Keep working</button><button className="wz-button" onClick={reset}>Discard & start again</button></div>:<button className="wz-text-button" disabled={busy} onClick={()=>setResetOpen(true)}><RotateCcw size={13}/>Start a new plan</button>}</footer>
  </main>;
}
