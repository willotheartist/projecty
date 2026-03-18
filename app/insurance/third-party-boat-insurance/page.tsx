// app/insurance/third-party-boat-insurance/page.tsx
// ─────────────────────────────────────────────────────────────
// /insurance/third-party-boat-insurance/
// Tier 2 · 500/mo · Medium competition (idx: 48)
// Primary KW: third party boat insurance
// Images: waaza-insurance-6 (aerial yacht — the vessel itself), waaza-insurance-2 (on water)
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Image from "next/image";
import { InsuranceSiloShell } from "../_components/InsuranceSiloShell";
import type { InsurancePageData } from "@/lib/insurance/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: InsurancePageData = {
  slug: "third-party-boat-insurance",
  tier: 2,
  intent: "informational",

  meta: {
    title: "Third Party Boat Insurance UK: What It Covers and When It's Enough | Waaza",
    description:
      "Third party boat insurance covers your liability to others — damage to other vessels, injury to people, and property claims. Here is what it includes, what it excludes, and when it is and isn't sufficient.",
    canonical: "https://www.waaza.co/insurance/third-party-boat-insurance/",
    datePublished: "2026-03-01",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "Third Party Boat Insurance: What It Covers and When It Is Not Enough",
    intro:
      "Third party boat insurance covers your legal liability if your boat injures someone, damages another vessel, or causes property loss. It does not cover damage to your own boat. For many boat owners, third party only cover is insufficient — but understanding exactly what it does and does not do helps you make an informed decision about the right level of cover for your situation.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  toc: [
    { id: "what-it-covers", label: "What third party boat insurance covers", level: 2 },
    { id: "what-it-excludes", label: "What it does not cover", level: 2 },
    { id: "when-required", label: "When third party cover is legally required", level: 2 },
    { id: "is-it-enough", label: "Is third party only cover enough?", level: 2 },
    { id: "financed-boats", label: "Third party cover and financed boats", level: 2 },
    { id: "liability-limits", label: "How much liability cover do you need?", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "What does third party boat insurance cover?",
      answer:
        "Third party boat insurance covers your legal liability to other people and their property. This includes damage you cause to another vessel in a collision, injury to other people aboard or in the water, damage to marina infrastructure, and in some policies, pollution liability. It does not cover any damage to your own boat.",
    },
    {
      question: "Is third party boat insurance a legal requirement in the UK?",
      answer:
        "Third party liability cover is a legal requirement on waterways managed by the Canal & River Trust, where a minimum of £1 million liability cover is required as a condition of a boat licence. On most UK coastal and offshore waters, there is no legal requirement. However, marinas typically require third party cover as a condition of a berth, and lenders require comprehensive cover as a condition of a boat loan.",
    },
    {
      question: "Can I get third party only boat insurance for a financed boat?",
      answer:
        "No. Marine lenders require comprehensive hull and machinery insurance as a condition of a boat loan, not third party liability only. The lender's security is the vessel itself — if it is damaged or destroyed without hull cover in place, the lender's collateral is gone. Third party only cover is not acceptable to any marine lender for a financed purchase.",
    },
    {
      question: "How much third party liability cover do I need for my boat?",
      answer:
        "Canal & River Trust waterways require a minimum of £1 million. Most specialist marine insurers recommend £2 million to £3 million for recreational sailing within UK and European coastal waters. For larger yachts, offshore passages, or any charter use, £5 million or more is commonly recommended. The cost of a serious liability claim — involving injury, pollution, or collision with an expensive vessel — can escalate quickly.",
    },
    {
      question: "Does third party boat insurance cover damage to my boat in a collision that was not my fault?",
      answer:
        "No. Third party insurance only covers your liability to others. If another boat collides with yours and causes damage, you would need to pursue a claim against the other party's insurance, or rely on your own hull and machinery cover if you have it. This is one of the key reasons why comprehensive cover is recommended over third party only for any boat of significant value.",
    },
    {
      question: "What is the difference between third party boat insurance and P&I cover?",
      answer:
        "Third party liability is the recreational equivalent of Protection & Indemnity (P&I) cover, which is the standard liability product in the commercial marine world. In recreational policies, liability cover is typically bundled as part of a comprehensive policy rather than purchased separately. P&I clubs provide liability cover for commercial vessels and operate on a mutual rather than conventional insurance basis.",
    },
    {
      question: "Does third party boat insurance cover me if someone is injured on my boat?",
      answer:
        "It depends on the policy. Third party liability typically covers injury to people other than the owner — guests, crew, or members of the public. Some policies exclude crew injury if the boat is used commercially. Personal accident cover for the owner is usually a separate section of a comprehensive policy and is not included in a standalone third party only product.",
    },
  ],

  relatedPages: [
    { title: "Marine Insurance Hub", href: "/insurance/", description: "All cover types explained" },
    { title: "Boat Insurance UK", href: "/insurance/boat-insurance-uk/", description: "Full UK insurance guide" },
    { title: "Hull and Machinery Insurance", href: "/insurance/hull-and-machinery-insurance/", description: "Lender-required cover" },
    { title: "Boat Insurance Cost", href: "/insurance/boat-insurance-cost/", description: "Premium breakdown" },
    { title: "Marine Insurance Companies", href: "/insurance/marine-insurance-companies/", description: "UK specialist providers" },
    { title: "Boat Loan Requirements", href: "/financing/boat-loan-requirements/", description: "What lenders require" },
    { title: "Insurance Before Closing", href: "/documents/insurance-documents-before-closing/", description: "Pre-closing checklist" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Insurance", href: "/insurance/" },
    { name: "Third Party Boat Insurance", href: "/insurance/third-party-boat-insurance/" },
  ],

  cta: {
    heading: "Check what insurance your lender actually requires",
    body: "Waaza's assessment surfaces lender insurance requirements alongside your financing readiness score — so you know exactly what cover to arrange.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "third party boat insurance",
    secondary: ["third party boat insurance uk", "boat liability insurance", "3rd party boat insurance", "boat third party cover"],
    lsi: ["marine liability insurance", "boat insurance minimum cover", "canal river trust insurance", "p&i boat cover"],
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
  },
  twitter: { card: "summary_large_image", site: "@waaza", title: pageData.meta.title, description: pageData.meta.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

function ArticleContent() {
  return (
    <>
      <h2 id="what-it-covers">What third party boat insurance covers</h2>
      <p>
        Third party boat insurance — sometimes referred to as liability only cover — protects you financially
        when your boat causes damage or injury to other people or their property. The core coverage typically
        includes:
      </p>
      <ul>
        <li><strong>Damage to other vessels:</strong> If your boat collides with, drifts into, or otherwise damages another boat, your third party cover pays for the repair or replacement of the other vessel up to the policy limit.</li>
        <li><strong>Injury to third parties:</strong> If someone is injured as a result of your boat — a swimmer struck by your propeller, a guest on another boat hurt in a collision — third party cover responds to the resulting liability claim.</li>
        <li><strong>Damage to marina infrastructure:</strong> Pontoons, berths, harbour walls, and navigation markers can all be damaged by boats. Third party cover typically includes this type of property damage.</li>
        <li><strong>Legal costs:</strong> Defending a liability claim involves legal fees regardless of the outcome. Most third party policies include cover for reasonable legal costs in defending a claim.</li>
        <li><strong>Pollution liability:</strong> Some policies include basic pollution liability — for fuel or oil spills caused by the vessel — though this is not universal and limits vary significantly.</li>
      </ul>
      <p>
        What third party insurance does <strong>not</strong> cover is your own vessel. If your boat is
        damaged in the same incident, you bear that cost yourself unless you have hull and machinery
        cover in place.
      </p>

      {/* Image 6: aerial cutaway of yacht — the vessel itself, hull, boat structure */}
      <div style={{ borderRadius: 16, overflow: "hidden", margin: "32px 0" }}>
        <Image
          src="/insurance/waaza-insurance-6.png"
          alt="Aerial illustration of a yacht showing the vessel's interior and hull — third party boat insurance does not cover damage to your own boat"
          width={1080}
          height={720}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      <h2 id="what-it-excludes">What third party boat insurance does not cover</h2>
      <p>
        Understanding the exclusions is as important as understanding the coverage. Third party only policies
        typically exclude:
      </p>
      <ul>
        <li><strong>Your own vessel:</strong> The most significant gap. No hull damage, no engine failure, no theft, no weather damage to your own boat.</li>
        <li><strong>Your own injury:</strong> Personal accident cover for the owner is not included in a third party only product. If you are injured while operating the boat, the policy provides nothing.</li>
        <li><strong>Cargo and personal effects:</strong> Equipment, electronics, and personal belongings on board are not covered.</li>
        <li><strong>Racing:</strong> Most policies exclude racing unless a specific racing extension is purchased.</li>
        <li><strong>Commercial use:</strong> Charter operations and any commercial carrying of passengers are excluded from recreational liability policies.</li>
        <li><strong>Towage:</strong> Liability arising from towing another vessel may be excluded or subject to a separate limit.</li>
      </ul>

      <h2 id="when-required">When third party cover is legally required in the UK</h2>
      <p>
        Third party boat insurance is a legal requirement in one specific context in the UK: waterways managed
        by the <a href="https://canalrivertrust.org.uk" target="_blank" rel="noopener noreferrer">Canal &amp;
        River Trust</a>. To obtain a boat licence for use on CRT waterways — which include most of the
        English and Welsh canal and river network — you must hold a minimum of £1 million third party
        liability cover.
      </p>
      <p>
        On UK coastal waters, tidal estuaries, and offshore, there is no legal requirement to hold boat
        insurance of any kind. The decision to insure — and at what level — is entirely voluntary from a
        legal standpoint. However, this legal freedom is significantly constrained in practice by marina
        requirements and lender conditions.
      </p>
      <p>
        Most marinas and boatyards require proof of third party liability cover as a condition of a berth
        agreement. The minimum is typically £2 million, though some require more for larger vessels.
        Arriving without insurance is not an option if you want a berth.
      </p>

      <h2 id="is-it-enough">Is third party only cover enough?</h2>
      <p>
        For most boat owners with vessels of any meaningful value, third party only cover is not sufficient.
        The logic is straightforward: your own boat is likely your most significant asset at risk in any
        incident, and third party cover leaves it entirely unprotected.
      </p>
      <p>
        Consider the most common types of marine incident. A collision that is your fault damages both
        your boat and the other party's vessel. Third party covers the other boat. Your own damage —
        potentially significant — is entirely uninsured. A storm during a passage damages your boat and
        forces a salvage operation. No third party is involved; third party insurance pays nothing.
        Your boat sinks at its mooring overnight. Again, no third party claim; nothing paid. This is
        precisely what <a href="/insurance/hull-and-machinery-insurance/">hull and machinery insurance</a>{" "}
        exists to cover — the physical vessel itself.
      </p>
      <p>
        The practical case for third party only cover is narrow: very low-value boats where the cost
        of hull insurance exceeds the value of the protection, or boats stored ashore and only launched
        occasionally where the exposure is minimal. For any boat used regularly on water, and certainly
        for any financed vessel, comprehensive cover is the appropriate baseline.
      </p>

      <h2 id="financed-boats">Third party cover and financed boats</h2>
      <p>
        If your boat is purchased with financing, third party only cover is not an option. Marine lenders
        require comprehensive <a href="/insurance/hull-and-machinery-insurance/">hull and machinery
        insurance</a> as a condition of the loan. The reasoning is direct: the lender's security is the
        vessel itself. Without hull cover, a write-off or serious damage event destroys the lender's
        collateral while the loan balance remains outstanding. The full picture of what UK lenders require
        is in the <a href="/insurance/boat-insurance-uk/">boat insurance UK guide</a>.
      </p>
      <p>
        Lenders specifically require that the policy is on an agreed value basis — not a market value or
        actual cash value basis — and that the insured amount equals or exceeds the loan value. They will
        also require notation on the policy as an interested party, with a right to be notified before
        cover is cancelled. None of these requirements can be satisfied by a third party only product.
      </p>
      <p>
        If you are arranging finance for a boat purchase, budget for comprehensive cover from the outset.
        Attempting to reduce insurance cost by purchasing third party only is not compatible with the
        lender's requirements and will prevent the loan from completing.
      </p>

      <h2 id="liability-limits">How much liability cover do you need?</h2>
      <p>
        The legal minimum on CRT waterways is £1 million. Most specialist marine insurers consider this
        inadequate for any meaningful sailing. The recommended levels for recreational use are:
      </p>
      <table>
        <thead>
          <tr>
            <th>Context</th>
            <th>Recommended minimum liability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CRT waterways (legal minimum)</td>
            <td>£1 million</td>
          </tr>
          <tr>
            <td>UK coastal sailing, small vessel</td>
            <td>£2 million</td>
          </tr>
          <tr>
            <td>UK and European coastal, mid-range yacht</td>
            <td>£3 million</td>
          </tr>
          <tr>
            <td>Offshore passages, larger yacht</td>
            <td>£5 million+</td>
          </tr>
          <tr>
            <td>Charter operations, commercial use</td>
            <td>£5 million – £10 million, specialist policy</td>
          </tr>
        </tbody>
      </table>
      <p>
        The justification for higher limits is straightforward. A serious collision with a high-value vessel
        in a busy anchorage, combined with injury claims from those aboard, legal costs, and salvage
        expenses, can rapidly exceed £1 million or even £2 million. Liability insurance is the part of your
        cover that protects your personal balance sheet from catastrophic loss — the limit should reflect
        the size of the worst plausible claim, not the minimum required to satisfy marina rules. For a full
        picture of what a comprehensive marine policy costs, see the{" "}
        <a href="/insurance/boat-insurance-cost/">boat insurance cost guide</a>, and for an overview of
        which <a href="/insurance/marine-insurance-companies/">UK marine insurers</a> offer the strongest
        liability terms, see the providers guide.
      </p>

      {/* Image 2: person celebrating on boat — ownership confidence, being on the water safely */}
      <div style={{ borderRadius: 16, overflow: "hidden", margin: "32px 0" }}>
        <Image
          src="/insurance/waaza-insurance-2.png"
          alt="Illustration of a boat owner enjoying time on the water with confidence — adequate third party and hull cover protects both you and other vessels"
          width={1080}
          height={720}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      <blockquote>
        Third party cover protects everyone except you and your boat. For a financed vessel, it is
        inadequate by definition. For any vessel of meaningful value, it leaves the owner bearing the
        cost of the most likely incidents uninsured.
      </blockquote>
    </>
  );
}

export default function ThirdPartyBoatInsurancePage() {
  return (
    <InsuranceSiloShell data={pageData}>
      <ArticleContent />
    </InsuranceSiloShell>
  );
}