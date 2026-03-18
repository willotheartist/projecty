// app/compare/personal-vs-company-yacht-ownership/page.tsx
// Tier 1 · ~1,000/mo · Low competition
// Primary KW: personal vs company yacht ownership

import type { Metadata } from "next";
import Image from "next/image";
import { CompareSiloShell } from "../_components/CompareSiloShell";
import type { ComparePageData } from "@/lib/compare/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: ComparePageData = {
  slug: "personal-vs-company-yacht-ownership",
  tier: 1,
  intent: "commercial",
  optionA: "personal ownership",
  optionB: "company ownership",

  meta: {
    title: "Personal vs Company Yacht Ownership: Tax, Finance and Operating Differences | Waaza",
    description: "A direct comparison of owning a yacht personally versus through a company — tax treatment, benefit-in-kind, VAT, financing implications, and which structure suits different buyers.",
    canonical: "https://www.waaza.co/compare/personal-vs-company-yacht-ownership/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "Personal vs Company Yacht Ownership: A Honest Comparison",
    intro: "Owning a yacht through a company sounds tax-efficient. In most cases for privately used vessels, it is not — the benefit-in-kind tax on private use frequently makes company ownership more expensive than personal ownership once all the numbers are modelled. This guide compares both structures honestly across tax, VAT, financing, and operational dimensions.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  verdict: {
    summary: "Personal ownership is simpler and usually cheaper for privately used vessels. Company ownership only makes sense for genuinely commercial operations or with a purpose-built SPV for VAT efficiency.",
    chooseA: "the yacht is for private use, you want the simplest financing process, and you do not need a VAT leasing structure.",
    chooseB: "the yacht will be used commercially as a genuine charter vessel, or you are setting up a purpose-built SPV for the Malta leasing structure — not an existing trading company.",
  },

  toc: [
    { id: "personal-ownership", label: "Personal ownership", level: 2 },
    { id: "company-ownership", label: "Company ownership", level: 2 },
    { id: "tax-comparison", label: "Tax treatment compared", level: 2 },
    { id: "benefit-in-kind", label: "Benefit-in-kind on private use", level: 2 },
    { id: "vat-comparison", label: "VAT compared", level: 2 },
    { id: "financing-comparison", label: "Financing compared", level: 2 },
    { id: "spv-distinction", label: "Company vs SPV — an important distinction", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "Is it tax efficient to buy a yacht through my company?",
      answer: "Rarely, for a privately used vessel. Any private use of a company-owned yacht by a director or shareholder creates a benefit-in-kind charge — typically 20% of the vessel's market value per year, taxed as income. On a £500,000 yacht at a 45% tax rate, this generates £45,000 of personal tax annually, which usually exceeds any corporation tax saving from the company owning the asset.",
    },
    {
      question: "Can my company claim VAT back on a yacht?",
      answer: "Only if the yacht is used exclusively for genuine business purposes. Any private use by directors or connected parties blocks VAT recovery — partially or fully. HMRC and EU tax authorities scrutinise yacht-related VAT claims heavily. Full VAT recovery on a privately used yacht is rarely sustainable and carries significant audit risk.",
    },
    {
      question: "Will lenders finance a yacht owned by my company?",
      answer: "Most marine lenders prefer clean structures — personal ownership or a single-asset SPV. Lending against an existing trading company is more complex because the company has other assets, liabilities, and creditors. Most lenders will insist the yacht be held in a separate clean entity before they will lend against it.",
    },
    {
      question: "What is the difference between company ownership and SPV ownership?",
      answer: "An SPV is a company created solely to own the yacht — no other assets, no other liabilities. An existing trading company has a full business behind it. An SPV is cleaner for lending, simpler for tax analysis, and more acceptable to lenders and insurers. If corporate ownership is needed, an SPV is almost always preferable to using an existing company.",
    },
    {
      question: "Does owning through a company affect yacht insurance?",
      answer: "Not significantly. Marine insurers are accustomed to yachts owned through companies and SPVs. The policy is placed in the company's name with the beneficial owner noted. The underwriting assessment focuses on the vessel and the beneficial owner's experience rather than the ownership vehicle.",
    },
  ],

  relatedPages: [
    { title: "Buying Through a Company", href: "/structuring/buying-a-yacht-through-a-company/", description: "Full tax and financing analysis" },
    { title: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/", description: "SPV vs personal in detail" },
    { title: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/", description: "VAT for each ownership structure" },
    { title: "Malta Yacht Leasing", href: "/structuring/malta-yacht-leasing/", description: "The SPV-based VAT structure" },
    { title: "What Lenders Look For", href: "/financing/what-lenders-look-for-in-yacht-financing/", description: "Lender view on ownership structure" },
    { title: "Structuring Hub", href: "/structuring/", description: "All structuring guides" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Compare", href: "/compare/" },
    { name: "Personal vs Company Ownership", href: "/compare/personal-vs-company-yacht-ownership/" },
  ],

  cta: {
    heading: "See how your ownership structure affects financing readiness",
    body: "Waaza models the financing implications of personal, SPV, and company ownership before you approach a lender.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "personal vs company yacht ownership",
    secondary: ["company owned yacht", "yacht through limited company", "yacht ownership structure", "buying yacht through company uk"],
    lsi: ["yacht benefit in kind", "company yacht tax uk", "yacht corporation tax", "yacht ownership vehicle comparison"],
  },
};

export const metadata: Metadata = {
  title: pageData.meta.title,
  description: pageData.meta.description,
  alternates: { canonical: pageData.meta.canonical },
  openGraph: { title: pageData.meta.title, description: pageData.meta.description, url: pageData.meta.canonical, siteName: "Waaza", locale: "en_GB", type: "article", images: [{ url: "https://www.waaza.co/og/personal-vs-company-yacht-ownership-og.jpg", width: 1200, height: 630, alt: "Personal vs company yacht ownership — Waaza" }] },
  twitter: { card: "summary_large_image", site: "@waaza", title: pageData.meta.title, description: pageData.meta.description, images: ["https://www.waaza.co/og/personal-vs-company-yacht-ownership-og.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

function ArticleContent() {
  return (
    <>
      <h2 id="personal-ownership">Personal ownership</h2>
      <p>
        Personal ownership is the default — the yacht is registered directly in the buyer's name, and the buyer is the legal and beneficial owner. It is the simplest structure to establish, the easiest for lenders to assess, the most straightforward for insurance, and the least expensive to maintain. There are no corporate filings, no annual accounts, and no additional administrative costs.
      </p>
      <p>
        For most private yacht buyers, personal ownership is the correct structure. The only meaningful limitation is that it precludes the Malta or French leasing structures for VAT reduction — those require an intermediary company. For buyers who do not need a leasing structure, this limitation is irrelevant.
      </p>

      <h2 id="company-ownership">Company ownership</h2>
      <p>
        Company ownership means the yacht is owned by a legal entity rather than an individual. That entity could be an existing trading company, a holding company, or a purpose-built SPV. In each case, the company is the legal owner of the vessel.
      </p>
      <p>
        Business owners frequently consider this route hoping it will create tax efficiencies. In most cases for privately used vessels, it does not — and it often creates the opposite. The tax treatment of personal use of a company asset is unfavourable in most jurisdictions, and the financing process becomes more complex.
      </p>

      <Image src="/insurance/waaza-insurance-1.png" alt="Illustration of a financial adviser discussing personal versus company yacht ownership structure with a yacht buyer" width={1080} height={720} style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }} />

      <h2 id="tax-comparison">Tax treatment compared</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Tax area</th>
            <th>Personal ownership</th>
            <th>Company ownership</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Purchase tax</td><td>None (SDLT not applicable to boats)</td><td>None</td></tr>
          <tr><td>Running costs</td><td>Not deductible — personal expense</td><td>Deductible only if business use</td></tr>
          <tr><td>Private use benefit</td><td>No charge — you own it personally</td><td>Benefit-in-kind charge on private use</td></tr>
          <tr><td>Capital gains on sale</td><td>CGT if gain — private yacht often exempt</td><td>Corporation tax on gain</td></tr>
          <tr><td>Inheritance planning</td><td>Part of personal estate</td><td>SPV shares may be more easily transferred</td></tr>
        </tbody>
      </table>

      <h2 id="benefit-in-kind">Benefit-in-kind on private use</h2>
      <p>
        This is the most significant tax issue with company ownership of a privately used yacht. In the UK, HMRC charges income tax on the benefit of using a company asset privately. For yachts, the charge is calculated at 20% of the vessel's market value per year.
      </p>
      <p>
        On a £600,000 yacht, the annual benefit-in-kind charge is £120,000. At a 45% income tax rate, the personal tax cost is £54,000 per year — simply for having the use of the vessel. Over five years, this is £270,000 in additional personal taxation. This typically dwarfs any corporation tax relief on the running costs.
      </p>
      <p>
        Similar rules apply across EU member states. The specific calculation methodology varies, but the principle — that private use of a company asset generates taxable income for the user — is consistent.
      </p>
      <p>
        For a full analysis of when company ownership genuinely works (and when it doesn't), see the guide to{" "}
        <a href="/structuring/buying-a-yacht-through-a-company/">buying a yacht through a company</a>.
      </p>

      <h2 id="vat-comparison">VAT compared</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>VAT aspect</th>
            <th>Personal ownership</th>
            <th>Company / SPV ownership</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>VAT on purchase</td><td>Full standard rate</td><td>Full rate — OR leasing structure available</td></tr>
          <tr><td>VAT recovery</td><td>Not available</td><td>Available for genuine commercial use only</td></tr>
          <tr><td>Leasing structure</td><td>Not available</td><td>Available via Malta or French SPV</td></tr>
          <tr><td>Private use restriction</td><td>N/A</td><td>Blocks recovery if private use present</td></tr>
        </tbody>
      </table>
      <p>
        The VAT leasing structure — primarily the{" "}
        <a href="/structuring/malta-yacht-leasing/">Malta leasing arrangement</a> — is the one genuine tax advantage of the corporate structure for many EU-based yacht buyers. But it requires a purpose-built SPV, not an existing trading company, and the vessel must be primarily used in EU waters for the structure to be relevant.
      </p>

      <h2 id="financing-comparison">Financing compared</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Financing aspect</th>
            <th>Personal ownership</th>
            <th>Company ownership</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Lender acceptance</td><td>Universal</td><td>Clean SPV accepted; trading company more complex</td></tr>
          <tr><td>Documentation</td><td>Personal financials</td><td>Corporate documents + personal guarantee</td></tr>
          <tr><td>LTV</td><td>Up to 70%</td><td>Similar for clean SPV; may be lower for complex entities</td></tr>
          <tr><td>Process complexity</td><td>Low</td><td>Higher — corporate legal work required</td></tr>
        </tbody>
      </table>

      <h2 id="spv-distinction">Company vs SPV — an important distinction</h2>
      <p>
        If corporate ownership is required — for VAT leasing or other reasons — the right vehicle is almost always a purpose-built SPV rather than an existing trading company. An SPV is a company created solely to own the yacht: no other assets, no other liabilities, no other business activity.
      </p>
      <p>
        An SPV gives the tax clarity of a corporate structure without the complications of an existing business. Lenders are comfortable with it, the benefit-in-kind analysis is cleaner, and the VAT position can be structured effectively. Using an existing trading company to own a yacht creates all the complications with none of the structural benefits of an SPV.
      </p>
      <p>
        For the detailed comparison of personal ownership against an SPV specifically, see{" "}
        <a href="/structuring/personal-vs-spv-yacht-ownership/">personal vs SPV yacht ownership</a>.
      </p>

      <Image src="/insurance/waaza-insurance-5.png" alt="Illustration of yacht buyer reviewing ownership structure documentation — comparing personal ownership versus company ownership tax implications" width={1080} height={720} style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }} />

      <blockquote>
        The instinct to route a private yacht through a company for tax efficiency is understandable. The reality, once the benefit-in-kind numbers are modelled, is that it usually costs more than personal ownership — not less.
      </blockquote>
    </>
  );
}

export default function PersonalVsCompanyPage() {
  return <CompareSiloShell data={pageData}><ArticleContent /></CompareSiloShell>;
}