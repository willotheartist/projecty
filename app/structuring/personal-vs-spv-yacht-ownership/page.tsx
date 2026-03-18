// app/structuring/personal-vs-spv-yacht-ownership/page.tsx
// ─────────────────────────────────────────────────────────────
// /structuring/personal-vs-spv-yacht-ownership/
// Tier 1 · ~1,000/mo · Low competition
// Primary KW: personal vs spv yacht ownership
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Image from "next/image";
import { StructuringSiloShell } from "../_components/StructuringSiloShell";
import type { StructuringPageData } from "@/lib/structuring/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: StructuringPageData = {
  slug: "personal-vs-spv-yacht-ownership",
  tier: 1,
  intent: "commercial",

  meta: {
    title: "Personal vs SPV Yacht Ownership: Which Structure Is Right for You? | Waaza",
    description:
      "Should you own your yacht personally or through an SPV? This guide compares the financing, tax, VAT, and operational implications of each structure for yacht buyers.",
    canonical: "https://www.waaza.co/structuring/personal-vs-spv-yacht-ownership/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "Personal vs SPV Yacht Ownership: Financing, Tax, and Operational Implications",
    intro:
      "The choice between owning a yacht personally or through a special purpose vehicle is one of the first and most consequential structuring decisions in any significant yacht transaction. It affects the complexity of the purchase, the financing terms available, the VAT treatment, the ongoing tax position, and the ease of eventual sale. This guide compares both structures across every dimension that matters.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  toc: [
    { id: "personal-ownership", label: "Personal ownership — the default", level: 2 },
    { id: "spv-ownership", label: "SPV ownership — when it makes sense", level: 2 },
    { id: "financing-comparison", label: "How each affects your financing", level: 2 },
    { id: "vat-comparison", label: "VAT implications of each structure", level: 2 },
    { id: "operational-differences", label: "Operational and practical differences", level: 2 },
    { id: "which-to-choose", label: "Which structure should you choose?", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "What is an SPV in the context of yacht ownership?",
      answer:
        "An SPV (Special Purpose Vehicle) is a company created for the sole purpose of owning the yacht. It has no other assets or trading activity. Typically incorporated in Malta or another EU jurisdiction, the SPV holds the vessel, and the beneficial owner holds shares in the SPV. This separates the asset from the owner's personal balance sheet and enables certain VAT and tax structuring options.",
    },
    {
      question: "Is personal or SPV ownership better for financing?",
      answer:
        "Personal ownership is generally simpler for financing — lenders deal directly with the individual, documentation requirements are lower, and the credit assessment is more straightforward. SPV ownership is accepted by most specialist marine lenders but requires additional corporate documentation, may attract different LTV limits, and occasionally requires personal guarantees from the beneficial owner.",
    },
    {
      question: "Can I get a yacht loan through an SPV?",
      answer:
        "Yes. Most specialist marine lenders and private banks will finance yacht purchases through an SPV, particularly where the structure is clean — a single-asset Maltese or similar EU company with clear beneficial ownership. Offshore entities and complex multi-layer structures are more problematic and may require specialist private bank financing rather than standard marine lending.",
    },
    {
      question: "What are the tax advantages of SPV ownership?",
      answer:
        "The primary tax advantage of SPV ownership is the ability to use the Malta or French leasing structure to reduce the effective VAT rate on the purchase. An SPV can also provide a cleaner separation between the asset and the owner's personal estate for inheritance planning. However, SPV ownership does not automatically reduce income tax or capital gains tax, and personal use of the yacht through a company structure can create benefit-in-kind tax liabilities.",
    },
    {
      question: "Does SPV ownership affect the yacht's insurance?",
      answer:
        "Not significantly. Marine insurers are accustomed to insuring yachts owned through SPVs. The policy is typically placed in the SPV's name, and the beneficial owner is noted as an interested party. The underwriting assessment focuses on the vessel, the use, and the beneficial owner's experience rather than the ownership vehicle.",
    },
    {
      question: "What are the ongoing costs of SPV ownership?",
      answer:
        "An SPV requires annual accounts, corporate filings, registered office and agent fees, and in some cases audit requirements. A typical Maltese SPV might cost €2,000–€5,000 per year in ongoing administrative costs. These costs are additional to the insurance, maintenance, and financing costs of the yacht itself and should be factored into the ownership budget.",
    },
    {
      question: "When is SPV ownership not recommended?",
      answer:
        "SPV ownership adds cost and complexity without proportionate benefit for buyers with simple tax positions, smaller vessels, or limited appetite for ongoing corporate administration. If personal ownership achieves the same outcome with less friction — and for many buyers it does — the SPV structure is unnecessary. The decision should be made with tax and legal advice specific to your residency and circumstances.",
    },
  ],

  relatedPages: [
    { title: "Structuring Hub", href: "/structuring/", description: "All structuring topics" },
    { title: "Buying Through a Company", href: "/structuring/buying-a-yacht-through-a-company/", description: "Company ownership in detail" },
    { title: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/", description: "How VAT applies to each structure" },
    { title: "Malta Yacht Leasing", href: "/structuring/malta-yacht-leasing/", description: "The SPV-linked leasing structure" },
    { title: "What Lenders Look For", href: "/financing/what-lenders-look-for-in-yacht-financing/", description: "Lender view on ownership structure" },
    { title: "How Yacht Financing Works", href: "/financing/how-yacht-financing-works/", description: "Financing basics" },
    { title: "LTV in Yacht Financing", href: "/financing/ltv-in-yacht-financing/", description: "How structure affects LTV" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Structuring", href: "/structuring/" },
    { name: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/" },
  ],

  cta: {
    heading: "Model the financing implications of your ownership structure",
    body: "Waaza's assessment shows how personal vs SPV ownership affects your financing readiness, LTV, and lender options.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "spv yacht ownership",
    secondary: ["personal vs spv yacht", "yacht ownership structure", "buying yacht through spv", "yacht spv company"],
    lsi: ["yacht special purpose vehicle", "single asset company yacht", "malta spv yacht", "yacht ownership vehicle"],
  },
};

export const metadata: Metadata = {
  title: pageData.meta.title,
  description: pageData.meta.description,
  alternates: { canonical: pageData.meta.canonical },
  openGraph: {
    title: pageData.meta.title,
    description: pageData.meta.description,
    url: pageData.meta.canonical,
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    images: [{ url: "https://www.waaza.co/og/personal-vs-spv-yacht-ownership-og.jpg", width: 1200, height: 630, alt: "Personal vs SPV yacht ownership — Waaza" }],
  },
  twitter: { card: "summary_large_image", site: "@waaza", title: pageData.meta.title, description: pageData.meta.description, images: ["https://www.waaza.co/og/personal-vs-spv-yacht-ownership-og.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

function ArticleContent() {
  return (
    <>
      <h2 id="personal-ownership">Personal ownership — the default</h2>
      <p>
        Personal ownership means the yacht is registered directly in the buyer's name. There is no
        intermediate entity — the individual is the legal and beneficial owner, responsible for all
        obligations associated with the vessel and entitled to all its benefits.
      </p>
      <p>
        For most yacht buyers, personal ownership is the right structure. It is the simplest to establish,
        the easiest for lenders to assess, the most straightforward for insurance, and the least expensive
        to maintain. There are no corporate filings, no annual accounts, and no ongoing administrative
        costs beyond those of the vessel itself.
      </p>
      <p>
        The primary limitation of personal ownership is that it precludes certain VAT structuring options
        — specifically the Malta and French leasing arrangements, which require an intermediary company.
        For buyers who do not need a leasing structure and have a straightforward tax position, this
        limitation is irrelevant.
      </p>

      <h2 id="spv-ownership">SPV ownership — when it makes sense</h2>
      <p>
        A Special Purpose Vehicle (SPV) is a company created for the sole purpose of owning the yacht.
        It holds no other assets, conducts no other business, and exists purely as a legal wrapper around
        the vessel. The beneficial owner holds shares in the SPV and exercises control through the
        corporate structure.
      </p>
      <p>
        The primary reasons buyers choose SPV ownership are: to access the{" "}
        <a href="/structuring/malta-yacht-leasing/">Malta leasing structure</a> or French equivalent
        for VAT efficiency; to separate the asset from their personal balance sheet for liability or
        estate planning reasons; or because the yacht will be operated commercially and the company
        structure is appropriate for the charter business.
      </p>
      <p>
        The SPV is typically incorporated in Malta for EU-based buyers, because Malta's legal framework
        for yacht ownership is well-developed, its VAT leasing guidelines are clear, and the jurisdiction
        is respected by mainstream marine lenders. Other jurisdictions — Cayman Islands, BVI — are used
        for offshore structures, but these require private bank financing rather than standard marine lending.
      </p>

      <Image
        src="/structuring/waaza-insurance-3.png"
        alt="Illustration comparing personal yacht ownership versus SPV ownership structure showing the key differences in financing and tax treatment"
        width={1080}
        height={720}
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }}
      />

      <h2 id="financing-comparison">How each structure affects your financing</h2>
      <p>
        Personal ownership is universally accepted by marine lenders. The credit assessment focuses on
        the individual: their income, net worth, liquidity, and existing leverage. Documentation is
        straightforward, and the lending process is familiar to every marine finance provider.
      </p>
      <p>
        SPV ownership is accepted by most specialist marine lenders and private banks, but with
        additional requirements. The lender must be satisfied that:
      </p>
      <ul>
        <li>The SPV is a clean single-asset entity with no other liabilities</li>
        <li>The beneficial ownership is clear and documented</li>
        <li>The jurisdiction of incorporation is on the lender's accepted list</li>
        <li>The beneficial owner provides a personal guarantee (required by most lenders)</li>
        <li>The corporate documents — certificate of incorporation, memorandum and articles, shareholder register — are in order</li>
      </ul>
      <p>
        LTV limits for SPV-owned vessels are sometimes slightly lower than for personally owned vessels,
        reflecting the additional complexity of the security structure. The lender's charge is taken over
        the vessel itself, but the borrower is the SPV, and the personal guarantee from the beneficial
        owner is the primary credit support.
      </p>
      <p>
        For a fuller picture of what lenders require in either scenario, see the guide to{" "}
        <a href="/financing/what-lenders-look-for-in-yacht-financing/">what lenders look for</a>.
      </p>

      <h2 id="vat-comparison">VAT implications of each structure</h2>
      <p>
        This is the central differentiator between the two structures for most buyers in the European market.
      </p>
      <p>
        With <strong>personal ownership</strong>, the buyer pays the full applicable VAT rate on purchase —
        or inherits the existing VAT paid status of the vessel. No leasing structure is available to reduce
        the VAT base. The VAT position is simple and transparent.
      </p>
      <p>
        With <strong>SPV ownership</strong>, the Malta or French leasing structure becomes available. The
        SPV leases the vessel to the beneficial owner, VAT is applied only to the EU-water-attributable
        portion of the lease, and the effective VAT rate is significantly lower than the standard rate.
        For a vessel valued at €2 million, the difference between paying 18% VAT (€360,000) and an
        effective leasing rate of 5.4% (€108,000) is €252,000.
      </p>
      <p>
        For a full explanation of how VAT leasing works, see{" "}
        <a href="/structuring/yacht-vat-explained/">yacht VAT explained</a> and the{" "}
        <a href="/structuring/malta-yacht-leasing/">Malta yacht leasing guide</a>.
      </p>

      <h2 id="operational-differences">Operational and practical differences</h2>
      <p>
        Beyond financing and tax, the two structures have practical operational differences that buyers
        should consider:
      </p>
      <ul>
        <li>
          <strong>Crew and employment:</strong> An SPV can employ crew directly, which can simplify
          payroll and employment obligations. Personal ownership typically means the owner employs crew
          directly or through a management company.
        </li>
        <li>
          <strong>Port entry and customs:</strong> The vessel's flag and registration — not the ownership
          structure — primarily determines customs treatment. An SPV-owned vessel sails under the same
          flag as a personally owned vessel.
        </li>
        <li>
          <strong>Sale of the vessel:</strong> Selling the vessel from an SPV can be achieved by selling
          the shares of the SPV rather than the vessel itself, potentially avoiding transfer taxes and
          simplifying the VAT position for the buyer. This structure can make the vessel more attractive
          to buyers.
        </li>
        <li>
          <strong>Ongoing administration:</strong> The SPV requires annual accounts, corporate filings,
          and a registered office. A Maltese SPV typically costs €2,000–€5,000 per year in ongoing costs.
        </li>
      </ul>

      <h2 id="which-to-choose">Which structure should you choose?</h2>
      <p>
        The answer depends on the vessel value, your tax residency, your intended use, and the scale of
        the VAT saving available. A rough framework:
      </p>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Recommended structure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vessel under €500,000, private use, simple tax position</td>
            <td>Personal ownership — SPV costs outweigh benefits</td>
          </tr>
          <tr>
            <td>Vessel €500,000–€2,000,000, EU-based buyer, VAT saving material</td>
            <td>Consider Malta SPV + leasing structure</td>
          </tr>
          <tr>
            <td>Vessel over €2,000,000, EU waters, VAT saving very material</td>
            <td>Malta or French SPV + leasing structure — strong case</td>
          </tr>
          <tr>
            <td>Non-EU resident buyer, vessel in non-EU waters</td>
            <td>Personal or offshore entity — EU leasing less relevant</td>
          </tr>
          <tr>
            <td>Charter operation planned</td>
            <td>SPV or company structure — enables VAT recovery</td>
          </tr>
        </tbody>
      </table>
      <p>
        These are starting points, not conclusions. The right structure requires advice from a tax lawyer
        or adviser with specific experience in marine transactions in your jurisdiction. The structuring
        decision should be made before any purchase agreement is signed.
      </p>

      <blockquote>
        The SPV structure is not automatically better — it is conditionally better. The conditions are:
        a sufficiently high vessel value to make the VAT saving material, a tax position that benefits
        from the corporate wrapper, and willingness to maintain the ongoing administrative obligations
        it creates.
      </blockquote>
    </>
  );
}

export default function PersonalVsSpvPage() {
  return (
    <StructuringSiloShell data={pageData}>
      <ArticleContent />
    </StructuringSiloShell>
  );
}