// app/structuring/buying-a-yacht-through-a-company/page.tsx
// ─────────────────────────────────────────────────────────────
// /structuring/buying-a-yacht-through-a-company/
// Tier 1 · ~1,000/mo · Low competition
// Primary KW: buying a yacht through a company
// Distinct angle from SPV page: tax, benefit-in-kind, trading companies
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Image from "next/image";
import { StructuringSiloShell } from "../_components/StructuringSiloShell";
import type { StructuringPageData } from "@/lib/structuring/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: StructuringPageData = {
  slug: "buying-a-yacht-through-a-company",
  tier: 1,
  intent: "commercial",

  meta: {
    title: "Buying a Yacht Through a Company: Tax, VAT and Financing Implications | Waaza",
    description:
      "What happens when you buy a yacht through a company — the tax treatment, VAT implications, benefit-in-kind rules, financing complications, and when it is and isn't a good idea.",
    canonical: "https://www.waaza.co/structuring/buying-a-yacht-through-a-company/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "Buying a Yacht Through a Company: What It Means for Tax, VAT and Financing",
    intro:
      "Purchasing a yacht through an existing trading company or holding company is a common instinct among business owners — but it is rarely the right structure for a privately used vessel. The tax, VAT, and financing implications are frequently more complex and more expensive than buyers expect. This guide explains what buying through a company actually means in practice, when it makes sense, and when personal or SPV ownership is a better choice.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  toc: [
    { id: "what-it-means", label: "What buying through a company means", level: 2 },
    { id: "benefit-in-kind", label: "Benefit-in-kind tax on private use", level: 2 },
    { id: "vat-recovery", label: "VAT recovery — when it works and when it doesn't", level: 2 },
    { id: "financing", label: "Financing a company-owned yacht", level: 2 },
    { id: "vs-spv", label: "Company ownership vs SPV ownership", level: 2 },
    { id: "when-it-works", label: "When company ownership genuinely works", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "Can my company buy a yacht?",
      answer:
        "Yes — a company can purchase and own a yacht. However, the tax treatment of that ownership depends heavily on how the yacht is used. If the yacht is used privately by directors or shareholders, the value of that use is typically treated as a taxable benefit-in-kind. If the yacht is used genuinely commercially — as a charter vessel or for business entertainment — the tax treatment is different.",
    },
    {
      question: "Can my company claim back VAT on a yacht purchase?",
      answer:
        "A VAT-registered company can in principle reclaim VAT on a yacht purchase, but only if the yacht is used exclusively for business purposes. Any private use by directors, shareholders, or connected parties creates a partial block on VAT recovery. HMRC and other EU tax authorities take a dim view of full VAT recovery claims on vessels that are primarily used privately.",
    },
    {
      question: "What is the benefit-in-kind tax on a yacht owned by a company?",
      answer:
        "In the UK, the personal use of a company-owned asset by a director or employee creates a benefit-in-kind charge based on the annual value of that use. For yachts, this is typically calculated as a percentage of the vessel's market value — the exact percentage depends on the tax authority's methodology. The resulting income tax charge can be substantial and often makes company ownership of a private yacht economically unattractive.",
    },
    {
      question: "Will a lender finance a yacht owned by my trading company?",
      answer:
        "Most marine lenders prefer to lend against personal ownership or a single-asset SPV rather than an existing trading company. A trading company has other assets, liabilities, and obligations that complicate the security position. Lenders typically require the yacht to be held in a clean entity with no other assets — which means an SPV, not an existing company.",
    },
    {
      question: "Is it better to buy a yacht through a company or an SPV?",
      answer:
        "For most buyers, an SPV (a single-asset company created solely to own the yacht) is preferable to using an existing trading company. An SPV provides a cleaner legal and tax position, is more acceptable to lenders, and avoids contaminating an existing business with the liabilities associated with yacht ownership. The SPV can be a subsidiary of a holding company if group structure is required.",
    },
    {
      question: "Can I write off a yacht as a business expense?",
      answer:
        "In limited circumstances. If the yacht is used genuinely for business purposes — client entertainment, business travel, or as a charter vessel — some costs may be deductible. However, HMRC and EU tax authorities scrutinise yacht-related claims heavily. Private use must be carefully separated from business use, and the documentation requirements are significant. This is an area where specialist tax advice is essential.",
    },
    {
      question: "What are the risks of buying a yacht through a company?",
      answer:
        "The main risks are: unexpected benefit-in-kind tax charges on private use; partial or full blockage of VAT recovery; difficulty obtaining standard marine financing; and the risk that the yacht becomes an asset of the company that is exposed to the company's creditors. If the business gets into financial difficulty, the yacht — as a company asset — could be available to creditors.",
    },
  ],

  relatedPages: [
    { title: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/", description: "The cleaner alternative to company ownership" },
    { title: "Structuring Hub", href: "/structuring/", description: "All structuring topics" },
    { title: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/", description: "How VAT applies to company ownership" },
    { title: "Malta Yacht Leasing", href: "/structuring/malta-yacht-leasing/", description: "VAT-efficient structure via SPV" },
    { title: "What Lenders Look For", href: "/financing/what-lenders-look-for-in-yacht-financing/", description: "Lender view on ownership structure" },
    { title: "How Yacht Financing Works", href: "/financing/how-yacht-financing-works/", description: "Financing basics" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Structuring", href: "/structuring/" },
    { name: "Buying Through a Company", href: "/structuring/buying-a-yacht-through-a-company/" },
  ],

  cta: {
    heading: "See how your ownership structure affects financing readiness",
    body: "Waaza models the financing implications of company, SPV, and personal ownership before you approach a lender.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "buying a yacht through a company",
    secondary: ["company owned yacht tax", "yacht through limited company", "yacht business expense", "yacht company ownership uk"],
    lsi: ["yacht benefit in kind", "company yacht vat", "yacht corporation tax", "business yacht deduction"],
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
    images: [{ url: "https://www.waaza.co/og/buying-a-yacht-through-a-company-og.jpg", width: 1200, height: 630, alt: "Buying a yacht through a company — Waaza" }],
  },
  twitter: { card: "summary_large_image", site: "@waaza", title: pageData.meta.title, description: pageData.meta.description, images: ["https://www.waaza.co/og/buying-a-yacht-through-a-company-og.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

function ArticleContent() {
  return (
    <>
      <h2 id="what-it-means">What buying through a company means in practice</h2>
      <p>
        When a company purchases a yacht, the company — not the individual — is the legal owner of the
        vessel. The company's name appears on the registration, the insurance policy, and the financing
        documents. The individual who uses the yacht does so as a user of a company asset, not as an
        owner.
      </p>
      <p>
        This distinction has significant tax consequences. In most jurisdictions, the personal use of
        a company asset by a director, shareholder, or connected person creates a taxable event — the
        value of that use is treated as income received by the individual and taxed accordingly. The
        company may also face restrictions on the deductibility of the yacht's running costs if private
        use is present.
      </p>
      <p>
        Business owners often assume that routing the yacht through the company will reduce the overall
        tax burden. In most cases for privately used vessels, the opposite is true — the benefit-in-kind
        charge on private use adds a layer of taxation that makes company ownership more expensive than
        personal ownership.
      </p>

      <h2 id="benefit-in-kind">Benefit-in-kind tax on private use</h2>
      <p>
        In the UK, HMRC taxes the personal use of company assets as a benefit in kind. For yachts,
        the annual benefit charge is calculated on the vessel's market value — specifically, 20% of the
        market value of the asset per year, reduced proportionally if the yacht is also used for genuine
        business purposes.
      </p>
      <p>
        On a £500,000 yacht, the annual benefit-in-kind charge at 20% would be £100,000. At a 45%
        income tax rate, this creates a personal tax bill of £45,000 per year — simply for having
        the use of a company-owned vessel. Over a five-year ownership period, this amounts to £225,000
        in additional personal taxation, dwarfing any corporation tax efficiency achieved through the
        company.
      </p>
      <p>
        Similar rules apply across EU member states, though the calculation methodology varies. The
        fundamental principle — that private use of a company asset creates a taxable benefit for the
        user — is consistent across most jurisdictions.
      </p>

      <Image
        src="/structuring/waaza-insurance-4.png"
        alt="Illustration showing the tax implications of buying a yacht through a company versus personal or SPV ownership"
        width={1080}
        height={720}
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }}
      />

      <h2 id="vat-recovery">VAT recovery — when it works and when it doesn't</h2>
      <p>
        A VAT-registered company can theoretically reclaim input VAT on purchases made for business
        purposes. If a company buys a yacht and uses it exclusively for business — client entertainment,
        genuine business travel, or commercial charter — it can claim back the VAT on the purchase price.
      </p>
      <p>
        The problem is that any private use by the owner, directors, or their families blocks VAT recovery
        — either partially or completely. Tax authorities in the UK and across the EU are highly suspicious
        of VAT recovery claims on luxury assets that have obvious private use potential. HMRC, in
        particular, has historically challenged yacht-related VAT recovery claims aggressively.
      </p>
      <p>
        The documentation required to sustain a VAT recovery claim on a yacht is demanding: detailed
        usage logs distinguishing business and private use, commercial charter income at market rates,
        evidence that private use was genuinely incidental. Most advisers counsel against attempting
        VAT recovery on a company-owned yacht unless the commercial use is genuine, substantial, and
        well-documented from the outset.
      </p>
      <p>
        For buyers who genuinely want VAT efficiency, the{" "}
        <a href="/structuring/malta-yacht-leasing/">Malta leasing structure</a> through a purpose-built
        SPV is a more defensible and better-established approach than attempting VAT recovery through
        a trading company. See also the{" "}
        <a href="/structuring/yacht-vat-explained/">yacht VAT explained guide</a> for the full picture.
      </p>

      <h2 id="financing">Financing a company-owned yacht</h2>
      <p>
        Most specialist marine lenders prefer to lend against personally owned yachts or clean
        single-asset SPVs. Lending against a yacht owned by an existing trading company creates
        complications: the company has other assets, other liabilities, and other creditors whose
        claims might take priority over the lender's security.
      </p>
      <p>
        If a lender does agree to finance a company-owned yacht, they will typically require:
      </p>
      <ul>
        <li>Full company accounts and financial statements</li>
        <li>A charge over the vessel</li>
        <li>Personal guarantees from the directors or shareholders</li>
        <li>Confirmation that the vessel is the company's primary or only significant asset</li>
      </ul>
      <p>
        In practice, most marine lenders will insist on the yacht being held in a separate clean entity
        — effectively an SPV — before they will lend. If financing is required, the yacht should be in
        its own vehicle, not in the trading company.
      </p>

      <h2 id="vs-spv">Company ownership vs SPV ownership</h2>
      <p>
        The distinction between owning through an existing company and owning through a purpose-built
        SPV is important. An SPV is itself a company — but it is a company created solely to own the
        yacht, with no other assets, no other liabilities, and no other business activity.
      </p>
      <p>
        An SPV is cleaner in almost every respect: lenders are more comfortable with it, the benefit-in-kind
        analysis is simpler (the SPV has no employees or directors with competing interests), and the
        VAT position can be structured more effectively. For buyers who want the benefits of company
        ownership without its complications, the SPV is typically the answer.
      </p>
      <p>
        For a detailed comparison of the two structures, see the guide to{" "}
        <a href="/structuring/personal-vs-spv-yacht-ownership/">personal vs SPV yacht ownership</a>.
      </p>

      <h2 id="when-it-works">When company ownership genuinely works</h2>
      <p>
        There are specific scenarios where owning a yacht through an existing company — rather than
        personally or through an SPV — makes sense:
      </p>
      <ul>
        <li>
          <strong>Genuine commercial charter:</strong> A yacht management company or charter operator
          that owns and operates vessels as its primary business activity. The yacht is a business asset
          in the truest sense, and VAT recovery and cost deductibility are straightforward.
        </li>
        <li>
          <strong>Corporate hospitality at scale:</strong> A large business that uses a yacht
          extensively for genuine client entertainment, with a robust usage log and market-rate
          internal charging. Even here, the benefit-in-kind analysis for any private use must be handled.
        </li>
        <li>
          <strong>Existing marine business:</strong> A boat dealer, marina operator, or yacht management
          company for which vessel ownership is part of normal business operations.
        </li>
      </ul>
      <p>
        Outside these scenarios, the combination of benefit-in-kind taxation, restricted VAT recovery,
        and financing complications typically makes personal or SPV ownership preferable. The instinct
        to route a private yacht through a company to achieve tax efficiency rarely survives a proper
        analysis of the actual numbers.
      </p>

      <blockquote>
        The question is not whether the company can own the yacht — it can. The question is whether
        company ownership is cheaper than personal ownership once all the tax consequences are modelled.
        For most privately used vessels, it is not.
      </blockquote>
    </>
  );
}

export default function BuyingThroughCompanyPage() {
  return (
    <StructuringSiloShell data={pageData}>
      <ArticleContent />
    </StructuringSiloShell>
  );
}