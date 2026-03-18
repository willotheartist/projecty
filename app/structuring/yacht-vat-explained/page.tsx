// app/structuring/yacht-vat-explained/page.tsx
// ─────────────────────────────────────────────────────────────
// /structuring/yacht-vat-explained/
// Tier 1 · ~2,000/mo · Low competition
// Primary KW: yacht vat
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Image from "next/image";
import { StructuringSiloShell } from "../_components/StructuringSiloShell";
import type { StructuringPageData } from "@/lib/structuring/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: StructuringPageData = {
  slug: "yacht-vat-explained",
  tier: 1,
  intent: "informational",

  meta: {
    title: "Yacht VAT Explained: What Every Buyer Needs to Know | Waaza",
    description:
      "A clear explanation of VAT on yacht purchases — when it applies, how much it costs, how leasing structures reduce it, and what buyers need to confirm before they complete.",
    canonical: "https://www.waaza.co/structuring/yacht-vat-explained/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "Yacht VAT Explained: When It Applies, How Much It Costs, and How to Reduce It",
    intro:
      "VAT is one of the largest single costs in a European yacht transaction — and one of the least well understood. On a €2 million yacht, getting the VAT treatment wrong can mean an unexpected liability of €200,000 or more. Getting it right, through a legitimate leasing structure or careful transaction planning, can reduce that liability substantially. This guide explains how VAT applies to yacht purchases, what the key variables are, and what buyers need to confirm before they complete.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  toc: [
    { id: "vat-basics", label: "How VAT applies to yacht purchases", level: 2 },
    { id: "rates-by-country", label: "VAT rates by country", level: 3 },
    { id: "vat-paid-status", label: "VAT paid status — what it means", level: 2 },
    { id: "importing-from-outside-eu", label: "Importing a yacht into the EU", level: 2 },
    { id: "leasing-structures", label: "How leasing structures reduce VAT", level: 2 },
    { id: "charter-and-vat", label: "VAT recovery on charter use", level: 2 },
    { id: "financing-and-vat", label: "How VAT position affects financing", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "Do I have to pay VAT when buying a yacht in Europe?",
      answer:
        "If the yacht is in EU waters and VAT has not already been paid, the purchase will trigger a VAT liability. EU-based buyers purchasing a yacht already in EU free circulation and with VAT paid status typically do not pay VAT again. If the vessel has no VAT paid status, or is being imported from outside the EU, VAT becomes payable either at the point of purchase or import.",
    },
    {
      question: "How much VAT do I pay on a yacht purchase?",
      answer:
        "The standard VAT rate on a yacht purchase varies by EU member state: 20% in France, 22% in Italy, 19% in Germany, 18% in Malta, 21% in Spain. On a €1 million yacht at the standard rate, this represents €180,000–€220,000 in additional cost. Leasing structures and charter arrangements can reduce the effective rate significantly.",
    },
    {
      question: "What does VAT paid status mean on a yacht?",
      answer:
        "VAT paid status means that the appropriate VAT has been paid on the yacht at some point in its history, and the vessel is in EU free circulation. A yacht with VAT paid status can be bought and sold within the EU without triggering additional VAT liability for private buyers. Proof of VAT paid status is important documentation in any EU yacht transaction.",
    },
    {
      question: "What is the Malta VAT leasing structure?",
      answer:
        "The Malta leasing structure allows a Maltese company to lease the yacht to the beneficial owner, with VAT applied only to the portion of the lease attributable to EU water use. Since yachts are presumed to spend time in international waters, the effective VAT rate is significantly lower than the standard rate. Malta's tax authority has published guidelines on the applicable percentages by yacht length.",
    },
    {
      question: "Can I recover VAT if I use the yacht for charter?",
      answer:
        "Yes, in principle. If a yacht is operated commercially as a charter vessel, the owning entity can register for VAT and recover input VAT on the purchase. However, any private use by the owner creates a taxable benefit, and the structure must be genuinely commercial rather than a mechanism for recovering VAT on a private vessel. This requires specialist tax advice and correct structuring from the outset.",
    },
    {
      question: "Does a yacht from outside the EU have VAT paid status?",
      answer:
        "No. A yacht brought into the EU from outside — for example from Turkey, Montenegro, or the United States — will not have EU VAT paid status regardless of what taxes were paid in its home country. Importing the vessel into the EU triggers an import VAT liability, which is payable at the point of entry. The rate is calculated on the vessel's customs value.",
    },
    {
      question: "How does the VAT position of a yacht affect its financing?",
      answer:
        "Lenders want clarity on the VAT position of any vessel they are financing. An unclear or disputed VAT status creates uncertainty around the asset's true value and saleable condition. Most lenders require confirmation of VAT paid status or a clear explanation of the VAT treatment as part of the pre-approval documentation. An unexpected VAT liability discovered after drawdown can also affect the borrower's ability to service the loan.",
    },
  ],

  relatedPages: [
    { title: "Structuring Hub", href: "/structuring/", description: "All structuring topics" },
    { title: "VAT on Yacht Purchases in Europe", href: "/structuring/vat-on-yacht-purchases-in-europe/", description: "Country-by-country breakdown" },
    { title: "Malta Yacht Leasing", href: "/structuring/malta-yacht-leasing/", description: "The most used leasing structure" },
    { title: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/", description: "How ownership affects VAT" },
    { title: "Buying Through a Company", href: "/structuring/buying-a-yacht-through-a-company/", description: "VAT recovery via company ownership" },
    { title: "What Lenders Look For", href: "/financing/what-lenders-look-for-in-yacht-financing/", description: "Lender view on VAT position" },
    { title: "Yacht Finance Document Checklist", href: "/documents/yacht-finance-document-checklist/", description: "Including VAT documentation" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Structuring", href: "/structuring/" },
    { name: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/" },
  ],

  cta: {
    heading: "See how your VAT position affects your financing readiness",
    body: "Waaza's assessment models the financing implications of your ownership structure and VAT position before you approach a lender.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "yacht vat",
    secondary: ["vat on yacht purchase", "yacht vat explained", "yacht vat europe", "boat vat uk"],
    lsi: ["yacht vat paid status", "malta vat leasing yacht", "yacht import vat", "vat recovery charter yacht"],
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
    images: [{ url: "https://www.waaza.co/og/yacht-vat-explained-og.jpg", width: 1200, height: 630, alt: "Yacht VAT explained — Waaza" }],
  },
  twitter: { card: "summary_large_image", site: "@waaza", title: pageData.meta.title, description: pageData.meta.description, images: ["https://www.waaza.co/og/yacht-vat-explained-og.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

function ArticleContent() {
  return (
    <>
      <h2 id="vat-basics">How VAT applies to yacht purchases</h2>
      <p>
        Value Added Tax on yacht purchases in Europe operates on a territorial principle: yachts in EU
        waters must have VAT paid or accounted for. The liability arises at different points depending
        on the transaction type — on purchase of a new vessel, on import of a vessel from outside the
        EU, or on the first occasion a vessel without VAT paid status enters EU waters.
      </p>
      <p>
        For buyers purchasing a second-hand yacht already in EU free circulation with a clean VAT paid
        history, the private purchase typically does not trigger additional VAT. The buyer assumes
        ownership of the vessel's existing VAT status. It is the seller's responsibility to provide
        evidence of that status, and the buyer's responsibility to verify it before completing.
      </p>
      <p>
        Where the position becomes complex — and expensive — is when the vessel's VAT history is
        unclear, when the vessel is being imported, or when the buyer intends to use a leasing
        structure to manage the VAT liability. Each scenario requires specialist advice, and the advice
        should be obtained before the purchase agreement is signed.
      </p>

      <Image
        src="/structuring/waaza-insurance-1.png"
        alt="Illustration representing yacht VAT structuring decisions and tax planning for European yacht purchases"
        width={1080}
        height={720}
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }}
      />

      <h3 id="rates-by-country">VAT rates by country</h3>
      <p>
        The applicable VAT rate depends on where the transaction takes place and which country's tax
        authority is responsible for collecting it. Standard rates across the main yacht markets:
      </p>

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Standard VAT rate</th>
            <th>VAT on €1m yacht</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>France</td>
            <td>20%</td>
            <td>€200,000</td>
            <td>French leasing structure available</td>
          </tr>
          <tr>
            <td>Italy</td>
            <td>22%</td>
            <td>€220,000</td>
            <td>Highest rate in major markets</td>
          </tr>
          <tr>
            <td>Spain</td>
            <td>21%</td>
            <td>€210,000</td>
            <td>Canary Islands: 7% IGIC</td>
          </tr>
          <tr>
            <td>Malta</td>
            <td>18%</td>
            <td>€180,000</td>
            <td>Malta leasing significantly reduces this</td>
          </tr>
          <tr>
            <td>Greece</td>
            <td>24%</td>
            <td>€240,000</td>
            <td>Highest standard rate in EU</td>
          </tr>
          <tr>
            <td>Croatia</td>
            <td>25%</td>
            <td>€250,000</td>
            <td>Reduced rate for some transactions</td>
          </tr>
          <tr>
            <td>UK (post-Brexit)</td>
            <td>20%</td>
            <td>£200,000</td>
            <td>Separate from EU — UK VAT status no longer EU VAT paid</td>
          </tr>
        </tbody>
      </table>

      <h2 id="vat-paid-status">VAT paid status — what it means and why it matters</h2>
      <p>
        A yacht's VAT paid status is one of the most important pieces of documentation in any EU
        transaction. It confirms that the appropriate VAT was paid when the vessel first entered EU
        free circulation — typically at the time of original sale by a builder or dealer, or at the
        point of import.
      </p>
      <p>
        Evidence of VAT paid status typically comes in the form of the original purchase invoice
        showing VAT charged, a customs import declaration (SAD form) showing VAT paid at import, or a
        specialist VAT certificate. The standard of proof required by tax authorities has become more
        stringent in recent years — informal assurances from sellers are not sufficient.
      </p>
      <p>
        A vessel without clear VAT paid status is a significant liability risk for the buyer. If the
        tax authority determines that VAT has not been properly accounted for, the current owner —
        not the previous owners — bears the liability. Due diligence on VAT status is as important as
        the structural survey.
      </p>

      <h2 id="importing-from-outside-eu">Importing a yacht into the EU</h2>
      <p>
        Yachts purchased outside the EU — from the UK (post-Brexit), Turkey, Montenegro, the United
        States, or any other non-EU country — do not have EU VAT paid status regardless of the taxes
        paid in their country of origin. Bringing such a vessel into EU waters on a permanent basis
        triggers an import VAT liability.
      </p>
      <p>
        Import VAT is calculated on the vessel's customs value, which is typically the purchase price
        adjusted for freight, insurance, and any other costs to the EU border. The rate is the standard
        VAT rate of the EU member state of entry. A vessel declared at the Canary Islands (7% IGIC)
        arrives at a very different cost than one declared in Greece (24%).
      </p>
      <p>
        Temporary admission procedures allow non-EU flagged vessels owned by non-EU residents to remain
        in EU waters for up to 18 months without paying import VAT. This is a temporary measure, not
        a permanent solution, and the conditions are strict. It does not apply to EU residents.
      </p>

      <h2 id="leasing-structures">How leasing structures reduce VAT</h2>
      <p>
        The <a href="/structuring/malta-yacht-leasing/">Malta leasing structure</a> and its French
        equivalent are the two principal mechanisms for reducing the effective VAT rate on a yacht
        purchase. Both operate on the same principle: VAT is applied only to the portion of the
        lease attributable to use in EU territorial waters, not to the full vessel value.
      </p>
      <p>
        Since yachts spend time in international waters where EU VAT does not apply, the effective
        VAT base is reduced. Malta's tax authority publishes tables setting out the applicable
        percentages based on yacht length — a larger yacht, presumed to spend more time offshore,
        attracts a lower effective rate. The resulting effective VAT rates can be as low as 5.4% on
        the largest vessels.
      </p>
      <p>
        These structures are legitimate and approved by the relevant tax authorities, but they require
        proper setup — a Maltese or French company must be incorporated, the lease agreement must be
        correctly drafted, and ongoing compliance obligations must be met. They are not DIY arrangements
        and require specialist legal and tax advisers who work in the marine sector regularly.
      </p>

      <Image
        src="/structuring/waaza-insurance-2.png"
        alt="Illustration of yacht leasing structure VAT calculation showing how Malta and French leasing reduce the effective VAT rate on a yacht purchase"
        width={1080}
        height={720}
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }}
      />

      <h2 id="charter-and-vat">VAT recovery on charter use</h2>
      <p>
        If a yacht is operated commercially as a charter vessel, the owning entity can in principle
        register for VAT and recover the input VAT paid on the purchase. This makes charter use
        potentially VAT-efficient, but the structure must be genuinely commercial.
      </p>
      <p>
        Tax authorities across the EU have become increasingly scrutinous of structures where the
        beneficial owner uses the yacht primarily for private purposes but claims VAT recovery on the
        basis of commercial charter. The criteria for a genuine charter operation include market-rate
        charter fees, documented commercial bookings, and proportional private use treatment.
      </p>
      <p>
        The interaction between charter VAT recovery and the ownership structure — whether the vessel
        is owned personally, through an SPV, or through a company — is complex. Getting this wrong
        creates both a VAT liability and potential penalties. Specialist advice is essential before
        pursuing this route.
      </p>

      <h2 id="financing-and-vat">How VAT position affects financing</h2>
      <p>
        Lenders are increasingly attentive to the VAT position of vessels they are financing. An
        unclear or disputed VAT status affects the asset's saleability — a vessel that cannot be
        sold without triggering a VAT liability is worth less as security than one with a clean
        VAT paid position.
      </p>
      <p>
        Most lenders require confirmation of the vessel's VAT status as part of the pre-approval
        documentation. For vessels being acquired through a leasing structure, the lender must
        understand how the leasing arrangement affects the security package — the lender's charge
        is typically over the vessel itself, and the relationship between the lease, the ownership
        entity, and the financing must be clearly documented.
      </p>
      <p>
        For more on how structuring decisions affect financing options, see{" "}
        <a href="/structuring/personal-vs-spv-yacht-ownership/">personal vs SPV yacht ownership</a>{" "}
        and the guide to{" "}
        <a href="/financing/what-lenders-look-for-in-yacht-financing/">what lenders look for</a>.
      </p>

      <blockquote>
        VAT is not a tax that can be managed after the purchase. The decisions that determine your VAT
        liability are made at the point of transaction — sometimes earlier. Every buyer should obtain
        independent VAT advice before signing a purchase agreement.
      </blockquote>
    </>
  );
}

export default function YachtVatExplainedPage() {
  return (
    <StructuringSiloShell data={pageData}>
      <ArticleContent />
    </StructuringSiloShell>
  );
}