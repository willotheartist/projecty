// app/insurance/hull-and-machinery-insurance/page.tsx
// ─────────────────────────────────────────────────────────────
// /insurance/hull-and-machinery-insurance/
// Tier 2 · 500/mo · Low competition (idx: 29)
// Primary KW: hull and machinery insurance
// Images: waaza-insurance-5 (writing/documentation — lender requirements),
//         waaza-insurance-7 (climbing/progression — survey steps)
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Image from "next/image";
import { InsuranceSiloShell } from "../_components/InsuranceSiloShell";
import type { InsurancePageData } from "@/lib/insurance/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: InsurancePageData = {
  slug: "hull-and-machinery-insurance",
  tier: 2,
  intent: "informational",

  meta: {
    title: "Hull and Machinery Insurance: What It Covers and Why Lenders Require It | Waaza",
    description:
      "Hull and machinery insurance protects the physical vessel — hull, engines, systems, and equipment. It is the core cover marine lenders require before releasing funds on a financed boat.",
    canonical: "https://www.waaza.co/insurance/hull-and-machinery-insurance/",
    datePublished: "2026-03-01",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "Hull and Machinery Insurance: The Core Cover Every Financed Boat Needs",
    intro:
      "Hull and machinery insurance — often abbreviated to H&M — is the layer of marine insurance that protects the physical vessel: the hull, engines, propulsion systems, deck equipment, electronics, and onboard fixtures. It is the cover that pays when the boat itself is damaged, destroyed, or stolen. For any boat purchased with financing, hull and machinery cover is not optional — it is a condition of the loan, required before a lender will release funds.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  toc: [
    { id: "what-it-covers", label: "What hull and machinery insurance covers", level: 2 },
    { id: "what-it-excludes", label: "What it typically excludes", level: 2 },
    { id: "agreed-vs-market", label: "Agreed value vs market value", level: 2 },
    { id: "lender-requirements", label: "Why lenders require H&M cover", level: 2 },
    { id: "survey-requirements", label: "Survey requirements", level: 2 },
    { id: "how-much-cover", label: "How much cover do you need?", level: 2 },
    { id: "cost", label: "How much does H&M insurance cost?", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "What does hull and machinery insurance cover?",
      answer:
        "Hull and machinery insurance covers physical damage to the vessel itself — the hull, engines, propulsion systems, navigation equipment, deck gear, and onboard fixtures. Events typically covered include collision, grounding, fire, storm damage, sinking, theft of the vessel, and salvage costs. It does not cover liability to third parties, which is a separate cover.",
    },
    {
      question: "Is hull and machinery insurance required for a boat loan?",
      answer:
        "Yes. Marine lenders require hull and machinery insurance as a condition of any boat loan. The lender's security is the vessel, and without H&M cover in place, that security is unprotected. Lenders specifically require the policy to be on an agreed value basis, with the lender noted as an interested party, and the insured value equal to or exceeding the outstanding loan amount.",
    },
    {
      question: "What is the difference between agreed value and market value hull insurance?",
      answer:
        "Agreed value policies pay the full insured amount in the event of a total loss — the value is fixed at the policy's inception without depreciation adjustment. Market value policies pay what the insurer determines the vessel was worth at the time of loss, which may be less than the insured amount after depreciation. Lenders require agreed value policies because they need certainty that the loan balance is covered in any outcome.",
    },
    {
      question: "Do I need a survey for hull and machinery insurance?",
      answer:
        "For newer vessels, many insurers offer cover without a current survey. For vessels over 10–15 years old, or above certain value thresholds, an out-of-water survey is typically required before the insurer will offer terms. The survey establishes the vessel's condition and supports the agreed value on which the policy is based. If you are financing the purchase, the lender will also require a survey, so this is usually completed as part of the transaction.",
    },
    {
      question: "Does hull and machinery insurance cover engine failure?",
      answer:
        "Generally no. Hull and machinery insurance covers damage caused by sudden, unexpected, and accidental events — collision, grounding, fire, storm, and similar perils. Gradual mechanical breakdown, wear and tear, and engine failure caused by maintenance neglect are typically excluded. Some specialist policies include limited mechanical breakdown cover as an add-on, but this is not standard.",
    },
    {
      question: "What is not covered by hull and machinery insurance?",
      answer:
        "Standard H&M policies exclude wear and tear, gradual deterioration, mechanical breakdown, defective parts, vermin damage, and losses arising from the vessel being used outside its declared navigation area. Liability to third parties is also excluded — that is a separate liability cover. Commercial use and charter operations are typically excluded from recreational H&M policies.",
    },
    {
      question: "How much hull and machinery insurance do I need?",
      answer:
        "The insured value should reflect the vessel's current agreed market value — typically the purchase price or a recent professional valuation. For financed vessels, the insured value must equal or exceed the outstanding loan amount. Underinsuring to reduce the premium is counterproductive: most H&M policies include an underinsurance clause that proportionally reduces claim payouts if the insured value is materially below the vessel's actual value.",
    },
  ],

  relatedPages: [
    { title: "Marine Insurance Hub", href: "/insurance/", description: "All cover types explained" },
    { title: "Boat Insurance UK", href: "/insurance/boat-insurance-uk/", description: "Full UK insurance guide" },
    { title: "Third Party Boat Insurance", href: "/insurance/third-party-boat-insurance/", description: "Liability cover explained" },
    { title: "Boat Insurance Cost", href: "/insurance/boat-insurance-cost/", description: "What you should expect to pay" },
    { title: "Marine Insurance Companies", href: "/insurance/marine-insurance-companies/", description: "UK specialist providers" },
    { title: "Boat Loan Requirements", href: "/financing/boat-loan-requirements/", description: "Full lender checklist" },
    { title: "LTV in Yacht Financing", href: "/financing/ltv-in-yacht-financing/", description: "How loan-to-value works" },
    { title: "Insurance Documents Before Closing", href: "/documents/insurance-documents-before-closing/", description: "What lenders need" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Insurance", href: "/insurance/" },
    { name: "Hull and Machinery Insurance", href: "/insurance/hull-and-machinery-insurance/" },
  ],

  cta: {
    heading: "Check your financing readiness before arranging cover",
    body: "Waaza shows you exactly what lenders require — including insurance structure — before you approach a single provider.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "hull and machinery insurance",
    secondary: ["hull insurance boat", "marine hull cover", "h&m insurance yacht", "hull and machinery policy"],
    lsi: ["agreed value hull insurance", "vessel hull cover", "boat physical damage insurance", "marine lender insurance requirement"],
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
    images: [{ url: "https://www.waaza.co/og/hull-and-machinery-insurance-og.jpg", width: 1200, height: 630, alt: "Hull and machinery insurance guide — Waaza" }],
  },
  twitter: { card: "summary_large_image", site: "@waaza", title: pageData.meta.title, description: pageData.meta.description, images: ["https://www.waaza.co/og/hull-and-machinery-insurance-og.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

function ArticleContent() {
  return (
    <>
      <h2 id="what-it-covers">What hull and machinery insurance covers</h2>
      <p>
        Hull and machinery insurance is the section of a marine policy that responds when the vessel itself
        suffers damage. The scope of cover is broad but defined — it covers sudden, accidental, and
        unexpected physical damage to the boat, not gradual deterioration or maintenance failures.
      </p>
      <p>Standard H&M cover includes:</p>
      <ul>
        <li><strong>Collision damage:</strong> Physical damage to your vessel resulting from collision with another boat, a fixed object, or the seabed.</li>
        <li><strong>Grounding:</strong> Damage caused by running aground, including hull damage, propeller and rudder damage, and the cost of refloating.</li>
        <li><strong>Fire and explosion:</strong> Damage caused by fire on board, explosion of fuel systems, or lightning strike.</li>
        <li><strong>Storm damage:</strong> Structural damage caused by heavy weather conditions, including at anchor or on a mooring.</li>
        <li><strong>Sinking:</strong> The total loss or recovery costs when a vessel sinks, including salvage operations.</li>
        <li><strong>Theft:</strong> Theft of the entire vessel, or in some policies, theft of permanently fitted equipment.</li>
        <li><strong>Salvage costs:</strong> The cost of professional salvage operations required after an incident.</li>
        <li><strong>General average:</strong> The boat's share of general average contributions when sailing as part of a voyage.</li>
      </ul>
      <p>
        Most comprehensive marine policies combine hull and machinery cover with third party liability and
        personal accident in a single product. The H&M section is specifically the physical damage component.
      </p>

      <h2 id="what-it-excludes">What hull and machinery cover typically excludes</h2>
      <p>
        H&M insurance is not a maintenance contract. The exclusions reflect the principle that insurance
        responds to sudden and accidental events, not to the normal costs of owning and maintaining a vessel:
      </p>
      <ul>
        <li><strong>Wear and tear:</strong> Gradual deterioration of the hull, antifouling, paintwork, and fittings is excluded across all policies.</li>
        <li><strong>Mechanical breakdown:</strong> Engine failure caused by normal mechanical breakdown, overheating, or component failure is generally excluded. Some specialist add-ons provide limited mechanical breakdown cover.</li>
        <li><strong>Defective parts:</strong> Damage caused by a known or inherently defective component is excluded — the insurer is not covering design flaws.</li>
        <li><strong>Osmosis:</strong> Osmotic blistering in GRP hulls is a maintenance issue and universally excluded.</li>
        <li><strong>Navigation area breaches:</strong> Any loss occurring outside the declared navigation area without prior insurer approval is typically excluded.</li>
        <li><strong>Commercial use:</strong> Damage occurring during commercial charter operations is excluded from recreational H&M policies.</li>
        <li><strong>Vermin damage:</strong> Damage caused by rodents or insects — common in boats stored ashore — is excluded.</li>
      </ul>

      <h2 id="agreed-vs-market">Agreed value vs market value — why it matters</h2>
      <p>
        Hull and machinery policies are offered on one of two valuation bases, and the difference is
        significant — particularly for financed vessels.
      </p>
      <p>
        An <strong>agreed value policy</strong> fixes the insured amount at the policy's inception. If the
        vessel is a total loss, the insurer pays the full agreed value without any depreciation adjustment.
        The value is agreed between the owner and the insurer at the start — often based on a professional
        survey — and that number is what you receive in the event of a write-off.
      </p>
      <p>
        A <strong>market value policy</strong> (also called actual cash value) pays what the insurer
        determines the vessel was worth at the moment of loss, taking into account its age, condition, and
        the prevailing market at that time. This number can be significantly lower than the insured amount,
        particularly for older vessels in a declining market. The insurer's market value assessment and your
        own view of what the boat was worth may differ sharply.
      </p>
      <p>
        For financed vessels, agreed value cover is not negotiable. The lender needs to know with certainty
        that a total loss event will produce a payout sufficient to clear the outstanding loan balance. A
        market value policy introduces uncertainty that lenders cannot accept.
      </p>
      <p>
        Agreed value policies cost slightly more than market value equivalents. For a boat of any meaningful
        value — and certainly for any financed purchase — the additional premium is warranted by the
        certainty it provides.
      </p>

      <h2 id="lender-requirements">Why lenders require hull and machinery cover</h2>
      <p>
        A marine lender's security is the vessel itself. If the boat is destroyed in a fire, sunk in a
        storm, or written off in a collision, the lender's asset is gone. Without hull and machinery
        insurance, the outstanding loan balance remains owed by the borrower against an asset that no
        longer exists.
      </p>
      <p>
        This is why hull and machinery cover — specifically on an agreed value basis — is a universal
        condition of marine finance. The lender is not insisting on insurance for the borrower's benefit;
        they are protecting their own position in the transaction.
      </p>
      <p>Lender requirements typically specify:</p>
      <ul>
        <li><strong>Agreed value basis:</strong> Total loss payout is fixed and unambiguous.</li>
        <li><strong>Minimum insured value:</strong> Equal to or exceeding the outstanding loan balance — often equal to the full purchase price.</li>
        <li><strong>Lender noted as interested party:</strong> The policy acknowledges the lender's financial interest in the vessel.</li>
        <li><strong>Cancellation notice:</strong> The insurer must notify the lender before cancelling or materially changing cover.</li>
        <li><strong>Continuous cover:</strong> The policy must remain in force for the duration of the loan term without lapses.</li>
      </ul>

      {/* Image 5: person writing/studying — documentation, lender requirements checklist */}
      <div style={{ borderRadius: 16, overflow: "hidden", margin: "32px 0" }}>
        <Image
          src="/insurance/waaza-insurance-5.png"
          alt="Illustration of a boat buyer reviewing hull and machinery insurance documentation required by a marine lender before loan completion"
          width={1080}
          height={720}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      <p>
        Proof of insurance — typically a certificate of insurance or letter of interest from the insurer
        confirming all the above — is required before funds are released at closing. Arranging this in
        advance rather than on completion day is essential; last-minute insurance issues are one of the
        most common causes of delayed loan completions. For context on how this fits into the broader
        pre-closing process, see{" "}
        <a href="/insurance/boat-insurance-uk/">what UK lenders require from your boat insurance</a>.
      </p>

      <h2 id="survey-requirements">Survey requirements for H&M insurance</h2>
      <p>
        For newer vessels — typically under 10 years old and below certain value thresholds — many
        specialist marine insurers will offer hull and machinery cover without a current survey. The
        underwriter accepts that a modern vessel in good condition is a standard risk.
      </p>
      <p>
        As vessels age, survey requirements become progressively more stringent. Most insurers require a
        recent out-of-water survey for vessels over 10–15 years old or above £100,000 in value. The survey
        must typically be no more than three to five years old, and some insurers require annual or biennial
        surveys for older or higher-value vessels.
      </p>
      <p>
        The survey serves two purposes for the insurer: it establishes the vessel's current condition
        (confirming it is an insurable risk), and it supports the agreed value on which the policy is
        based. A surveyor's valuation carries more weight than a purchase price, particularly for older
        vessels where the asking price may not reflect actual condition.
      </p>
      <p>
        For financed purchases, the lender will also require a survey, so the survey is almost always
        completed as part of the transaction. It is worth confirming with your broker that the same survey
        will satisfy both the lender's and the insurer's requirements — in most cases it will, but this
        should be confirmed before commissioning the survey rather than after.
      </p>

      {/* Image 7: people climbing mountain — step by step process, progression */}
      <div style={{ borderRadius: 16, overflow: "hidden", margin: "32px 0" }}>
        <Image
          src="/insurance/waaza-insurance-7.png"
          alt="Illustration representing the step-by-step process of satisfying marine lender and insurer survey requirements before a financed boat purchase completes"
          width={1080}
          height={720}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      <h2 id="how-much-cover">How much hull and machinery cover do you need?</h2>
      <p>
        The insured value under an H&M policy should reflect the vessel's current agreed market value.
        For a new purchase, this is typically the purchase price. For a vessel you have owned for some
        time, a current professional valuation or a recent survey value is the appropriate basis.
      </p>
      <p>
        Underinsuring — setting the insured value below the vessel's actual value to reduce the premium
        — is counterproductive. Most H&M policies include an underinsurance clause: if the insured value
        is materially below the vessel's actual value at the time of a claim, the insurer will reduce the
        claim settlement proportionally. The saving on premium is rarely worth the exposure.
      </p>
      <p>
        For financed vessels, the insured value must equal or exceed the outstanding loan balance at all
        times. As the loan is repaid and the balance falls, the insured value can in principle be reduced
        at renewal — but it should never fall below what is owed.
      </p>

      <h2 id="cost">How much does hull and machinery insurance cost?</h2>
      <p>
        H&M insurance is priced as a rate applied to the vessel's agreed insured value, typically falling
        between 0.8% and 1.5% for the hull and machinery element alone. Combined comprehensive policies —
        including liability and personal accident — typically price in the 1% to 2% range.
      </p>
      <p>
        The rate varies based on vessel age, construction, cruising area, owner experience, and use. For a
        detailed breakdown of the factors that affect your premium, see the{" "}
        <a href="/insurance/boat-insurance-cost/">boat insurance cost guide</a>. For the key UK and European
        providers who offer H&M cover, see the guide to{" "}
        <a href="/insurance/marine-insurance-companies/">marine insurance companies</a>. And for the
        distinction between H&M and liability cover, see{" "}
        <a href="/insurance/third-party-boat-insurance/">third party boat insurance explained</a>.
      </p>

      <blockquote>
        Hull and machinery cover is the foundation of any serious marine insurance programme. Everything
        else — liability, personal accident, legal expenses — is built on top of it. For a financed vessel,
        it is also non-negotiable: without it, the loan does not complete.
      </blockquote>
    </>
  );
}

export default function HullAndMachineryInsurancePage() {
  return (
    <InsuranceSiloShell data={pageData}>
      <ArticleContent />
    </InsuranceSiloShell>
  );
}