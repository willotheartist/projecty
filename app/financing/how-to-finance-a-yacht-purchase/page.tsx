
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.waaza.co";

const title = "How to Finance a Yacht Purchase: Step-by-Step | Waaza";
const description =
  "Learn how to finance a yacht purchase step by step, from pre-qualification and survey to insurance, closing and first payment, without avoidable delays.";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentHover: "#f0ec5a",
  accentPale: "#fffde0",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  tint: "#f7f6f1",
  softBtn: "#f1f1f1",
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "how to finance a yacht purchase",
    "finance a yacht purchase",
    "yacht financing process",
    "step by step yacht financing",
    "marine loan process",
    "yacht purchase financing guide",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/financing/how-to-finance-a-yacht-purchase",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: "/financing/how-to-finance-a-yacht-purchase",
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    publishedTime: "2026-03-17T00:00:00.000Z",
    modifiedTime: "2026-03-17T00:00:00.000Z",
    images: [
      {
        url: "/home/waaza-yacht-financing-tool--1.jpg",
        width: 1200,
        height: 630,
        alt: "How to finance a yacht purchase step by step",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/home/waaza-yacht-financing-tool--1.jpg"],
  },
};

const toc = [
  { id: "what-the-process-looks-like", label: "What the process looks like" },
  { id: "before-you-apply", label: "Before you apply" },
  { id: "find-the-yacht", label: "Find the yacht and structure the offer" },
  { id: "submit-the-file", label: "Submit the file to lenders" },
  { id: "survey-and-underwriting", label: "Survey, appraisal and underwriting" },
  { id: "insurance-and-closing", label: "Insurance, sea trial and closing" },
  { id: "after-closing", label: "What happens after closing" },
  { id: "special-situations", label: "Special situations and delays" },
  { id: "common-mistakes", label: "Common yacht financing mistakes" },
  { id: "faq", label: "Frequently asked questions" },
];

const faqs = [
  {
    question: "How long does yacht financing usually take?",
    answer:
      "Most clean cases take around 2 to 4 weeks from application to funding. Straightforward purchases with quick document turnaround and a clean survey can move in 10 to 14 days. More complex cases, especially where survey findings, title issues or insurance friction appear, can stretch toward 6 to 8 weeks.",
  },
  {
    question: "What credit score do you usually need to finance a yacht?",
    answer:
      "Competitive terms often start around the high-600s, with stronger pricing and cleaner structures usually appearing once the borrower is into the 700s. Lower scores may still be financeable, but the rate, deposit and lender appetite usually become less attractive.",
  },
  {
    question: "How much down payment is normal on a yacht purchase?",
    answer:
      "A common working range is roughly 10% to 30% of the purchase price, with many ordinary mid-market cases landing closer to 15% to 20%. Older boats, weaker credit, thinner reserves or harder collateral can push that number higher.",
  },
  {
    question: "How much does the survey and insurance side usually cost?",
    answer:
      "Survey costs often land around £1,500 to £4,000 depending on size, complexity and location. Annual marine insurance is frequently around 1% to 3% of yacht value, though that changes with yacht type, age, cruising area and your experience profile.",
  },
  {
    question: "Can I get approved before I choose a yacht?",
    answer:
      "You can often get pre-qualified or pre-approved before choosing the final boat. That helps you understand budget, likely rate range and lender appetite. Final approval still depends on the actual yacht, the survey, the valuation story and the full document file.",
  },
  {
    question: "What happens if the survey finds major problems?",
    answer:
      "That is exactly why the survey matters. You may renegotiate the price, require repairs before closing, add more cash if value comes in low, or walk away using your survey contingency. Serious structural, engine or safety issues can also make the lender decline the case entirely.",
  },
  {
    question: "Can I finance a yacht bought from a private seller?",
    answer:
      "Yes. The financing logic is largely the same whether the yacht is bought from a broker, dealer or private seller. The difference is usually coordination. With a private sale, you and your advisers often carry more responsibility for due diligence, paperwork and closing logistics.",
  },
  {
    question: "Can I repay a yacht loan early or refinance later?",
    answer:
      "Usually yes, but you should check the loan documents for prepayment penalties and closing fees. Refinancing can make sense when rates improve materially, your credit strengthens, or you want a different term structure. It only works if the savings outweigh the cost of doing the deal again.",
  },
];

const relatedPages = [
  {
    href: "/financing/how-yacht-financing-works",
    title: "How yacht financing works",
    blurb: "The mechanics behind underwriting, collateral and lender decision-making.",
  },
  {
    href: "/financing/what-lenders-look-for-in-yacht-financing",
    title: "What lenders look for",
    blurb: "Understand the borrower and vessel signals that shape approval.",
  },
  {
    href: "/financing/typical-deposit-for-yacht-financing",
    title: "Typical deposit ranges",
    blurb: "See what usually changes the down payment and loan-to-value story.",
  },
  {
    href: "/assessment/how-much-yacht-can-i-afford",
    title: "How much yacht can I afford?",
    blurb: "Pressure-test budget, liquidity and monthly payment reality before you buy.",
  },
  {
    href: "/yacht-finance-calculator",
    title: "Open the yacht finance calculator",
    blurb: "Run scenarios on deposit, term and payment before speaking to lenders.",
  },
];

function absoluteUrl(path: string) {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function ArrowRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function WalletIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14" />
      <path d="M3 7h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="M16 14h.01" />
    </svg>
  );
}

function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-reveal
      style={{
        padding: "56px 0",
        borderTop: `1px solid ${C.gray6}`,
        scrollMarginTop: 110,
      }}
    >
      <h2
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(34px,3vw,48px)",
          lineHeight: 1.06,
          fontWeight: 400,
          letterSpacing: -1.1,
          marginBottom: 14,
          color: C.black,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: 17,
          lineHeight: 1.82,
          color: C.gray2,
          marginBottom: 24,
          maxWidth: 920,
          fontWeight: 400,
        }}
      >
        {intro}
      </p>

      <div className="rich" style={{ fontSize: 16, lineHeight: 1.92, color: C.gray2 }}>
        {children}
      </div>
    </section>
  );
}

function VisualSplit({
  imageSrc,
  imageAlt,
  label,
  title,
  body,
  reverse = false,
}: {
  imageSrc: string;
  imageAlt: string;
  label: string;
  title: string;
  body: string;
  reverse?: boolean;
}) {
  return (
    <section
      data-reveal
      className={`visual-split ${reverse ? "reverse" : ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(320px,.92fr) minmax(0,1.08fr)",
        gap: 18,
        margin: "18px 0 8px",
      }}
    >
      <div
        style={{
          background: C.accent,
          borderRadius: 30,
          padding: "34px 34px 30px",
          color: C.black,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 360,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.38)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            <WalletIcon size={14} />
            {label}
          </div>

          <h3
            style={{
              fontSize: "clamp(30px,3vw,46px)",
              lineHeight: 1.04,
              fontWeight: 600,
              margin: "0 0 18px",
              letterSpacing: -1,
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.82,
              margin: 0,
              maxWidth: 520,
            }}
          >
            {body}
          </p>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          borderRadius: 30,
          overflow: "hidden",
          minHeight: 360,
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1180px) 100vw, 60vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}

function ChecklistCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div
      style={{
        background: C.white,
        border: `1px solid ${C.gray6}`,
        borderRadius: 24,
        padding: "22px 22px 20px",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 1.1,
          textTransform: "uppercase",
          color: C.gray4,
          marginBottom: 12,
        }}
      >
        {title}
      </div>

      <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 10 }}>
        {items.map((item) => (
          <li key={item} style={{ color: C.gray2 }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl("/home/waaza-yacht-financing-tool--1.jpg"),
    datePublished: "2026-03-17T00:00:00.000Z",
    dateModified: "2026-03-17T00:00:00.000Z",
    author: {
      "@type": "Organization",
      name: "Waaza",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Waaza",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/iconpng.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl("/financing/how-to-finance-a-yacht-purchase"),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Financing",
        item: absoluteUrl("/financing"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to finance a yacht purchase",
        item: absoluteUrl("/financing/how-to-finance-a-yacht-purchase"),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <style>{`
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; background: ${C.bg}; }
        a { text-decoration: none; color: inherit; }

        .rich p { margin: 0 0 18px; }
        .rich h3 {
          margin: 28px 0 10px;
          font-family: 'Inter Tight', sans-serif;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 500;
          color: ${C.black};
        }
        .rich strong { font-weight: 600; color: ${C.black}; }
        .rich a {
          color: ${C.black};
          font-weight: 600;
          box-shadow: inset 0 -1px 0 rgba(10,10,10,.18);
          transition: box-shadow .24s ease;
        }
        .rich a:hover {
          box-shadow: inset 0 -2px 0 ${C.accent};
        }

        .hero-shell {
          position: relative;
          min-height: 86vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: ${C.black};
        }
        .hero-media {
          position: absolute;
          inset: 0;
        }
        .hero-media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.38);
        }
        .hero-copy {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 56px 24px 60px;
          text-align: center;
          color: #fff;
          animation: heroRise 1s cubic-bezier(0.16,1,0.3,1) .06s both;
        }
        .hero-copy a { color: #fff; }
        .hero-breadcrumbs {
          display: flex;
          gap: 8px;
          justify-content: center;
          flex-wrap: wrap;
          font-size: 13px;
          color: rgba(255,255,255,0.72);
          margin-bottom: 18px;
        }
        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: ${C.accent};
          color: ${C.black};
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .hero-sub {
          max-width: 860px;
          margin: 0 auto 30px;
          font-size: 18px;
          line-height: 1.85;
          color: rgba(255,255,255,0.88);
          font-weight: 400;
        }
        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 34px;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 14px;
          max-width: 980px;
          margin: 0 auto;
        }
        .hero-stat {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 22px;
          padding: 18px 20px;
          backdrop-filter: blur(6px);
          text-align: left;
        }

        .layout-grid {
          display: grid;
          grid-template-columns: 280px minmax(0,1fr);
          gap: 42px;
          align-items: start;
        }
        .toc-shell {
          position: sticky;
          top: 104px;
          align-self: start;
          padding-top: 6px;
        }
        .toc-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: ${C.gray4};
          margin-bottom: 18px;
        }
        .toc-list {
          position: relative;
          display: grid;
          gap: 0;
          padding-left: 18px;
        }
        .toc-list::before {
          content: "";
          position: absolute;
          left: 4px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: ${C.gray6};
        }
        .toc-link {
          position: relative;
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 12px;
          align-items: start;
          padding: 12px 0;
          color: ${C.gray3};
          transition: color .24s ease, transform .24s ease;
        }
        .toc-link::before {
          content: "";
          position: absolute;
          left: -18px;
          top: 18px;
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: ${C.bg};
          border: 1px solid ${C.gray5};
          transition: background .24s ease, border-color .24s ease, transform .24s ease;
        }
        .toc-link:hover,
        .toc-link[data-active="true"] {
          color: ${C.black};
          transform: translateX(2px);
        }
        .toc-link:hover::before,
        .toc-link[data-active="true"]::before {
          background: ${C.accent};
          border-color: ${C.accent};
        }
        .toc-number {
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${C.gray4};
          padding-top: 2px;
        }

        .visual-split.reverse > :first-child { order: 2; }
        .visual-split.reverse > :last-child { order: 1; }

        .mid-cta {
          background: ${C.accent};
          border-radius: 32px;
          padding: 40px clamp(24px,4vw,42px);
          color: ${C.black};
          margin: 18px 0 10px;
        }
        .end-cta {
          background: ${C.tint};
          border: 1px solid ${C.gray6};
          border-radius: 30px;
          padding: 34px clamp(24px,4vw,40px);
        }

        .doc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 16px;
          margin-top: 22px;
        }

        .faq-grid { display: grid; gap: 12px; }
        .faq-item {
          border-top: 1px solid ${C.gray6};
          border-bottom: 1px solid ${C.gray6};
          background: transparent;
          transition: border-color .25s ease;
        }
        .faq-item:hover { border-color: ${C.gray5}; }
        .faq-summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 0;
          font-size: 17px;
          line-height: 1.45;
          font-weight: 500;
          color: ${C.black};
        }
        .faq-summary::-webkit-details-marker { display: none; }
        .faq-plus {
          flex: 0 0 auto;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: 1px solid ${C.gray6};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform .28s ease, background .28s ease, border-color .28s ease;
        }
        .faq-item[open] .faq-plus {
          transform: rotate(45deg);
          background: ${C.accentPale};
          border-color: ${C.accent};
        }

        .readmore-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 16px;
        }
        .readmore-card {
          display: block;
          padding: 22px 0;
          border-top: 1px solid ${C.gray6};
          border-bottom: 1px solid ${C.gray6};
          transition: transform .24s ease, border-color .24s ease;
        }
        .readmore-card:hover {
          transform: translateY(-1px);
          border-color: ${C.gray5};
        }

        .pill-yellow:hover { background: ${C.accentHover}; transform: translateY(-1px); }
        .pill-soft:hover { background: #e7e7e7; transform: translateY(-1px); }
        .pill-outline:hover { border-color: rgba(255,255,255,.56) !important; background: rgba(255,255,255,.1); }

        [data-reveal] {
          opacity: 1;
          transform: none;
          transition: opacity .85s cubic-bezier(0.16,1,0.3,1), transform .85s cubic-bezier(0.16,1,0.3,1);
          will-change: opacity, transform;
        }
        [data-reveal].will-reveal {
          opacity: 0;
          transform: translateY(18px);
        }
        [data-reveal].will-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes heroRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1180px) {
          .layout-grid,
          .hero-stats,
          .readmore-grid,
          .visual-split,
          .doc-grid { grid-template-columns: 1fr !important; }
          .toc-shell { position: relative !important; top: auto !important; }
        }

        @media (max-width: 820px) {
          .page-h1 { font-size: 48px !important; letter-spacing: -1.1px !important; }
          .hero-shell { min-height: 72vh; }
          .hero-sub { font-size: 17px; }
        }
      `}</style>

      <Script id="page-reveal" strategy="afterInteractive">
        {`
          (() => {
            const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
            const sectionEls = Array.from(document.querySelectorAll("section[id]"));
            const tocLinks = Array.from(document.querySelectorAll(".toc-link"));

            revealEls.forEach((el) => el.classList.add("will-reveal"));

            const linkMap = new Map(
              tocLinks.map((link) => [link.getAttribute("href")?.replace("#", ""), link])
            );

            const revealObserver = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                  }
                });
              },
              { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
            );

            revealEls.forEach((el) => revealObserver.observe(el));

            const tocObserver = new IntersectionObserver(
              (entries) => {
                const visible = entries
                  .filter((entry) => entry.isIntersecting)
                  .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (!visible) return;

                tocLinks.forEach((link) => link.removeAttribute("data-active"));
                const active = linkMap.get(visible.target.id);
                if (active) active.setAttribute("data-active", "true");
              },
              { rootMargin: "-18% 0px -58% 0px", threshold: [0.15, 0.35, 0.6] }
            );

            sectionEls.forEach((section) => tocObserver.observe(section));
          })();
        `}
      </Script>

      <main
        style={{
          background: C.bg,
          color: C.black,
          fontFamily: "'Inter Tight', sans-serif",
          padding: "0 0 32px",
        }}
      >
        <section className="hero-shell">
          <div className="hero-media">
            <Image
              src="/home/waaza-yacht-financing-tool--1.jpg"
              alt="Buyer reviewing yacht financing steps with lender paperwork and purchase planning"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="hero-copy">
            <div className="hero-breadcrumbs">
              <span>
                <Link href="/">Home</Link>
              </span>
              <span style={{ opacity: 0.5 }}>›</span>
              <span>
                <Link href="/financing">Financing</Link>
              </span>
              <span style={{ opacity: 0.5 }}>›</span>
              <span style={{ color: "#fff" }}>How to finance a yacht purchase</span>
            </div>

            <div className="hero-kicker">
              <WalletIcon size={14} />
              Step-by-step guide
            </div>

            <h1
              className="page-h1"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(58px,7vw,94px)",
                lineHeight: 0.96,
                fontWeight: 400,
                letterSpacing: -2.1,
                margin: "0 auto 18px",
                maxWidth: 980,
              }}
            >
              How to finance a yacht purchase without losing momentum halfway through the deal
            </h1>

            <p className="hero-sub">
              Financing a yacht purchase usually means lining up the right lender, preparing your
              documents properly, getting the yacht surveyed, arranging insurance and closing the
              loan in the right order. The broad rhythm often takes 2 to 4 weeks, but the real
              speed depends on how clean the file looks before you start.
            </p>

            <div className="hero-actions">
              <Link
                href="/yacht-finance-calculator"
                className="pill-yellow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "17px 24px",
                  borderRadius: 12,
                  background: C.accent,
                  color: C.black,
                  fontWeight: 600,
                  transition: "all .24s ease",
                }}
              >
                Run payment scenarios
                <ArrowRightIcon size={16} />
              </Link>

              <Link
                href="/assessment/how-much-yacht-can-i-afford"
                className="pill-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "17px 24px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,.26)",
                  color: "#fff",
                  fontWeight: 600,
                  transition: "all .24s ease",
                }}
              >
                Check your real budget
                <ArrowRightIcon size={16} />
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.66)",
                    marginBottom: 8,
                  }}
                >
                  Typical timing
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Usually 2 to 4 weeks</div>
              </div>

              <div className="hero-stat">
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.66)",
                    marginBottom: 8,
                  }}
                >
                  Common deposit
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Often 10% to 30%</div>
              </div>

              <div className="hero-stat">
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.66)",
                    marginBottom: 8,
                  }}
                >
                  Critical gate
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Survey + valuation</div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "34px 24px 0" }}>
          <div className="layout-grid" style={{ paddingBottom: 90 }}>
            <aside className="toc-shell">
              <div className="toc-label">
                <WalletIcon size={14} />
                On this page
              </div>

              <div className="toc-list">
                {toc.map((item, index) => (
                  <a key={item.id} href={`#${item.id}`} className="toc-link">
                    <span className="toc-number">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </aside>

            <div>
              <Section
                id="what-the-process-looks-like"
                title="What does the yacht financing process actually look like?"
                intro="Most buyers imagine the loan as a single approval step. In reality, yacht finance is a sequence: budget, yacht selection, documents, underwriting, survey, insurance and closing."
              >
                <p>
                  Most yacht buyers do not pay cash. They finance because they want to preserve
                  liquidity, manage the cost over time or keep the wider ownership picture more
                  comfortable. That part is normal. What slows deals down is not the idea of
                  borrowing. It is entering the process too late, with the wrong expectations, a
                  weak document file or a yacht that has not yet been pressure-tested properly.
                </p>
                <p>
                  The cleanest way to think about the process is as ten connected stages. First you
                  work out budget, deposit and payment comfort. Then you identify the yacht and make
                  an offer with proper contingencies. After that comes the lender file itself:
                  financial documents, income evidence, asset statements and the purchase
                  agreement. The lender then reviews you and the yacht together, not separately.
                </p>
                <p>
                  That is why this page sits inside the wider <Link href="/financing">financing hub</Link>.
                  If you need the zoomed-out version first, start with{" "}
                  <Link href="/financing/what-is-yacht-financing">what yacht financing is</Link>. If you
                  already understand the concept and want the mechanics around underwriting,
                  collateral and lender process, the companion page on{" "}
                  <Link href="/financing/how-yacht-financing-works">how yacht financing works</Link>{" "}
                  gives that broader context. This page is about the actual sequence you follow from
                  first conversation to funded purchase.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--2.jpg"
                imageAlt="Yacht purchase planning with lender notes, budget figures and pre-qualification preparation"
                label="Start early"
                title="The best yacht financing cases are usually organised before the buyer falls in love with a specific boat."
                body="That does not mean you need every answer upfront. It means you should know the budget, likely deposit range and lender appetite before the transaction starts depending on emotion instead of structure."
              />

              <Section
                id="before-you-apply"
                title="What should you do before you apply for yacht finance?"
                intro="Preparation is where most of the speed lives. If you start the process with a realistic budget and a lender-ready file, the later stages move faster and with less friction."
              >
                <p>
                  Start with three numbers, not one. The first is the purchase budget. The second is
                  the deposit you can comfortably put down. The third is the amount of liquidity you
                  still want left after closing. That last number matters more than many buyers
                  expect. A lender likes equity, but it also likes seeing that the borrower still
                  has breathing room once the deposit, insurance, survey, registration and early
                  ownership costs have all been paid.
                </p>
                <p>
                  Credit also matters early. Buyers with stronger scores usually get cleaner pricing,
                  broader lender choice and lower friction on structure. If you are still testing
                  what feels affordable, use the{" "}
                  <Link href="/assessment/how-much-yacht-can-i-afford">affordability assessment</Link>{" "}
                  and the <Link href="/yacht-finance-calculator">yacht finance calculator</Link> before
                  you start sending applications around. If your first question is whether borrowing
                  is even realistic in your case, the page on{" "}
                  <Link href="/financing/can-you-finance-a-yacht">whether you can finance a yacht</Link>{" "}
                  is the right checkpoint.
                </p>
                <p>
                  Finally, research lenders before the deal becomes urgent. Marine lending is not
                  always handled by ordinary high-street banking teams. You may be dealing with
                  specialised marine lenders, marine divisions inside banks, or relationship-driven
                  lenders who care deeply about the quality of the boat and the clarity of the file.
                  Comparing options early is how you avoid scrambling later when timing starts to
                  matter.
                </p>

                <div className="doc-grid">
                  <ChecklistCard
                    title="What to know before you start"
                    items={[
                      "Your likely deposit range, not just the ideal best-case number",
                      "What monthly payment still feels comfortable after ownership costs",
                      "Whether you want pre-qualification before making an offer",
                      "How old the target yacht is, because age changes lender appetite quickly",
                    ]}
                  />
                  <ChecklistCard
                    title="What to compare between lenders"
                    items={[
                      "Interest rate structure and whether pricing is fixed or variable",
                      "Down payment expectations and loan-to-value comfort",
                      "Term length and whether early repayment is flexible",
                      "Speed, documentation requirements and experience with marine assets",
                    ]}
                  />
                </div>
              </Section>

              <Section
                id="find-the-yacht"
                title="How do you structure the offer once you find the yacht?"
                intro="A lender does not finance a fantasy. It finances a specific vessel, at a specific agreed price, under a specific purchase structure."
              >
                <p>
                  Once you find the yacht you want, the transaction becomes real. That means the
                  purchase agreement matters immediately. It should identify the yacht properly,
                  including make, model, year, hull identification number and agreed purchase price.
                  It should also include timing, deposit mechanics and the contingencies that protect
                  you while the financing and due diligence run in parallel.
                </p>
                <p>
                  Two contingencies matter almost every time: finance approval and satisfactory
                  survey. The finance contingency protects you if the lender will not approve the
                  deal on workable terms. The survey contingency protects you if the yacht turns out
                  to have structural, mechanical or valuation issues serious enough to change the
                  economics of the purchase. Without those contingencies, a buyer can end up forced
                  to renegotiate from a weak position or walk away while forfeiting leverage.
                </p>
                <p>
                  This is also the stage where deposit reality sharpens. Many buyers anchor on the
                  lowest headline number they have heard. The smarter move is to understand the
                  normal range already explained in{" "}
                  <Link href="/financing/typical-deposit-for-yacht-financing">our deposit guide</Link>,
                  then judge the actual boat in front of you. The right structure is not just the one
                  that gets approved. It is the one that still feels rational after survey,
                  insurance and ongoing ownership costs land on top.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--4.jpg"
                imageAlt="Signed yacht purchase agreement with finance and survey contingencies clearly structured"
                label="Offer stage"
                title="A clean purchase agreement makes the lender's job easier and protects the buyer at the same time."
                body="That is why the offer should not be treated as a broker formality. It is the document that ties the yacht, the timing and the financing path together before the survey even happens."
                reverse
              />

              <Section
                id="submit-the-file"
                title="What documents do lenders need and how should you submit them?"
                intro="This is where buyers either look organised or difficult. The lender is trying to understand two things at the same time: whether you can repay the loan and whether the yacht is acceptable collateral."
              >
                <p>
                  A strong file normally includes recent tax returns, current income evidence, bank
                  statements, investment statements, debt information and proof that the deposit is
                  genuinely available. Self-employed buyers usually need more: business returns,
                  profit-and-loss information and clearer visibility on how income is generated.
                  The yacht side of the file also matters early. Lenders want the signed purchase
                  agreement, vessel details, broker information, maintenance background where
                  available and enough context to understand what exactly is being financed.
                </p>
                <p>
                  Good buyers do not submit documents slowly and reactively. They package them in a
                  way that reads cleanly. That is one reason the page on{" "}
                  <Link href="/financing/what-lenders-look-for-in-yacht-financing">what lenders look
                  for in yacht financing</Link> is a useful companion to this one. The lender is not
                  simply ticking boxes. It is reading for stability, clarity and the absence of
                  surprises. Missing statements, unexplained transfers, thin reserves or patchy
                  income evidence can all drag the file backward.
                </p>
                <p>
                  In practical terms, it is usually sensible to approach 3 to 5 lenders around the
                  same time rather than waiting for one rejection before speaking to the next. The
                  difference in rate, flexibility and appetite can be material. Multiple enquiries in
                  a short rate-shopping window are generally far less damaging than buyers fear, and
                  the savings over a long term can be meaningful.
                </p>

                <div className="doc-grid">
                  <ChecklistCard
                    title="Borrower documents"
                    items={[
                      "2 to 3 years of personal tax returns",
                      "Recent payslips or profit-and-loss statements if self-employed",
                      "Bank statements and investment account evidence",
                      "Current debt schedule and major monthly obligations",
                    ]}
                  />
                  <ChecklistCard
                    title="Yacht transaction documents"
                    items={[
                      "Signed purchase agreement with contingencies",
                      "Make, model, year and hull identification details",
                      "Broker contact and listing background",
                      "Maintenance history and technical notes where available",
                    ]}
                  />
                </div>
              </Section>

              <section data-reveal className="mid-cta">
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Before you send the file
                </div>

                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(34px,4vw,50px)",
                    lineHeight: 1.02,
                    fontWeight: 400,
                    letterSpacing: -1.2,
                    margin: "0 0 14px",
                    maxWidth: 760,
                  }}
                >
                  Model the payment, the deposit and the liquidity picture before a lender starts doing it for you.
                </h2>

                <p
                  style={{
                    maxWidth: 780,
                    fontSize: 16,
                    lineHeight: 1.82,
                    margin: "0 0 24px",
                  }}
                >
                  A cleaner file starts with cleaner expectations. Use the numbers first, then send
                  the paperwork.
                </p>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link
                    href="/yacht-finance-calculator"
                    className="pill-soft"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "18px 24px",
                      borderRadius: 14,
                      background: C.softBtn,
                      color: C.black,
                      fontWeight: 600,
                      transition: "all .24s ease",
                    }}
                  >
                    Open yacht finance calculator
                    <ArrowRightIcon size={16} />
                  </Link>

                  <Link
                    href="/assessment/how-much-yacht-can-i-afford"
                    className="pill-soft"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "18px 24px",
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.5)",
                      color: C.black,
                      fontWeight: 600,
                      transition: "all .24s ease",
                    }}
                  >
                    Check affordability range
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </section>

              <Section
                id="survey-and-underwriting"
                title="Why do the survey, valuation and underwriting stage matter so much?"
                intro="Because this is the point where the boat stops being an idea and becomes collateral the lender has to believe in."
              >
                <p>
                  No serious lender wants to finance a yacht blind. The marine survey is there to
                  protect you and the lender from buying a boat with hidden structural, mechanical or
                  systems problems. It also feeds the valuation conversation. Loan size is generally
                  shaped by the lower of purchase price or supportable value, which means an
                  appraisal gap can force the buyer to add cash, renegotiate or walk away.
                </p>
                <p>
                  This is why survey quality matters. A clean report can keep the case moving. A
                  messy one can change the whole tone of underwriting. Major defects, moisture issues,
                  engine concerns, safety failures or poor maintenance history can either reduce value
                  or push the lender into a much more cautious position. Older boats are naturally
                  more sensitive here, which is why{" "}
                  <Link href="/financing/how-vessel-age-affects-financing">vessel age deserves its own
                  financing page</Link>. The yacht and the borrower are always being judged together.
                </p>
                <p>
                  Survey cost is part of that due diligence. Buyers often spend around £1,500 to
                  £4,000 depending on size and complexity. It is money spent before certainty, but it
                  is still some of the cheapest risk control in the whole process. Better to spend a
                  few thousand pounds discovering a weak asset than close into a six-figure mistake.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--7.jpg"
                imageAlt="Marine survey report, valuation notes and underwriting review for a yacht purchase"
                label="Underwriting reality"
                title="The survey does not just protect the buyer from hidden problems. It protects the lender from lending against a story that does not hold up."
                body="If price, condition and resale confidence line up, the case gets easier. If they start pulling apart, approval becomes slower, more conditional or less attractive."
              />

              <Section
                id="insurance-and-closing"
                title="What happens between approval, insurance and closing?"
                intro="Once the lender is comfortable, the final stage becomes about completing conditions cleanly and making sure the yacht is still the yacht you agreed to buy."
              >
                <p>
                  Approval usually arrives in the form of a commitment or indicative loan offer. At
                  that point you need to read the terms properly. Look at the rate, the required
                  deposit, the term, fees, any prepayment restrictions and any conditions still left
                  outstanding before funds can be released. This is not just administrative cleanup.
                  It is the moment to compare offers and decide whether the deal still looks right.
                </p>
                <p>
                  Insurance then becomes essential. Financed yachts normally need comprehensive marine
                  cover before closing, and the lender will expect to be named appropriately on the
                  policy. Costs vary widely, but a broad rule of thumb is often around 1% to 3% of
                  yacht value per year depending on vessel type, age, use, cruising area and
                  experience. Alongside that, a final walkthrough and sea trial help confirm that the
                  boat has not materially changed since survey and that any agreed fixes were actually
                  completed.
                </p>
                <p>
                  Closing itself is the legal transfer point. You sign the promissory note, security
                  agreement and supporting disclosures, your deposit is wired, the lender releases its
                  funds and ownership passes across. If you want a better sense of how those numbers
                  land in monthly form before the closing day arrives, run them through the{" "}
                  <Link href="/yacht-finance-calculator">calculator here</Link>. Clean closings are
                  rarely about luck. They are usually the result of the earlier stages being handled
                  properly.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--8.jpg"
                imageAlt="Insurance binder, closing documents and final pre-funding yacht purchase checks"
                label="Closing readiness"
                title="Approval is not the finish line. It is the point where the remaining details can still delay the deal if they were ignored too long."
                body="Insurance, the sea trial, final conditions and document signatures still have to land in the right order. Buyers who stay responsive here usually close faster."
                reverse
              />

              <Section
                id="after-closing"
                title="What should you expect after closing the yacht loan?"
                intro="The transaction is done, but the file is not completely over. There are still a few practical pieces to land properly."
              >
                <p>
                  The first is registration or documentation in the right ownership name, with the
                  lender's security interest properly reflected where relevant. The second is making
                  sure the temporary insurance proof turns into the permanent policy exactly as
                  expected. The third is simply payment discipline. Your first payment often arrives
                  30 to 45 days after closing, and the easiest way to protect both credit and mental
                  bandwidth is to automate it immediately.
                </p>
                <p>
                  Buyers should also keep the whole loan file organised: statements, payment records,
                  survey documents, insurance documents and original closing paperwork. You will want
                  them again if you refinance, sell the yacht or need to explain the structure later.
                  That later refinance question can be sensible when rates improve materially, your
                  credit strengthens or you want a different term shape. It only works, however, if
                  you compare the savings against a fresh round of costs and process.
                </p>
                <p>
                  The broad lesson is simple. Yacht financing does not end at approval. It ends when
                  ownership, insurance, payments and security registration are all properly in place.
                  Buyers who keep good records and maintain clean financial habits after closing make
                  later refinancing or resale much easier.
                </p>
              </Section>

              <Section
                id="special-situations"
                title="Which situations tend to complicate yacht financing?"
                intro="Not every deal follows the same path. Some transactions are still financeable, but they need more care, more documents or more realistic timing."
              >
                <p>
                  Private seller purchases are perfectly possible, but they remove some coordination
                  support that a broker-led process often provides. International purchases can add
                  currency, registration and title transfer complexity. Auction purchases can narrow
                  lender choice because inspection time is limited and the asset may be sold more
                  aggressively on an as-is basis. Very old boats, unusual builders or intended charter
                  use can also make lenders materially more selective.
                </p>
                <p>
                  Most delays come from the same families of problems. Incomplete documentation.
                  Survey scheduling bottlenecks. Insurance friction in higher-risk cruising areas.
                  Title issues that appear late. Or a valuation gap where the buyer agreed one number
                  and the collateral story supports another. These are not mysterious lender mood
                  swings. They are usually process issues visible earlier if the buyer slows down long
                  enough to structure the case properly.
                </p>
                <p>
                  The best habit through all of this is responsiveness. When the lender, surveyor,
                  broker or insurer asks for something, answer quickly. When buyers go silent for
                  three or four days at each step, a nominally simple 2-week process can become a
                  6-week one without anybody doing anything especially dramatic.
                </p>
              </Section>

              <Section
                id="common-mistakes"
                title="Common yacht financing mistakes buyers make"
                intro="The expensive mistakes usually happen before funding. They come from treating financing like a final admin task instead of a transaction path that needs managing."
              >
                <h3>Choosing the yacht first and only then discovering the budget gap</h3>
                <p>
                  <strong>Why it happens:</strong> Emotion moves faster than planning. Buyers start
                  with the yacht they want and only later test the payment, deposit and reserve
                  picture honestly.
                </p>
                <p>
                  <strong>What goes wrong:</strong> They waste time on a deal that was never going to
                  feel comfortable once 10% to 30% down, survey fees, insurance and early ownership
                  costs are included.
                </p>
                <p>
                  <strong>How to avoid it:</strong> Model the case first with the{" "}
                  <Link href="/assessment/how-much-yacht-can-i-afford">affordability tool</Link> or the{" "}
                  <Link href="/yacht-finance-calculator">finance calculator</Link>, then shop inside the
                  range that still leaves cash after closing.
                </p>

                <h3>Submitting a messy document file and hoping the lender fills in the gaps</h3>
                <p>
                  <strong>Why it happens:</strong> Buyers assume approval is mostly about credit score
                  and forget how much the lender cares about stability, clarity and verification.
                </p>
                <p>
                  <strong>What goes wrong:</strong> Missing statements, unclear deposits and patchy
                  income evidence can turn a fast case into a slow one or make the borrower look less
                  bankable than they really are.
                </p>
                <p>
                  <strong>How to avoid it:</strong> Prepare the file before the application goes out.
                  Think like an underwriter reading the case for the first time.
                </p>

                <h3>Treating the survey like a technical formality</h3>
                <p>
                  <strong>Why it happens:</strong> Buyers think the survey is just there to confirm
                  obvious condition rather than to protect the economics of the purchase.
                </p>
                <p>
                  <strong>What goes wrong:</strong> A bad survey can reduce value, trigger repair
                  conditions, force extra cash in or kill the transaction outright.
                </p>
                <p>
                  <strong>How to avoid it:</strong> Use a credible surveyor, keep the survey
                  contingency intact and be ready to renegotiate if the asset does not support the
                  agreed price.
                </p>

                <h3>Assuming approval means the deal is basically closed</h3>
                <p>
                  <strong>Why it happens:</strong> Once the commitment arrives, buyers mentally switch
                  off.
                </p>
                <p>
                  <strong>What goes wrong:</strong> Insurance, sea trial issues, final conditions and
                  document delays still push the closing date back, sometimes by weeks.
                </p>
                <p>
                  <strong>How to avoid it:</strong> Treat approval as the start of the final stage,
                  not the end of the process. Stay responsive until funds are released and title is
                  transferred.
                </p>
              </Section>

              <section data-reveal className="end-cta" style={{ marginTop: 8 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: C.gray4,
                    marginBottom: 10,
                  }}
                >
                  Next step
                </div>

                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(34px,4vw,52px)",
                    lineHeight: 1.02,
                    letterSpacing: -1.2,
                    fontWeight: 400,
                    margin: "0 0 14px",
                    maxWidth: 760,
                  }}
                >
                  Build the deal on numbers first, then let the lender confirm it.
                </h2>

                <p
                  style={{
                    maxWidth: 760,
                    fontSize: 16,
                    lineHeight: 1.82,
                    color: C.gray2,
                    margin: "0 0 24px",
                  }}
                >
                  Waaza is most useful before the paperwork gets messy. Check the payment range, test
                  the deposit and decide whether the boat still makes sense once the whole ownership
                  picture is visible.
                </p>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link
                    href="/yacht-finance-calculator"
                    className="pill-yellow"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "17px 24px",
                      borderRadius: 12,
                      background: C.accent,
                      color: C.black,
                      fontWeight: 600,
                      transition: "all .24s ease",
                    }}
                  >
                    Open the calculator
                    <ArrowRightIcon size={16} />
                  </Link>

                  <Link
                    href="/assessment/how-much-yacht-can-i-afford"
                    className="pill-soft"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "17px 24px",
                      borderRadius: 12,
                      background: C.softBtn,
                      color: C.black,
                      fontWeight: 600,
                      transition: "all .24s ease",
                    }}
                  >
                    Check affordability
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </section>

              <Section
                id="faq"
                title="Frequently asked questions"
                intro="These are the questions buyers usually ask once they understand the sequence but want sharper expectations around timing, cost and risk."
              >
                <div className="faq-grid">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="faq-item">
                      <summary className="faq-summary">
                        <span>{faq.question}</span>
                        <span className="faq-plus">+</span>
                      </summary>
                      <div
                        style={{
                          padding: "0 0 18px",
                          color: C.gray2,
                          fontSize: 16,
                          lineHeight: 1.85,
                          maxWidth: 980,
                        }}
                      >
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </Section>

              <section
                data-reveal
                style={{
                  padding: "22px 0 12px",
                  borderTop: `1px solid ${C.gray6}`,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: C.gray4,
                    marginBottom: 14,
                  }}
                >
                  Read next
                </div>

                <div className="readmore-grid">
                  {relatedPages.map((item) => (
                    <Link key={item.href} href={item.href} className="readmore-card">
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: 1.1,
                          textTransform: "uppercase",
                          color: C.gray4,
                          marginBottom: 10,
                        }}
                      >
                        Related page
                      </div>
                      <div
                        style={{
                          fontSize: 23,
                          lineHeight: 1.14,
                          letterSpacing: -0.5,
                          fontWeight: 500,
                          color: C.black,
                          marginBottom: 10,
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: 15,
                          lineHeight: 1.75,
                          color: C.gray2,
                        }}
                      >
                        {item.blurb}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
