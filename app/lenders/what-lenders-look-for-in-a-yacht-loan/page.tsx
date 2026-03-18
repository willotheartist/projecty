// app/lenders/what-lenders-look-for-in-a-yacht-loan/page.tsx
// Tier 1 · ~1,000/mo · Low competition
// Primary KW: what lenders look for yacht loan

import type { Metadata } from "next";
import Image from "next/image";
import { LendersSiloShell } from "../_components/LendersSiloShell";
import type { LendersPageData } from "@/lib/lenders/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: LendersPageData = {
  slug: "what-lenders-look-for-in-a-yacht-loan",
  tier: 1,
  intent: "informational",

  meta: {
    title: "What Lenders Look for in a Yacht Loan Application | Waaza",
    description: "The exact criteria yacht lenders use to assess applications — buyer profile, vessel quality, LTV, ownership structure, documentation, and the risk flags that cause declines.",
    canonical: "https://www.waaza.co/lenders/what-lenders-look-for-in-a-yacht-loan/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "What Lenders Look for in a Yacht Loan: The Full Assessment Framework",
    intro: "Every yacht loan application is assessed across the same core dimensions: the buyer's financial profile, the vessel's quality and value, the ownership structure, and the proposed loan parameters. Understanding exactly what lenders evaluate — and what triggers a decline — is the foundation of a well-prepared financing approach.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  toc: [
    { id: "buyer-profile", label: "Buyer financial profile", level: 2 },
    { id: "vessel-assessment", label: "Vessel assessment", level: 2 },
    { id: "ltv-deposit", label: "LTV and deposit", level: 2 },
    { id: "ownership-structure", label: "Ownership structure", level: 2 },
    { id: "documentation", label: "Documentation requirements", level: 2 },
    { id: "risk-flags", label: "Risk flags that cause declines", level: 2 },
    { id: "what-strengthens", label: "What strengthens an application", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "What credit score do I need for a yacht loan?",
      answer: "Specialist marine lenders and private banks do not use the same retail credit scoring frameworks as high street lenders. The assessment is holistic — income, net worth, liquidity, existing leverage, and the specific transaction. A strong financial profile with a clear income stream and meaningful liquidity will carry more weight than a credit score number.",
    },
    {
      question: "How much deposit do I need for a yacht loan?",
      answer: "Most specialist marine lenders require a deposit of 30–40% of the vessel's value — equivalent to financing at 60–70% LTV. Buyers with very strong profiles and existing relationships may access up to 75–80% LTV, reducing the required deposit to 20–25%. A larger deposit generally produces better terms.",
    },
    {
      question: "What income do I need to get a yacht loan?",
      answer: "Lenders assess income in relation to the loan amount — specifically, whether the annual loan service cost (interest plus principal repayment) is comfortably covered by income. As a rough guide, the annual loan payment should represent no more than 30–40% of net annual income. The income type matters too — salaried income is viewed more favourably than variable or passive income.",
    },
    {
      question: "Does the vessel's age affect whether I can get a loan?",
      answer: "Yes significantly. Most mainstream marine lenders apply maximum age limits — typically the vessel should not exceed 20–25 years at the end of the loan term. A 15-year-old vessel financed over 10 years would be 25 at maturity — borderline for many lenders. Older vessels require specialist lenders, larger deposits, and shorter loan terms.",
    },
    {
      question: "What documents do I need for a yacht loan application?",
      answer: "Typically: proof of identity and address, two to three years of tax returns or income evidence, bank statements (typically three months), a net worth statement, vessel survey (for used vessels), proof of insurance, vessel registration documentation, and ownership structure documentation if applicable. For SPV-owned vessels, corporate documents and shareholder registers are also required.",
    },
    {
      question: "What are the most common reasons a yacht loan is declined?",
      answer: "The most common reasons are: insufficient deposit or liquidity, income insufficient to service the loan comfortably, vessel age exceeding the lender's limit, unclear VAT position, unacceptable flag jurisdiction, unsatisfactory survey results, complex or unexplained ownership structure, and inadequate or inappropriate insurance.",
    },
  ],

  relatedPages: [
    { title: "Who Finances Yachts in the UK", href: "/lenders/who-finances-yachts-in-the-uk/", description: "The lenders doing the assessing" },
    { title: "Private Bank vs Marine Lender", href: "/lenders/private-bank-vs-marine-lender/", description: "How criteria differ by lender type" },
    { title: "Typical Deposit for Yacht Financing", href: "/financing/typical-deposit-for-yacht-financing/", description: "LTV and deposit in detail" },
    { title: "How Vessel Age Affects Financing", href: "/financing/how-vessel-age-affects-financing/", description: "Age as a lender criterion" },
    { title: "Hull and Machinery Insurance", href: "/insurance/hull-and-machinery-insurance/", description: "The insurance lenders require" },
    { title: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/", description: "Ownership structure and lender acceptance" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Lenders", href: "/lenders/" },
    { name: "What Lenders Look For", href: "/lenders/what-lenders-look-for-in-a-yacht-loan/" },
  ],

  cta: {
    heading: "See how your profile scores against lender criteria",
    body: "Waaza's readiness assessment evaluates your buyer profile, vessel, and structure against real lender criteria — before you approach anyone.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "what lenders look for yacht loan",
    secondary: ["yacht loan requirements", "yacht finance criteria", "boat loan application requirements", "how to qualify for yacht financing"],
    lsi: ["yacht lender assessment", "marine loan approval criteria", "yacht finance eligibility", "boat loan underwriting factors"],
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
      <h2 id="buyer-profile">Buyer financial profile</h2>
      <p>
        The buyer's financial profile is the first and most fundamental dimension of any yacht loan assessment. Lenders are asking one core question: does this person have the financial capacity to service this loan comfortably, and the liquidity to absorb the ongoing costs of yacht ownership?
      </p>
      <p>The key components of the buyer profile assessment are:</p>
      <ul>
        <li>
          <strong>Income:</strong> The total annual income available to service the loan. Salaried income from a stable employer is viewed most favourably. Business income, director's remuneration, and passive income are all acceptable but may require more documentation to establish sustainability. Variable income — bonuses, commission, investment returns — is typically treated conservatively.
        </li>
        <li>
          <strong>Net worth:</strong> Total assets minus total liabilities. Lenders want to see that the vessel purchase represents a reasonable proportion of total wealth — not a leveraged bet. A buyer with significant net worth relative to the loan amount presents a better profile than one with thin assets outside the vessel itself.
        </li>
        <li>
          <strong>Liquidity:</strong> Available cash or liquid assets after the deposit is paid. Lenders are concerned about buyers who will be fully stretched after the purchase — if something goes wrong with income, can the buyer continue to service the loan? Meaningful liquidity post-purchase is reassuring.
        </li>
        <li>
          <strong>Existing leverage:</strong> Existing loans, mortgages, and other financial commitments. High existing leverage reduces appetite. A buyer who is already significantly leveraged against other assets carries more risk than an unencumbered buyer at the same income level.
        </li>
      </ul>

      <Image src="/insurance/waaza-insurance-5.png" alt="Illustration of a yacht buyer preparing financial documentation for a yacht loan application — lenders assess income, net worth, liquidity and existing leverage" width={1080} height={720} style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }} />

      <h2 id="vessel-assessment">Vessel assessment</h2>
      <p>
        The vessel is the security for the loan. Lenders assess it independently of the buyer — a strong buyer profile with a problematic vessel does not produce an approval. The vessel assessment covers:
      </p>
      <ul>
        <li>
          <strong>Age:</strong> Most mainstream lenders apply a maximum age limit — typically the vessel should not exceed 20–25 years at the end of the loan term. Vessel age is one of the most common reasons for lender decline or for being referred to the specialist/private bank market. See the dedicated guide to{" "}
          <a href="/financing/how-vessel-age-affects-financing/">how vessel age affects financing</a>.
        </li>
        <li>
          <strong>Condition:</strong> Established through a survey by an approved marine surveyor. The survey must confirm seaworthy condition and support the proposed insured and purchase value. An unsatisfactory survey — significant defects, deferred maintenance, structural issues — can halt a transaction or require remediation before completion.
        </li>
        <li>
          <strong>Builder and type:</strong> Vessels from recognised builders with established resale markets are preferred. A Sunseeker, Azimut, or Bénéteau is familiar territory for a lender; a one-off custom build with no market comparables creates valuation uncertainty that some lenders will not accept.
        </li>
        <li>
          <strong>Flag jurisdiction:</strong> The flag under which the vessel is registered affects the lender's ability to enforce security. Most lenders maintain accepted flag lists — UK, Cayman Islands, Malta, Marshall Islands, and other major registries are broadly accepted. Less common flags may require additional consideration or decline.
        </li>
        <li>
          <strong>VAT position:</strong> Clear EU VAT paid status or a well-structured leasing arrangement. An unclear or disputed VAT position affects the vessel's saleability and therefore its value as security. See <a href="/structuring/yacht-vat-explained/">yacht VAT explained</a>.
        </li>
      </ul>

      <h2 id="ltv-deposit">LTV and deposit</h2>
      <p>
        Loan-to-value is the ratio of the loan amount to the vessel's assessed value. Most specialist marine lenders offer LTV of 60–70% for standard transactions, meaning a deposit of 30–40% is required. Private banks may stretch to 75–80% for valued clients.
      </p>
      <p>
        The assessed value is based on the lower of: the purchase price, the surveyor's valuation, or the lender's own market assessment. If the surveyor's valuation comes in below the purchase price, the LTV is calculated against the lower figure — requiring a larger deposit or a price renegotiation.
      </p>
      <p>
        Lenders view larger deposits positively — they reduce exposure and signal a buyer who has meaningful skin in the game. A buyer offering 40% deposit is a meaningfully better risk than one at 30%, all else being equal.
      </p>

      <h2 id="ownership-structure">Ownership structure</h2>
      <p>
        Lenders need to understand who legally owns the vessel and who is financially responsible for the loan. Clean structures produce faster, more straightforward approvals. Complex structures create questions that require answers.
      </p>
      <p>
        Personal ownership is the cleanest and universally accepted structure. A Maltese SPV — a single-asset company created solely to own the vessel — is accepted by most specialist marine lenders and private banks, with a personal guarantee from the beneficial owner. More complex offshore structures require lenders with specific appetite for that complexity — typically private banks or specialist superyacht financiers. See{" "}
        <a href="/structuring/personal-vs-spv-yacht-ownership/">personal vs SPV ownership</a>.
      </p>

      <h2 id="documentation">Documentation requirements</h2>
      <table>
        <thead>
          <tr>
            <th>Document category</th>
            <th>Specific requirements</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Identity</td><td>Passport, proof of address (utility bill / bank statement)</td></tr>
          <tr><td>Income</td><td>2–3 years tax returns, payslips, or accounts if self-employed</td></tr>
          <tr><td>Assets / liabilities</td><td>Bank statements (3 months), investment statements, mortgage statement if applicable</td></tr>
          <tr><td>Vessel</td><td>Survey report, registration documents, purchase agreement</td></tr>
          <tr><td>VAT</td><td>VAT invoice or customs import declaration confirming VAT paid status</td></tr>
          <tr><td>Insurance</td><td>Agreed value H&M policy confirmation with lender noted as interested party</td></tr>
          <tr><td>Ownership (SPV)</td><td>Certificate of incorporation, M&A, shareholder register, UBO declaration</td></tr>
          <tr><td>Source of funds</td><td>Evidence of deposit origin — savings, sale proceeds, gift letter if applicable</td></tr>
        </tbody>
      </table>

      <h2 id="risk-flags">Risk flags that cause declines</h2>
      <p>
        Understanding what causes declines is as important as understanding what lenders want. The most common risk flags are:
      </p>
      <ul>
        <li><strong>Insufficient deposit</strong> — deposit below the lender's minimum LTV threshold</li>
        <li><strong>Vessel too old</strong> — exceeds the lender's maximum age at term end</li>
        <li><strong>Unsatisfactory survey</strong> — significant defects, deferred maintenance, or structural issues identified</li>
        <li><strong>Unclear VAT position</strong> — no documentation confirming EU VAT paid status</li>
        <li><strong>Unacceptable flag</strong> — vessel registered under a jurisdiction not on the lender's accepted list</li>
        <li><strong>Income insufficient</strong> — loan service cost represents too high a proportion of income</li>
        <li><strong>Source of funds unclear</strong> — deposit origin cannot be documented satisfactorily</li>
        <li><strong>Complex or opaque ownership</strong> — structure cannot be explained clearly or beneficial ownership is not transparent</li>
        <li><strong>Inadequate insurance</strong> — policy does not meet lender requirements (not agreed value, lender not noted)</li>
      </ul>

      <h2 id="what-strengthens">What strengthens an application</h2>
      <p>
        Beyond meeting the minimum criteria, these factors actively strengthen a yacht loan application:
      </p>
      <ul>
        <li><strong>A larger deposit</strong> — 40%+ signals financial strength and reduces lender exposure</li>
        <li><strong>A recent, clean survey</strong> — removes uncertainty about vessel condition from the outset</li>
        <li><strong>Clear, well-documented income</strong> — particularly important for self-employed buyers where income history matters</li>
        <li><strong>Meaningful liquidity post-purchase</strong> — demonstrates ability to absorb running costs and unexpected events</li>
        <li><strong>A clean ownership structure</strong> — personal ownership or a straightforward Maltese SPV processed smoothly</li>
        <li><strong>An organised application pack</strong> — lenders who receive a complete, well-structured submission process it faster and view the buyer more favourably</li>
      </ul>

      <Image src="/insurance/waaza-insurance-6.png" alt="Illustration of a yacht representing the security asset at the centre of a marine loan application — vessel quality, age, condition and VAT status all affect lender assessment" width={1080} height={720} style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }} />

      <blockquote>
        Lenders are not looking for reasons to decline — they are looking for reasons to approve. A well-prepared application that anticipates their questions and provides clear answers to each is the single most powerful thing a buyer can do before approaching any lender.
      </blockquote>
    </>
  );
}

export default function WhatLendersLookForPage() {
  return <LendersSiloShell data={pageData}><ArticleContent /></LendersSiloShell>;
}