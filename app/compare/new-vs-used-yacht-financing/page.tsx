// app/compare/new-vs-used-yacht-financing/page.tsx
// Tier 1 · ~1,000/mo · Low competition
// Primary KW: new vs used yacht financing

import type { Metadata } from "next";
import Image from "next/image";
import { CompareSiloShell } from "../_components/CompareSiloShell";
import type { ComparePageData } from "@/lib/compare/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: ComparePageData = {
  slug: "new-vs-used-yacht-financing",
  tier: 1,
  intent: "commercial",
  optionA: "new",
  optionB: "used",

  meta: {
    title: "New vs Used Yacht Financing: How Lenders Treat Each Differently | Waaza",
    description: "How lenders assess new builds versus second-hand vessels — LTV limits, age restrictions, survey requirements, VAT implications, and which is easier to finance.",
    canonical: "https://www.waaza.co/compare/new-vs-used-yacht-financing/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "New vs Used Yacht Financing: What Changes and What Doesn't",
    intro: "Lenders treat new and used vessels differently — not dramatically, but enough to affect your LTV, your deposit requirement, your documentation, and in some cases your lender options. Understanding the differences before you choose your vessel avoids surprises when the financing conversation begins.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  verdict: {
    summary: "New vessels are marginally easier to finance at higher LTV. Used vessels are financeable at any age but with progressively stricter conditions as the vessel ages.",
    chooseA: "you want maximum LTV, the cleanest lender process, and no survey complications — and you are buying from a recognised builder.",
    chooseB: "you are buying a proven design at a lower price point and are comfortable with survey requirements and potentially a slightly lower LTV.",
  },

  toc: [
    { id: "how-lenders-view-new", label: "How lenders view new vessels", level: 2 },
    { id: "how-lenders-view-used", label: "How lenders view used vessels", level: 2 },
    { id: "ltv-comparison", label: "LTV limits compared", level: 2 },
    { id: "survey-requirements", label: "Survey requirements", level: 2 },
    { id: "vat-position", label: "VAT position differences", level: 2 },
    { id: "age-limits", label: "Vessel age limits", level: 2 },
    { id: "documentation", label: "Documentation differences", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "Is it harder to finance a used yacht than a new one?",
      answer: "Not significantly for vessels under 10–15 years old in good condition. The process is broadly similar. Where it becomes more complex is with older vessels — lenders apply stricter LTV limits, require more recent surveys, and some have age thresholds above which they will not lend at all.",
    },
    {
      question: "What LTV can I get on a new yacht?",
      answer: "Most specialist marine lenders will finance up to 70% of the purchase price of a new vessel from a recognised builder. Some private banks will go to 75–80% for strong profiles. The deposit requirement is therefore typically 20–30% of the purchase price for a new build.",
    },
    {
      question: "Do lenders have maximum age limits for yacht financing?",
      answer: "Yes. Most mainstream marine lenders set maximum vessel age limits — typically 20–25 years at the end of the loan term, not just at the point of purchase. A 15-year-old vessel being purchased with a 10-year loan would be 25 years old at maturity — at or beyond most lenders' limits. Some specialist lenders and private banks are more flexible on older vessels.",
    },
    {
      question: "Does a new yacht need a survey for financing?",
      answer: "For a new vessel purchased from an established builder, most lenders do not require an independent survey — the builder's specification and warranty provide sufficient comfort. A pre-delivery inspection may be required. For used vessels, a full out-of-water survey by an approved surveyor is standard for any vessel over a certain age or value.",
    },
    {
      question: "Is the VAT position clearer on a new yacht?",
      answer: "Yes. A new vessel purchased from an EU dealer comes with a clear VAT invoice — the VAT paid status is unambiguous. Second-hand vessels require verification of the VAT paid history, which can be complex if the vessel has changed hands multiple times or has a mixed flag history. Lenders care about the VAT position because an unclear or disputed status affects the asset's saleability.",
    },
  ],

  relatedPages: [
    { title: "How Vessel Age Affects Financing", href: "/financing/how-vessel-age-affects-financing/", description: "Detailed look at age as a lender factor" },
    { title: "What Lenders Look For", href: "/financing/what-lenders-look-for-in-yacht-financing/", description: "Full lender assessment criteria" },
    { title: "Boat Loan Requirements", href: "/financing/boat-loan-requirements/", description: "Documentation checklist" },
    { title: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/", description: "VAT on new and used vessels" },
    { title: "Boat Insurance Cost", href: "/insurance/boat-insurance-cost/", description: "How age affects insurance premiums too" },
    { title: "LTV in Yacht Financing", href: "/financing/ltv-in-yacht-financing/", description: "How loan-to-value works" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Compare", href: "/compare/" },
    { name: "New vs Used Yacht Financing", href: "/compare/new-vs-used-yacht-financing/" },
  ],

  cta: {
    heading: "See how your vessel's age affects your financing readiness",
    body: "Waaza's assessment factors vessel age into the readiness score, LTV estimate, and lender routing — before you approach anyone.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "new vs used yacht financing",
    secondary: ["new yacht financing", "used yacht financing", "second hand yacht loan", "new build yacht mortgage"],
    lsi: ["yacht age lender limit", "used boat financing lenders", "new yacht ltv", "yacht survey financing requirement"],
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
      <h2 id="how-lenders-view-new">How lenders view new vessels</h2>
      <p>
        A new vessel from a recognised builder presents a clean, well-understood risk to a marine lender. The value is established by the purchase contract, the VAT position is clear, there is no survey uncertainty, and the builder's warranty provides a degree of comfort against immediate defects. The asset is at its highest value at the point of purchase and depreciates from there.
      </p>
      <p>
        For these reasons, new vessels typically attract the most favourable financing terms: the highest LTV limits, the most lender options, and the least documentation complexity. The main risk a lender carries is depreciation — if the vessel needs to be sold after a default, the market price may be below the purchase price — which is why most lenders do not finance 100% of the purchase price even for new builds.
      </p>

      <h2 id="how-lenders-view-used">How lenders view used vessels</h2>
      <p>
        A used vessel introduces additional variables: the vessel's actual condition versus its claimed condition, the reliability of the asking price as a reflection of market value, the VAT history, and the remaining useful life. Lenders manage these risks through survey requirements, age limits, and adjusted LTV limits.
      </p>
      <p>
        For a well-maintained vessel under 10 years old in good condition, the financing process is broadly similar to a new vessel. The documentation is slightly more involved, a survey is typically required, and the LTV may be marginally lower. For older vessels — particularly above 15–20 years — the picture changes more significantly. See the dedicated guide on{" "}
        <a href="/financing/how-vessel-age-affects-financing/">how vessel age affects financing</a> for a full breakdown.
      </p>

      <Image src="/insurance/waaza-insurance-3.png" alt="Illustration of a marine surveyor assessing a used yacht — surveys are required for used vessel financing but not typically for new builds" width={1080} height={720} style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }} />

      <h2 id="ltv-comparison">LTV limits compared</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Vessel type / age</th>
            <th>Typical max LTV</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>New vessel, recognised builder</td><td>70–75%</td><td>Some private banks to 80% for strong profiles</td></tr>
          <tr><td>Used, under 5 years old</td><td>65–70%</td><td>Broadly similar to new</td></tr>
          <tr><td>Used, 5–10 years old</td><td>60–65%</td><td>Survey required, condition dependent</td></tr>
          <tr><td>Used, 10–15 years old</td><td>55–60%</td><td>Survey required, lender pool narrows</td></tr>
          <tr><td>Used, 15–20 years old</td><td>50–55%</td><td>Specialist lenders only in some cases</td></tr>
          <tr><td>Used, over 20 years</td><td>40–50%</td><td>Limited lender options, specialist market</td></tr>
        </tbody>
      </table>
      <p>
        These are indicative ranges. Individual lenders set their own thresholds and apply them based on the full buyer profile — a very strong buyer may achieve better terms on an older vessel, while a weaker profile may face tighter limits on a new one.
      </p>

      <h2 id="survey-requirements">Survey requirements</h2>
      <p>
        For <strong>new vessels</strong> purchased from established builders, most lenders accept the builder's specification and purchase contract without an independent survey. A pre-delivery inspection — confirming the vessel matches its specification at handover — may be required or recommended.
      </p>
      <p>
        For <strong>used vessels</strong>, an independent out-of-water survey by an approved marine surveyor is standard for any lender. The survey must typically be recent — usually no more than six months old at the point of loan completion. The surveyor's valuation, not the asking price, is often the basis for the lender's LTV calculation.
      </p>
      <p>
        If the surveyor's valuation comes in below the agreed purchase price, the LTV is calculated against the lower valuation — meaning the buyer must either renegotiate the price, increase their deposit, or find additional funding for the gap. This is a common source of late-stage financing complications on used vessel transactions.
      </p>

      <h2 id="vat-position">VAT position differences</h2>
      <p>
        A <strong>new vessel</strong> purchased from an EU dealer comes with a clear VAT invoice. The VAT paid status is unambiguous and well-documented. Lenders and future buyers can rely on it without further investigation.
      </p>
      <p>
        A <strong>used vessel</strong> may have a complex VAT history — particularly if it has changed hands multiple times, operated across multiple flag jurisdictions, or entered and left EU waters. Verifying the VAT paid status is an important part of due diligence on any used EU vessel transaction. Lenders require clarity on the VAT position because an unclear status affects saleability. For a full explanation, see{" "}
        <a href="/structuring/yacht-vat-explained/">yacht VAT explained</a>.
      </p>

      <h2 id="age-limits">Vessel age limits</h2>
      <p>
        Most mainstream marine lenders set a maximum vessel age at the end of the loan term — typically 20–25 years. This means that a 12-year-old vessel financed over a 10-year loan would be 22 years old at maturity — borderline for some lenders. A 15-year-old vessel on a 10-year term would be 25 at maturity — outside many standard lenders' limits.
      </p>
      <p>
        Where the age limit is an issue, the options are: a shorter loan term, a larger deposit reducing the LTV, or using a specialist lender or private bank with more flexible age policies. Some private banks will lend against classic or well-maintained older vessels on a case-by-case basis where the asset quality justifies it.
      </p>

      <h2 id="documentation">Documentation differences</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Document</th>
            <th>New vessel</th>
            <th>Used vessel</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Survey</td><td>Usually not required</td><td>Required — out-of-water</td></tr>
          <tr><td>VAT documentation</td><td>Builder invoice</td><td>Full VAT history verification</td></tr>
          <tr><td>Valuation basis</td><td>Purchase contract</td><td>Surveyor's valuation</td></tr>
          <tr><td>Builder / title check</td><td>Builder confirmation</td><td>Title search, encumbrance check</td></tr>
          <tr><td>Flag / registration</td><td>New registration</td><td>Transfer of existing registration</td></tr>
        </tbody>
      </table>

      <blockquote>
        New and used vessels are both financeable. The differences are in the detail — survey requirements, LTV limits, and documentation complexity increase with vessel age. Getting clarity on these before making an offer avoids renegotiation after the survey.
      </blockquote>
    </>
  );
}

export default function NewVsUsedPage() {
  return <CompareSiloShell data={pageData}><ArticleContent /></CompareSiloShell>;
}