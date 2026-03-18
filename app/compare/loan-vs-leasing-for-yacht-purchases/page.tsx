// app/compare/loan-vs-leasing-for-yacht-purchases/page.tsx
// Tier 1 · ~1,000/mo · Low competition
// Primary KW: loan vs leasing yacht

import type { Metadata } from "next";
import Image from "next/image";
import { CompareSiloShell } from "../_components/CompareSiloShell";
import type { ComparePageData } from "@/lib/compare/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: ComparePageData = {
  slug: "loan-vs-leasing-for-yacht-purchases",
  tier: 1,
  intent: "commercial",
  optionA: "a loan",
  optionB: "leasing",

  meta: {
    title: "Loan vs Leasing for Yacht Purchases: Which Is Right for You? | Waaza",
    description: "A direct comparison of yacht loans and leasing structures — upfront costs, VAT treatment, financing terms, lender options, and which works better for different buyers.",
    canonical: "https://www.waaza.co/compare/loan-vs-leasing-for-yacht-purchases/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "Loan vs Leasing for Yacht Purchases: A Direct Comparison",
    intro: "A yacht loan and a leasing structure are both financing mechanisms — but they work very differently, cost different amounts in total, and suit different buyers. The decision between them is primarily driven by your VAT position, the vessel's size and value, and how important simplicity is versus tax efficiency. This guide compares both options across every dimension that matters.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  verdict: {
    summary: "A loan is simpler and suits most buyers. Leasing makes sense when the VAT saving on a vessel over 12 metres materially outweighs the added complexity.",
    chooseA: "you want simplicity, the vessel is under 12m, or the VAT saving from leasing is immaterial relative to its setup cost.",
    chooseB: "the vessel is over 12m, you are EU-based, and the effective VAT reduction through a Malta structure represents a significant saving.",
  },

  toc: [
    { id: "how-each-works", label: "How each structure works", level: 2 },
    { id: "upfront-costs", label: "Upfront costs compared", level: 2 },
    { id: "vat-treatment", label: "VAT treatment", level: 2 },
    { id: "financing-terms", label: "Financing terms and LTV", level: 2 },
    { id: "lender-options", label: "Lender options for each", level: 2 },
    { id: "ongoing-obligations", label: "Ongoing obligations", level: 2 },
    { id: "which-to-choose", label: "Which to choose", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "Is a yacht loan or leasing cheaper overall?",
      answer: "It depends almost entirely on the VAT saving from leasing relative to its setup and ongoing costs. For vessels over 16 metres in EU waters, leasing through a Malta structure typically produces a lower total cost. For smaller vessels or non-EU buyers, a standard loan is usually cheaper once you account for the SPV setup, ongoing corporate administration, and complexity.",
    },
    {
      question: "Can I get a yacht loan and a leasing structure at the same time?",
      answer: "Yes — and this is exactly how the Malta leasing structure typically works in practice. The Maltese SPV that owns the vessel takes out a marine loan from a lender, and the beneficial owner leases the vessel from the SPV. The financing is provided to the SPV with a personal guarantee from the beneficial owner. Loan and leasing are not mutually exclusive — they are often combined.",
    },
    {
      question: "Do lenders treat leasing structures differently from direct loans?",
      answer: "Most specialist marine lenders and private banks accept leasing structures, but the documentation requirements are more complex. The lender lends to the SPV, takes a charge over the vessel, and requires a personal guarantee from the beneficial owner. LTV limits are generally consistent with personal ownership, though some lenders apply a small additional margin for the complexity.",
    },
    {
      question: "What are the disadvantages of the leasing structure?",
      answer: "The main disadvantages are: setup cost of €5,000–€15,000 for the Maltese SPV and lease documentation; ongoing annual administration of €3,000–€8,000; a more complex financing process; and the need for specialist legal and tax advisers throughout. The structure is not suitable for buyers who want simplicity or for vessels where the VAT saving is modest.",
    },
    {
      question: "Is leasing available for all yacht sizes?",
      answer: "The Malta leasing structure is available for all vessel sizes, but the effective VAT rate varies by length. For vessels under 7.5 metres, the EU-water-use percentage is 90%, producing an effective VAT rate of 16.2% — not far below the standard 18%. The structure becomes increasingly compelling as vessel size increases, with the effective rate falling to 5.4% for vessels over 24 metres.",
    },
  ],

  relatedPages: [
    { title: "Malta Yacht Leasing", href: "/structuring/malta-yacht-leasing/", description: "How the leasing structure works in detail" },
    { title: "Malta vs French Leasing", href: "/compare/malta-vs-french-leasing/", description: "Comparing the two EU leasing options" },
    { title: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/", description: "VAT fundamentals for yacht buyers" },
    { title: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/", description: "The ownership vehicle behind leasing" },
    { title: "How Yacht Financing Works", href: "/financing/how-yacht-financing-works/", description: "Financing basics" },
    { title: "What Lenders Look For", href: "/financing/what-lenders-look-for-in-yacht-financing/", description: "Lender requirements" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Compare", href: "/compare/" },
    { name: "Loan vs Leasing", href: "/compare/loan-vs-leasing-for-yacht-purchases/" },
  ],

  cta: {
    heading: "Model loan vs leasing for your specific vessel",
    body: "Waaza's assessment shows the financing implications of both structures — including LTV, lender options, and VAT treatment — before you commit to either.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "loan vs leasing yacht",
    secondary: ["yacht loan or leasing", "yacht leasing vs financing", "boat loan vs leasing", "yacht leasing structure"],
    lsi: ["malta leasing yacht financing", "yacht spv loan", "yacht vat leasing vs purchase", "marine loan comparison"],
  },
};

export const metadata: Metadata = {
  title: pageData.meta.title,
  description: pageData.meta.description,
  alternates: { canonical: pageData.meta.canonical },
  openGraph: { title: pageData.meta.title, description: pageData.meta.description, url: pageData.meta.canonical, siteName: "Waaza", locale: "en_GB", type: "article", images: [{ url: "https://www.waaza.co/og/loan-vs-leasing-og.jpg", width: 1200, height: 630, alt: "Loan vs leasing for yacht purchases — Waaza" }] },
  twitter: { card: "summary_large_image", site: "@waaza", title: pageData.meta.title, description: pageData.meta.description, images: ["https://www.waaza.co/og/loan-vs-leasing-og.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

function ArticleContent() {
  return (
    <>
      <h2 id="how-each-works">How each structure works</h2>
      <p>
        A <strong>yacht loan</strong> is a secured lending arrangement. The lender advances funds to the buyer — personally or through an SPV — and takes a charge over the vessel as security. The borrower makes monthly repayments of principal and interest over the loan term. At the end of the term, the vessel is owned outright.
      </p>
      <p>
        A <strong>leasing structure</strong> — most commonly the{" "}
        <a href="/structuring/malta-yacht-leasing/">Malta leasing arrangement</a> — involves a Maltese SPV purchasing the vessel, then leasing it to the beneficial owner. The SPV typically funds the purchase partly with its own capital and partly with a marine loan. VAT is charged only on the EU-water-attributable portion of the lease payments. At the end of the lease, the beneficial owner purchases the vessel from the SPV for a nominal sum.
      </p>
      <p>
        In practice, most leasing arrangements involve a marine loan at the SPV level — so the two structures are not mutually exclusive. The distinction is really about whether the ownership vehicle and VAT treatment involve a leasing layer or not.
      </p>

      <Image src="/insurance/waaza-insurance-4.png" alt="Illustration comparing yacht loan and leasing structure financing options showing key differences in cost and VAT treatment" width={1080} height={720} style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }} />

      <h2 id="upfront-costs">Upfront costs compared</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Cost item</th>
            <th>Loan (personal)</th>
            <th>Leasing (Malta SPV)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>VAT on vessel</td><td>Full rate (e.g. 18–22%)</td><td>Effective rate 5.4–16.2%</td></tr>
          <tr><td>SPV setup</td><td>None</td><td>€5,000–€15,000</td></tr>
          <tr><td>Legal / structuring fees</td><td>Low</td><td>Higher — specialist advisers needed</td></tr>
          <tr><td>Deposit / equity</td><td>Typically 30–40%</td><td>Typically 30–40% at SPV level</td></tr>
          <tr><td>Arrangement fee</td><td>0.5–1.5% of loan</td><td>0.5–1.5% of loan</td></tr>
        </tbody>
      </table>
      <p>
        For a €2 million vessel over 16 metres, the VAT difference alone — 7.2% effective leasing rate versus 18% standard rate — amounts to approximately €216,000. Against setup costs of €15,000 and five years of annual administration at €5,000 each, the net saving is around €176,000. The larger the vessel and the higher the standard VAT rate in the purchase jurisdiction, the more compelling the leasing case becomes.
      </p>

      <h2 id="vat-treatment">VAT treatment</h2>
      <p>
        This is the central differentiator. A standard loan purchase attracts full VAT at the applicable rate in the country where the transaction takes place — 20% in France, 22% in Italy, 18% in Malta. There is no mechanism within a loan-only structure to reduce this liability.
      </p>
      <p>
        The leasing structure reduces the effective VAT rate by applying VAT only to the EU-water-attributable portion of the lease. For full details of how the rates work by vessel length, see the{" "}
        <a href="/structuring/malta-yacht-leasing/">Malta yacht leasing guide</a>. For a broader picture of VAT across European jurisdictions, see{" "}
        <a href="/structuring/vat-on-yacht-purchases-in-europe/">VAT on yacht purchases in Europe</a>.
      </p>

      <h2 id="financing-terms">Financing terms and LTV</h2>
      <p>
        Loan terms for both structures are broadly comparable. Specialist marine lenders offer loan tenors of 10–15 years for vessels in good condition, with LTV of 60–70% for mid-range vessels. The key difference is that under the leasing structure, the loan is made to the Maltese SPV rather than to the individual — which requires additional corporate documentation.
      </p>
      <p>
        Most lenders require a personal guarantee from the beneficial owner when lending to an SPV. Some apply a slightly lower LTV to SPV-held vessels, though this varies by lender. In practice, the financing terms available through both routes are similar for buyers with strong profiles.
      </p>

      <h2 id="lender-options">Lender options for each structure</h2>
      <p>
        For straightforward personal loan purchases, the full range of specialist marine lenders is available — BNP Paribas Marine, Crédit Agricole, Lloyds Bank, specialist marine finance houses, and private banks. Competition is strong and terms are well-established.
      </p>
      <p>
        For leasing structures, the lender pool is somewhat narrower — not all marine lenders have the documentation framework for SPV lending. Private banks and the larger specialist marine lenders generally do. It is worth confirming lender appetite for the SPV structure before establishing it.
      </p>

      <Image src="/insurance/waaza-insurance-7.png" alt="Illustration showing the step-by-step process of choosing between a yacht loan and a leasing structure for a purchase" width={1080} height={720} style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }} />

      <h2 id="ongoing-obligations">Ongoing obligations</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Obligation</th>
            <th>Loan</th>
            <th>Leasing (Malta SPV)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Monthly payments</td><td>Loan repayment</td><td>Lease payment + loan repayment at SPV level</td></tr>
          <tr><td>VAT filing</td><td>None</td><td>Monthly Maltese VAT returns</td></tr>
          <tr><td>Corporate admin</td><td>None</td><td>Annual accounts, registered office ~€3–8k/yr</td></tr>
          <tr><td>Insurance</td><td>Comprehensive required</td><td>Comprehensive required</td></tr>
          <tr><td>End of term</td><td>Vessel owned outright</td><td>Exercise purchase option for nominal sum</td></tr>
        </tbody>
      </table>

      <h2 id="which-to-choose">Which to choose</h2>
      <p>
        The decision framework is straightforward once the numbers are laid out. Ask three questions:
      </p>
      <ul>
        <li><strong>Is the vessel over 12 metres?</strong> Below this, the leasing VAT saving is modest. Above it, the saving becomes increasingly material.</li>
        <li><strong>Will the vessel be in EU waters?</strong> The leasing structure only produces a VAT benefit if EU VAT would otherwise apply. Non-EU operations change the calculus entirely.</li>
        <li><strong>Is the VAT saving larger than the total setup and admin cost?</strong> Model it. For most vessels above €1 million in EU waters, the answer is yes. For smaller vessels, often no.</li>
      </ul>
      <p>
        If the answer to all three is yes, the leasing structure deserves serious consideration. If any is no, a straightforward loan is almost certainly simpler and cheaper overall.
      </p>

      <blockquote>
        The leasing structure is not inherently better — it is conditionally better. The condition is a vessel large enough that the VAT saving materially exceeds the structure's cost. Model it before committing.
      </blockquote>
    </>
  );
}

export default function LoanVsLeasingPage() {
  return <CompareSiloShell data={pageData}><ArticleContent /></CompareSiloShell>;
}