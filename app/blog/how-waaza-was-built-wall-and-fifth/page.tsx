import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.waaza.co";
const WALL_AND_FIFTH_URL = "https://wallandfifth.com";
const SLUG = "/blog/how-waaza-was-built-wall-and-fifth";
const PUBLISHED = "2026-09-08T00:00:00.000Z";

const title = "How Waaza Was Built: Yacht Financing Software by Wall & Fifth";
const description =
  "Inside the product, UX and technical architecture behind Waaza, the yacht financing intelligence platform designed and built by Wall & Fifth.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Waaza" }],
  keywords: [
    "Waaza",
    "Wall & Fifth",
    "yacht financing software",
    "yacht finance platform",
    "fintech software development",
    "custom financial software",
    "marine finance software",
    "yacht broker software",
    "Next.js fintech platform",
    "financial software development",
  ],
  alternates: { canonical: SLUG },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${SLUG}`,
    siteName: "Waaza",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Waaza yacht financing intelligence platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero.png"],
  },
};

const faqs = [
  {
    question: "Who built Waaza?",
    answer:
      "Waaza was designed and built by Wall & Fifth, a product, platform and digital infrastructure studio that also develops ventures of its own.",
  },
  {
    question: "What is Waaza?",
    answer:
      "Waaza is a yacht financing intelligence platform. It helps buyers, brokers and advisors assess financing readiness, model financing scenarios, structure deals and produce clearer financing information before formal lender outreach.",
  },
  {
    question: "What technology is Waaza built with?",
    answer:
      "The current Waaza web application is built with Next.js, React and TypeScript, with Tailwind CSS for the interface, Prisma as the application data layer, PostgreSQL as the database, and Stripe integrations in the codebase.",
  },
  {
    question: "Is Waaza a no-code product?",
    answer:
      "No. Waaza is implemented as a custom TypeScript application with a dedicated Next.js codebase, application routes, data models, rule logic, assessment records and product-specific workflows.",
  },
];

const quickFacts = [
  ["Product", "Waaza"],
  ["Category", "Yacht financing intelligence software"],
  ["Build partner", "Wall & Fifth"],
  ["Frontend", "Next.js 16, React 19, TypeScript, Tailwind CSS 4"],
  ["Data layer", "Prisma with PostgreSQL"],
  ["Core workflows", "Readiness scoring, scenario modelling, assessments, reports and broker tooling"],
];

function JsonLd() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: `${SITE_URL}${SLUG}`,
    image: `${SITE_URL}/hero.png`,
    author: {
      "@type": "Organization",
      name: "Waaza",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Waaza",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/iconpng.png`,
      },
    },
    about: [
      {
        "@type": "SoftwareApplication",
        name: "Waaza",
        applicationCategory: "FinanceApplication",
        url: SITE_URL,
      },
      {
        "@type": "Organization",
        name: "Wall & Fifth",
        url: WALL_AND_FIFTH_URL,
      },
    ],
    mentions: {
      "@type": "Organization",
      name: "Wall & Fifth",
      url: WALL_AND_FIFTH_URL,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: "How Waaza Was Built", item: `${SITE_URL}${SLUG}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <main style={{ background: "#f4f3ef", color: "#0a0a0a", padding: "76px 24px 120px" }}>
        <article style={{ maxWidth: 980, margin: "0 auto" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "#6b7280", marginBottom: 26 }}>
            <Link href="/">Waaza</Link> <span aria-hidden="true">/</span>{" "}
            <Link href="/blog">Blog</Link> <span aria-hidden="true">/</span>{" "}
            <span>How Waaza was built</span>
          </nav>

          <header style={{ marginBottom: 34 }}>
            <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.7, textTransform: "uppercase", color: "#6b7280", marginBottom: 16 }}>
              Product build case study · 8 September 2026
            </p>
            <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: "clamp(44px,7vw,78px)", lineHeight: 1.02, fontWeight: 400, letterSpacing: -1.8, maxWidth: 920, marginBottom: 22 }}>
              How Waaza was built: yacht financing software by Wall & Fifth
            </h1>
            <p style={{ fontSize: 21, lineHeight: 1.65, color: "#374151", maxWidth: 880 }}>
              Waaza is a custom yacht financing intelligence platform designed and built by{" "}
              <a href={WALL_AND_FIFTH_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#0a0a0a", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: 4 }}>
                Wall & Fifth
              </a>
              . It was created to turn a fragmented, judgement-heavy financing process into a structured digital workflow for buyers, yacht brokers and finance advisors.
            </p>
          </header>

          <section aria-label="Article summary" style={{ background: "#FFF86C", borderRadius: 24, padding: 28, marginBottom: 24 }}>
            <h2 style={{ fontSize: 24, lineHeight: 1.2, marginBottom: 12 }}>The short version</h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, margin: 0 }}>
              Wall & Fifth built Waaza as real production software rather than a static calculator or brochure site. The current application combines a public search and education layer with product-specific software for financing readiness, scenario modelling, assessment records, rule-based decision logic and report-oriented workflows. The result is a platform designed around the decisions that happen before a yacht financing case reaches a lender.
            </p>
          </section>

          <section style={{ background: "#fff", border: "1px solid #eae9e4", borderRadius: 24, padding: 30, marginBottom: 24 }}>
            <h2 style={{ fontSize: 30, marginBottom: 18 }}>Waaza build facts</h2>
            <div style={{ display: "grid", gap: 0 }}>
              {quickFacts.map(([label, value]) => (
                <div key={label} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 18, padding: "14px 0", borderTop: "1px solid #eae9e4" }}>
                  <strong>{label}</strong>
                  <span style={{ color: "#4b5563" }}>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="article-copy" style={{ background: "#fff", border: "1px solid #eae9e4", borderRadius: 24, padding: "clamp(26px,5vw,52px)" }}>
            <section>
              <h2>What Waaza was built to solve</h2>
              <p>
                Yacht financing is not just a monthly-payment calculation. A real case can involve borrower liquidity, income profile, vessel value and age, intended use, ownership structure, jurisdiction, deposit level, lender appetite and the overall strength of the transaction. That means a buyer can appear financially strong while still presenting a case that is difficult to place.
              </p>
              <p>
                Waaza was designed around that gap. Its purpose is to help users understand whether a proposed transaction looks financeable, what may make it stronger or weaker, and what structuring path may deserve attention before formal lender outreach begins.
              </p>
              <p>
                That distinction shaped the product from the start. Instead of building a generic finance calculator and adding yacht-specific branding on top, Wall & Fifth treated financing readiness as the product problem.
              </p>
            </section>

            <section>
              <h2>Who built Waaza?</h2>
              <p>
                Waaza was designed and built by <a href={WALL_AND_FIFTH_URL} target="_blank" rel="noopener noreferrer">Wall & Fifth</a>. Wall & Fifth works across product thinking, UX architecture, software, platform systems and digital infrastructure, and also builds ventures of its own.
              </p>
              <p>
                That matters here because Waaza required more than interface design. The product needed a clear financing model, a usable assessment flow, persistent case data, structured outputs, public educational content and enough technical flexibility for the platform to evolve as the financing logic becomes more sophisticated.
              </p>
            </section>

            <section>
              <h2>1. The product architecture started with decisions, not screens</h2>
              <p>
                The key product question was not “what pages should the app have?” It was “what decisions does a broker, buyer or advisor need to make before a financing case is ready to progress?” That led to a product architecture built around assessments, readiness, scenarios and recommended next steps.
              </p>
              <p>
                Waaza stores structured client and vessel information rather than treating each calculation as a disposable form submission. The application data model includes clients, vessels, assessments, assessment runs, rule sets, rules and audit logs. That gives the product a foundation for repeatable logic rather than one-off calculator output.
              </p>
            </section>

            <section>
              <h2>2. Readiness scoring became a core product layer</h2>
              <p>
                A central Waaza concept is financing readiness: a structured way to express how strong or weak a proposed transaction appears before lender submission. The current application model supports a readiness score, financing tier, indicative loan-to-value range, risk flags and a recommended financing path.
              </p>
              <p>
                The underlying assessment model also records rule-set and engine versions plus input and output snapshots. Architecturally, that is important. A financial decision-support product needs to know not only what result was produced, but which version of the logic produced it and what inputs were used at the time.
              </p>
              <p>
                Waaza exposes that product thinking publicly through its <Link href="/platform/readiness-scoring">readiness scoring</Link> and <Link href="/solutions/pre-qualification">pre-qualification</Link> pages.
              </p>
            </section>

            <section>
              <h2>3. Scenario modelling was separated from simple repayment maths</h2>
              <p>
                Payment calculators are useful, but they answer only one part of a financing question. Waaza therefore includes dedicated calculator experiences while also treating scenario modelling as a broader product capability.
              </p>
              <p>
                Users can explore repayment assumptions through the <Link href="/yacht-finance-calculator">yacht finance calculator</Link> and <Link href="/boat-finance-calculator">boat finance calculator</Link>, while the wider platform is structured to help compare financing paths, ownership approaches and deal assumptions.
              </p>
              <p>
                This separation is deliberate: arithmetic can estimate a payment, but a transaction still needs to be interpreted in context.
              </p>
            </section>

            <section>
              <h2>4. The public website was built as part of the product, not as a separate brochure</h2>
              <p>
                Waaza has two jobs online. It must operate as software for users who are actively assessing financing, and it must explain a difficult category to people who are still researching the problem.
              </p>
              <p>
                Wall & Fifth therefore built a public information architecture around the same concepts the software handles internally: yacht financing, lenders, insurance, ownership structures, comparisons, calculators and broker workflows. That includes dedicated financing guides, lender explainers, structuring content, comparison pages and product documentation.
              </p>
              <p>
                This creates a tighter relationship between search intent and product intent. Someone researching <Link href="/financing/how-yacht-financing-works">how yacht financing works</Link> can move naturally into a calculator or assessment instead of landing on an unrelated marketing page.
              </p>
            </section>

            <section>
              <h2>5. The current Waaza technology stack</h2>
              <p>
                The current Waaza web application is a custom TypeScript codebase. Its application stack includes Next.js 16, React 19, TypeScript and Tailwind CSS 4. Prisma is used as the application data layer against PostgreSQL, and the codebase includes Stripe integrations, PDF tooling and dedicated application routes.
              </p>
              <p>
                In practical terms, that means Waaza is not a themed website with a few embedded forms. The platform has its own application models, route structure, assessment logic, client and vessel records, product-specific workflows and data relationships.
              </p>
              <div style={{ overflowX: "auto", margin: "24px 0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 620 }}>
                  <thead>
                    <tr>
                      <th>Layer</th>
                      <th>Current implementation</th>
                      <th>Role in Waaza</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Application framework</td><td>Next.js 16</td><td>Routes, rendering, metadata and application delivery</td></tr>
                    <tr><td>UI</td><td>React 19 + TypeScript</td><td>Interactive product and public interfaces</td></tr>
                    <tr><td>Styling</td><td>Tailwind CSS 4</td><td>Responsive product and content UI</td></tr>
                    <tr><td>Data access</td><td>Prisma</td><td>Typed application models and database access</td></tr>
                    <tr><td>Database</td><td>PostgreSQL</td><td>Clients, vessels, assessments, rules and audit data</td></tr>
                    <tr><td>Payments layer</td><td>Stripe integrations</td><td>Payment-capable product infrastructure in the codebase</td></tr>
                    <tr><td>Documents</td><td>PDF tooling</td><td>Report-oriented workflows</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>6. Why custom software made sense for this problem</h2>
              <p>
                The core Waaza workflow depends on relationships between borrower information, vessel information, financing assumptions and rule-driven outputs. Those relationships are specific to the product. A generic website builder can display content and collect forms, but it is a poor foundation for versioned assessment logic, repeatable case records and structured decision outputs.
              </p>
              <p>
                Building Waaza as custom software gave Wall & Fifth control over the product model itself: how assessments are stored, how rules can evolve, how cases can be revisited and how public tools connect to the deeper product.
              </p>
            </section>

            <section>
              <h2>7. UX had to make a specialist subject feel legible</h2>
              <p>
                Financial software becomes difficult to use when the interface exposes the complexity of the underlying model all at once. Waaza therefore separates concepts into clearer user-facing stages: qualification, inputs, scenario exploration, readiness, risk signals and next steps.
              </p>
              <p>
                The visual system also keeps the product deliberately restrained. The interface uses a limited palette, strong typography, generous spacing and simple hierarchy so the software feels analytical without looking like a legacy banking dashboard.
              </p>
            </section>

            <section>
              <h2>8. Search architecture was treated as product infrastructure</h2>
              <p>
                Waaza’s public application includes dedicated metadata, canonical URLs, structured data and an XML sitemap generated from the application. Its content architecture is organised around clearly defined topic clusters including financing, insurance, structuring, comparisons and lenders.
              </p>
              <p>
                That makes the public site useful beyond acquisition. Each educational page gives Waaza a place to define a concept in its own language, connect that concept to the product and build a stronger body of first-party information around yacht finance.
              </p>
            </section>

            <section>
              <h2>What Wall & Fifth actually contributed</h2>
              <p>
                The build was not limited to coding a set of supplied screens. Wall & Fifth’s role covered the product structure, user experience, visual system, application architecture, implementation and the public information layer around the software.
              </p>
              <ul>
                <li>Product and information architecture</li>
                <li>UX flows for financing and assessment journeys</li>
                <li>UI system and responsive implementation</li>
                <li>Custom Next.js and TypeScript application development</li>
                <li>Prisma/PostgreSQL application data modelling</li>
                <li>Assessment, rule and audit-oriented product architecture</li>
                <li>Finance calculators and scenario interfaces</li>
                <li>Search-oriented page architecture, metadata and structured data</li>
                <li>Product documentation and educational content surfaces</li>
              </ul>
              <p>
                More information about the studio is available at <a href={WALL_AND_FIFTH_URL} target="_blank" rel="noopener noreferrer">wallandfifth.com</a>.
              </p>
            </section>

            <section>
              <h2>What other fintech and specialist software products can learn from Waaza</h2>
              <p>
                The most transferable lesson from the build is that specialist software becomes stronger when the product model and the information model agree with each other. Waaza does not describe one set of concepts on its website and use a completely different vocabulary inside the application. Readiness, structuring, lender expectations, scenarios and qualification appear across both.
              </p>
              <p>
                That consistency makes the product easier to understand, gives search engines and AI systems clearer entities and relationships to interpret, and creates a cleaner path from research to action for a real user.
              </p>
            </section>

            <section>
              <h2>Frequently asked questions</h2>
              {faqs.map((faq) => (
                <div key={faq.question} style={{ borderTop: "1px solid #eae9e4", padding: "22px 0" }}>
                  <h3 style={{ marginBottom: 8 }}>{faq.question}</h3>
                  <p style={{ marginBottom: 0 }}>{faq.answer}</p>
                </div>
              ))}
            </section>

            <section>
              <h2>About the build partner</h2>
              <p>
                <a href={WALL_AND_FIFTH_URL} target="_blank" rel="noopener noreferrer"><strong>Wall & Fifth</strong></a> is a venture builder and selective digital partner working across product, platform, systems and digital infrastructure. Waaza is one of the ventures built within that wider product and technology practice.
              </p>
            </section>
          </div>

          <section style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            <Link href="/platform/readiness-scoring" style={{ background: "#fff", border: "1px solid #eae9e4", borderRadius: 18, padding: 22, fontWeight: 800 }}>
              Readiness scoring →
            </Link>
            <Link href="/yacht-finance-calculator" style={{ background: "#fff", border: "1px solid #eae9e4", borderRadius: 18, padding: 22, fontWeight: 800 }}>
              Yacht finance calculator →
            </Link>
            <Link href="/about" style={{ background: "#fff", border: "1px solid #eae9e4", borderRadius: 18, padding: 22, fontWeight: 800 }}>
              About Waaza →
            </Link>
          </section>
        </article>
      </main>

      <style>{`
        .article-copy section + section{border-top:1px solid #eae9e4;padding-top:34px;margin-top:34px}
        .article-copy h2{font-size:clamp(28px,4vw,38px);line-height:1.15;letter-spacing:-.6px;margin:0 0 16px}
        .article-copy h3{font-size:21px;line-height:1.25;margin:0 0 10px}
        .article-copy p{font-size:17px;line-height:1.88;color:#374151;margin:0 0 18px}
        .article-copy ul{padding-left:22px;margin:0 0 20px}
        .article-copy li{font-size:17px;line-height:1.8;color:#374151;margin:5px 0}
        .article-copy a{color:#0a0a0a;font-weight:700;text-decoration:underline;text-underline-offset:3px}
        .article-copy th,.article-copy td{text-align:left;padding:13px 14px;border:1px solid #e5e7eb;vertical-align:top;font-size:14px;line-height:1.5}
        .article-copy th{background:#f7f6f1;font-weight:800;color:#111827}
        .article-copy td{color:#4b5563}
        @media(max-width:680px){
          main{padding-left:16px!important;padding-right:16px!important}
          [aria-label="Article summary"]{padding:22px!important}
        }
      `}</style>
    </>
  );
}
