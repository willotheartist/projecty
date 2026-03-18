// app/compare/malta-vs-french-leasing/page.tsx
// Tier 2 · ~500/mo · Very low competition — zero meaningful coverage
// Primary KW: malta vs french leasing yacht

import type { Metadata } from "next";
import Image from "next/image";
import { CompareSiloShell } from "../_components/CompareSiloShell";
import type { ComparePageData } from "@/lib/compare/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: ComparePageData = {
  slug: "malta-vs-french-leasing",
  tier: 2,
  intent: "commercial",
  optionA: "Malta leasing",
  optionB: "French leasing",

  meta: {
    title: "Malta vs French Leasing for Yachts: Which VAT Structure Is Right? | Waaza",
    description: "A direct comparison of the Malta and French VAT leasing structures for yacht purchases — effective rates, current status, lender acceptance, and which suits different buyers.",
    canonical: "https://www.waaza.co/compare/malta-vs-french-leasing/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "Malta vs French Leasing: Comparing the Two EU Yacht VAT Structures",
    intro: "Both Malta and France have offered VAT leasing structures that reduce the effective VAT rate on yacht purchases by applying VAT only to the EU-water-attributable portion of lease payments. However, the current availability, effective rates, and practical suitability of the two structures differ significantly. This guide compares them directly.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  verdict: {
    summary: "Malta leasing is the active, well-established choice. French leasing is largely discontinued and should not be relied upon without current specialist advice.",
    chooseA: "you want a well-established, lender-accepted structure with published rates and clear ongoing compliance requirements.",
    chooseB: "you are planning extended operations in French waters and have taken specific current advice confirming French leasing arrangements remain available for your transaction.",
  },

  toc: [
    { id: "how-both-work", label: "How both structures work", level: 2 },
    { id: "effective-rates", label: "Effective VAT rates compared", level: 2 },
    { id: "current-status", label: "Current status of each structure", level: 2 },
    { id: "lender-acceptance", label: "Lender and insurer acceptance", level: 2 },
    { id: "setup-process", label: "Setup process compared", level: 2 },
    { id: "cruising-area", label: "Cruising area considerations", level: 2 },
    { id: "which-to-choose", label: "Which to choose", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "Is the French leasing structure still available?",
      answer: "France officially discontinued its VAT leasing scheme in 2019 following EU Commission pressure. Some legacy arrangements continue, and some advisers offer French-law structures. However, the certainty and clarity of the French scheme no longer matches that of the Malta structure. Buyers considering a French leasing route must take current specialist advice before relying on it.",
    },
    {
      question: "What are the effective VAT rates under the Malta leasing structure?",
      answer: "Malta's Commissioner for Revenue publishes tables based on vessel length. The EU-water-use percentage ranges from 90% for vessels under 7.5 metres (effective rate 16.2%) to 30% for vessels over 24 metres (effective rate 5.4%). For most buyers considering the structure, the relevant range is vessels over 12 metres where the effective rate falls to 10.8% or below.",
    },
    {
      question: "Which structure do lenders prefer?",
      answer: "Malta leasing is more widely accepted by specialist marine lenders because it is an established, published, and regulated structure. The documentation framework is well understood. French structures — particularly where the legal basis is less clear post-2019 — are viewed with more caution by some lenders.",
    },
    {
      question: "Does the Malta leasing structure work if the yacht will be based in France?",
      answer: "Yes. The Malta leasing structure can be used regardless of the yacht's primary operating area, provided the structure is correctly established and the EU-water-use percentages are honestly applied. A yacht based in French waters but owned through a Maltese SPV with a Malta leasing arrangement is a legitimate structure, provided it is set up correctly and maintained in compliance.",
    },
    {
      question: "Can I switch from French to Malta leasing?",
      answer: "Not directly — the lease and SPV are separate legal entities in different jurisdictions. If a French structure is in place and needs to be replaced or restructured, specialist legal advice is required to unwind the existing arrangement cleanly before establishing a new one. This is not a simple substitution.",
    },
  ],

  relatedPages: [
    { title: "Malta Yacht Leasing", href: "/structuring/malta-yacht-leasing/", description: "Full Malta structure guide" },
    { title: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/", description: "VAT fundamentals" },
    { title: "VAT on Yacht Purchases in Europe", href: "/structuring/vat-on-yacht-purchases-in-europe/", description: "Country-by-country rates" },
    { title: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/", description: "The SPV that underpins both structures" },
    { title: "Loan vs Leasing", href: "/compare/loan-vs-leasing-for-yacht-purchases/", description: "Loan vs leasing overall" },
    { title: "Structuring Hub", href: "/structuring/", description: "All structuring guides" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Compare", href: "/compare/" },
    { name: "Malta vs French Leasing", href: "/compare/malta-vs-french-leasing/" },
  ],

  cta: {
    heading: "Model the leasing structure for your vessel",
    body: "Waaza's assessment factors VAT structuring into the financing readiness score and recommended path before you approach a lender.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "malta vs french leasing yacht",
    secondary: ["malta leasing vs french leasing", "yacht vat leasing comparison", "eu yacht leasing structure", "malta french yacht vat"],
    lsi: ["malta commissioner revenue yacht", "french leasing discontinued", "eu vat yacht structure comparison", "yacht leasing effective rate"],
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
      <h2 id="how-both-work">How both structures work</h2>
      <p>
        Both the Malta and French leasing structures operate on the same EU VAT law principle: VAT is due on the supply of services within the EU, and a yacht lease is a service. Since yachts operate partly in international waters outside the EU, only the EU-water-attributable portion of the lease is subject to VAT. Both structures use this principle to reduce the effective VAT base compared to an outright purchase.
      </p>
      <p>
        Under the <strong>Malta structure</strong>, a Maltese company (SPV) purchases the yacht and leases it to the beneficial owner. Malta's Commissioner for Revenue publishes tables specifying the percentage of each lease attributable to EU water use, based on vessel length. VAT at 18% is charged on that percentage only. At the end of the lease term, the beneficial owner acquires the vessel for a nominal sum.
      </p>
      <p>
        The <strong>French structure</strong> operated on similar principles, with the French tax authority specifying the applicable EU-use percentages. France discontinued its official scheme in 2019 following review by the EU Commission. Some advisers continue to offer French-law structures, but the regulatory foundation is less clear than Malta's.
      </p>

      <h2 id="effective-rates">Effective VAT rates compared</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Vessel length</th>
            <th>Malta effective VAT rate</th>
            <th>French structure</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Under 7.5m</td><td>16.2% (90% × 18%)</td><td>No longer published officially</td></tr>
          <tr><td>7.5m – 12m</td><td>14.4% (80% × 18%)</td><td>No longer published officially</td></tr>
          <tr><td>12m – 16m</td><td>10.8% (60% × 18%)</td><td>No longer published officially</td></tr>
          <tr><td>16m – 24m</td><td>7.2% (40% × 18%)</td><td>No longer published officially</td></tr>
          <tr><td>Over 24m</td><td>5.4% (30% × 18%)</td><td>No longer published officially</td></tr>
        </tbody>
      </table>
      <p>
        The Malta rates are published and current. The French rates, where still applied under legacy or restructured arrangements, vary by the specific structure and are not publicly available in a single authoritative document.
      </p>

      <Image src="/insurance/waaza-insurance-6.png" alt="Illustration showing the Malta versus French yacht leasing VAT structure comparison for EU yacht purchases" width={1080} height={720} style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }} />

      <h2 id="current-status">Current status of each structure</h2>
      <p>
        <strong>Malta leasing</strong> is active, regulated, and well-established. The Commissioner for Revenue's guidelines are publicly available, the rates are published, and the structure has been in continuous use for many years. The EU Commission has not challenged it. Specialist lawyers and tax advisers set up Malta leasing arrangements regularly.
      </p>
      <p>
        <strong>French leasing</strong> is a more complex picture. France officially ended its scheme in January 2019 following EU Commission scrutiny of reduced VAT rate structures for pleasure craft. Some French-law structures continue to be offered by specialist advisers, typically on the basis of different legal arguments or transition arrangements. The certainty of these structures is materially lower than the Malta equivalent.
      </p>
      <p>
        Any buyer considering a French-law leasing arrangement should obtain current, specific legal advice on the structure's validity and compliance status before committing to it. The risk of an adverse tax authority ruling is higher than with the Malta structure.
      </p>

      <h2 id="lender-acceptance">Lender and insurer acceptance</h2>
      <p>
        Malta leasing arrangements are well understood by specialist marine lenders. The documentation framework is established — lenders know what corporate documents, lease agreements, and security instruments to expect. Most specialist marine lenders and private banks with marine desks will finance through a Malta SPV without difficulty.
      </p>
      <p>
        French structures are viewed with more caution by lenders, particularly where the legal basis is unclear post-2019. Some lenders will accept them with appropriate legal confirmation; others will not. This uncertainty is itself a reason to prefer the Malta structure where both are theoretically available.
      </p>
      <p>
        Marine insurers are generally neutral on the jurisdiction of the owning SPV — the underwriting focuses on the vessel, its use, and the beneficial owner rather than on whether the holding company is Maltese or French.
      </p>

      <h2 id="setup-process">Setup process compared</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Setup element</th>
            <th>Malta</th>
            <th>French</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>SPV incorporation</td><td>Maltese private limited company</td><td>French SCI or SARL (if available)</td></tr>
          <tr><td>Published rates</td><td>Yes — Commissioner for Revenue</td><td>No — post-2019 uncertainty</td></tr>
          <tr><td>Specialist advisers available</td><td>Many — well-established market</td><td>Fewer — specialist niche</td></tr>
          <tr><td>Setup cost</td><td>€5,000–€15,000</td><td>Higher — more complex legal work</td></tr>
          <tr><td>Ongoing admin</td><td>€3,000–€8,000/yr</td><td>Varies — potentially higher</td></tr>
          <tr><td>Regulatory certainty</td><td>High</td><td>Lower — subject to interpretation</td></tr>
        </tbody>
      </table>

      <h2 id="cruising-area">Cruising area considerations</h2>
      <p>
        The Malta leasing structure can be used regardless of where the yacht primarily operates, provided the EU-water-use percentages are correctly applied. A yacht based in French, Greek, or Spanish waters can be owned through a Maltese SPV using the Malta structure.
      </p>
      <p>
        There is no requirement to base the vessel in Maltese waters or to use Maltese marinas. The jurisdiction of the holding company does not constrain the vessel's operating area.
      </p>
      <p>
        For buyers planning extended periods in French coastal waters, the practical operating experience is identical under either structure. The difference is purely in the legal and tax framework of the holding entity.
      </p>

      <h2 id="which-to-choose">Which to choose</h2>
      <p>
        For the vast majority of buyers considering a leasing structure, <strong>Malta is the right choice</strong>. It is established, published, lender-accepted, and clearly regulated. The effective rates are known in advance. The adviser market is deep and competitive.
      </p>
      <p>
        The French structure was relevant before 2019 — particularly for buyers planning primarily French waters. Post-2019, the regulatory uncertainty makes it a higher-risk option that requires more specialist and more expensive legal work to establish with confidence.
      </p>
      <p>
        If a specialist adviser recommends a French-law structure for specific reasons relating to your transaction, take independent verification of the current legal position before proceeding. Do not assume that because French leasing existed historically, it remains available on the same terms today.
      </p>
      <p>
        For a full explanation of how the Malta structure works, see the{" "}
        <a href="/structuring/malta-yacht-leasing/">Malta yacht leasing guide</a>.
      </p>

      <Image src="/insurance/waaza-insurance-2.png" alt="Illustration of a yacht owner enjoying EU waters having structured their purchase through the Malta leasing VAT arrangement" width={1080} height={720} style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }} />

      <blockquote>
        The Malta leasing structure is active, published, and lender-accepted. The French equivalent is not — at least not with the same certainty. When in doubt, default to Malta and take specialist advice if French-law arrangements are recommended.
      </blockquote>
    </>
  );
}

export default function MaltaVsFrenchLeasingPage() {
  return <CompareSiloShell data={pageData}><ArticleContent /></CompareSiloShell>;
}