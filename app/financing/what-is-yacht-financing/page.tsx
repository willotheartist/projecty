
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://waaza.com";

const title = "What is Yacht Financing? | Waaza";
const description =
  "Learn how yacht financing works, from loan types and down payments to lender requirements, refinancing and the real costs nobody mentions upfront.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "yacht financing",
    "what is yacht financing",
    "marine financing",
    "yacht loan calculator",
    "boat loans",
    "used yacht financing",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/financing/what-is-yacht-financing",
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
    url: "/financing/what-is-yacht-financing",
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    publishedTime: "2026-03-16T00:00:00.000Z",
    modifiedTime: "2026-03-16T00:00:00.000Z",
    images: [
      {
        url: "/home/waaza-yacht-financing-tool--6.jpg",
        width: 1200,
        height: 630,
        alt: "What is yacht financing - Waaza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/home/waaza-yacht-financing-tool--6.jpg"],
  },
};

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

const toc = [
  { id: "how-it-works", label: "How the whole thing actually works" },
  { id: "different-ways", label: "Different ways to structure it" },
  { id: "what-lenders-want", label: "What lenders want to see" },
  { id: "calculator", label: "Using a financing calculator" },
  { id: "why-finance", label: "Why people finance instead of paying cash" },
  { id: "downsides", label: "The downsides nobody mentions upfront" },
  { id: "better-rates", label: "How to get better rates" },
  { id: "leasing", label: "Financing vs. leasing" },
  { id: "international", label: "International complications" },
  { id: "specialists", label: "Marine lending specialists vs. regular banks" },
  { id: "refinancing", label: "Refinancing when rates drop" },
  { id: "apply", label: "What you actually need to apply" },
  { id: "mistakes", label: "Mistakes people make" },
  { id: "changing", label: "What's changing" },
  { id: "decision", label: "Actually making the decision" },
  { id: "faq", label: "Frequently asked questions" },
];

const faqs = [
  {
    question: "How much do I need for a down payment on a yacht?",
    answer:
      "Most lenders want between 10% and 30% of the purchase price upfront. The exact amount depends on the yacht's value, your credit, and the lender's requirements. Larger yachts and older vessels typically need bigger down payments. If you're financing a £500,000 yacht, expect to put down anywhere from £50,000 to £150,000.",
  },
  {
    question: "Can I finance a used yacht?",
    answer:
      "Yes, though lenders are pickier about older boats. Most prefer yachts less than 20 years old, but well-maintained vessels from reputable builders sometimes get exceptions. The yacht needs to pass a professional survey, and older boats usually require larger down payments or shorter loan terms. A 10-year-old yacht will get better financing terms than a 25-year-old one.",
  },
  {
    question: "What credit score do I need to finance a yacht?",
    answer:
      "Most marine lenders want a credit score above 680 for favorable terms. You can sometimes qualify with a lower score if you're putting down a substantial deposit or accepting a higher interest rate. If your credit is marginal, expect stricter requirements and less negotiating room on terms.",
  },
  {
    question: "How long are typical yacht loan terms?",
    answer:
      "Loan terms usually run between 10 and 20 years, depending on the yacht's value and age. Larger, newer yachts qualify for longer terms. A £200,000 yacht might get a 12-year term, while a £2 million superyacht could stretch to 20 years. Shorter terms mean higher monthly payments but less total interest paid.",
  },
  {
    question: "Is yacht financing tax deductible?",
    answer:
      "Sometimes, particularly if you charter the yacht or use it for business purposes. Loan interest, depreciation, and operational expenses might qualify for deductions depending on your tax situation and how you use the vessel. Tax law varies by country and changes regularly, so talk to an accountant who understands marine assets before counting on any deductions.",
  },
  {
    question: "What happens if I can't make payments?",
    answer:
      "The lender repossesses the yacht. They have a lien on the vessel, which means they can take it back if you default. They'll sell it to recover what you owe, and if the sale doesn't cover your remaining balance, you're still on the hook for the difference. Defaulting also destroys your credit and makes future marine financing nearly impossible.",
  },
  {
    question: "Can I pay off my yacht loan early?",
    answer:
      "Usually, but check your loan agreement for prepayment penalties. Some lenders charge fees if you pay off the loan before the term ends because they lose out on expected interest. Others allow early payoff without penalties. If you think you might want to pay off the loan early, negotiate this upfront.",
  },
  {
    question: "How does Waaza help with yacht financing?",
    answer:
      "Waaza's financing calculator lets you run the numbers before talking to lenders. Plug in the yacht's price, your down payment, estimated interest rate, and loan term to see what your monthly payments would look like. You can compare different scenarios side-by-side, which gives you a more realistic sense of what you can actually afford before the conversation gets serious.",
  },
  {
    question: "Do I need insurance to finance a yacht?",
    answer:
      "Yes, comprehensive marine insurance is mandatory for financed yachts. Lenders require coverage that protects their investment in case of damage, theft, or total loss. You'll need to maintain insurance throughout the loan term and name the lender as a loss payee. Insurance costs vary based on the yacht's value, age, where you keep it, and how you use it.",
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
          maxWidth: 880,
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

export default function YachtFinancingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl("/home/waaza-yacht-financing-tool--6.jpg"),
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
      "@id": absoluteUrl("/financing/what-is-yacht-financing"),
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
        name: "What is Yacht Financing",
        item: absoluteUrl("/financing/what-is-yacht-financing"),
      },
    ],
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Waaza Yacht Financing Calculator",
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
          fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
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
                  <span style={{ color: C.black }}>What is Yacht Financing?</span>
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
                    fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                    fontSize: "clamp(50px,6vw,82px)",
                    lineHeight: 1.03,
                    fontWeight: 400,
                    letterSpacing: -1.8,
                    marginBottom: 20,
                    maxWidth: 850,
                  }}
                >
                  What is Yacht Financing?
                </h1>

                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.82,
                    color: C.gray2,
                    maxWidth: 840,
                    marginBottom: 28,
                  }}
                >
                  Most people who buy yachts don't write a check for the full amount. They finance
                  them, much like buying a house or a car — except the numbers are bigger, the
                  lenders are pickier, and the whole process feels designed for people who already
                  own three other boats.
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
                      Yacht financing is simply borrowing money to buy a yacht. You put down a chunk
                      of cash upfront, and a lender covers the rest.
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
                      The reality
                    </div>
                    <div style={{ fontSize: 15, lineHeight: 1.72, color: C.gray2 }}>
                      Then you pay them back over time, with interest, while enjoying your new
                      floating money pit.
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
                      What matters most
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>Deposit, boat, credit, costs</div>
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
                    src="/home/waaza-yacht-financing-tool--6.jpg"
                    alt="Yacht financing research and planning scene"
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
                    src="/home/waaza-yacht-financing-tool--7.jpg"
                    alt="Close-up of a yacht financing platform in use"
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
                id="how-it-works"
                title="How the whole thing actually works"
                intro="The mechanics aren't complicated. You find a yacht you want. You talk to a lender who specializes in marine loans. They look at your finances, look at the boat, and decide whether they trust you to pay them back."
                imageSrc="/home/waaza-yacht-financing-tool--8.jpg"
                imageAlt="Advisor explaining yacht financing structure with transaction visuals"
                imageCaption="The mechanics are simple. The details are not."
              >
                <p>
                  If everyone agrees, you get the loan. The lender takes a lien on the yacht —
                  meaning if you stop paying, they can take it back. You make monthly payments,
                  usually for somewhere between 10 and 20 years, depending on how expensive the yacht
                  is and how long you want to be in debt.
                </p>
                <p>
                  Down payments typically run between 10% and 30%. The bigger the yacht, the more
                  lenders expect you to put down. Interest rates vary wildly based on your credit,
                  the yacht's age and condition, and whatever the marine lending market happens to be
                  doing that month.
                </p>
                <p>
                  If you want the number first, use the{" "}
                  <Link href="/yacht-finance-calculator">calculator</Link>. If you want to see how a
                  purchase may look before you start talking to lenders, the{" "}
                  <Link href="/wizard">readiness flow</Link> is the better next step.
                </p>
              </Section>

              <Section
                id="different-ways"
                title="Different ways to structure it"
                intro="Not every yacht loan is built the same way. The basic idea stays the same, but the structure changes depending on how you want the cash flow to look and how the yacht is going to be used."
              >
                <p>
                  The most straightforward option is a traditional marine loan with fixed or variable
                  interest rates. You borrow a set amount, agree on a payment schedule, and chip
                  away at it month after month until it's paid off or you sell the yacht.
                </p>
                <p>
                  Some people opt for balloon payment loans, where monthly payments stay lower
                  throughout the term, then a massive final payment comes due at the end. This works
                  if you know you'll have cash later — maybe you're expecting a bonus, an
                  inheritance, or you plan to sell before the balloon hits. It's a gamble, but it
                  keeps payments manageable in the meantime.
                </p>
                <p>
                  Then there's charter-back financing, which is for people who plan to offset costs
                  by renting out their yacht when they're not using it. Lenders will consider
                  projected charter income when figuring out your loan terms, though they're usually
                  conservative about it. Nobody wants to bet the farm on optimistic occupancy rates.
                </p>
              </Section>

              <Section
                id="what-lenders-want"
                title="What lenders want to see"
                intro="Marine lenders care about the same things regular lenders do: your credit score, your income, your existing debts, and whether you look like someone who pays bills on time."
                imageSrc="/home/waaza-yacht-financing-tool--9.jpg"
                imageAlt="Buyer and broker discussing yacht purchase financing scenarios"
                imageCaption="The boat matters. Your paperwork matters more than you think."
                reverse
              >
                <p>
                  Most want a credit score above 680, though you can sometimes squeak by with less
                  if you're putting down a hefty deposit.
                </p>
                <p>
                  They'll ask for tax returns, bank statements, pay stubs, and a detailed breakdown
                  of your assets and liabilities. They want proof that you can actually afford the
                  monthly payments without defaulting halfway through.
                </p>
                <p>
                  The yacht itself matters too. Most lenders prefer boats less than 20 years old,
                  though well-maintained classics or prestigious brands sometimes get exceptions. The
                  yacht has to pass a professional marine survey — a thorough inspection that
                  confirms it's worth what you're paying and won't sink in the first storm.
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
                  Run the numbers first
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                    fontSize: "clamp(30px,4vw,48px)",
                    lineHeight: 1.08,
                    fontWeight: 400,
                    letterSpacing: -1,
                    marginBottom: 12,
                    maxWidth: 760,
                  }}
                >
                  Better to find out now than after you've fallen in love with the boat
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
                  Monthly payments are only part of the picture, but they are still a useful place
                  to start. Check the numbers, then decide whether the deal still makes sense.
                </p>

                <Link
                  href="/yacht-finance-calculator"
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
                  Open yacht finance calculator
                </Link>
              </section>

              <Section
                id="calculator"
                title="Using a financing calculator"
                intro="A yacht financing calculator is exactly what it sounds like: a tool that estimates your monthly payments based on purchase price, down payment, interest rate, and loan term."
              >
                <p>Plug in the numbers, see what comes out.</p>
                <p>
                  The advantage is you can play with different scenarios. What if you put down 20%
                  instead of 10%? What if you stretch the loan to 20 years instead of 15? The
                  calculator shows you how each choice affects your monthly payment and total
                  interest paid.
                </p>
                <p>
                  Some advanced calculators let you factor in insurance, maintenance, dockage fees,
                  and potential charter income. That gives you a clearer picture of total ownership
                  costs, not just the loan payment.
                </p>
              </Section>

              <Section
                id="why-finance"
                title="Why people finance instead of paying cash"
                intro="The obvious reason is that most people don't have half a million pounds sitting around. But even people who could pay cash often choose financing."
                imageSrc="/home/waaza-yacht-financing-tool--10.jpg"
                imageAlt="Editorial yacht finance planning setup with layered workflow screens"
                imageCaption="Cash buyers still finance. The reasons are usually obvious once the numbers get bigger."
              >
                <p>
                  Keeping your capital intact matters. If you drain your savings to buy a yacht,
                  you've got no cushion for emergencies, no money for other investments, and no
                  flexibility if something better comes along. Financing lets you spread the cost
                  while keeping liquidity.
                </p>
                <p>
                  There are sometimes tax advantages, especially if you charter the yacht or use it
                  for business. Loan interest, depreciation, and operational costs might be
                  deductible. That depends entirely on your situation and local tax law, so it's
                  worth talking to an accountant who knows marine assets.
                </p>
                <p>
                  Financing also lets you buy more yacht than you could otherwise afford. Whether
                  that's a good thing depends on your perspective.
                </p>
              </Section>

              <Section
                id="downsides"
                title="The downsides nobody mentions upfront"
                intro="Interest adds up. A 15-year loan at 6% can easily add 50% to the purchase price by the time you're done paying."
              >
                <p>
                  That sleek €800,000 yacht ends up costing you over a million once you factor in
                  all the interest.
                </p>
                <p>
                  Yachts depreciate. Unlike houses, which might appreciate over time, most yachts
                  lose value — especially in the first few years. You can end up owing more than the
                  yacht's worth, which gets awkward if you need to sell.
                </p>
                <p>
                  Insurance is mandatory and expensive. Lenders require comprehensive coverage, and
                  marine insurance isn't cheap. Add in dockage, maintenance, fuel, crew, and repairs,
                  and the loan payment starts looking like the least of your worries.
                </p>
              </Section>

              <Section
                id="better-rates"
                title="How to get better rates"
                intro="Start with your credit score. Pay down existing debts, fix any errors on your credit report, and give yourself time to build a solid payment history before applying."
              >
                <p>
                  A few months of preparation can save you thousands over the life of the loan.
                </p>
                <p>
                  Shop around. Marine lending specialists, banks with marine divisions, and credit
                  unions all offer different rates and terms. Don't take the first offer. Compare at
                  least three or four lenders to see who's competitive.
                </p>
                <p>
                  Timing helps. Lenders occasionally run promotions during boat show season or at
                  year-end when they're trying to hit targets. Sellers also tend to be more flexible
                  during slower market periods, which can indirectly improve your financing position
                  if you negotiate a better purchase price.
                </p>
              </Section>

              <Section
                id="leasing"
                title="Financing vs. leasing"
                intro="Leasing is the other option. You pay to use the yacht for a set period without actually owning it."
                imageSrc="/home/waaza-yacht-financing-tool--11.jpg"
                imageAlt="Deal team working through yacht financing and leasing comparisons"
                imageCaption="Ownership gives you equity. Leasing gives you flexibility. Neither is automatically better."
                reverse
              >
                <p>
                  Lower upfront costs, more flexibility to upgrade, and no equity building.
                </p>
                <p>
                  Operating leases let you walk away at the end of the term. Finance leases are
                  closer to rent-to-own. Which makes sense depends on whether you value ownership or
                  flexibility more.
                </p>
                <p>
                  Leasing restrictions can be annoying. Some leases limit where you can take the
                  yacht, how many hours you can use it, or what modifications you can make. You're
                  essentially a long-term renter, not an owner.
                </p>
              </Section>

              <Section
                id="international"
                title="International complications"
                intro="Yacht ownership crosses borders constantly. You might finance in the UK, register under a Maltese flag, and keep the yacht in Spain."
              >
                <p>
                  Each jurisdiction has different rules, and currency fluctuations can mess with your
                  payments if you're earning in one currency but paying the loan in another.
                </p>
                <p>
                  Some buyers finance through their home country for simplicity. Others use the
                  yacht's flag state to access better terms or streamline paperwork. There's no
                  universal right answer — it depends on your tax situation, where you plan to keep
                  the yacht, and what lenders are willing to offer.
                </p>
              </Section>

              <Section
                id="specialists"
                title="Marine lending specialists vs. regular banks"
                intro="Regular banks treat yachts like weird cars. Marine lending specialists actually understand the market."
              >
                <p>
                  They know that a 15-year-old Ferretti holds value differently than a 15-year-old
                  production cruiser. They recognize that certain builders, certain hull designs, and
                  certain maintenance histories matter.
                </p>
                <p>
                  Specialists often have connections to insurance brokers, marine surveyors, and
                  yacht brokers. That network can speed up the buying process and save you headaches.
                </p>
              </Section>

              <Section
                id="refinancing"
                title="Refinancing when rates drop"
                intro="If interest rates have fallen since you took out your original loan, refinancing might save you money."
              >
                <p>
                  You replace your old loan with a new one at a better rate, which lowers your
                  monthly payment or lets you pay off the yacht faster.
                </p>
                <p>
                  Refinancing also works if your financial situation has improved and you qualify for
                  better terms than you did originally. Or if you want to access equity you've built
                  up in the yacht for renovations or other expenses.
                </p>
              </Section>

              <Section
                id="apply"
                title="What you actually need to apply"
                intro="Lenders want documentation. Lots of it."
              >
                <p>
                  Recent tax returns — usually two or three years' worth. Bank statements showing you
                  have reserves beyond the down payment. Pay stubs if you're employed, or business
                  financials if you're self-employed. A full accounting of your assets and
                  liabilities.
                </p>
                <p>
                  Having details about the specific yacht helps. If you've already had a survey done,
                  bring it. If you know the yacht's history, maintenance records, and current market
                  comparables, even better. Lenders appreciate buyers who've done their homework.
                </p>
              </Section>

              <Section
                id="mistakes"
                title="Mistakes people make"
                intro="Underestimating total ownership costs is the big one. The loan payment is just the start."
              >
                <p>
                  Insurance, dockage, maintenance, fuel, and repairs add up fast. Budget for the
                  full picture before committing to a loan amount that maxes out your monthly
                  capacity.
                </p>
                <p>
                  Skipping the survey to save time or money almost always backfires. You might
                  discover expensive problems after you've already bought the yacht, or realize you
                  overpaid because the lender's appraiser was too generous. The survey protects you
                  and catches issues before they become your problem.
                </p>
                <p>
                  Not reading the loan agreement carefully leads to nasty surprises. Prepayment
                  penalties, balloon payments, adjustable rates that spike after a few years — these
                  are all common features that people miss because they skim the fine print.
                </p>
              </Section>

              <Section
                id="changing"
                title="What's changing"
                intro="Yacht financing is slowly going digital. Some lenders now offer online applications with preliminary approval in hours instead of weeks."
              >
                <p>
                  The process is still slower than getting a car loan, but it's faster than it used
                  to be.
                </p>
                <p>
                  There's growing interest in green financing for eco-friendly yachts — hybrid
                  propulsion, solar panels, sustainable materials. A few lenders offer preferential
                  rates for environmentally conscious builds, though this is still niche.
                </p>
              </Section>

              <section
                style={{
                  margin: "20px 0 8px",
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
                  Before you talk to lenders
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                    fontSize: "clamp(34px,4.5vw,56px)",
                    lineHeight: 1.06,
                    fontWeight: 400,
                    letterSpacing: -1.2,
                    marginBottom: 14,
                    maxWidth: 760,
                  }}
                >
                  Figure out what you can afford before somebody sells you the dream
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
                  The calculator gives you the number. The readiness flow gives you a better sense
                  of how the purchase may look before you start sending documents around.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
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
                    Use calculator
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
                    Check readiness
                  </Link>
                </div>
              </section>

              <Section
                id="decision"
                title="Actually making the decision"
                intro="Yacht financing isn't mysterious. You're borrowing money to buy an expensive thing, and the lender wants to make sure you can pay them back."
              >
                <p>
                  The details matter — rates, terms, down payment requirements — but the core
                  concept is simple.
                </p>
                <p>
                  Use a calculator to figure out what you can afford. Talk to multiple lenders. Read
                  everything before you sign. And remember that the loan is just one piece of yacht
                  ownership. The real costs come later, once you're actually out on the water.
                </p>
              </Section>

              <section id="faq" style={{ padding: "42px 0", borderTop: `1px solid ${C.gray6}`, scrollMarginTop: 100 }}>
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
                      <p style={{ fontSize: 15, lineHeight: 1.8, color: C.gray2, margin: 0 }}>{faq.answer}</p>
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
                    href="/financing/how-yacht-financing-works"
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
                      How yacht financing works
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.65, color: C.gray3 }}>
                      The actual sequence, from early interest to a serious financing case.
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
                      Deposit, credit, vessel age, survey, reserves — and how the case starts to look overall.
                    </div>
                  </Link>

                  <Link
                    href="/yacht-finance-calculator"
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
                      Yacht finance calculator
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.65, color: C.gray3 }}>
                      Check the payment, the term, and how the total cost changes when you move the numbers around.
                    </div>
                  </Link>

                  <Link
                    href="/wizard"
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
                      Readiness flow
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.65, color: C.gray3 }}>
                      A better first pass before you start sending the same documents to everyone.
                    </div>
                  </Link>
                </div>
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
