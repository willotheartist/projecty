
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.waaza.co";

const title = "How Vessel Age Affects Financing | Waaza";
const description =
  "See how vessel age changes yacht financing terms, deposits, rates and loan length, and why many lenders refuse yachts over 20 years old.";

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
    "how vessel age affects financing",
    "yacht age financing",
    "older yacht financing",
    "yacht finance vessel age",
    "can you finance an older yacht",
    "yacht loan age limits",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/financing/how-vessel-age-affects-financing",
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
    url: "/financing/how-vessel-age-affects-financing",
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    publishedTime: "2026-03-16T00:00:00.000Z",
    modifiedTime: "2026-03-16T00:00:00.000Z",
    images: [
      {
        url: "/home/waaza-yacht-financing-tool--8.jpg",
        width: 1200,
        height: 630,
        alt: "How vessel age affects yacht financing guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/home/waaza-yacht-financing-tool--8.jpg"],
  },
};

const toc = [
  { id: "why-age-matters", label: "Why lenders care about vessel age" },
  { id: "new-yachts", label: "New yachts: 0 to 5 years old" },
  { id: "five-to-ten", label: "Yachts: 5 to 10 years old" },
  { id: "ten-to-fifteen", label: "Yachts: 10 to 15 years old" },
  { id: "fifteen-to-twenty", label: "Yachts: 15 to 20 years old" },
  { id: "over-twenty", label: "Yachts over 20 years old" },
  { id: "builder-reputation", label: "How builder reputation helps" },
  { id: "true-cost", label: "The true cost of age penalties" },
  { id: "buying-newer", label: "When buying newer makes more sense" },
  { id: "older-yacht-strategies", label: "Strategies for financing older yachts" },
  { id: "alternatives-and-resale", label: "Alternatives, refinancing and resale" },
  { id: "resources", label: "Using Waaza and additional resources" },
  { id: "faq", label: "Frequently asked questions" },
];

const faqs = [
  {
    question: "At what age does yacht financing become impossible?",
    answer:
      "Most lenders will not finance yachts over 20 years old regardless of condition, credit score or deposit. A few specialty lenders may look at 20 to 25 year old vessels with very large deposits, high rates and short terms. Beyond that, traditional yacht financing is effectively unavailable.",
  },
  {
    question: "How much more down payment do older yachts require?",
    answer:
      "New yachts may need 10% to 15% down. Yachts 5 to 10 years old often need 15% to 20%. Vessels 10 to 15 years old often need 20% to 25%, sometimes 30%. Yachts 15 to 20 years old can require 25% to 35% minimum, and beyond 20 years the rare deals that still finance can require 35% to 50%.",
  },
  {
    question: "Do prestigious builders get better terms despite age?",
    answer:
      "Yes. Established luxury builders often face less severe age penalties because lenders have more confidence in resale value and secondary-market liquidity. That helps, but it does not fully overcome extreme age.",
  },
  {
    question: "Can excellent maintenance reduce age penalties?",
    answer:
      "Good maintenance helps, especially where records are complete and the yacht surveys cleanly. It can soften the lender's view, but it does not erase hard age limits. A pristine older yacht may finance a bit like a slightly younger average yacht, but not like a new one.",
  },
  {
    question: "How do interest rates increase with vessel age?",
    answer:
      "New yachts might sit around 5% to 6.5%. Yachts 5 to 10 years old often run about 0.5% to 1% higher. Yachts 10 to 15 years old can be 1% to 1.5% higher than new. Yachts 15 to 20 years old are often 2% to 2.5% higher, and the few over-20-year deals that still finance can approach 9% to 10%.",
  },
  {
    question: "What's the maximum loan term for a 10-year-old yacht?",
    answer:
      "Many lenders cap 10-year-old yachts at around 12 to 15 years. The logic is simple: lenders generally do not want the boat to be too old by the time the loan ends, often keeping maturity before the vessel reaches roughly 25 to 30 years old.",
  },
  {
    question: "Should I buy newer to avoid age penalties?",
    answer:
      "Often yes. Slightly newer yachts can be more affordable month to month despite higher purchase prices because they need smaller deposits, qualify for lower rates and support longer terms. Once you add likely system replacement costs on the older boat, the apparently cheaper yacht can become the more expensive one.",
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
        padding: "54px 0",
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
        gridTemplateColumns: "minmax(320px,.9fr) minmax(0,1.1fr)",
        gap: 18,
        margin: "20px 0 8px",
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
              fontSize: "clamp(28px,3vw,40px)",
              lineHeight: 1.06,
              fontWeight: 600,
              margin: "0 0 18px",
              letterSpacing: -0.8,
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
          boxShadow: "0 18px 54px rgba(0,0,0,0.08)",
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

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl("/home/waaza-yacht-financing-tool--8.jpg"),
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
      "@id": absoluteUrl("/financing/how-vessel-age-affects-financing"),
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
        name: "How vessel age affects financing",
        item: absoluteUrl("/financing/how-vessel-age-affects-financing"),
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
          margin:28px 0 10px;
          font-family:'Inter Tight',sans-serif;
          font-size:22px;
          line-height:1.2;
          font-weight:500;
          color:${C.black};
        }
        .rich strong{font-weight:600;color:${C.black}}
        .rich a{color:${C.black};font-weight:500;text-decoration:underline;text-underline-offset:3px}

        .hero-shell{
          position:relative;
          min-height:82vh;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
          background:${C.black};
        }
        .hero-media{
          position:absolute;
          inset:0;
        }
        .hero-media::after{
          content:"";
          position:absolute;
          inset:0;
          background:rgba(0,0,0,0.38);
        }
        .hero-copy{
          position:relative;
          z-index:2;
          max-width:1180px;
          margin:0 auto;
          padding:48px 24px 58px;
          text-align:center;
          color:#fff;
        }
        .hero-copy a{color:#fff}
        .hero-breadcrumbs{
          display:flex;
          gap:8px;
          justify-content:center;
          flex-wrap:wrap;
          font-size:13px;
          color:rgba(255,255,255,0.72);
          margin-bottom:18px;
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
          font-weight:600;
          letter-spacing:1.2px;
          text-transform:uppercase;
          margin-bottom:22px;
        }
        .hero-sub{
          max-width:900px;
          margin:0 auto 30px;
          font-size:18px;
          line-height:1.85;
          color:rgba(255,255,255,0.88);
          font-weight:400;
        }
        .hero-actions{
          display:flex;
          justify-content:center;
          gap:14px;
          flex-wrap:wrap;
          margin-bottom:34px;
        }
        .hero-stats{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:14px;
          max-width:980px;
          margin:0 auto;
        }
        .hero-stat{
          background:rgba(255,255,255,0.12);
          border:1px solid rgba(255,255,255,0.18);
          border-radius:22px;
          padding:18px 20px;
          backdrop-filter:blur(6px);
          text-align:left;
        }

        .layout-grid{
          display:grid;
          grid-template-columns:280px minmax(0,1fr);
          gap:42px;
          align-items:start;
        }
        .toc-shell{
          position:sticky;
          top:104px;
          alignSelf:start;
          padding-top:6px;
        }
        .toc-label{
          display:flex;
          align-items:center;
          gap:8px;
          font-size:12px;
          font-weight:600;
          letter-spacing:1.2px;
          text-transform:uppercase;
          color:${C.gray4};
          margin-bottom:18px;
        }
        .toc-list{
          position:relative;
          display:grid;
          gap:0;
          padding-left:18px;
        }
        .toc-list::before{
          content:"";
          position:absolute;
          left:4px;
          top:0;
          bottom:0;
          width:1px;
          background:${C.gray6};
        }
        .toc-link{
          position:relative;
          display:grid;
          grid-template-columns:28px 1fr;
          gap:12px;
          align-items:start;
          padding:12px 0;
          color:${C.gray3};
          transition:color .24s ease, transform .24s ease;
        }
        .toc-link::before{
          content:"";
          position:absolute;
          left:-18px;
          top:18px;
          width:9px;
          height:9px;
          border-radius:999px;
          background:${C.bg};
          border:1px solid ${C.gray5};
          transition:background .24s ease,border-color .24s ease,transform .24s ease;
        }
        .toc-link:hover{
          color:${C.black};
          transform:translateX(2px);
        }
        .toc-link:hover::before{
          background:${C.accent};
          border-color:${C.accent};
        }
        .toc-number{
          font-size:11px;
          letter-spacing:1px;
          text-transform:uppercase;
          color:${C.gray4};
          padding-top:2px;
        }

        .comparison-grid{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:16px;
          margin:10px 0 24px;
        }
        .comparison-card{
          background:${C.tint};
          border:1px solid ${C.gray6};
          border-radius:24px;
          padding:22px;
        }

        .visual-split.reverse > :first-child{order:2}
        .visual-split.reverse > :last-child{order:1}

        .mid-cta{
          background:${C.accent};
          border-radius:32px;
          padding:38px clamp(24px,4vw,42px);
          color:${C.black};
        }
        .end-cta{
          background:${C.tint};
          border:1px solid ${C.gray6};
          border-radius:30px;
          padding:34px clamp(24px,4vw,40px);
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

        .readmore-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:16px;
        }
        .readmore-card{
          display:block;
          padding:22px 0;
          border-top:1px solid ${C.gray6};
          border-bottom:1px solid ${C.gray6};
          transition:transform .24s ease,border-color .24s ease;
        }
        .readmore-card:hover{
          transform:translateY(-1px);
          border-color:${C.gray5};
        }

        .pill-yellow:hover{background:${C.accentHover};transform:translateY(-1px)}
        .pill-soft:hover{background:#e7e7e7;transform:translateY(-1px)}
        .pill-outline:hover{border-color:rgba(255,255,255,.56)!important;background:rgba(255,255,255,.1)}

        .hero-copy{
          animation:heroRise 1.15s cubic-bezier(0.16,1,0.3,1) .06s both;
        }

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
        section[data-reveal]:nth-of-type(8){--delay:320ms}
        section[data-reveal]:nth-of-type(9){--delay:360ms}

        @keyframes heroRise{
          from{opacity:0;transform:translateY(18px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes fadeUpSoft{
          from{opacity:0;transform:translateY(14px)}
          to{opacity:1;transform:translateY(0)}
        }

        @media(max-width:1180px){
          .layout-grid,.hero-stats,.readmore-grid,.visual-split,.comparison-grid{grid-template-columns:1fr!important}
          .toc-shell{position:relative!important;top:auto!important}
        }
        @media(max-width:820px){
          .page-h1{font-size:40px!important;letter-spacing:-1px!important}
          .hero-shell{min-height:70vh}
          .hero-sub{font-size:17px}
        }
      `}</style>

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
              src="/home/waaza-yacht-financing-tool--8.jpg"
              alt="Marine survey paperwork and financing documents showing why yacht age changes lender appetite"
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
              <span style={{ color: "#fff" }}>Vessel age</span>
            </div>

            <div className="hero-kicker">
              <WalletIcon size={14} />
              Vessel age guide
            </div>

            <h1
              className="page-h1"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(46px,5.8vw,76px)",
                lineHeight: 0.98,
                fontWeight: 400,
                letterSpacing: -1.5,
                margin: "0 auto 18px",
                maxWidth: 940,
              }}
            >
              Vessel age changes the loan faster than most buyers expect
            </h1>

            <p className="hero-sub">
              Vessel age is one of the biggest financing variables after borrower quality. Newer
              yachts usually get lower rates, smaller deposits and longer terms, while older vessels
              face increasingly restrictive underwriting. By the time a yacht moves toward 20 years
              old, traditional financing can become extremely limited or disappear altogether.
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
                Compare age scenarios
                <ArrowRightIcon size={16} />
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                  0 to 5 years
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Usually 10% to 15% down</div>
              </div>

              <div className="hero-stat">
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                  10 to 15 years
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Often 20% to 25% down</div>
              </div>

              <div className="hero-stat">
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                  15 to 20 years
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Short terms, high rates</div>
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
                id="why-age-matters"
                title="Why lenders care about vessel age"
                intro="Vessel age is often the biggest financing variable after credit quality because the yacht is the collateral and older collateral creates more uncertainty almost everywhere the lender looks."
              >
                <p>
                  Yacht financing uses the vessel as collateral. If you default, the lender
                  repossesses and sells it to recover its money. Older yachts create three immediate
                  problems: they depreciate faster, they are harder to sell, and they need expensive
                  repairs that can drain the owner's ability to keep making payments.
                </p>
                <p>
                  A new yacht may depreciate heavily in its first three to five years and then settle
                  into a slower pattern. After year ten, the lender often starts thinking about major
                  systems approaching end-of-life: engines, generators, air conditioning,
                  electronics, plumbing and more. On the wrong vessel, those costs can easily move
                  into the £50,000 to £100,000 range or beyond.
                </p>
                <p>
                  Resale liquidity matters too. A five-year-old yacht from a reputable builder is far
                  easier to price and sell than a twenty-year-old vessel with a less predictable
                  market. Lenders need confidence that, if the file goes wrong, they can recover
                  value without a long and painful disposal process. That is why age affects not just
                  the rate, but the deposit, term length and in some cases whether financing exists at
                  all. If you want the broader financing framework first, the parent page is{" "}
                  <Link href="/financing/can-you-finance-a-yacht">can you finance a yacht</Link>.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--6.jpg"
                imageAlt="Yacht finance case review showing vessel age, survey and asset quality driving lender decisions"
                label="Why age bites so hard"
                title="The lender is not only pricing the boat you are buying now. It is pricing the resale risk of the boat years from now."
                body="That is why a vessel can still look attractive to a buyer at 15 years old and already feel materially less attractive to the lender that would have to liquidate it at 22 or 25."
              />

              <Section
                id="new-yachts"
                title="New yachts: 0 to 5 years old"
                intro="This is where yacht financing is strongest. New and nearly-new yachts receive the lowest rates, the lightest deposits and the longest terms because the collateral story is clean."
              >
                <p>
                  Brand-new yachts receive the best possible financing terms. Down payments can sit
                  around 10% to 15% for buyers with excellent credit where the yacht comes from an
                  established manufacturer such as Sunseeker, Princess, Azimut or Ferretti. Lesser
                  known builders often require more, even when the vessel is new.
                </p>
                <p>
                  Rates on new yachts often sit around 5% to 6.5% for good to excellent borrowers.
                  These numbers are close to the floor for marine lending. Terms can extend to 20
                  years on the right higher-value boat, with smaller new yachts more commonly landing
                  in the 15 to 18 year range.
                </p>
                <p>
                  In practical terms, a £500,000 new yacht might require only £50,000 to £75,000
                  down, qualify around the mid-5% to low-6% range, and support the full 20-year term.
                  This is as clean as yacht financing gets and explains why many buyers who care about
                  accessible leverage stay concentrated in the newer end of the market.
                </p>
              </Section>

              <Section
                id="five-to-ten"
                title="Yachts: 5 to 10 years old"
                intro="For many buyers, this is the sweet spot: meaningful depreciation has already happened, but the yacht is still modern enough to qualify for reasonable terms."
              >
                <p>
                  Down payments in this band often land around 15% to 20%. Prestigious builders may
                  still get close to the bottom of that range, while more ordinary production boats
                  tend to sit nearer 20%. A £300,000 eight-year-old yacht often needs something like
                  £45,000 to £60,000 down.
                </p>
                <p>
                  Rates generally climb by around 0.5% to 1% compared with a new yacht. Where a new
                  vessel gets 5.5% to 6%, a seven-year-old yacht may face 6% to 6.5%. That sounds
                  small but compounds meaningfully over a long loan. On a £300,000 borrowing over 15
                  years, the difference can add roughly £23,000 in interest.
                </p>
                <p>
                  Terms in this bracket are usually 15 to 18 years. That still keeps the maturity
                  within a final vessel age that most lenders can live with. This is why the five to
                  ten year range so often becomes the most practical balance between purchase price and
                  financing accessibility.
                </p>
              </Section>

              <Section
                id="ten-to-fifteen"
                title="Yachts: 10 to 15 years old"
                intro="This is where age stops being a mild pricing factor and starts becoming a real financing obstacle."
              >
                <p>
                  Deposits often jump to 20% to 25% minimum and may reach 30% on production boats. A
                  £250,000 twelve-year-old yacht can easily require £50,000 to £75,000 down. That is
                  double or triple what the same yacht might have required much earlier in its life.
                </p>
                <p>
                  Rates also widen. A twelve-year-old vessel may sit around 6.5% to 7.5% when new
                  yachts of similar value are still financing closer to 5.5% to 6%. On a £200,000
                  loan over 12 years, a 1.5% pricing penalty can add about £20,000 in interest.
                </p>
                <p>
                  Terms shorten sharply here. A ten-year-old yacht may top out at 12 to 15 years. A
                  vessel closer to fifteen years old may only get 10 to 12 years. The shorter term
                  means the monthly payment rises even if the loan balance is smaller. That is why
                  age hurts twice: you put down more cash upfront and often still face a more
                  demanding payment profile afterward.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--9.jpg"
                imageAlt="Lender-ready file for a newer yacht contrasted with a more difficult older-vessel financing case"
                label="Where the squeeze appears"
                title="Age penalties do not only make the rate worse. They also shorten the loan and force more cash into the deal on day one."
                body="That combination is what surprises buyers. The older yacht often looks cheaper at listing price, then becomes tighter once deposit, term length and major systems risk all show up together."
                reverse
              />

              <Section
                id="fifteen-to-twenty"
                title="Yachts: 15 to 20 years old"
                intro="By this point, financing is no longer merely restrictive. For many mainstream marine lenders, it is close to a default decline."
              >
                <p>
                  Where financing still exists, deposits are often 25% to 35% minimum. A
                  £150,000 seventeen-year-old yacht may require £37,500 to £52,500 of cash before
                  the lender will even engage seriously.
                </p>
                <p>
                  Rates can rise to roughly 7% to 8.5% or more. Terms rarely exceed 8 to 10 years
                  because the lender wants to keep final age below its hard ceiling. A sixteen-year-old
                  yacht with an eight-year term already reaches 24 years old at maturity, which is
                  close to the outer limit many lenders will tolerate.
                </p>
                <p>
                  That produces dramatic payment pressure. A £120,000 loan at 8% over 8 years costs
                  roughly £1,820 a month. The same amount at 6% over 15 years is closer to £1,010 a
                  month. Age does not just make the deal slightly more expensive. In some cases it
                  nearly doubles the payment.
                </p>
              </Section>

              <Section
                id="over-twenty"
                title="Yachts over 20 years old"
                intro="Traditional yacht financing is essentially unavailable once a vessel moves beyond 20 years old."
              >
                <p>
                  The few specialty lenders that will even consider these boats often require 35% to
                  50% down, rates nearing 9% to 10%, and terms of only 5 to 7 years. At that point
                  the economics of a yacht-specific loan have often broken down.
                </p>
                <p>
                  That is why most buyers of 20+ year old yachts either pay cash, use home equity, or
                  use a different lending product entirely. There can be rare exceptions for classic
                  yachts from legendary builders, but even those face severe restrictions. Prestige may
                  buy a little flexibility. It does not erase the hard age problem.
                </p>
              </Section>

              <section data-reveal className="mid-cta" style={{ margin: "22px 0 10px" }}>
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
                  <WalletIcon size={14} />
                  Useful before you bid
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
                  Compare a newer yacht and an older yacht side by side before you anchor on the cheaper listing price
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
                  The older boat can need more cash upfront, a shorter term and a higher rate at the
                  same time. That is how a lower price tag can still produce a tighter ownership
                  picture.
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
                    fontWeight: 600,
                    transition: "all .24s ease",
                  }}
                >
                  Open yacht finance calculator
                  <ArrowRightIcon size={16} />
                </Link>
              </section>

              <Section
                id="builder-reputation"
                title="How builder reputation helps"
                intro="Builder quality does not erase age, but it can soften the penalty because some brands hold value and sell more predictably than others."
              >
                <p>
                  Prestigious builders usually face less severe age penalties than ordinary production
                  boats. A twelve-year-old Sunseeker or Princess may need meaningfully less cash down
                  than a similarly aged mainstream cruiser because the lender has more confidence in
                  resale value and market depth.
                </p>
                <p>
                  This advantage extends across the age spectrum but it has limits. Even a strong
                  builder cannot fully overcome extreme age. A twenty-two-year-old premium yacht still
                  faces near-insurmountable financing friction with most lenders.
                </p>
                <p>
                  In practice, brands that often receive better treatment include Sunseeker, Princess,
                  Azimut, Ferretti, Fairline, Viking, Hatteras and Bertram. Weaker production brands
                  generally receive more standard or harsher treatment because the lender is less sure
                  of residual value and exit liquidity.
                </p>
              </Section>

              <Section
                id="true-cost"
                title="The true cost of age penalties"
                intro="Age penalties are easy to underestimate because buyers focus on the listing price and miss how deposit, rate and term interact."
              >
                <p>
                  Compare two yachts at the same £300,000 purchase price but different ages. The
                  younger yacht may need less cash down, borrow more, and still produce a cleaner
                  monthly payment profile because the rate is lower and the term is longer. The older
                  yacht may look cheaper to finance because the total interest line is lower, but that
                  usually reflects a shorter term and a larger deposit rather than a truly easier deal.
                </p>

                <div className="comparison-grid">
                  <div className="comparison-card">
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.1, textTransform: "uppercase", color: C.gray4, marginBottom: 12 }}>
                      5-year-old yacht
                    </div>
                    <p><strong>Down payment (15%):</strong> £45,000</p>
                    <p><strong>Loan:</strong> £255,000 at 6% for 18 years</p>
                    <p><strong>Monthly payment:</strong> about £2,145</p>
                    <p style={{ marginBottom: 0 }}><strong>Total interest:</strong> about £205,000</p>
                  </div>

                  <div className="comparison-card">
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.1, textTransform: "uppercase", color: C.gray4, marginBottom: 12 }}>
                      12-year-old yacht
                    </div>
                    <p><strong>Down payment (25%):</strong> £75,000</p>
                    <p><strong>Loan:</strong> £225,000 at 7% for 12 years</p>
                    <p><strong>Monthly payment:</strong> about £2,380</p>
                    <p style={{ marginBottom: 0 }}><strong>Total interest:</strong> about £117,000</p>
                  </div>
                </div>

                <p>
                  The older yacht costs less in total purchase price and even less in total interest,
                  but you need £30,000 more cash upfront and still face a higher monthly payment while
                  borrowing £30,000 less. That is the practical meaning of the age penalty.
                </p>
              </Section>

              <Section
                id="buying-newer"
                title="When buying newer makes more sense"
                intro="Sometimes paying more for a newer yacht actually produces the cleaner ownership picture once financing and likely repairs are considered together."
              >
                <p>
                  Compare a £350,000 five-year-old yacht with a £250,000 fifteen-year-old yacht. The
                  newer boat may require only 15% down, qualify around 6%, and stretch to 18 years.
                  The older boat may need 30% down, a 7.5% rate and a 10-year term.
                </p>

                <div className="comparison-grid">
                  <div className="comparison-card">
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.1, textTransform: "uppercase", color: C.gray4, marginBottom: 12 }}>
                      £350,000 5-year-old
                    </div>
                    <p><strong>Down (15%):</strong> £52,500</p>
                    <p><strong>Loan:</strong> £297,500 at 6% for 18 years</p>
                    <p style={{ marginBottom: 0 }}><strong>Monthly:</strong> about £2,500</p>
                  </div>

                  <div className="comparison-card">
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.1, textTransform: "uppercase", color: C.gray4, marginBottom: 12 }}>
                      £250,000 15-year-old
                    </div>
                    <p><strong>Down (30%):</strong> £75,000</p>
                    <p><strong>Loan:</strong> £175,000 at 7.5% for 10 years</p>
                    <p style={{ marginBottom: 0 }}><strong>Monthly:</strong> about £2,075</p>
                  </div>
                </div>

                <p>
                  The older yacht has the lower monthly payment, but it requires £22,500 more cash on
                  day one and is much closer to major system replacements. If engines, electronics or
                  other equipment need £30,000 to £50,000 of work within the next few years, the
                  apparently cheaper older boat can become materially more expensive in reality. That
                  is why buyers who are financing-constrained often do better in the five to ten year
                  range than in the fifteen-year range.
                </p>
              </Section>

              <Section
                id="older-yacht-strategies"
                title="Strategies for financing older yachts"
                intro="If you are set on a yacht in the harder 12 to 18 year range, the goal is to make the file easier everywhere the lender still has discretion."
              >
                <h3>Maximize the deposit</h3>
                <p>
                  Moving from 20% to 30% or even 35% down can materially improve lender comfort.
                  You are reducing its exposure on a collateral type it already sees as riskier.
                </p>

                <h3>Perfect the borrower side</h3>
                <p>
                  Exceptional credit does not erase vessel age, but it can partly compensate for it.
                  A very strong credit profile, clean income, and healthy post-closing reserves may be
                  enough to improve pricing or term flexibility on an older boat.
                </p>

                <h3>Accept shorter terms</h3>
                <p>
                  Many deals get approved only because the maturity has been shortened enough to keep
                  the final vessel age inside the lender's comfort zone. Higher payments are painful,
                  but they are often the price of keeping the case financeable at all.
                </p>

                <h3>Shop more widely</h3>
                <p>
                  Smaller regional lenders and institutions serving boating communities can sometimes
                  be more flexible than large national players. The older the boat, the more lender
                  selection matters.
                </p>
              </Section>

              <Section
                id="alternatives-and-resale"
                title="Alternatives, refinancing and resale"
                intro="Once age pushes the yacht beyond normal marine-lending appetite, buyers usually end up solving the problem with a different source of capital."
              >
                <h3>Alternative financing options</h3>
                <p>
                  Personal loans bypass yacht age restrictions because the yacht is not the
                  collateral. That can help on older boats, but limits are lower, rates are higher
                  and terms are shorter. Home equity loans also ignore the yacht's age because your
                  home secures the borrowing instead. The obvious tradeoff is that you are putting
                  your home behind a depreciating leisure asset. Seller financing can also work,
                  especially on older boats that banks will not touch, but sellers rarely finance the
                  full amount and the terms vary wildly.
                </p>

                <h3>Impact on refinancing</h3>
                <p>
                  Refinancing gets harder as the yacht gets older. If you bought a five-year-old yacht
                  with a long-term loan, it may already be ten years old by the time you want to
                  refinance. That means the boat now faces the tighter underwriting rules that apply
                  to ten-year-old collateral, which can make refinancing harder even if market rates
                  have improved.
                </p>

                <h3>Impact on resale</h3>
                <p>
                  Age also affects the financing options available to your eventual buyer. If you sell
                  a fifteen-year-old yacht, the buyer pool shrinks to people who can handle larger
                  deposits, higher rates and shorter terms. That usually affects resale value too.
                  Boats approaching the lender cut-off zone often trade at bigger discounts because so
                  many buyers need financing and fewer can get it.
                </p>
              </Section>

              <Section
                id="resources"
                title="Using Waaza and additional resources"
                intro="Age is one of the easiest things to compare before you fall in love with the wrong yacht, which is why it should be modeled early rather than explained away later."
              >
                <p>
                  Waaza's yacht financing calculator lets you compare the same purchase price across
                  different vessel ages. That is often where the surprise happens. Many buyers discover
                  that a £250,000 fifteen-year-old yacht can cost more monthly than a £300,000
                  eight-year-old yacht once deposit, rate and term all adjust for age.
                </p>
                <p>
                  Before shopping seriously, it is worth doing three pieces of homework:{" "}
                  <a
                    href="https://www.experian.co.uk/consumer/free-credit-score.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    check your credit score
                  </a>
                  , understand the direction of{" "}
                  <a
                    href="https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bank of England rates
                  </a>
                  , and identify a{" "}
                  <a
                    href="https://www.ybdsa.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    qualified marine surveyor
                  </a>{" "}
                  early so you know what condition risk you are really buying.
                </p>
                <p>
                  If you are still zoomed out, pair this page with{" "}
                  <Link href="/financing/typical-deposit-for-yacht-financing">
                    typical deposit for yacht financing
                  </Link>{" "}
                  and{" "}
                  <Link href="/how-long-can-you-finance-a-yacht">
                    how long you can finance a yacht
                  </Link>{" "}
                  so you can see how age affects all three major levers at once.
                </p>
              </Section>

              <section
                id="faq"
                data-reveal
                style={{
                  padding: "54px 0",
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
                    marginBottom: 16,
                  }}
                >
                  Frequently asked questions
                </h2>

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
              </section>

              <section
                data-reveal
                style={{
                  padding: "54px 0",
                  borderTop: `1px solid ${C.gray6}`,
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(34px,3vw,48px)",
                    lineHeight: 1.06,
                    fontWeight: 400,
                    letterSpacing: -1.1,
                    marginBottom: 16,
                  }}
                >
                  Read next
                </h2>

                <div className="readmore-grid">
                  <Link href="/financing/can-you-finance-a-yacht" className="readmore-card">
                    <div style={{ fontSize: 21, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>
                      Can you finance a yacht?
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray3, marginBottom: 16 }}>
                      The broader guide to how yacht loans work, who qualifies and what the deal really costs.
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                      Read page <ArrowRightIcon size={15} />
                    </div>
                  </Link>

                  <Link href="/financing/typical-deposit-for-yacht-financing" className="readmore-card">
                    <div style={{ fontSize: 21, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>
                      Typical deposit for yacht financing
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray3, marginBottom: 16 }}>
                      See how deposits shift with vessel age, borrower quality and lender appetite.
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                      Read page <ArrowRightIcon size={15} />
                    </div>
                  </Link>

                  <Link href="/how-long-can-you-finance-a-yacht" className="readmore-card">
                    <div style={{ fontSize: 21, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>
                      How long can you finance a yacht?
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray3, marginBottom: 16 }}>
                      Understand why term length shrinks as the vessel ages and how that changes the payment.
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                      Read page <ArrowRightIcon size={15} />
                    </div>
                  </Link>
                </div>
              </section>

              <section data-reveal className="end-cta" style={{ marginTop: 22 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: C.accentPale,
                    fontSize: 11,
                    fontWeight: 600,
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
                    maxWidth: 780,
                  }}
                >
                  A slightly newer yacht often becomes the easier deal long before it becomes the cheaper listing
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
                  Use the calculator to compare age bands properly, then check readiness so you know
                  whether the borrower side and the vessel side still make sense together before you
                  start moving paperwork around.
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
                    fontWeight: 600,
                    transition: "all .24s ease",
                  }}
                >
                  Check readiness
                  <ArrowRightIcon size={16} />
                </Link>
              </section>
            </div>
          </div>
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
              <Image src="/waaza.png" alt="Waaza" width={120} height={28} style={{ height: 28, width: "auto", marginBottom: 8 }} />
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
