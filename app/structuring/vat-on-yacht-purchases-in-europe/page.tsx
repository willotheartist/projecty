// app/structuring/vat-on-yacht-purchases-in-europe/page.tsx
// ─────────────────────────────────────────────────────────────
// /structuring/vat-on-yacht-purchases-in-europe/
// Tier 1 · ~1,000/mo · Low competition
// Primary KW: yacht vat europe
// Distinct from yacht-vat-explained: country-specific detail
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Image from "next/image";
import { StructuringSiloShell } from "../_components/StructuringSiloShell";
import type { StructuringPageData } from "@/lib/structuring/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: StructuringPageData = {
  slug: "vat-on-yacht-purchases-in-europe",
  tier: 1,
  intent: "informational",

  meta: {
    title: "VAT on Yacht Purchases in Europe: Country-by-Country Guide | Waaza",
    description:
      "How VAT applies to yacht purchases across European countries — rates, rules, reduced structures, and what UK buyers need to know post-Brexit.",
    canonical: "https://www.waaza.co/structuring/vat-on-yacht-purchases-in-europe/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "VAT on Yacht Purchases in Europe: Rates, Rules and What Changes by Country",
    intro:
      "VAT on yacht purchases in Europe is not a single, uniform system. The rate varies by country, the rules around import and free circulation differ, and the availability of leasing structures depends on the jurisdiction. For buyers considering a European yacht purchase — and especially for UK buyers navigating the post-Brexit landscape — understanding how VAT works country by country is essential preparation.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  toc: [
    { id: "how-eu-vat-works", label: "How EU VAT works on yacht purchases", level: 2 },
    { id: "rates-by-country", label: "VAT rates by country", level: 2 },
    { id: "france", label: "France", level: 3 },
    { id: "italy", label: "Italy", level: 3 },
    { id: "spain", label: "Spain and the Canary Islands", level: 3 },
    { id: "malta", label: "Malta", level: 3 },
    { id: "greece", label: "Greece and Croatia", level: 3 },
    { id: "post-brexit", label: "UK buyers and post-Brexit VAT", level: 2 },
    { id: "leasing-structures", label: "Leasing structures across Europe", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "Which European country has the lowest VAT on yacht purchases?",
      answer:
        "Malta has one of the lower standard VAT rates at 18%, but more significantly, Malta's leasing structure allows effective VAT rates to fall to 5.4% or lower for larger vessels. The Canary Islands apply IGIC at 7% rather than mainland Spain's 21%, making them attractive for certain transactions. However, the applicable rate depends on where the transaction takes place and the vessel's intended home waters.",
    },
    {
      question: "Do I pay VAT if I buy a yacht already in EU free circulation?",
      answer:
        "Not if the yacht already has EU VAT paid status and you are a private buyer. The VAT was paid when the vessel first entered EU free circulation, and it does not become payable again on a private sale between individuals. Business-to-consumer sales and new boat purchases from dealers do attract VAT.",
    },
    {
      question: "What happened to UK VAT paid status after Brexit?",
      answer:
        "Brexit created a significant complication for UK-registered yachts. Vessels that had UK VAT paid status before Brexit do not automatically have EU VAT paid status. Post-Brexit, UK-registered yachts are treated as non-EU vessels when they enter EU waters, potentially triggering import VAT. The transitional rules that applied immediately after Brexit have expired.",
    },
    {
      question: "Can I buy a yacht in Montenegro or Turkey to avoid EU VAT?",
      answer:
        "You can purchase a vessel in these countries, but bringing it into EU waters on a permanent basis will trigger EU import VAT regardless of where it was purchased. The import VAT is calculated on the vessel's customs value at the point of EU entry. Temporary admission rules allow short-term stays without import VAT, but these are subject to strict conditions and time limits.",
    },
    {
      question: "Is the French leasing structure still available?",
      answer:
        "France discontinued its official leasing scheme in 2019, though some legacy arrangements continue. The Malta leasing structure remains active and is the primary EU mechanism for VAT-efficient yacht acquisition. Buyers considering the French leasing route should take specialist advice on its current status before relying on it.",
    },
    {
      question: "What documentation do I need to prove VAT paid status in Europe?",
      answer:
        "Acceptable documentation typically includes the original purchase invoice showing VAT charged, a customs import declaration (SAD form), or a specialist VAT certificate. EU member states have become stricter about what they accept as proof — a previous owner's word or a broker's assurance is not sufficient. This documentation should be verified as part of the due diligence process before purchase.",
    },
  ],

  relatedPages: [
    { title: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/", description: "VAT fundamentals and leasing overview" },
    { title: "Malta Yacht Leasing", href: "/structuring/malta-yacht-leasing/", description: "The primary EU leasing structure" },
    { title: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/", description: "Ownership structure and VAT" },
    { title: "Structuring Hub", href: "/structuring/", description: "All structuring topics" },
    { title: "Flag Choice and Financing", href: "/structuring/flag-choice-and-financing/", description: "How flag relates to VAT" },
    { title: "Yacht Finance Document Checklist", href: "/documents/yacht-finance-document-checklist/", description: "VAT documents for lenders" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Structuring", href: "/structuring/" },
    { name: "VAT on Yacht Purchases in Europe", href: "/structuring/vat-on-yacht-purchases-in-europe/" },
  ],

  cta: {
    heading: "Understand your full cost picture before you buy",
    body: "Waaza models VAT, structuring, and financing together — so you see the real total cost before you make an offer.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "yacht vat europe",
    secondary: ["vat on yacht purchase europe", "european yacht vat rates", "yacht vat france italy spain", "eu yacht vat"],
    lsi: ["yacht vat free circulation", "yacht vat paid europe", "eu yacht import vat", "yacht vat country comparison"],
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
      <h2 id="how-eu-vat-works">How EU VAT works on yacht purchases</h2>
      <p>
        The European Union operates a single VAT area for vessels in EU free circulation, but the rate
        is set nationally — each member state determines its own standard VAT rate within EU-mandated
        minimums. This creates significant variation in the cost of a yacht purchase depending on
        where the transaction takes place.
      </p>
      <p>
        The general principle is that VAT is due when a vessel first enters EU free circulation — either
        when purchased new from an EU dealer, when imported from outside the EU, or when a vessel without
        EU VAT paid status first enters EU waters on a permanent basis. Once VAT has been paid and the
        vessel is in free circulation, subsequent private sales between individuals within the EU do not
        trigger additional VAT.
      </p>
      <p>
        The key document is the vessel's proof of VAT paid status. Without it, any sale risks triggering
        a VAT assessment from the tax authority in the country where the vessel is located. For the
        full explanation of VAT paid status and how it works, see{" "}
        <a href="/structuring/yacht-vat-explained/">yacht VAT explained</a>.
      </p>

      <Image
        src="/structuring/waaza-insurance-5.png"
        alt="Map illustration showing different VAT rates on yacht purchases across European countries including France Italy Spain Malta and Greece"
        width={1080}
        height={720}
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }}
      />

      <h2 id="rates-by-country">VAT rates by country</h2>

      <h3 id="france">France</h3>
      <p>
        France applies a standard VAT rate of 20% on yacht purchases. New vessels purchased from French
        dealers are subject to French VAT, payable at the point of sale. Second-hand vessels with existing
        VAT paid status can be sold VAT-free in a private transaction.
      </p>
      <p>
        France historically offered a leasing structure for VAT-efficient yacht acquisition — the French
        scheme allowed VAT to be applied only to the EU-water-attributable portion of the lease.
        France discontinued its official scheme in 2019. Buyers should take current specialist advice
        before relying on any French leasing arrangement, as the position continues to evolve.
      </p>

      <h3 id="italy">Italy</h3>
      <p>
        Italy has the highest standard VAT rate among the major Mediterranean yacht markets at 22%.
        On a €2 million yacht, Italian VAT represents €440,000 — a substantial additional cost. Italy
        does not operate a VAT leasing scheme equivalent to Malta's, making it one of the more expensive
        jurisdictions for a standard yacht purchase transaction.
      </p>
      <p>
        Italy applies a luxury tax (imposta di bollo) on yachts over 10 metres registered in Italy,
        calculated annually on vessel length. This is a separate levy from VAT and adds to the ongoing
        cost of ownership for Italian-registered vessels.
      </p>

      <h3 id="spain">Spain and the Canary Islands</h3>
      <p>
        Spain applies a standard VAT rate of 21% on the mainland and Balearic Islands. The Canary
        Islands, however, are outside the EU VAT area and apply their own indirect tax — IGIC (Impuesto
        General Indirecto Canario) — at a rate of 7% on most goods including yachts.
      </p>
      <p>
        This makes the Canary Islands a potentially attractive location to complete a purchase transaction
        for buyers who will be spending time in the Atlantic and who can plan the purchase logistics
        accordingly. Taking delivery in Las Palmas or Tenerife at 7% IGIC rather than in mainland Spain
        or France at 20–21% can represent a very significant saving on high-value vessels.
      </p>

      <h3 id="malta">Malta</h3>
      <p>
        Malta's standard VAT rate is 18% — below the main Mediterranean competitors — but its more
        significant feature is the{" "}
        <a href="/structuring/malta-yacht-leasing/">Malta yacht leasing structure</a>. Under this
        arrangement, an SPV incorporated in Malta leases the vessel to the beneficial owner, and VAT
        is charged only on the EU-water-attributable portion of the lease.
      </p>
      <p>
        Malta's tax authority (the Commissioner for Revenue) publishes tables setting out the percentage
        of the lease attributable to EU water use, based on vessel length. For a yacht over 24 metres,
        the attributed EU use percentage can be as low as 30%, resulting in an effective VAT rate of
        approximately 5.4%. For smaller vessels, the percentage is higher but still significantly below
        the standard rate.
      </p>

      <h3 id="greece">Greece and Croatia</h3>
      <p>
        Greece applies a standard VAT rate of 24% — the highest in the major EU yacht markets. Croatia,
        since joining the EU, applies 25%. Both countries are major cruising destinations but are among
        the most expensive for a standard VAT-liable purchase transaction.
      </p>
      <p>
        Neither Greece nor Croatia offers a leasing structure equivalent to Malta's for reducing the
        effective VAT rate. Buyers planning to base a vessel in these waters but wanting VAT efficiency
        would typically structure the purchase through Malta and then operate in Greek or Croatian waters.
      </p>

      <h2 id="post-brexit">UK buyers and post-Brexit VAT</h2>
      <p>
        Brexit created a material change in the VAT position for UK-based yacht owners and buyers.
        The key changes are:
      </p>
      <ul>
        <li>
          <strong>UK VAT paid status is no longer EU VAT paid status.</strong> A vessel with UK VAT
          paid status acquired before Brexit does not automatically have EU VAT paid status for the
          purposes of EU tax authorities. UK vessels entering EU waters are treated as non-EU vessels.
        </li>
        <li>
          <strong>UK residents cannot use temporary admission indefinitely.</strong> The temporary
          admission procedure — which allows non-EU flagged vessels owned by non-EU residents to remain
          in EU waters for up to 18 months without paying import VAT — applies to UK residents as
          non-EU persons. However, the rules are complex and enforced variably across different EU
          member states.
        </li>
        <li>
          <strong>Import VAT on bringing UK vessels into the EU.</strong> A UK-registered vessel brought
          permanently into EU waters triggers import VAT at the applicable rate of the entry country.
          This applies even to vessels that paid UK VAT before Brexit.
        </li>
      </ul>
      <p>
        UK buyers planning to purchase a yacht for use primarily in European waters should take specific
        advice on the VAT implications before proceeding. The post-Brexit position continues to be
        interpreted differently by different EU member states, and specialist marine tax advice is
        essential.
      </p>

      <h2 id="leasing-structures">Leasing structures across Europe</h2>
      <p>
        The Malta leasing structure is currently the primary active mechanism for VAT-efficient yacht
        acquisition in the EU. It is well-established, published by Malta's tax authority, and accepted
        by the mainstream marine lending and insurance markets.
      </p>
      <p>
        Buyers considering any leasing structure should be aware that EU tax authorities have become
        more scrutinous of arrangements that appear designed primarily for VAT avoidance rather than
        reflecting genuine operational patterns. The structure must be set up correctly, the lease must
        be at arm's length, and the ongoing compliance obligations must be met throughout the lease
        period.
      </p>
      <p>
        For a detailed explanation of how the Malta structure works in practice, see the{" "}
        <a href="/structuring/malta-yacht-leasing/">Malta yacht leasing guide</a>. For the interaction
        between leasing structures and ownership vehicles, see{" "}
        <a href="/structuring/personal-vs-spv-yacht-ownership/">personal vs SPV yacht ownership</a>.
      </p>

      <blockquote>
        VAT is territorial, and the applicable rate is determined by where the transaction takes place
        — not where the buyer lives. Planning the location of the transaction is as important as
        planning the financing.
      </blockquote>
    </>
  );
}

export default function VatOnYachtPurchasesEuropePage() {
  return (
    <StructuringSiloShell data={pageData}>
      <ArticleContent />
    </StructuringSiloShell>
  );
}