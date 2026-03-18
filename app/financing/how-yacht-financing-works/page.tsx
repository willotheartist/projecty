
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.waaza.co";

const title = "How Yacht Financing Works | Waaza";
const description =
  "Learn how yacht financing works from application and underwriting to surveys, insurance, term length, international complications and the mistakes that cost buyers the most.";

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
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "how yacht financing works",
    "yacht financing process",
    "marine loan process",
    "yacht down payment",
    "yacht loan term",
    "yacht finance calculator",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/financing/how-yacht-financing-works",
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
    url: "/financing/how-yacht-financing-works",
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
        alt: "Yacht financing documents, charts and lender notes spread across a planning desk",
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
  { id: "application-to-approval", label: "How yacht financing works from application to approval" },
  { id: "deposit-rates", label: "How much deposit do you need and what affects the rate?" },
  { id: "loan-terms", label: "How long are yacht loan terms and what do they really cost?" },
  { id: "documents-survey-insurance", label: "What documents, survey and insurance do lenders require?" },
  { id: "structures", label: "Which yacht financing structure makes sense?" },
  { id: "international-charter", label: "How does yacht financing work for international or charter cases?" },
  { id: "mistakes", label: "Common yacht financing mistakes" },
  { id: "finance-or-cash", label: "Should you finance a yacht or pay cash?" },
  { id: "faq", label: "Frequently asked questions" },
];

const faqs = [
  {
    question: "How much deposit do I need to finance a yacht?",
    answer:
      "Most lenders want between 10% and 30% of the purchase price upfront. Newer yachts from stronger builders can sometimes qualify closer to 10%, while older vessels, unusual assets or weaker credit profiles usually push the deposit higher. On a £500,000 purchase, that often means £50,000 to £150,000 down.",
  },
  {
    question: "How long does yacht financing usually take?",
    answer:
      "Preliminary conversations can move quickly, especially if a lender offers digital applications, but full approval takes longer because documents, the marine survey, insurance and lien paperwork all have to line up. A clean case moves faster than one with missing paperwork, survey issues or a more complicated ownership structure.",
  },
  {
    question: "Can I finance a used yacht?",
    answer:
      "Yes, although lenders are more selective. Most prefer boats under 20 years old, but well-kept vessels from respected builders can still work. Expect the survey to matter more, the down payment to be larger, and the term to be shorter than it would be on a newer boat.",
  },
  {
    question: "What credit score do I need for yacht financing?",
    answer:
      "Competitive terms usually start above 680, while the strongest pricing tends to go to buyers above 740. You can still get a deal below that, but it normally comes with a bigger deposit, more scrutiny and less room to negotiate on rate or structure.",
  },
  {
    question: "Can I pay off a yacht loan early?",
    answer:
      "Usually yes, but only if the loan agreement allows it without a heavy prepayment penalty. Some lenders are flexible; others charge because they expected to earn interest for the full term. If early payoff matters to you, raise it before you sign, not after.",
  },
  {
    question: "Does yacht financing require insurance?",
    answer:
      "Yes. Comprehensive marine insurance is effectively mandatory on financed yachts. The lender will want to be named as loss payee, and letting the policy lapse can put you in default even if your monthly loan payments are current.",
  },
  {
    question: "Can charter income help me qualify?",
    answer:
      "Sometimes. If you genuinely plan to charter the yacht, some lenders will factor projected income into the case, but they are usually conservative about it. They will not underwrite the deal on fantasy occupancy numbers or optimistic weekly rates.",
  },
  {
    question: "How does Waaza help with yacht financing?",
    answer:
      "Waaza helps before the lender conversation gets messy. The calculator shows what the payment looks like under different deposits, rates and terms, while the readiness flow gives you a clearer first pass on how the case may look before you start sending the same documents to everyone.",
  },
];

function absoluteUrl(path: string) {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function Section({
  id,
  title,
  intro,
  imageSrc,
  imageAlt,
  imageCaption,
  reverse = false,
  children,
}: {
  id: string;
  title: string;
  intro: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  const hasImage = !!imageSrc && !!imageAlt;

  return (
    <section
      id={id}
      style={{
        padding: "42px 0",
        borderTop: `1px solid ${C.gray6}`,
        scrollMarginTop: 100,
      }}
    >
      <h2
        style={{
          fontSize: "clamp(30px,3vw,40px)",
          lineHeight: 1.12,
          fontWeight: 800,
          letterSpacing: -0.8,
          marginBottom: 14,
          color: C.black,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: 17,
          lineHeight: 1.8,
          color: C.gray2,
          marginBottom: 24,
          maxWidth: 900,
          fontWeight: 400,
        }}
      >
        {intro}
      </p>

      {hasImage ? (
        <div
          className={`section-grid ${reverse ? "reverse" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.1fr) minmax(320px,.9fr)",
            gap: 30,
            alignItems: "start",
          }}
        >
          <div className="rich" style={{ fontSize: 16, lineHeight: 1.9, color: C.gray2 }}>
            {children}
          </div>

          <figure style={{ position: "relative", margin: 0 }}>
            <div
              style={{
                position: "absolute",
                top: -12,
                left: -12,
                width: "68%",
                height: "58%",
                background: C.accent,
                borderRadius: 24,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(0,0,0,0.09)",
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1400}
                height={1000}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            {imageCaption && (
              <figcaption style={{ fontSize: 12, color: C.gray4, lineHeight: 1.5, marginTop: 10 }}>
                {imageCaption}
              </figcaption>
            )}
          </figure>
        </div>
      ) : (
        <div className="rich" style={{ fontSize: 16, lineHeight: 1.9, color: C.gray2 }}>
          {children}
        </div>
      )}
    </section>
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
      "@id": absoluteUrl("/financing/how-yacht-financing-works"),
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
        name: "How Yacht Financing Works",
        item: absoluteUrl("/financing/how-yacht-financing-works"),
      },
    ],
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Waaza Yacht Finance Calculator",
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    description: "Calculate yacht financing payments and compare different loan scenarios.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />

      <style>{`
        html{scroll-behavior:smooth}
        body{overflow-x:hidden;background:${C.bg}}
        a{text-decoration:none;color:inherit}
        .rich p{margin:0 0 18px}
        .rich h3{
          margin:28px 0 10px;
          font-size:22px;
          line-height:1.2;
          font-weight:700;
          color:${C.black};
        }
        .rich ul{padding-left:22px;margin:0 0 18px}
        .rich li{margin-bottom:10px}
        .rich a{color:${C.black};font-weight:600;text-decoration:underline;text-underline-offset:3px}
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(340px,.98fr);gap:46px;align-items:end}
        .intro-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
        .layout-grid{display:grid;grid-template-columns:270px minmax(0,1fr);gap:34px;align-items:start}
        .facts-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
        .related-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
        .section-grid.reverse > :first-child{order:2}
        .section-grid.reverse > :last-child{order:1}
        .pill-yellow:hover{background:${C.accentHover};transform:translateY(-1px);box-shadow:0 8px 24px rgba(232,227,72,.24)}
        .pill-outline:hover{border-color:${C.gray2}!important;background:rgba(255,255,255,.4)}
        .toc-btn:hover{color:${C.black};background:${C.accentPale}}
        .related-link:hover{transform:translateY(-1px);border-color:${C.gray2}!important}
        details[open] summary{margin-bottom:10px}
        summary::-webkit-details-marker{display:none}
        @media(max-width:1150px){
          .hero-grid,.layout-grid,.section-grid,.facts-grid,.related-grid{grid-template-columns:1fr!important}
          .toc-shell{position:relative!important;top:auto!important}
        }
        @media(max-width:820px){
          .intro-grid{grid-template-columns:1fr!important}
          .page-h1{font-size:44px!important;letter-spacing:-1px!important}
        }
      `}</style>

      <main
        style={{
          background: C.bg,
          color: C.black,
          fontFamily: "'Inter Tight', sans-serif",
          padding: "88px 24px 0",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <section style={{ paddingBottom: 48 }}>
            <div className="hero-grid">
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    fontSize: 13,
                    color: C.gray3,
                    marginBottom: 22,
                  }}
                >
                  <span>
                    <Link href="/">Home</Link>
                  </span>
                  <span style={{ opacity: 0.5 }}>›</span>
                  <span>
                    <Link href="/financing">Financing</Link>
                  </span>
                  <span style={{ opacity: 0.5 }}>›</span>
                  <span style={{ color: C.black }}>How yacht financing works</span>
                </div>

                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.8,
                    textTransform: "uppercase",
                    color: C.gray2,
                    marginBottom: 18,
                  }}
                >
                  Financing
                </p>

                <h1
                  className="page-h1"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(50px,6vw,82px)",
                    lineHeight: 1.03,
                    fontWeight: 400,
                    letterSpacing: -1.8,
                    marginBottom: 20,
                    maxWidth: 850,
                  }}
                >
                  How yacht financing works
                </h1>

                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.82,
                    color: C.gray2,
                    maxWidth: 850,
                    marginBottom: 28,
                  }}
                >
                  Most first-time buyers assume financing a yacht is either impossibly niche or just a
                  bigger version of a car loan. It is neither. In practice, the process sits somewhere
                  in between a mortgage, an asset-backed loan and a due-diligence exercise, which is
                  why so many people get caught out on surveys, insurance, term length or total cost.
                  Once a real purchase appears, you are either dealing with a case that is well framed
                  from the start or one that turns noisy as soon as paperwork, underwriting and vessel
                  condition enter the picture. This guide covers the full process — application,
                  underwriting, deposit, rates, term length, documentation, surveys, insurance and
                  closing — and it does it without pretending the only thing that matters is the
                  monthly payment. It is for buyers, brokers and advisors who already understand the
                  basics from the <Link href="/financing">main financing section</Link> and want the
                  mechanics in a more usable form. If you still want the subject framed first, start
                  with <Link href="/financing/what-is-yacht-financing">what yacht financing is</Link>.
                  If you are already thinking about lender appetite, go next to{" "}
                  <Link href="/financing/what-lenders-look-for-in-yacht-financing">
                    what lenders look for
                  </Link>
                  .
                </p>

                <div className="intro-grid" style={{ marginBottom: 28 }}>
                  <div
                    style={{
                      background: C.tint,
                      border: `1px solid ${C.gray6}`,
                      borderRadius: 22,
                      padding: 18,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: 1.1,
                        textTransform: "uppercase",
                        color: C.gray4,
                        marginBottom: 10,
                      }}
                    >
                      The short version
                    </div>
                    <div style={{ fontSize: 15, lineHeight: 1.72, color: C.gray2 }}>
                      You borrow part of the purchase price, put down a deposit, give the lender a
                      lien over the yacht, and repay the balance over time with interest.
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.45)",
                      border: `1px solid ${C.gray6}`,
                      borderRadius: 22,
                      padding: 18,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: 1.1,
                        textTransform: "uppercase",
                        color: C.gray4,
                        marginBottom: 10,
                      }}
                    >
                      What complicates it
                    </div>
                    <div style={{ fontSize: 15, lineHeight: 1.72, color: C.gray2 }}>
                      Deposit size, credit, yacht age, survey results, insurance, currency exposure
                      and the full ownership cost all change how the deal feels in practice.
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
                  <Link
                    href="/yacht-finance-calculator"
                    className="pill-yellow"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px 24px",
                      borderRadius: 12,
                      background: C.accent,
                      color: C.black,
                      fontWeight: 700,
                      transition: "all .2s",
                    }}
                  >
                    Use yacht finance calculator
                  </Link>

                  <Link
                    href="/wizard"
                    className="pill-outline"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px 24px",
                      borderRadius: 12,
                      background: "transparent",
                      border: `1px solid ${C.gray6}`,
                      color: C.black,
                      fontWeight: 600,
                      transition: "all .2s",
                    }}
                  >
                    Run readiness intake
                  </Link>
                </div>

                <div className="facts-grid">
                  <div style={{ padding: "14px 0 0", borderTop: `1px solid ${C.gray6}` }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: 1.1,
                        textTransform: "uppercase",
                        color: C.gray4,
                        marginBottom: 8,
                      }}
                    >
                      Typical deposit
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>10% to 30%</div>
                  </div>

                  <div style={{ padding: "14px 0 0", borderTop: `1px solid ${C.gray6}` }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: 1.1,
                        textTransform: "uppercase",
                        color: C.gray4,
                        marginBottom: 8,
                      }}
                    >
                      Typical term
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>10 to 20 years</div>
                  </div>

                  <div style={{ padding: "14px 0 0", borderTop: `1px solid ${C.gray6}` }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: 1.1,
                        textTransform: "uppercase",
                        color: C.gray4,
                        marginBottom: 8,
                      }}
                    >
                      Core moving parts
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>Buyer, boat, survey, insurance</div>
                  </div>
                </div>
              </div>

              <div style={{ position: "relative", minHeight: 660 }}>
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 0,
                    width: "72%",
                    height: "58%",
                    background: C.accent,
                    borderRadius: 32,
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    marginLeft: 28,
                    borderRadius: 28,
                    overflow: "hidden",
                    boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
                  }}
                >
                  <Image
                    src="/home/waaza-yacht-financing-tool--1.jpg"
                    alt="Yacht financing documents, charts and lender notes spread across a planning desk"
                    width={1400}
                    height={1000}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>

                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "46%",
                    borderRadius: 22,
                    overflow: "hidden",
                    boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
                    border: `8px solid ${C.bg}`,
                  }}
                >
                  <Image
                    src="/home/waaza-yacht-financing-tool--2.jpg"
                    alt="Marine finance dashboard showing deposit, term and payment scenarios side by side"
                    width={900}
                    height={680}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="layout-grid" style={{ paddingBottom: 90 }}>
            <aside
              className="toc-shell"
              style={{
                position: "sticky",
                top: 108,
                alignSelf: "start",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: `1px solid ${C.gray6}`,
                  borderRadius: 22,
                  padding: 18,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: C.gray4,
                    marginBottom: 14,
                  }}
                >
                  On this page
                </div>

                <div style={{ display: "grid", gap: 8 }}>
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="toc-btn"
                      style={{
                        display: "block",
                        borderRadius: 12,
                        padding: "10px 12px",
                        fontSize: 14,
                        color: C.gray3,
                        transition: "all .2s",
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div>
              <Section
                id="application-to-approval"
                title="How yacht financing works from application to approval"
                intro="The process starts well before money moves. A lender wants to know whether the borrower looks solid, whether the yacht is acceptable collateral, and whether the whole purchase still makes sense once the paperwork is real."
                imageSrc="/home/waaza-yacht-financing-tool--3.jpg"
                imageAlt="Timeline view of a yacht purchase moving from application to closing"
                imageCaption="The sequence is simple. The friction usually shows up in the details."
              >
                <p>
                  In basic terms, you identify the yacht, choose the lender or broker channel, submit
                  your financial documents, and wait while the lender underwrites both you and the
                  vessel. That sounds straightforward because the headline version is straightforward.
                  The complication is that yacht finance behaves more like secured asset lending than
                  a standard consumer loan. The lender is not only asking whether you earn enough. It
                  is also asking whether the yacht will hold enough value to protect its position if
                  things go wrong.
                </p>
                <p>
                  That is why the yacht itself becomes part of the underwriting story. The lender will
                  want make, model, year, price, condition, likely resale profile and a professional
                  marine survey. If the numbers work on paper but the boat turns out to be older,
                  tired or overpriced, the loan can still stall. This is also the point where marine
                  specialists usually outperform generalist banks. Regular banks often treat the yacht
                  like an awkward car. Specialists understand why one 15-year-old vessel may still
                  finance well while another gets treated like a problem.
                </p>
                <p>
                  Once the lender is satisfied, you receive terms, sign the documents, provide the
                  deposit, bind insurance and complete closing. The yacht becomes collateral, the
                  lender files its lien, and you start paying. If you are still on the earlier,
                  simpler question of whether financing is even possible, the companion page on{" "}
                  <Link href="/can-you-finance-a-yacht">whether a yacht can be financed at all</Link>{" "}
                  is the better detour before you go any deeper.
                </p>
              </Section>

              <Section
                id="deposit-rates"
                title="How much deposit do you need and what affects the rate?"
                intro="Deposit size and borrowing cost are tied together. The more equity you put in at the start, the easier the case usually feels and the less room there is for the lender to worry about downside."
              >
                <p>
                  Most yacht deals land somewhere between 10% and 30% down. Newer vessels from better
                  builders, paired with strong credit and a straightforward ownership story, can
                  sometimes sit at the lower end. Older boats, more unusual assets, thinner credit
                  files or a borrower who is already heavily leveraged usually push the deposit
                  upward. The reason is obvious: the less you borrow relative to the yacht's value,
                  the easier it is for the lender to recover if things go wrong.
                </p>
                <p>
                  Interest rates work the same way. Credit score matters. Deposit size matters. Yacht
                  age and condition matter. Market rates matter. A buyer with a stronger balance sheet
                  and 30% down will usually see a different rate from somebody stretching to 10% on
                  an older vessel. The difference does not just affect the monthly payment. Over a
                  long term, a 0.5% to 1% shift in pricing can mean tens of thousands in extra cost.
                  That is why rate shopping matters almost as much as the yacht negotiation itself.
                </p>
                <p>
                  If you want a cleaner sense of how loan term and deposit work together, it helps to
                  pair this page with <Link href="/how-long-can-you-finance-a-yacht">how long you can
                  finance a yacht</Link>. If you want to move the numbers around immediately, the{" "}
                  <Link href="/boat-finance-calculator">boat finance calculator</Link> or the yacht-
                  specific calculator are both more useful than guessing from memory.
                </p>
              </Section>

              <Section
                id="loan-terms"
                title="How long are yacht loan terms and what do they really cost?"
                intro="Term length is where the monthly payment starts looking friendly and the total cost starts getting quietly expensive."
              >
                <p>
                  Typical yacht loan terms run from around 10 years to 20 years, depending on the
                  amount borrowed, the vessel's age and how the lender views the asset. Smaller,
                  lower-value boats tend to get shorter terms. Larger and newer yachts can stretch
                  longer, especially if the lender is comfortable that the boat will still look
                  financeable years down the line. Many lenders do not want the yacht reaching 25 to
                  30 years old before the loan matures, which is why asset age matters almost as much
                  as borrower strength.
                </p>
                <p>
                  The trade-off is always the same. A longer term reduces the monthly payment but
                  raises total interest. A shorter term does the opposite. On a £300,000 deal at 6%,
                  a 10-year loan is much more painful month to month than a 20-year one, but the
                  shorter term can save well into six figures in interest over the life of the loan.
                  That is why buyers who only optimise for the monthly payment often walk into a
                  structure that feels affordable now but expensive in total.
                </p>
                <p>
                  Fixed rates keep the payment predictable. Variable rates start lower but can move
                  against you later. Which is better depends on how long you plan to keep the yacht,
                  how likely you are to refinance and how much payment volatility you are prepared to
                  live with. If your plans already lean toward larger vessels, it also helps to look
                  at <Link href="/superyacht-financing">superyacht financing</Link>, where term length
                  and structure can start behaving differently.
                </p>
              </Section>

              <Section
                id="documents-survey-insurance"
                title="What documents, survey and insurance do lenders require?"
                intro="This is where many deals slow down. Yacht financing is document-heavy, and the lender usually wants proof not just that you can buy the boat, but that you can own it responsibly after closing."
                imageSrc="/home/waaza-yacht-financing-tool--4.jpg"
                imageAlt="Surveyor and buyer reviewing a yacht condition report before financing approval"
                imageCaption="The survey is not a box to tick. It can change the deal."
                reverse
              >
                <p>
                  On the borrower side, expect tax returns, bank statements, pay slips or business
                  accounts, asset and liability schedules and enough reserves on paper to show that
                  the deposit is not your last available cash. Self-employed buyers usually face more
                  scrutiny because income is harder to read. On the vessel side, expect title or
                  registration records, the purchase agreement, detailed specifications and the marine
                  survey. If the boat has a maintenance file, bring it. If it has a patchy history,
                  expect questions.
                </p>
                <p>
                  The survey is central because it tells the lender what the yacht is actually worth
                  and whether major defects are hiding under the gloss. Poor survey results can sink
                  the deal, change the down payment requirement or force a renegotiation on price.
                  Buyers who try to save money by rushing or skipping the survey are usually saving a
                  tiny amount to take a much larger risk. The same logic applies to insurance.
                  Comprehensive cover is effectively mandatory on financed yachts, and the lender will
                  want to be named as loss payee. No insurance, no closing.
                </p>
                <p>
                  This is also the point where clean preparation pays off. Well-organised files move
                  faster than scrambled ones. If the goal is to look better before lender outreach
                  begins, that is exactly what the <Link href="/wizard">readiness flow</Link> is for:
                  not to replace the lender, but to stop you arriving there half-prepared.
                </p>
              </Section>

              <section
                style={{
                  margin: "14px 0 8px",
                  background: C.tint,
                  border: `1px solid ${C.gray6}`,
                  borderRadius: 28,
                  padding: "28px clamp(24px,3vw,36px)",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: C.accentPale,
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  Before underwriting starts
                </div>

                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(30px,4vw,48px)",
                    lineHeight: 1.08,
                    fontWeight: 400,
                    letterSpacing: -1,
                    marginBottom: 12,
                    maxWidth: 760,
                  }}
                >
                  Run the numbers before the paperwork starts multiplying
                </h2>

                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.78,
                    color: C.gray2,
                    marginBottom: 18,
                    maxWidth: 760,
                  }}
                >
                  It is a lot easier to adjust a scenario on screen than after the survey, insurance
                  quote and lender questions are already in motion.
                </p>

                <Link
                  href="/wizard"
                  className="pill-yellow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px 22px",
                    borderRadius: 12,
                    background: C.accent,
                    color: C.black,
                    fontWeight: 700,
                    transition: "all .2s",
                  }}
                >
                  Check readiness first
                </Link>
              </section>

              <Section
                id="structures"
                title="Which yacht financing structure makes sense?"
                intro="Traditional amortising loans are the default, but they are not the only option. The right structure depends on your cash flow, how long you expect to keep the yacht and whether the boat will generate income."
                imageSrc="/home/waaza-yacht-financing-tool--5.jpg"
                imageAlt="Comparison of yacht financing structures including fixed balloon and charter-back options"
                imageCaption="Different structures solve different problems. Some also create new ones."
              >
                <p>
                  The cleanest structure is a standard amortising loan. You borrow a fixed amount,
                  make regular payments of principal and interest, and gradually build equity while
                  the balance falls. For most buyers, this is the easiest structure to understand and
                  the least likely to create surprises later. Fixed-rate versions prioritise payment
                  certainty. Variable-rate versions start more cheaply but bring future rate risk into
                  the conversation.
                </p>
                <p>
                  Balloon structures work differently. The monthly cost stays lower during the term,
                  but a large final payment remains outstanding at the end. That can work if you know
                  you will sell before maturity, expect a lump sum later or intend to refinance. It
                  can also go badly wrong if refinancing dries up or the yacht is worth less than you
                  expected when the balloon arrives. The payment looked manageable the whole way
                  through, but the exit becomes the problem.
                </p>
                <p>
                  Charter-back structures sit in the middle. If the yacht will actually produce
                  charter income, some lenders will factor that into the underwriting, but usually on
                  conservative assumptions. They do not lend against fantasy occupancy. Buyers who are
                  comparing structures should normally do two things in parallel: read more broadly on{" "}
                  <Link href="/yacht-financing">yacht financing</Link> and test the numbers using the
                  calculator so the structure choice is anchored in something more solid than hope.
                </p>
              </Section>

              <Section
                id="international-charter"
                title="How does yacht financing work for international or charter cases?"
                intro="Once you leave the simplest private-use setup, the same financing process still applies, but more variables start pushing on it at once."
              >
                <p>
                  International ownership is common in yachting, which means the financing, flag,
                  berth location and buyer's home country do not always line up neatly. You might be
                  earning in pounds, borrowing in euros and keeping the yacht in Spain under a
                  different flag state altogether. That creates practical and tax complications, but
                  the immediate financing issue is usually currency risk and jurisdictional comfort.
                  Some lenders are relaxed about certain flag states and reluctant about others. Some
                  buyers prefer to borrow in their home currency to avoid exchange swings. Others
                  accept currency exposure in return for access to a better lending market.
                </p>
                <p>
                  Charter cases add another layer. A lender may consider forecast charter income, but
                  it will haircut those numbers because nobody wants the whole deal resting on perfect
                  seasons and full calendars. That means buyers planning to charter should not assume
                  the yacht will magically qualify for more leverage just because revenue is possible.
                  The case still has to stand up on its own merits.
                </p>
                <p>
                  This is also why some buyers move sideways into more specific pages after reading
                  the process. If the question is still broad, the guide on{" "}
                  <Link href="/financing/what-lenders-look-for-in-yacht-financing">
                    what lenders usually focus on
                  </Link>{" "}
                  is the right next step. If the question is whether the purchase is even feasible at
                  a high level, the stronger move is to model it in the{" "}
                  <Link href="/yacht-finance-calculator">yacht finance calculator</Link>.
                </p>
              </Section>

              <Section
                id="mistakes"
                title="Common yacht financing mistakes"
                intro="Most expensive yacht finance mistakes are not dramatic. They are small bad assumptions repeated early, then carried all the way into underwriting and closing."
                imageSrc="/home/waaza-yacht-financing-tool--10.jpg"
                imageAlt="Ownership costs table beside a financed yacht moored in the marina"
                imageCaption="The loan payment is rarely the only number that bites."
                reverse
              >
                <h3>Underestimating the total ownership cost</h3>
                <p>
                  <strong>Why it happens:</strong> Buyers fixate on the monthly finance payment
                  because it is the easiest number to compare. Insurance, dockage, maintenance, fuel,
                  repairs and crew costs feel secondary until they begin arriving.
                </p>
                <p>
                  <strong>What goes wrong:</strong> A payment that looked manageable on paper starts
                  competing with thousands more per month in running costs. On a financed yacht, the
                  loan can end up being the least painful part of the budget while the combined annual
                  ownership spend quietly blows past expectations.
                </p>
                <p>
                  <strong>How to avoid it:</strong> Price the whole ownership picture before fixing
                  the loan structure. Use the calculator first, then stress-test the wider budget,
                  not just the finance payment.
                </p>

                <h3>Skipping or rushing the survey</h3>
                <p>
                  <strong>Why it happens:</strong> Buyers fall in love with the boat, the seller
                  pushes for speed, and the survey starts to feel like an annoying delay rather than a
                  protection mechanism.
                </p>
                <p>
                  <strong>What goes wrong:</strong> You discover structural, mechanical or valuation
                  issues after you've already committed too far. Best case, the lender changes terms.
                  Worse case, the deal collapses after time and money have already been spent, or the
                  buyer closes on a boat that needs far more work than expected.
                </p>
                <p>
                  <strong>How to avoid it:</strong> Treat the survey as mandatory intelligence, not
                  bureaucracy. Budget for it, wait for it, and be prepared to renegotiate or walk.
                </p>

                <h3>Taking the first lender offer</h3>
                <p>
                  <strong>Why it happens:</strong> Once someone says yes, it is tempting to stop
                  shopping and get on with the purchase.
                </p>
                <p>
                  <strong>What goes wrong:</strong> Rates, fees, structure and flexibility can vary
                  materially between lenders. A seemingly small difference in rate or term can cost
                  five figures over the life of the loan, especially if you also miss better
                  prepayment terms or a cleaner structure elsewhere.
                </p>
                <p>
                  <strong>How to avoid it:</strong> Compare at least three or four serious lenders,
                  including specialist marine lenders. The first approval is not automatically the
                  best approval.
                </p>
              </Section>

              <Section
                id="finance-or-cash"
                title="Should you finance a yacht or pay cash?"
                intro="Not everyone finances because they have to. Plenty of buyers do it because they prefer to keep capital available, manage liquidity and avoid putting a huge amount of cash into a depreciating asset all at once."
              >
                <p>
                  Paying cash is cleaner, faster and cheaper in pure interest terms. It also ties up
                  a large amount of capital in an asset that will usually lose value over time. For
                  some buyers that is perfectly fine. For others, it removes flexibility they would
                  rather keep — whether for investments, operating reserves or simply avoiding the
                  feeling that the yacht has swallowed every spare pound.
                </p>
                <p>
                  Financing spreads the pain and preserves liquidity, but it also makes the yacht
                  more expensive overall. Over a 15- or 20-year term, the interest bill can be large
                  enough to change how the purchase feels in hindsight. That means the real decision
                  is not “cash good, finance bad” or the reverse. It is whether your capital,
                  borrowing cost, ownership plans and appetite for flexibility point in one direction
                  more than the other.
                </p>
                <p>
                  For many buyers, the practical answer is to test both paths before committing. That
                  is why the strongest final step from here is not another abstract explanation. It
                  is a concrete run through the <Link href="/yacht-finance-calculator">calculator</Link>{" "}
                  so the trade-off between deposit, term and monthly cost stops being theoretical.
                </p>
              </Section>

              <section
                id="faq"
                style={{
                  padding: "42px 0",
                  borderTop: `1px solid ${C.gray6}`,
                  scrollMarginTop: 100,
                }}
              >
                <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                  Frequently asked questions
                </h2>

                <div style={{ display: "grid", gap: 10 }}>
                  {faqs.map((faq, index) => (
                    <details
                      key={faq.question}
                      style={{
                        padding: "18px 0 14px",
                        borderTop: index === 0 ? `1px solid ${C.gray6}` : "none",
                        borderBottom: `1px solid ${C.gray6}`,
                      }}
                    >
                      <summary
                        style={{
                          listStyle: "none",
                          cursor: "pointer",
                          fontSize: 17,
                          fontWeight: 700,
                          color: C.black,
                        }}
                      >
                        {faq.question}
                      </summary>
                      <p style={{ fontSize: 15, lineHeight: 1.8, color: C.gray2, margin: 0 }}>
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              <section style={{ padding: "42px 0", borderTop: `1px solid ${C.gray6}` }}>
                <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                  Keep going
                </h2>

                <div className="related-grid">
                  <Link
                    href="/financing/what-is-yacht-financing"
                    className="related-link"
                    style={{
                      display: "block",
                      padding: "18px 0",
                      borderTop: `1px solid ${C.gray6}`,
                      borderBottom: `1px solid ${C.gray6}`,
                      transition: "all .2s",
                    }}
                  >
                    <div style={{ fontSize: 20, fontWeight: 700, color: C.black, marginBottom: 8 }}>
                      What is yacht financing?
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.65, color: C.gray3 }}>
                      The clean definition before you get into structure, surveys and lenders.
                    </div>
                  </Link>

                  <Link
                    href="/financing/what-lenders-look-for-in-yacht-financing"
                    className="related-link"
                    style={{
                      display: "block",
                      padding: "18px 0",
                      borderTop: `1px solid ${C.gray6}`,
                      borderBottom: `1px solid ${C.gray6}`,
                      transition: "all .2s",
                    }}
                  >
                    <div style={{ fontSize: 20, fontWeight: 700, color: C.black, marginBottom: 8 }}>
                      What lenders look for
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.65, color: C.gray3 }}>
                      Deposit, credit, vessel age, condition and how the whole case reads.
                    </div>
                  </Link>

                  <Link
                    href="/how-long-can-you-finance-a-yacht"
                    className="related-link"
                    style={{
                      display: "block",
                      padding: "18px 0",
                      borderTop: `1px solid ${C.gray6}`,
                      borderBottom: `1px solid ${C.gray6}`,
                      transition: "all .2s",
                    }}
                  >
                    <div style={{ fontSize: 20, fontWeight: 700, color: C.black, marginBottom: 8 }}>
                      How long can you finance a yacht?
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.65, color: C.gray3 }}>
                      A closer look at term length, monthly payment pressure and total interest.
                    </div>
                  </Link>

                  <Link
                    href="/superyacht-financing"
                    className="related-link"
                    style={{
                      display: "block",
                      padding: "18px 0",
                      borderTop: `1px solid ${C.gray6}`,
                      borderBottom: `1px solid ${C.gray6}`,
                      transition: "all .2s",
                    }}
                  >
                    <div style={{ fontSize: 20, fontWeight: 700, color: C.black, marginBottom: 8 }}>
                      Superyacht financing
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.65, color: C.gray3 }}>
                      What changes when the asset, the structure and the stakes get much bigger.
                    </div>
                  </Link>
                </div>
              </section>

              <section
                style={{
                  margin: "20px 0 0",
                  padding: "32px clamp(24px,4vw,44px)",
                  background: "rgba(255,255,255,0.45)",
                  border: `1px solid ${C.gray6}`,
                  borderRadius: 28,
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: C.accentPale,
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
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
                    maxWidth: 760,
                  }}
                >
                  The process only feels simple once the numbers are honest
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
                  If the yacht is real and the conversation is moving, stop relying on instinct. Run
                  the scenarios and see what the structure actually looks like before the lender does.
                </p>

                <Link
                  href="/yacht-finance-calculator"
                  className="pill-yellow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px 24px",
                    borderRadius: 12,
                    background: C.accent,
                    color: C.black,
                    fontWeight: 700,
                    transition: "all .2s",
                  }}
                >
                  Open yacht finance calculator
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
                    fontWeight: 600,
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
                    fontWeight: 600,
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
