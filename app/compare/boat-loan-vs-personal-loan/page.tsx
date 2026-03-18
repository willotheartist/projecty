// app/compare/boat-loan-vs-personal-loan/page.tsx
// Tier 1 · ~1,000/mo · Low competition
// Primary KW: boat loan vs personal loan

import type { Metadata } from "next";
import Image from "next/image";
import { CompareSiloShell } from "../_components/CompareSiloShell";
import type { ComparePageData } from "@/lib/compare/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: ComparePageData = {
  slug: "boat-loan-vs-personal-loan",
  tier: 1,
  intent: "commercial",
  optionA: "a boat loan",
  optionB: "a personal loan",

  meta: {
    title: "Boat Loan vs Personal Loan: Which Is Better for Buying a Boat? | Waaza",
    description: "A direct comparison of secured boat loans and unsecured personal loans — interest rates, loan amounts, terms, and which makes sense for different purchase prices.",
    canonical: "https://www.waaza.co/compare/boat-loan-vs-personal-loan/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "Boat Loan vs Personal Loan: Which Is the Right Way to Finance a Boat?",
    intro: "For smaller boat purchases, a personal loan can seem like the simpler route — no survey, no security registration, no specialist lender. But for anything above £30,000–£50,000, the difference in interest rates, loan amounts, and terms makes a secured boat loan the materially better option in almost every case. This guide explains why, and when a personal loan might still make sense.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  verdict: {
    summary: "For boats over £30,000, a secured boat loan is almost always cheaper and allows larger borrowing over longer terms. Personal loans are only competitive for small, low-value craft.",
    chooseA: "the boat is worth over £30,000 and you want the best rate, largest loan amount, and longest repayment term available.",
    chooseB: "the boat is worth under £20,000, you want a fast, simple process with no survey or security registration, and the higher rate is acceptable on a small amount.",
  },

  toc: [
    { id: "what-is-a-boat-loan", label: "What is a secured boat loan?", level: 2 },
    { id: "what-is-a-personal-loan", label: "What is an unsecured personal loan?", level: 2 },
    { id: "rates-compared", label: "Interest rates compared", level: 2 },
    { id: "loan-amounts", label: "Maximum loan amounts", level: 2 },
    { id: "terms", label: "Repayment terms", level: 2 },
    { id: "eligibility", label: "Eligibility requirements", level: 2 },
    { id: "which-to-choose", label: "Which to choose by purchase price", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "Can I use a personal loan to buy a boat?",
      answer: "Yes — a personal loan can be used to purchase a boat. There are no restrictions on what you use an unsecured personal loan for. However, for any boat above £20,000–£30,000, the interest rate differential between a personal loan and a secured marine loan makes the personal loan significantly more expensive over the repayment period.",
    },
    {
      question: "What is the difference between a boat loan and a personal loan?",
      answer: "A boat loan is a secured lending product — the lender takes a charge over the vessel as security, which reduces their risk and allows them to offer lower interest rates and larger loan amounts over longer terms. A personal loan is unsecured — the lender has no claim on any specific asset, which means higher rates and lower maximums to compensate for the increased risk.",
    },
    {
      question: "What is the maximum amount I can borrow on a personal loan for a boat?",
      answer: "Most mainstream personal loan providers cap unsecured loans at £25,000–£50,000. Specialist providers may go higher but at significantly elevated rates. A secured marine loan, by contrast, can finance several million pounds against a vessel of appropriate value — with the loan amount determined by the LTV limit applied to the vessel's value.",
    },
    {
      question: "Is a boat loan harder to get than a personal loan?",
      answer: "A secured marine loan has more documentation requirements — survey, vessel valuation, insurance confirmation, flag registration. A personal loan typically requires only income and credit assessment. However, the marine loan's requirements reflect the security being taken, and for buyers with a clean financial profile and a well-maintained vessel, the process is straightforward.",
    },
    {
      question: "Which is faster — a boat loan or a personal loan?",
      answer: "A personal loan can typically be approved and funded within days. A marine loan takes longer — the survey, valuation, insurance, and legal work around the charge registration typically add several weeks to the process. For buyers working to a tight timeline, this needs to be factored into the purchase planning.",
    },
  ],

  relatedPages: [
    { title: "How to Get a Boat Loan", href: "/financing/how-to-get-a-boat-loan/", description: "The marine loan process explained" },
    { title: "Boat Loan Rates", href: "/financing/boat-loan-rates/", description: "Current rate ranges" },
    { title: "Boat Loan Requirements", href: "/financing/boat-loan-requirements/", description: "What lenders need" },
    { title: "Boat Loan Pre-Approval", href: "/financing/boat-loan-pre-approval/", description: "Getting pre-approved" },
    { title: "How Much Can I Afford?", href: "/assessment/how-much-yacht-can-i-afford/", description: "Budget calculator" },
    { title: "What Lenders Look For", href: "/financing/what-lenders-look-for-in-yacht-financing/", description: "Lender assessment criteria" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Compare", href: "/compare/" },
    { name: "Boat Loan vs Personal Loan", href: "/compare/boat-loan-vs-personal-loan/" },
  ],

  cta: {
    heading: "Check your readiness for a secured boat loan",
    body: "Waaza's assessment shows your financing readiness, indicative LTV, and recommended lender path before you apply.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "boat loan vs personal loan",
    secondary: ["personal loan for boat", "boat loan interest rate", "secured vs unsecured boat loan", "best way to finance a boat"],
    lsi: ["marine secured loan", "boat finance comparison", "yacht loan rates", "personal loan boat purchase"],
  },
};

export const metadata: Metadata = {
  title: pageData.meta.title,
  description: pageData.meta.description,
  alternates: { canonical: pageData.meta.canonical },
  openGraph: { title: pageData.meta.title, description: pageData.meta.description, url: pageData.meta.canonical, siteName: "Waaza", locale: "en_GB", type: "article" },
  twitter: { card: "summary_large_image", site: "@waaza", title: pageData.meta.title, description: pageData.meta.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

function ArticleContent() {
  return (
    <>
      <h2 id="what-is-a-boat-loan">What is a secured boat loan?</h2>
      <p>
        A secured boat loan — also called a marine loan or yacht mortgage in larger transactions — is a lending product specifically designed for vessel purchases. The lender advances funds to the borrower and registers a charge over the vessel as security. If the borrower defaults, the lender can repossess and sell the vessel to recover the outstanding balance.
      </p>
      <p>
        The security reduces the lender's risk, which is why secured marine loans offer materially lower interest rates than unsecured alternatives. Specialist marine lenders — including dedicated marine finance houses, private banks with marine desks, and some high street banks — offer these products. Terms are typically 10–15 years for vessels in good condition, with LTV of 60–70%.
      </p>

      <h2 id="what-is-a-personal-loan">What is an unsecured personal loan?</h2>
      <p>
        An unsecured personal loan is a general-purpose borrowing product — the lender has no claim on any specific asset. The borrower's creditworthiness and income are the sole basis for the lending decision. Because there is no security, the lender charges higher interest rates to compensate for the increased risk.
      </p>
      <p>
        Personal loans are widely available from high street banks, building societies, and online lenders. Approval is faster and the documentation requirements are simpler. But the rate differential is significant — and on larger purchases, it adds up materially over the loan term.
      </p>

      <Image src="/insurance/waaza-insurance-8.png" alt="Illustration of a boat buyer comparing financing options — secured boat loan versus unsecured personal loan for a boat purchase" width={1080} height={720} style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }} />

      <h2 id="rates-compared">Interest rates compared</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Loan type</th>
            <th>Typical interest rate</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Secured marine loan</td><td>5–8% (variable by profile)</td><td>Rate tied to SONIA / base rate plus margin</td></tr>
          <tr><td>Personal loan (£10k–£25k)</td><td>7–15%</td><td>Varies widely by provider and credit profile</td></tr>
          <tr><td>Personal loan (above £25k)</td><td>10–20%+</td><td>Specialist providers, often higher risk pricing</td></tr>
        </tbody>
      </table>
      <p>
        The rate differential is most significant on larger amounts and longer terms. On a £100,000 purchase financed at 70% LTV (£70,000 borrowed), the difference between a 6% secured marine rate and a 12% personal loan rate over 10 years is approximately £25,000 in additional interest. On larger vessels, the difference is proportionally larger.
      </p>

      <h2 id="loan-amounts">Maximum loan amounts</h2>
      <p>
        Personal loans are typically capped at £25,000–£50,000 by mainstream providers. Some specialist unsecured lenders will go higher, but at elevated rates that further erode the case for this route on larger purchases.
      </p>
      <p>
        Secured marine loans have no practical upper limit beyond the LTV constraint applied to the vessel's value. Lenders will advance 60–70% of a vessel valued at any amount — from £30,000 to £30 million. The scale of available financing on a secured basis is the primary reason yacht buyers use marine loans rather than personal loans for anything above a small craft.
      </p>

      <h2 id="terms">Repayment terms</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Secured boat loan</th>
            <th>Personal loan</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Maximum term</td><td>10–15 years</td><td>1–7 years (most providers)</td></tr>
          <tr><td>Balloon / bullet option</td><td>Yes — common</td><td>No</td></tr>
          <tr><td>Early repayment</td><td>Possible, may have fee</td><td>Usually allowed, check terms</td></tr>
          <tr><td>Fixed vs variable</td><td>Both available</td><td>Usually fixed</td></tr>
        </tbody>
      </table>
      <p>
        The longer term available on a marine loan significantly reduces the monthly payment for a given borrowing amount — an important consideration for buyers managing cash flow alongside the running costs of vessel ownership.
      </p>

      <h2 id="eligibility">Eligibility requirements</h2>
      <p>
        A <strong>personal loan</strong> requires primarily a credit check and income assessment. No vessel documentation, survey, or insurance is needed. Approval can be in principle within hours and funded within days.
      </p>
      <p>
        A <strong>secured marine loan</strong> requires a vessel survey (for used vessels), confirmation of insurance, flag registration, and legal work to register the lender's charge over the vessel. The process typically takes several weeks from application to drawdown. For buyers with strong profiles purchasing well-maintained vessels, the process is straightforward — but it requires more preparation time than a personal loan.
      </p>

      <h2 id="which-to-choose">Which to choose by purchase price</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Purchase price</th>
            <th>Recommended route</th>
            <th>Rationale</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Under £15,000</td><td>Personal loan</td><td>Secured loan setup cost not worth it at this value</td></tr>
          <tr><td>£15,000 – £30,000</td><td>Either — compare rates</td><td>Rate differential starting to matter; secured often better</td></tr>
          <tr><td>£30,000 – £100,000</td><td>Secured marine loan</td><td>Rate and term advantage clearly outweigh setup cost</td></tr>
          <tr><td>Over £100,000</td><td>Secured marine loan</td><td>Personal loan insufficient; secured only practical route</td></tr>
        </tbody>
      </table>

      <blockquote>
        The personal loan is faster and simpler. The boat loan is cheaper, allows more borrowing, and over longer terms. For any purchase above £30,000, the maths almost always favours the secured route.
      </blockquote>
    </>
  );
}

export default function BoatLoanVsPersonalLoanPage() {
  return <CompareSiloShell data={pageData}><ArticleContent /></CompareSiloShell>;
}