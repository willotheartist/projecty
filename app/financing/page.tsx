
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.waaza.co";

const title = "Yacht Financing: Process, Approval & Guides | Waaza";
const description =
  "Explore yacht financing with clear guides on process, lender approval and next steps. Find the right page, calculator or readiness flow for your purchase.";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentHover: "#f0ec5a",
  accentPale: "#fffde0",
  black: "#0a0a0a",
  forest: "#0f231e",
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
    "yacht financing",
    "how yacht financing works",
    "yacht financing approval",
    "yacht financing process",
    "marine finance guide",
    "yacht finance calculator",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/financing",
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
    url: "/financing",
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    publishedTime: "2026-03-16T00:00:00.000Z",
    modifiedTime: "2026-03-16T00:00:00.000Z",
    images: [
      {
        url: "/home/waaza-yacht-financing-tool--1.jpg",
        width: 1200,
        height: 630,
        alt: "Editorial yacht financing workspace with transaction notes and vessel planning view",
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

const faqs = [
  {
    question: "What should a yacht financing pillar page actually do?",
    answer:
      "It should help the reader choose the right next page quickly. Most people researching yacht financing are really asking one of three things: what yacht financing is, how it works, or what lenders look for. A useful pillar separates those paths and then routes serious buyers into the calculator or readiness flow.",
  },
  {
    question: "Why split yacht financing into separate child pages?",
    answer:
      "Because definition intent, process intent and approval intent are different jobs. Splitting them keeps each answer tighter, improves internal linking and makes the whole silo easier to navigate without burying readers in generic overview copy.",
  },
  {
    question: "When should someone use the calculator instead of reading more?",
    answer:
      "As soon as the purchase becomes real enough that deposit, term and payment tradeoffs matter more than broad explanation. At that point an indicative scenario is usually more useful than another abstract financing guide.",
  },
  {
    question: "When should someone move into the readiness flow?",
    answer:
      "When the question is no longer educational but practical. If the buyer, vessel and likely structure are already forming, the useful next step is understanding how the case begins to look rather than reading another top-level page.",
  },
  {
    question: "Does this replace speaking to a lender, broker or advisor?",
    answer:
      "No. The purpose of the pillar is to improve the quality of early-stage thinking so later lender, broker or advisory conversations begin with a better-framed purchase and fewer avoidable blind spots.",
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

function CompassIcon({ size = 16 }: { size?: number }) {
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
      <circle cx="12" cy="12" r="10" />
      <polygon points="16 8 14 14 8 16 10 10 16 8" />
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
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-reveal
      style={{
        padding: "52px 0",
        scrollMarginTop: 120,
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "7px 12px",
            borderRadius: 999,
            background: C.accentPale,
            color: C.black,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.1,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          <CompassIcon size={14} />
          {eyebrow}
        </div>

        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(34px,3vw,48px)",
            lineHeight: 1.04,
            fontWeight: 400,
            letterSpacing: -1.05,
            color: C.black,
            marginBottom: 12,
            maxWidth: 920,
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: 17,
            lineHeight: 1.82,
            color: C.gray2,
            maxWidth: 920,
          }}
        >
          {intro}
        </p>
      </div>

      <div className="rich" style={{ fontSize: 16, lineHeight: 1.9, color: C.gray2 }}>
        {children}
      </div>
    </section>
  );
}

function RouteCard({
  href,
  kicker,
  title,
  description,
}: {
  href: string;
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="route-card">
      <div>
        <div className="route-kicker">{kicker}</div>
        <div className="route-title">{title}</div>
        <div className="route-desc">{description}</div>
      </div>

      <div className="route-action">
        Open page
        <span className="route-action-badge">
          <ArrowRightIcon size={14} />
        </span>
      </div>
    </Link>
  );
}

function GuideCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="guide-card">
      <div className="guide-title">{title}</div>
      <div className="guide-desc">{description}</div>
      <div className="guide-action">
        Read page
        <span className="guide-action-badge">
          <ArrowRightIcon size={14} />
        </span>
      </div>
    </Link>
  );
}

function SignalCard({
  title,
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
        padding: 22,
      }}
    >
      <div
        style={{
          fontSize: 22,
          lineHeight: 1.12,
          fontWeight: 600,
          letterSpacing: -0.4,
          color: C.black,
          marginBottom: 12,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 15,
          lineHeight: 1.78,
          color: C.gray3,
        }}
      >
        {body}
      </div>
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
    datePublished: "2026-03-16T00:00:00.000Z",
    dateModified: "2026-03-16T00:00:00.000Z",
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
      "@id": absoluteUrl("/financing"),
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
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        html{scroll-behavior:smooth}
        body{overflow-x:hidden;background:${C.bg}}
        a{text-decoration:none;color:inherit}
        .rich p{margin:0 0 18px}
        .rich h3{
          margin:26px 0 10px;
          font-size:22px;
          line-height:1.2;
          font-weight:600;
          color:${C.black};
        }
        .rich strong{font-weight:600;color:${C.black}}
        .rich a{
          color:${C.black};
          font-weight:600;
          text-decoration:none;
          transition:opacity .22s ease;
        }
        .rich a:hover{opacity:.72}

        .hero-shell{
          position:relative;
          min-height:88vh;
          overflow:hidden;
          background:${C.forest};
        }
        .hero-media{
          position:absolute;
          inset:0;
        }
        .hero-media::after{
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(180deg, rgba(10,10,10,.14) 0%, rgba(10,10,10,.24) 28%, rgba(10,10,10,.46) 74%, ${C.bg} 100%);
        }
        .hero-inner{
          position:relative;
          z-index:2;
          max-width:1280px;
          margin:0 auto;
          padding:28px 24px 110px;
        }
        .hero-breadcrumbs{
          display:flex;
          gap:8px;
          flex-wrap:wrap;
          font-size:13px;
          color:rgba(255,255,255,.74);
          margin-bottom:22px;
        }
        .hero-grid{
          display:grid;
          grid-template-columns:minmax(0,1.05fr) minmax(300px,.95fr);
          gap:34px;
          align-items:end;
          min-height:66vh;
        }
        .hero-panel{
          max-width:780px;
          color:#fff;
        }
        .hero-kicker{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:10px 14px;
          border-radius:999px;
          background:${C.accent};
          color:${C.black};
          font-size:12px;
          font-weight:700;
          letter-spacing:1.2px;
          text-transform:uppercase;
          margin-bottom:22px;
        }
        .hero-sub{
          max-width:720px;
          font-size:18px;
          line-height:1.82;
          color:rgba(255,255,255,.9);
          margin:0 0 28px;
        }
        .hero-actions{
          display:flex;
          gap:14px;
          flex-wrap:wrap;
          margin-bottom:26px;
        }
        .hero-strip{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:14px;
          max-width:860px;
        }
        .hero-stat{
          background:rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.16);
          border-radius:22px;
          padding:18px 20px;
          backdrop-filter:blur(8px);
        }
        .hero-side{
          justify-self:end;
          width:min(100%,430px);
          background:rgba(255,255,255,.1);
          border:1px solid rgba(255,255,255,.16);
          backdrop-filter:blur(10px);
          border-radius:28px;
          padding:22px;
          color:#fff;
        }

        .anchor-shell{
          position:relative;
          margin-top:-44px;
          z-index:3;
        }
        .anchor-bar{
          max-width:1280px;
          margin:0 auto;
          padding:0 24px;
        }
        .anchor-inner{
          background:rgba(255,255,255,.82);
          backdrop-filter:blur(16px);
          border:1px solid rgba(255,255,255,.6);
          box-shadow:0 14px 34px rgba(0,0,0,.06);
          border-radius:24px;
          padding:14px;
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }
        .anchor-link{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:12px 14px;
          border-radius:14px;
          background:transparent;
          color:${C.gray3};
          font-size:14px;
          font-weight:600;
          transition:all .22s ease;
        }
        .anchor-link:hover{
          background:${C.white};
          color:${C.black};
        }

        .page-shell{
          max-width:1280px;
          margin:0 auto;
          padding:40px 24px 32px;
        }

        .overview-grid{
          display:grid;
          grid-template-columns:1.15fr .85fr;
          gap:18px;
          align-items:stretch;
        }

        .route-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:16px;
          margin-top:18px;
        }
        .route-card{
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          min-height:280px;
          background:${C.white};
          border:1px solid ${C.gray6};
          border-radius:28px;
          padding:24px;
          transition:transform .24s ease,border-color .24s ease,box-shadow .24s ease,background .24s ease;
        }
        .route-card:hover{
          transform:translateY(-3px);
          border-color:${C.gray5};
          box-shadow:0 18px 38px rgba(0,0,0,.06);
          background:#fcfcfa;
        }
        .route-kicker{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:7px 12px;
          border-radius:999px;
          background:${C.accentPale};
          color:${C.black};
          font-size:11px;
          font-weight:700;
          letter-spacing:1px;
          text-transform:uppercase;
          margin-bottom:18px;
        }
        .route-title{
          font-size:28px;
          line-height:1.04;
          font-weight:600;
          letter-spacing:-0.8px;
          color:${C.black};
          margin-bottom:12px;
          max-width:12ch;
        }
        .route-desc{
          font-size:15px;
          line-height:1.75;
          color:${C.gray3};
          max-width:32ch;
        }
        .route-action{
          margin-top:auto;
          display:inline-flex;
          align-items:center;
          gap:9px;
          font-size:14px;
          font-weight:600;
          color:${C.black};
          padding-top:20px;
        }
        .route-action-badge{
          width:30px;
          height:30px;
          border-radius:999px;
          background:${C.tint};
          border:1px solid ${C.gray6};
          display:inline-flex;
          align-items:center;
          justify-content:center;
          transition:transform .22s ease, background .22s ease, border-color .22s ease;
        }
        .route-card:hover .route-action-badge{
          transform:translateX(2px);
          background:${C.accentPale};
          border-color:${C.accent};
        }

        .guide-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:16px;
          margin-top:16px;
        }
        .guide-card{
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          min-height:220px;
          background:${C.white};
          border:1px solid ${C.gray6};
          border-radius:24px;
          padding:22px;
          transition:transform .22s ease,border-color .22s ease,box-shadow .22s ease;
        }
        .guide-card:hover{
          transform:translateY(-2px);
          border-color:${C.gray5};
          box-shadow:0 14px 30px rgba(0,0,0,.04);
        }
        .guide-title{
          font-size:20px;
          line-height:1.12;
          font-weight:600;
          letter-spacing:-0.4px;
          color:${C.black};
          margin-bottom:10px;
        }
        .guide-desc{
          font-size:14px;
          line-height:1.72;
          color:${C.gray3};
          margin-bottom:16px;
        }
        .guide-action{
          display:inline-flex;
          align-items:center;
          gap:8px;
          font-size:14px;
          font-weight:600;
          color:${C.black};
          margin-top:auto;
        }
        .guide-action-badge{
          width:28px;
          height:28px;
          border-radius:999px;
          background:${C.tint};
          border:1px solid ${C.gray6};
          display:inline-flex;
          align-items:center;
          justify-content:center;
        }

        .split-feature{
          display:grid;
          grid-template-columns:minmax(320px,.95fr) minmax(0,1.05fr);
          gap:18px;
          align-items:stretch;
        }
        .feature-panel{
          background:${C.accent};
          border-radius:30px;
          padding:34px;
          color:${C.black};
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          min-height:380px;
        }
        .feature-media{
          position:relative;
          min-height:380px;
          border-radius:30px;
          overflow:hidden;
          box-shadow:0 18px 54px rgba(0,0,0,.08);
        }

        .signals-grid{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:16px;
          margin-top:16px;
        }

        .mid-cta{
          background:${C.accent};
          border-radius:32px;
          padding:40px clamp(24px,4vw,44px);
          color:${C.black};
        }

        .faq-grid{display:grid;gap:12px}
        .faq-item{
          border-top:1px solid ${C.gray6};
          border-bottom:1px solid ${C.gray6};
          background:transparent;
          transition:border-color .25s ease;
        }
        .faq-item:hover{border-color:${C.gray5}}
        .faq-summary{
          list-style:none;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:18px;
          padding:18px 0;
          font-size:17px;
          line-height:1.45;
          font-weight:500;
          color:${C.black};
        }
        .faq-summary::-webkit-details-marker{display:none}
        .faq-plus{
          flex:0 0 auto;
          width:32px;
          height:32px;
          border-radius:999px;
          border:1px solid ${C.gray6};
          display:inline-flex;
          align-items:center;
          justify-content:center;
          transition:transform .28s ease, background .28s ease, border-color .28s ease;
        }
        .faq-item[open] .faq-plus{
          transform:rotate(45deg);
          background:${C.accentPale};
          border-color:${C.accent};
        }

        .related-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:18px;
          margin-top:10px;
        }
        .related-card{
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          min-height:260px;
          background:${C.white};
          border:1px solid ${C.gray6};
          border-radius:28px;
          padding:24px;
          transition:transform .22s ease,border-color .22s ease,box-shadow .22s ease,background .22s ease;
        }
        .related-card:hover{
          transform:translateY(-3px);
          border-color:${C.gray5};
          box-shadow:0 18px 38px rgba(0,0,0,.06);
          background:#fcfcfa;
        }
        .related-kicker{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:7px 12px;
          border-radius:999px;
          background:${C.accentPale};
          color:${C.black};
          font-size:11px;
          font-weight:700;
          letter-spacing:1px;
          text-transform:uppercase;
          margin-bottom:18px;
        }
        .related-title{
          font-size:26px;
          line-height:1.05;
          font-weight:600;
          letter-spacing:-0.7px;
          color:${C.black};
          margin-bottom:12px;
          max-width:13ch;
        }
        .related-desc{
          font-size:15px;
          line-height:1.72;
          color:${C.gray3};
          margin-bottom:22px;
          max-width:34ch;
        }
        .related-action{
          margin-top:auto;
          display:inline-flex;
          align-items:center;
          gap:9px;
          font-size:14px;
          font-weight:600;
          color:${C.black};
        }
        .related-action-badge{
          width:30px;
          height:30px;
          border-radius:999px;
          background:${C.tint};
          border:1px solid ${C.gray6};
          display:inline-flex;
          align-items:center;
          justify-content:center;
          transition:transform .22s ease, background .22s ease, border-color .22s ease;
        }
        .related-card:hover .related-action-badge{
          transform:translateX(2px);
          background:${C.accentPale};
          border-color:${C.accent};
        }

        .end-cta{
          background:${C.white};
          border:1px solid ${C.gray6};
          border-radius:32px;
          padding:38px clamp(24px,4vw,42px);
        }

        .pill-yellow:hover{background:${C.accentHover};transform:translateY(-1px)}
        .pill-soft:hover{background:#e7e7e7;transform:translateY(-1px)}

        [data-reveal]{
          opacity:0;
          transform:translateY(14px);
          animation:fadeUpSoft 1s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay:var(--delay,0ms);
          will-change:opacity, transform;
        }
        section[data-reveal]:nth-of-type(1){--delay:40ms}
        section[data-reveal]:nth-of-type(2){--delay:80ms}
        section[data-reveal]:nth-of-type(3){--delay:120ms}
        section[data-reveal]:nth-of-type(4){--delay:160ms}
        section[data-reveal]:nth-of-type(5){--delay:200ms}
        section[data-reveal]:nth-of-type(6){--delay:240ms}
        section[data-reveal]:nth-of-type(7){--delay:280ms}

        @keyframes fadeUpSoft{
          from{opacity:0;transform:translateY(14px)}
          to{opacity:1;transform:translateY(0)}
        }

        @media(max-width:1180px){
          .hero-grid,.overview-grid,.route-grid,.guide-grid,.split-feature,.signals-grid,.related-grid,.hero-strip{
            grid-template-columns:1fr!important;
          }
          .hero-side{justify-self:start;width:100%}
        }

        @media(max-width:820px){
          .hero-shell{min-height:76vh}
          .page-h1{font-size:40px!important;letter-spacing:-1px!important}
          .hero-sub{font-size:17px}
          .anchor-inner{padding:12px}
          .anchor-link{width:100%;justify-content:flex-start}
        }
      `}</style>

      <main
        style={{
          background: C.bg,
          color: C.black,
          fontFamily: "'Inter Tight', sans-serif",
          padding: 0,
        }}
      >
        <section className="hero-shell">
          <div className="hero-media">
            <Image
              src="/home/waaza-yacht-financing-tool--1.jpg"
              alt="Editorial yacht financing workspace with transaction notes and vessel planning view"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="hero-inner">
            <div className="hero-breadcrumbs">
              <span>
                <Link href="/">Home</Link>
              </span>
              <span style={{ opacity: 0.5 }}>›</span>
              <span style={{ color: "#fff" }}>Financing</span>
            </div>

            <div className="hero-grid">
              <div className="hero-panel">
                <div className="hero-kicker">
                  <WalletIcon size={14} />
                  Yacht financing pillar
                </div>

                <h1
                  className="page-h1"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(44px,5.8vw,72px)",
                    lineHeight: 0.96,
                    fontWeight: 400,
                    letterSpacing: -1.35,
                    margin: "0 0 18px",
                    maxWidth: 760,
                  }}
                >
                  Yacht financing becomes easier to navigate
                  <span style={{ color: C.accent, display: "block" }}>
                    when you start with the right question.
                  </span>
                </h1>

                <p className="hero-sub">
                  Most people researching yacht financing are not asking one thing. They are asking
                  three different things at once: what financing is, how it works, and what makes a
                  case feel clean or difficult once a real vessel appears. This page is the top of
                  the financing pillar. It helps you choose the right guide quickly, then moves
                  serious purchase intent into the calculator or the readiness flow instead of
                  leaving you stuck inside another generic overview.
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
                      borderRadius: 14,
                      background: C.accent,
                      color: C.black,
                      fontWeight: 700,
                      transition: "all .24s ease",
                    }}
                  >
                    Use yacht finance calculator
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>

                <div className="hero-strip">
                  <div className="hero-stat">
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                      Start here
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                      Definition, process, approval
                    </div>
                  </div>

                  <div className="hero-stat">
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                      Best for
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                      Buyers, brokers, advisors
                    </div>
                  </div>

                  <div className="hero-stat">
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                      Best next action
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                      Calculator or readiness
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-side">
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.72)",
                    marginBottom: 14,
                  }}
                >
                  Quick routes
                </div>

                <div style={{ display: "grid", gap: 10 }}>
                  {[
                    { href: "#start-here", label: "Start with the right question" },
                    { href: "#key-guides", label: "Jump to key financing guides" },
                    { href: "#tighter-cases", label: "See what makes cases tighten" },
                    { href: "#tools", label: "Use the right tool next" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                        padding: "14px 16px",
                        borderRadius: 18,
                        background: "rgba(255,255,255,.08)",
                        border: "1px solid rgba(255,255,255,.12)",
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      <span>{item.label}</span>
                      <ArrowRightIcon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="anchor-shell">
          <div className="anchor-bar">
            <div className="anchor-inner">
              <a href="#start-here" className="anchor-link">Start here</a>
              <a href="#key-guides" className="anchor-link">Guides</a>
              <a href="#how-it-flows" className="anchor-link">Flow</a>
              <a href="#tighter-cases" className="anchor-link">Friction</a>
              <a href="#tools" className="anchor-link">Tools</a>
              <a href="#faq" className="anchor-link">FAQ</a>
            </div>
          </div>
        </div>

        <div className="page-shell">
          <Section
            id="start-here"
            eyebrow="Start here"
            title="Start with the financing question you are actually trying to solve"
            intro="The biggest problem with most yacht-financing content is that it treats three different search jobs as one. This pillar works better when it separates them cleanly and helps the reader choose a direction fast."
          >
            <div className="overview-grid">
              <div
                style={{
                  background: C.white,
                  border: `1px solid ${C.gray6}`,
                  borderRadius: 30,
                  padding: "26px clamp(22px,3vw,30px)",
                }}
              >
                <p>
                  Some readers still need the category framed properly. Others already need the
                  sequence from first enquiry to survey, insurance and lender review. Others are much
                  further on and really want to understand what makes a case look stronger or weaker
                  when the lender sees the buyer and the vessel together.
                </p>
                <p>
                  That is why the financing pillar is built around a routing job, not a “one page
                  answers everything” job. If the question is still definitional, start with{" "}
                  <Link href="/financing/what-is-yacht-financing">what yacht financing is</Link>. If
                  the question is how the conversation moves from idea to deal, go to{" "}
                  <Link href="/financing/how-yacht-financing-works">how yacht financing works</Link>.
                  If the real concern is how the case will be judged, open{" "}
                  <Link href="/financing/what-lenders-look-for-in-yacht-financing">
                    what lenders look for in yacht financing
                  </Link>
                  .
                </p>
                <p style={{ marginBottom: 0 }}>
                  That separation makes every next click better. It also makes the later tools far
                  more useful because the buyer reaches them with a clearer purchase in mind.
                </p>
              </div>

              <div
                style={{
                  position: "relative",
                  minHeight: 340,
                  borderRadius: 30,
                  overflow: "hidden",
                  boxShadow: "0 18px 54px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/home/waaza-yacht-financing-tool--2.jpg"
                  alt="Modern yacht financing interface displayed beside underwriting-style case notes"
                  fill
                  sizes="(max-width: 1180px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="route-grid">
              <RouteCard
                href="/financing/what-is-yacht-financing"
                kicker="Definition"
                title="What is yacht financing?"
                description="Best for readers who still need the category framed properly before they go deeper into process or approval."
              />

              <RouteCard
                href="/financing/how-yacht-financing-works"
                kicker="Process"
                title="How yacht financing works"
                description="Best for buyers who want the sequence from early framing through survey, insurance, underwriting and closing."
              />

              <RouteCard
                href="/financing/what-lenders-look-for-in-yacht-financing"
                kicker="Approval"
                title="What lenders look for"
                description="Best for readers already thinking about how a live case will be interpreted once the lender sees the full picture."
              />
            </div>
          </Section>

          <Section
            id="key-guides"
            eyebrow="Key guides"
            title="Use the right supporting guide once the broad financing picture is clear"
            intro="Once the reader knows whether they need definition, process or approval guidance, the next layer is usually one of the practical side questions that starts shaping the deal."
          >
            <p>
              Some of those side questions matter early because they change the structure before the
              lender ever responds. Deposit size changes affordability and approval tone. Vessel age
              changes deposit, rate and term all at once. Loan length changes how much pressure sits
              in the monthly payment. A clean financing pillar should surface those guides directly so
              buyers can move sideways into the one that actually changes their next decision.
            </p>

            <div className="guide-grid">
              <GuideCard
                href="/financing/can-you-finance-a-yacht"
                title="Can you finance a yacht?"
                description="The broader guide to yacht loans, qualification, rates, terms and when financing actually makes sense."
              />
              <GuideCard
                href="/financing/typical-deposit-for-yacht-financing"
                title="Typical deposit for yacht financing"
                description="See how deposits move with borrower quality, vessel profile and lender appetite."
              />
              <GuideCard
                href="/financing/how-vessel-age-affects-financing"
                title="How vessel age affects financing"
                description="Understand why age changes the deal faster than most buyers expect."
              />
              <GuideCard
                href="/how-long-can-you-finance-a-yacht"
                title="How long can you finance a yacht?"
                description="Compare loan lengths properly and see what term pressure really does to the payment."
              />
            </div>
          </Section>

          <Section
            id="how-it-flows"
            eyebrow="How it flows"
            title="The financing journey usually gets shaped long before a lender gives a formal answer"
            intro="Good financing conversations do not begin at the bank. They begin when the buyer, the vessel and the likely structure are framed clearly enough that the case already starts making sense."
          >
            <div className="split-feature">
              <div className="feature-panel">
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
                      fontWeight: 700,
                      letterSpacing: 1.1,
                      textTransform: "uppercase",
                      marginBottom: 18,
                    }}
                  >
                    <WalletIcon size={14} />
                    Why the sequence matters
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(28px,3vw,40px)",
                      lineHeight: 1.05,
                      fontWeight: 600,
                      letterSpacing: -0.8,
                      margin: "0 0 18px",
                    }}
                  >
                    Better financing outcomes usually start with a better-framed purchase, not with a later-stage rescue.
                  </h3>

                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.82,
                      margin: 0,
                      maxWidth: 520,
                    }}
                  >
                    That is why the pillar routes readers from definition, to process, to lender
                    lens, and then into the calculator or readiness flow. The point is to stop vague
                    research from lingering too long once the deal is becoming real.
                  </p>
                </div>
              </div>

              <div className="feature-media">
                <Image
                  src="/home/waaza-yacht-financing-tool--3.jpg"
                  alt="Buyer and advisor reviewing yacht financing options on a modern planning screen"
                  fill
                  sizes="(max-width: 1180px) 100vw, 55vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <p>
                In practice the sequence is simple. First, the buyer needs the category framed
                properly. Then the buyer needs to understand the process around deposit, indicative
                numbers, survey, insurance and the movement toward a real lender conversation. Then,
                if the purchase is live enough, the useful question becomes what the case is already
                starting to look like, not whether financing exists in theory.
              </p>
              <p style={{ marginBottom: 0 }}>
                That is exactly where the tools begin to outperform more reading. The calculator is
                useful when the purchase is concrete enough for a number-led view. The readiness flow
                is useful when the question becomes buyer quality, vessel fit and likely complexity.
              </p>
            </div>
          </Section>

          <Section
            id="tighter-cases"
            eyebrow="Where friction starts"
            title="Most financing cases do not turn difficult because of one dramatic problem"
            intro="They tighten because several ordinary things start pressing in the same direction. The value of a pillar page is that it helps the reader see those pressure points early."
          >
            <div className="signals-grid">
              <SignalCard
                title="Vessel age"
                body="Older yachts often need larger deposits, higher rates and shorter terms at the same time. That is why the vessel-age page matters so early."
              />
              <SignalCard
                title="Deposit pressure"
                body="A deposit is not just a hurdle. It changes approval tone, payment pressure and how stretched the deal looks from day one."
              />
              <SignalCard
                title="Structure and use"
                body="Once the ownership structure or intended use becomes more layered, the case can move away from straightforward retail-style lending."
              />
              <SignalCard
                title="Liquidity and reserves"
                body="A buyer can look fine on income and still feel weak if the deposit leaves too little room after closing for a realistic ownership picture."
              />
            </div>

            <div style={{ marginTop: 18 }}>
              <p>
                This is why a useful financing pillar should not behave like a brochure. It should
                make the category more legible. A buyer looking at an older yacht should know quickly
                to open{" "}
                <Link href="/financing/how-vessel-age-affects-financing">
                  the vessel-age guide
                </Link>
                . A buyer trying to understand whether the case is strong enough overall should move
                toward{" "}
                <Link href="/financing/what-lenders-look-for-in-yacht-financing">
                  the lender-readiness page
                </Link>
                . A buyer deciding between deposit paths should go to{" "}
                <Link href="/financing/typical-deposit-for-yacht-financing">
                  the deposit guide
                </Link>
                .
              </p>
              <p style={{ marginBottom: 0 }}>
                That is what makes the financing silo useful instead of noisy: each child page has a
                clear job, and the pillar routes the reader into the right one before the purchase
                starts absorbing real time.
              </p>
            </div>
          </Section>

          <Section
            id="common-mistakes"
            eyebrow="Common mistakes"
            title="Most financing mistakes start as routing mistakes, not lender mistakes"
            intro="A strong pillar page should also prevent the early-stage errors that make cases weaker before anyone formal has even looked at them."
          >
            <h3>Treating one monthly payment as the whole financing story</h3>
            <p>
              Buyers often latch onto a repayment number and behave as though the work is done. What
              gets missed is that deposit strategy, vessel age, loan length, running costs and lender
              appetite still shape whether the case looks sensible. A number without the surrounding
              structure is not clarity.
            </p>

            <h3>Trying to solve every financing question from one overview page</h3>
            <p>
              Definition, process and approval are not the same job. When those jobs get blended
              together, readers leave with just enough confidence to be dangerous and not enough
              structure to move efficiently.
            </p>

            <h3>Waiting too long to move into tools</h3>
            <p>
              Once the purchase is becoming real, broader reading becomes less useful than a
              calculator pass or a readiness view. The pillar should help people know when to stop
              reading in circles and start testing a live scenario properly.
            </p>
          </Section>

          <section id="tools" data-reveal className="mid-cta" style={{ margin: "20px 0 8px", scrollMarginTop: 120 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.42)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.1,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <WalletIcon size={14} />
              Best next tool
            </div>

            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(34px,4.6vw,60px)",
                lineHeight: 1.04,
                fontWeight: 400,
                letterSpacing: -1.2,
                marginBottom: 14,
                maxWidth: 980,
                color: C.black,
              }}
            >
              When the purchase is becoming real, stop reading broadly and pressure-test the numbers
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
              The calculator is the right next move when deposit, term and payment tradeoffs are now
              more useful than another generic guide. Once the case needs a more structured view, the
              readiness flow becomes the better step after that.
            </p>

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
                fontWeight: 700,
                transition: "all .24s ease",
              }}
            >
              Open yacht finance calculator
              <ArrowRightIcon size={16} />
            </Link>
          </section>

          <Section
            id="faq"
            eyebrow="FAQ"
            title="Frequently asked questions"
            intro="A strong pillar page should answer the recurring orientation questions clearly and then move the reader forward."
          >
            <div className="faq-grid">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary className="faq-summary">
                    <span>{faq.question}</span>
                    <span className="faq-plus">+</span>
                  </summary>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.82,
                      color: C.gray2,
                      margin: "0 0 18px",
                      paddingRight: 10,
                    }}
                  >
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Section>

          <Section
            id="read-next"
            eyebrow="Read next"
            title="Keep moving inside the financing silo"
            intro="The pillar works best when it routes readers cleanly into the child page or tool that matches the next real decision."
          >
            <div className="related-grid">
              <Link href="/financing/what-is-yacht-financing" className="related-card">
                <div>
                  <div className="related-kicker">Definition</div>
                  <div className="related-title">What is yacht financing?</div>
                  <div className="related-desc">
                    Use this when the category still needs framing before you move into the mechanics.
                  </div>
                </div>

                <div className="related-action">
                  Open page
                  <span className="related-action-badge">
                    <ArrowRightIcon size={14} />
                  </span>
                </div>
              </Link>

              <Link href="/financing/how-yacht-financing-works" className="related-card">
                <div>
                  <div className="related-kicker">Process</div>
                  <div className="related-title">How yacht financing works</div>
                  <div className="related-desc">
                    Use this when you want the sequence from first enquiry through lender-facing steps.
                  </div>
                </div>

                <div className="related-action">
                  Open page
                  <span className="related-action-badge">
                    <ArrowRightIcon size={14} />
                  </span>
                </div>
              </Link>

              <Link href="/financing/what-lenders-look-for-in-yacht-financing" className="related-card">
                <div>
                  <div className="related-kicker">Approval</div>
                  <div className="related-title">What lenders look for</div>
                  <div className="related-desc">
                    Use this when the purchase is real enough that case quality now matters more than theory.
                  </div>
                </div>

                <div className="related-action">
                  Open page
                  <span className="related-action-badge">
                    <ArrowRightIcon size={14} />
                  </span>
                </div>
              </Link>
            </div>
          </Section>

          <section data-reveal className="end-cta" style={{ marginTop: 8 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                borderRadius: 999,
                background: C.accentPale,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.1,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <WalletIcon size={14} />
              Final step
            </div>

            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(34px,4.5vw,56px)",
                lineHeight: 1.06,
                fontWeight: 400,
                letterSpacing: -1.2,
                marginBottom: 14,
                maxWidth: 800,
              }}
            >
              Turn a broad financing topic into a clearer, better-framed case
            </h2>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: C.gray2,
                maxWidth: 760,
                marginBottom: 22,
              }}
            >
              Once the question is clear, the strongest next move is not more vague content. It is
              the tool that helps you pressure-test a real purchase and see how the buyer, vessel and
              likely structure begin to look together.
            </p>

            <Link
              href="/wizard"
              className="pill-yellow"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "16px 24px",
                borderRadius: 12,
                background: C.accent,
                color: C.black,
                fontWeight: 700,
                transition: "all .24s ease",
              }}
            >
              Start readiness intake
              <ArrowRightIcon size={16} />
            </Link>
          </section>
        </div>

        <footer style={{ padding: "60px 24px 32px", borderTop: `1px solid ${C.gray6}` }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 40,
            }}
          >
            <div>
              <Image
                src="/waaza.png"
                alt="Waaza"
                width={120}
                height={28}
                style={{ height: 28, width: "auto", marginBottom: 8 }}
              />
              <p style={{ color: C.gray3, fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>
                The financing intelligence layer
                <br />
                for yacht transactions.
              </p>
            </div>

            <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
              <div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Explore
                </p>
                <Link href="/financing" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>
                  Financing
                </Link>
                <Link href="/yacht-finance-calculator" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>
                  Calculator
                </Link>
                <Link href="/wizard" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>
                  Readiness
                </Link>
              </div>

              <div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Company
                </p>
                <Link href="/about" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>
                  About
                </Link>
                <Link href="/faq" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{
              maxWidth: 1280,
              margin: "40px auto 0",
              paddingTop: 24,
              borderTop: `1px solid ${C.gray6}`,
            }}
          >
            <p style={{ color: C.gray4, fontSize: 12 }}>
              © 2026 Waaza — Yacht Financing Intelligence. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
