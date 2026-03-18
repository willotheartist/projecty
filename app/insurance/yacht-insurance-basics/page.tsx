
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.waaza.co";

const title = "Yacht Insurance Basics: What Every Yacht Owner Needs to Know | Waaza";
const description =
  "Learn the basics of yacht insurance, including hull and machinery cover, liability, agreed value, navigation limits, surveys, policy costs and common mistakes.";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentHover: "#f0ec5a",
  accentPale: "#fffde0",
  black: "#0a0a0a",
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
    "yacht insurance basics",
    "what does yacht insurance cover",
    "hull and machinery insurance",
    "yacht liability insurance",
    "agreed value yacht insurance",
    "yacht insurance cost",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/insurance/yacht-insurance-basics",
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
    url: "/insurance/yacht-insurance-basics",
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    publishedTime: "2026-03-17T00:00:00.000Z",
    modifiedTime: "2026-03-17T00:00:00.000Z",
    images: [
      {
        url: "/home/waaza-yacht-financing-tool--7.jpg",
        width: 1200,
        height: 630,
        alt: "Yacht insurance basics guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/home/waaza-yacht-financing-tool--7.jpg"],
  },
};

const toc = [
  { id: "what-yacht-insurance-is", label: "What yacht insurance actually covers" },
  { id: "two-core-types", label: "The two core types" },
  { id: "extra-protection", label: "Extra protection most policies add" },
  { id: "cost", label: "What yacht insurance usually costs" },
  { id: "agreed-value", label: "Agreed value vs actual cash value" },
  { id: "limits-and-operators", label: "Navigation limits and operators" },
  { id: "survey-and-requirements", label: "Surveys and when cover is required" },
  { id: "buying-and-claims", label: "Buying cover and making claims" },
  { id: "mistakes", label: "Mistakes that hurt later" },
  { id: "faq", label: "Frequently asked questions" },
];

const faqs = [
  {
    question: "How much does yacht insurance usually cost?",
    answer:
      "A rough working range is often around 1% to 3% of insured value per year. A £300,000 yacht may therefore sit somewhere around £3,000 to £9,000 annually, depending on age, location, experience, use and deductible structure.",
  },
  {
    question: "Is yacht insurance required by law?",
    answer:
      "Not always for private recreational ownership, but marinas may require liability cover and lenders will normally require full insurance if the yacht is financed. Even when it is not mandatory, going uninsured on a high-value asset is still a very exposed position.",
  },
  {
    question: "What is the difference between hull cover and liability cover?",
    answer:
      "Hull and machinery cover protects the yacht itself if it is damaged or lost. Liability cover protects you if your yacht damages another vessel, injures someone or creates a legal claim against you.",
  },
  {
    question: "Do I need insurance if I am paying cash?",
    answer:
      "You may not have a lender forcing the issue, but the practical answer is still usually yes. One major loss or one serious claim can cost far more than years of premium.",
  },
  {
    question: "What does agreed value mean?",
    answer:
      "Agreed value means you and the insurer settle the yacht's insured value upfront. If the yacht becomes a total loss, the claim is built around that pre-agreed figure rather than a depreciated market value argument later.",
  },
  {
    question: "Can I insure an older yacht?",
    answer:
      "Usually yes, but older boats often cost more to insure and more often need a recent marine survey. The insurer wants to understand condition, systems, maintenance history and supportable value before offering terms.",
  },
  {
    question: "What happens if I cruise outside my navigation area?",
    answer:
      "That can put the claim at risk. Policies often state the cruising area clearly, and moving outside it without the insurer's approval can lead to a declined claim.",
  },
  {
    question: "How can I lower my yacht insurance cost?",
    answer:
      "Higher deductibles, cleaner experience, recognised training, stronger safety equipment and getting multiple quotes can all help. The goal is not just to make the premium cheaper, but to keep the policy sensible while doing it.",
  },
];

const relatedPages = [
  {
    href: "/insurance",
    title: "Insurance hub",
    blurb: "The wider Waaza insurance pillar, with the full structure around cover, lenders and closing.",
  },
  {
    href: "/financing/how-to-finance-a-yacht-purchase",
    title: "How to finance a yacht purchase",
    blurb: "See where insurance starts to matter during the deal itself.",
  },
  {
    href: "/financing/how-yacht-financing-works",
    title: "How yacht financing works",
    blurb: "Understand why lenders care about insurance before funding.",
  },
  {
    href: "/assessment/how-much-yacht-can-i-afford",
    title: "How much yacht can I afford?",
    blurb: "Test whether insurance still fits once the ownership numbers are real.",
  },
  {
    href: "/yacht-finance-calculator",
    title: "Yacht finance calculator",
    blurb: "Model the monthly side alongside deposit and ownership costs.",
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

function ShieldIcon({ size = 16 }: { size?: number }) {
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
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.8-4" />
    </svg>
  );
}

function Section({
  id,
  title: sectionTitle,
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
        {sectionTitle}
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
  title: boxTitle,
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
            <ShieldIcon size={14} />
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
            {boxTitle}
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

function InfoCard({
  title: cardTitle,
  body,
}: {
  title: string;
  body: string;
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
          fontSize: 20,
          lineHeight: 1.2,
          color: C.black,
          fontWeight: 500,
          letterSpacing: -0.3,
          marginBottom: 10,
        }}
      >
        {cardTitle}
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 15,
          lineHeight: 1.8,
          color: C.gray2,
        }}
      >
        {body}
      </p>
    </div>
  );
}

function SimpleList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul
      style={{
        margin: "8px 0 0",
        paddingLeft: 18,
        display: "grid",
        gap: 10,
      }}
    >
      {items.map((item) => (
        <li key={item} style={{ color: C.gray2 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl("/home/waaza-yacht-financing-tool--7.jpg"),
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
      "@id": absoluteUrl("/insurance/yacht-insurance-basics"),
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
        name: "Insurance",
        item: absoluteUrl("/insurance"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Yacht insurance basics",
        item: absoluteUrl("/insurance/yacht-insurance-basics"),
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
          background: rgba(0,0,0,0.40);
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
          margin: 22px 0 10px;
        }
        .end-cta {
          background: ${C.tint};
          border: 1px solid ${C.gray6};
          border-radius: 30px;
          padding: 34px clamp(24px,4vw,40px);
        }

        .card-grid {
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
          .card-grid { grid-template-columns: 1fr !important; }
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
              src="/home/waaza-yacht-financing-tool--7.jpg"
              alt="Yacht insurance basics guide hero image"
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
                <Link href="/insurance">Insurance</Link>
              </span>
              <span style={{ opacity: 0.5 }}>›</span>
              <span style={{ color: "#fff" }}>Yacht insurance basics</span>
            </div>

            <div className="hero-kicker">
              <ShieldIcon size={14} />
              Insurance basics
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
              Yacht insurance basics, without the confusing policy fog
            </h1>

            <p className="hero-sub">
              Yacht insurance protects the yacht itself and protects you when a claim reaches beyond
              the yacht. Most owners need both parts understood properly, whether they are borrowing
              to buy or paying cash.
            </p>

            <div className="hero-actions">
              <Link
                href="/insurance"
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
                Back to insurance hub
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
                Check the ownership picture
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
                  Core split
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                  Hull cover + liability cover
                </div>
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
                  Working premium range
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                  Often around 1% to 3%
                </div>
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
                  Practical reality
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                  Cash buyers still usually insure
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "34px 24px 0" }}>
          <div className="layout-grid" style={{ paddingBottom: 90 }}>
            <aside className="toc-shell">
              <div className="toc-label">
                <ShieldIcon size={14} />
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
                id="what-yacht-insurance-is"
                title="What does yacht insurance actually protect?"
                intro="At its simplest, yacht insurance protects the yacht and protects you. The detail only becomes important when something expensive happens."
              >
                <p>
                  Yacht insurance is there for two broad reasons. One is obvious: it protects the
                  yacht itself if it is damaged, stolen, sunk, burned or otherwise lost. The second
                  is just as important: it protects you financially if your yacht injures someone,
                  damages another vessel or creates a liability claim that reaches beyond the boat.
                </p>
                <p>
                  That is why most owners need insurance whether they are borrowing or buying outright.
                  If you are financing, the lender will usually require it. If you are paying cash,
                  the exposure is still real. A £300,000 yacht is too large an asset, and too large a
                  liability risk, to leave sitting bare unless you are deliberately choosing a very
                  exposed position.
                </p>
                <p>
                  If you are still looking at the bigger transaction picture, this page fits naturally
                  beside <Link href="/insurance">the insurance hub</Link>,{" "}
                  <Link href="/financing/how-to-finance-a-yacht-purchase">the yacht purchase process</Link>{" "}
                  and the broader ownership maths inside{" "}
                  <Link href="/assessment/how-much-yacht-can-i-afford">the affordability assessment</Link>.
                  Insurance is not a side note. It sits inside the wider logic of owning the boat
                  sensibly.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--8.jpg"
                imageAlt="Insurance documents and yacht ownership planning"
                label="Start with the split"
                title="The easiest way to understand yacht insurance is to separate the boat from the claim."
                body="One part protects the yacht itself. The other protects you if the incident expands into damage, injury, clean-up costs or legal action."
              />

              <Section
                id="two-core-types"
                title="What are the two core types of yacht insurance?"
                intro="Most yacht policies become much easier to understand once you split them into physical protection and liability protection."
              >
                <h3>Hull and machinery insurance</h3>
                <p>
                  Hull and machinery cover protects the yacht itself from physical damage. This is the
                  policy layer that responds when the boat is damaged, destroyed or stolen. It usually
                  covers the hull, deck, structure, superstructure, engines, generators, electronics
                  and wider mechanical systems as one insured unit.
                </p>
                <p>
                  In real life, that often means protection against events like sinking, fire,
                  collision, grounding, vandalism, theft, lightning and storm damage. If the loss is
                  within the policy wording, hull and machinery cover helps pay for the repair or the
                  replacement path up to the policy terms.
                </p>

                <h3>Protection and indemnity or liability cover</h3>
                <p>
                  Liability cover protects you from claims by other people. If your yacht damages
                  another boat, injures someone, damages marina property or triggers legal costs,
                  this is the part of the policy that matters. It is the layer many owners think
                  about too lightly because they focus so much on the value of the yacht itself.
                </p>
                <p>
                  In practice, strong liability limits matter because claims can grow fast. Medical
                  costs, repair bills, clean-up obligations and legal defence costs can all build
                  much faster than owners expect. That is why this is not just a paperwork issue for
                  lenders. It is a personal balance-sheet issue too.
                </p>

                <div className="card-grid">
                  <InfoCard
                    title="Hull and machinery"
                    body="Protects the yacht itself. Think damage, loss, theft, fire, storm, collision, systems and structure."
                  />
                  <InfoCard
                    title="Liability or P&I"
                    body="Protects you when the problem extends beyond your own yacht and turns into a claim by someone else."
                  />
                </div>
              </Section>

              <Section
                id="extra-protection"
                title="What else do yacht policies often include?"
                intro="The core split is the foundation, but most useful policies include extra layers that become very relevant once a real incident happens."
              >
                <p>
                  Many yacht policies include or offer additional cover for personal effects, towing
                  and assistance, pollution liability, medical payments and uninsured boater exposure.
                  These can feel secondary during the quote stage, but they become very real when the
                  inconvenience turns into cost.
                </p>
                <p>
                  Personal effects cover helps protect belongings aboard the yacht. Towing and
                  assistance can matter more than owners expect because commercial recovery costs can
                  become very expensive very quickly. Pollution liability matters because even a
                  relatively small spill can create clean-up costs far beyond what most owners would
                  casually assume. Medical payments can also help with immediate guest injury costs
                  without waiting for a broader liability fight to be resolved.
                </p>
                <p>
                  None of these layers replaces strong core cover, but together they explain why the
                  best yacht policies are rarely just about the boat. They are about the wider
                  ownership mess that appears once something actually goes wrong.
                </p>

                <div className="card-grid">
                  <InfoCard
                    title="Common add-ons"
                    body="Personal effects, towing, pollution liability, medical payments and uninsured boater protection are among the most common extra layers."
                  />
                  <InfoCard
                    title="Why they matter"
                    body="They turn smaller but still painful situations into manageable ones instead of leaving you absorbing every secondary cost yourself."
                  />
                </div>
              </Section>

              <section data-reveal className="mid-cta">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.42)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  <ShieldIcon size={14} />
                  Useful before you buy
                </div>

                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(40px,5vw,74px)",
                    lineHeight: 1.02,
                    fontWeight: 400,
                    letterSpacing: -1.6,
                    marginBottom: 14,
                    maxWidth: 980,
                    color: C.black,
                  }}
                >
                  Budget the insurance before you convince yourself the yacht is comfortably affordable.
                </h2>

                <p
                  style={{
                    fontSize: 18,
                    lineHeight: 1.82,
                    color: C.black,
                    maxWidth: 980,
                    marginBottom: 24,
                  }}
                >
                  Insurance is part of ownership, not an afterthought. It changes what the whole
                  picture actually costs.
                </p>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
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
                      background: C.softBtn,
                      color: C.black,
                      fontWeight: 600,
                      transition: "all .24s ease",
                    }}
                  >
                    Check affordability
                    <ArrowRightIcon size={16} />
                  </Link>

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
                      background: "rgba(255,255,255,0.5)",
                      color: C.black,
                      fontWeight: 600,
                      transition: "all .24s ease",
                    }}
                  >
                    Open the calculator
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </section>

              <Section
                id="cost"
                title="How much does yacht insurance usually cost?"
                intro="The rough range is easy to quote. The actual premium depends on how the insurer reads the boat, the owner and the operating plan together."
              >
                <p>
                  A common working range is around 1% to 3% of the yacht's insured value per year for
                  broad cover. That means a £200,000 yacht may sit somewhere around £2,000 to £6,000,
                  while a £500,000 yacht may sit around £5,000 to £15,000. The exact number depends
                  on the boat, the cruising area, the policy shape and the person operating it.
                </p>
                <p>
                  Yacht age matters. Newer boats usually look cleaner from an underwriting point of
                  view. Older boats often cost more because mechanical uncertainty, maintenance
                  history and survey dependency all become more relevant. Where the yacht is kept also
                  matters. High-risk weather zones, named-storm exposure and other regional factors
                  can move pricing materially.
                </p>
                <p>
                  Experience matters too. Owners with cleaner operating history and more recognised
                  boating experience often present better than newer owners with thinner track records.
                  Then there is deductible structure. Higher deductibles usually lower the premium,
                  but only if the retained risk still feels rational for you.
                </p>

                <div className="card-grid">
                  <InfoCard
                    title="What pushes the premium up"
                    body="Older yachts, riskier cruising zones, thin experience, claims history and broader operational complexity can all push pricing higher."
                  />
                  <InfoCard
                    title="What can help"
                    body="A stronger survey story, cleaner experience, safer operating plans and a more sensible deductible structure can all help keep the quote in line."
                  />
                </div>
              </Section>

              <Section
                id="agreed-value"
                title="Why does agreed value matter so much?"
                intro="Because this is one of the clearest differences between a policy that feels reassuring now and one that still feels reassuring after a total loss."
              >
                <p>
                  Most yacht owners strongly prefer agreed value cover. With agreed value, you and
                  the insurer decide upfront what the yacht is worth for policy purposes. If the yacht
                  becomes a total loss, the payout is built around that agreed figure rather than a
                  later argument about depreciation and current market value.
                </p>
                <p>
                  Actual cash value works differently. It pays what the yacht is worth at the time of
                  loss after depreciation is taken into account. That can create a much less pleasant
                  outcome if the owner assumed the headline purchase number or original insured value
                  would still apply years later.
                </p>
                <p>
                  For many owners, the modest extra premium for agreed value is worth it simply
                  because it removes uncertainty. In a serious loss, clarity is part of the value.
                </p>

                <div className="card-grid">
                  <InfoCard
                    title="Agreed value"
                    body="Clearer upfront. The policy is built around a pre-agreed number, which usually makes total-loss outcomes less ambiguous."
                  />
                  <InfoCard
                    title="Actual cash value"
                    body="Usually cheaper, but the payout reflects depreciated market value at the time of loss, which can feel far less generous later."
                  />
                </div>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--10.jpg"
                imageAlt="Owner reviewing agreed value and navigation wording in a yacht insurance policy"
                label="Read the wording properly"
                title="Policies usually look most generous before the claim. The job is to see the weak spots before they matter."
                body="Value basis, exclusions, operating area, deductibles and operator wording do much of the real work once the situation stops being theoretical."
                reverse
              />

              <Section
                id="limits-and-operators"
                title="Why do navigation limits and operator rules matter?"
                intro="Because a policy is not just about what is covered. It is also about where the yacht is allowed to go and who is allowed to operate it."
              >
                <p>
                  Most policies define the navigation area clearly. That may mean specific coastal
                  waters, a named sea area, seasonal movement limits or broader geographic boundaries.
                  If the yacht is operated outside that agreed area without insurer approval, the
                  claim can be put at risk.
                </p>
                <p>
                  Operator wording matters just as much. Some policies are flexible around qualified
                  operators. Others want named operators listed specifically. If someone is running
                  the yacht who the policy does not recognise as suitable, the insurer may take a very
                  different view of the claim than the owner expects.
                </p>
                <p>
                  These points often feel administrative until they are not. That is why they deserve
                  real attention before cruising plans change, family members operate the yacht more
                  often or the usage pattern evolves beyond what the original quote contemplated.
                </p>
              </Section>

              <Section
                id="survey-and-requirements"
                title="When do surveys and insurance requirements start to matter?"
                intro="Usually earlier than owners expect, especially on older or more valuable yachts."
              >
                <p>
                  Insurers often want a recent marine survey once the yacht crosses an age or value
                  threshold. The survey helps them understand condition, maintenance standard, systems
                  and supportable value. For older boats in particular, the survey is often central to
                  the whole quote, not just an extra document sitting on the side.
                </p>
                <p>
                  If you are financing, the insurance requirement becomes even more concrete. Lenders
                  usually want proof of insurance before closing, and they care that the policy names
                  them correctly and meets the minimum standards they expect. That connects directly
                  with <Link href="/financing/how-yacht-financing-works">how yacht financing works</Link>{" "}
                  and the overall deal sequence in{" "}
                  <Link href="/financing/how-to-finance-a-yacht-purchase">the purchase guide</Link>.
                </p>
                <p>
                  Even outside financing, marinas may require liability cover as a condition of
                  dockage. So while the legal requirement may vary, the practical requirement often
                  arrives from the people around the transaction and the berth, not just from statute.
                </p>

                <div className="card-grid">
                  <InfoCard
                    title="Typical survey trigger"
                    body="Older yachts and higher-value boats are much more likely to need a recent survey before the insurer will quote confidently."
                  />
                  <InfoCard
                    title="Typical lender trigger"
                    body="If there is finance involved, assume the lender will want proof of proper insurance before funds move."
                  />
                </div>
              </Section>

              <Section
                id="buying-and-claims"
                title="How do you buy yacht insurance well, and what happens when you claim?"
                intro="The cleanest approach is to treat quoting as a real placement exercise, not a quick price check."
              >
                <p>
                  Start with marine specialists rather than generic insurance channels. Yacht
                  insurance is its own world, and the quality of the conversation matters. The insurer
                  or broker will usually want the yacht details, the intended value, home port,
                  navigation area, intended use, operating experience and any relevant claims history.
                </p>
                <p>
                  It is usually worth getting several quotes rather than assuming the first sensible
                  one is the market. Price matters, but policy wording, deductibles, limits, operator
                  flexibility and navigation treatment matter just as much. A cheaper policy is not
                  necessarily a better policy if it becomes awkward the moment your plans become more
                  ambitious.
                </p>
                <p>
                  When a claim happens, speed and documentation matter. Report it quickly. Photograph
                  the damage. Preserve evidence. Prevent further loss where you reasonably can, but do
                  not start turning the yacht into a finished repair project before the insurer or
                  adjuster has had a proper chance to inspect what happened.
                </p>

                <div className="card-grid">
                  <div
                    style={{
                      background: C.white,
                      border: `1px solid ${C.gray6}`,
                      borderRadius: 24,
                      padding: "22px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 20,
                        lineHeight: 1.2,
                        color: C.black,
                        fontWeight: 500,
                        letterSpacing: -0.3,
                        marginBottom: 12,
                      }}
                    >
                      What insurers usually want to know
                    </div>
                    <SimpleList
                      items={[
                        "Make, model, year and hull details",
                        "Desired insured value",
                        "Home port and navigation area",
                        "Personal, charter or liveaboard use",
                        "Your boating experience and claims history",
                      ]}
                    />
                  </div>

                  <div
                    style={{
                      background: C.white,
                      border: `1px solid ${C.gray6}`,
                      borderRadius: 24,
                      padding: "22px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 20,
                        lineHeight: 1.2,
                        color: C.black,
                        fontWeight: 500,
                        letterSpacing: -0.3,
                        marginBottom: 12,
                      }}
                    >
                      What helps a claim go cleaner
                    </div>
                    <SimpleList
                      items={[
                        "Report the incident quickly",
                        "Take clear photos and video",
                        "Collect witness details where relevant",
                        "Prevent further damage without over-repairing",
                        "Keep the paper trail tidy from the start",
                      ]}
                    />
                  </div>
                </div>
              </Section>

              <Section
                id="mistakes"
                title="Which yacht insurance mistakes hurt the most later?"
                intro="The painful mistakes are usually ordinary decisions that looked harmless while nothing was wrong."
              >
                <h3>Under-insuring the yacht to trim the premium</h3>
                <p>
                  Saving on premium by carrying less than a sensible value can feel efficient until
                  the payout is not enough to make you whole after a serious loss.
                </p>

                <h3>Choosing liability limits that are too light</h3>
                <p>
                  A low liability number can look fine on a quote sheet and feel wildly inadequate
                  once injury, property damage, legal costs and clean-up are all involved.
                </p>

                <h3>Ignoring policy changes after equipment or usage changes</h3>
                <p>
                  New electronics, new cruising plans, more operators, liveaboard use or charter use
                  all change the real risk. If the policy does not move with the yacht, the cover
                  drifts away from reality.
                </p>

                <h3>Assuming navigation wording is a formality</h3>
                <p>
                  Owners often discover too late that a policy area was tighter than they thought.
                  Cruising beyond the agreed area without approval is one of the simplest ways to
                  weaken a claim.
                </p>

                <h3>Letting the wrong person operate the yacht</h3>
                <p>
                  Confidence and experience are not always the same thing in policy terms. If the
                  operator does not fit the wording, the insurer may not treat the situation the way
                  the owner assumed.
                </p>
              </Section>

              <section data-reveal className="end-cta" style={{ marginTop: 10 }}>
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
                  Put the policy inside the ownership maths, not outside it.
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
                  That is when insurance starts helping you make cleaner decisions rather than just
                  satisfying someone else's requirement.
                </p>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link
                    href="/assessment/how-much-yacht-can-i-afford"
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
                    Check affordability
                    <ArrowRightIcon size={16} />
                  </Link>

                  <Link
                    href="/insurance"
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
                    Back to insurance hub
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </section>

              <Section
                id="faq"
                title="Frequently asked questions"
                intro="A few direct answers are usually more useful than a whole glossary."
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
