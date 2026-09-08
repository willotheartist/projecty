import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.waaza.co";
const WALL_AND_FIFTH_URL = "https://wallandfifth.com";
const CASE_STUDY_URL = "/blog/how-waaza-was-built-wall-and-fifth";
const SLUG = "/blog/how-to-build-financial-software-for-asset-finance";
const PUBLISHED = "2026-09-08T00:00:00.000Z";

const title = "How to Build Financial Software for Complex Asset Finance: Calculators, Rule Engines, Reports and Broker UX";
const description =
  "A practical technical guide to building financial software for complex asset finance, using Waaza's yacht-finance platform architecture as a real implementation reference.";

const faqs = [
  {
    question: "What makes asset-finance software different from a normal loan calculator?",
    answer:
      "A calculator only models arithmetic. Asset-finance software also needs to capture borrower and asset context, apply versioned decision logic, preserve case history, surface risk factors and generate outputs that a broker or adviser can actually use.",
  },
  {
    question: "Should a finance platform use a rule engine?",
    answer:
      "When qualification depends on multiple repeatable conditions, a versioned rule layer is useful because it separates decision logic from interface code and makes it possible to record which rules produced a result at a specific point in time.",
  },
  {
    question: "Why store assessment snapshots?",
    answer:
      "Snapshots preserve the inputs and outputs used for a decision. That is valuable when financial logic changes, because a previous result can still be understood in the context of the rule-set and engine version that produced it.",
  },
  {
    question: "How should reports fit into financial software?",
    answer:
      "Reports should be generated from structured assessment data rather than manually recreated. In Waaza, report-oriented workflows are tied to assessment outputs so the same underlying case can be communicated consistently in web and document formats.",
  },
  {
    question: "What technology is Waaza built with?",
    answer:
      "The current Waaza codebase uses Next.js 16, React 19, TypeScript, Tailwind CSS 4, Prisma 6 and PostgreSQL. The repository also includes Stripe integrations and PDF tooling.",
  },
  {
    question: "Who designed and built Waaza?",
    answer:
      "Waaza was designed and built by Wall & Fifth as custom production software for yacht-financing readiness, scenario modelling, assessment logic and broker-facing workflows.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Waaza" }],
  keywords: [
    "financial software development",
    "fintech software development",
    "asset finance software",
    "asset finance platform architecture",
    "finance rule engine",
    "loan calculator development",
    "financial decision engine",
    "broker software",
    "custom financial software",
    "Next.js fintech",
    "Wall & Fifth",
    "Waaza",
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
    images: [{ url: "/hero.png", width: 1200, height: 630, alt: "Waaza financial software architecture" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero.png"],
  },
};

function JsonLd() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: `${SITE_URL}${SLUG}`,
    author: { "@type": "Organization", name: "Waaza", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Waaza", url: SITE_URL },
    contributor: {
      "@type": "Organization",
      name: "Wall & Fifth",
      url: WALL_AND_FIFTH_URL,
    },
    about: [
      { "@type": "Thing", name: "Financial software development" },
      { "@type": "Thing", name: "Asset finance software" },
      { "@type": "SoftwareApplication", name: "Waaza", applicationCategory: "FinanceApplication", url: SITE_URL },
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
      { "@type": "ListItem", position: 3, name: "How to build financial software for asset finance", item: `${SITE_URL}${SLUG}` },
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

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  line: "#e4e3de",
  accent: "#FFF86C",
  accentSoft: "#fffde0",
};

export default function Page() {
  return (
    <>
      <JsonLd />
      <main style={{ background: C.bg, color: C.black, minHeight: "100vh" }}>
        <div style={{ height: 3, background: C.accent }} />

        <article style={{ maxWidth: 1120, margin: "0 auto", padding: "84px 24px 120px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: C.gray3, marginBottom: 40 }}>
            <Link href="/">Waaza</Link> <span aria-hidden="true">/</span>{" "}
            <Link href="/blog">Insights</Link> <span aria-hidden="true">/</span>{" "}
            <span>Financial software architecture</span>
          </nav>

          <header style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(280px,.6fr)", gap: "48px 72px", alignItems: "end", marginBottom: 72 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gray3, marginBottom: 20 }}>
                Product architecture · Technical guide
              </p>
              <h1 style={{ fontFamily: "'Instrument Serif', var(--font-serif), serif", fontSize: "clamp(46px,6.3vw,78px)", lineHeight: 0.98, fontWeight: 400, letterSpacing: -2, margin: 0 }}>
                How to build financial software for <em style={{ fontWeight: 400 }}>complex asset finance.</em>
              </h1>
            </div>
            <div style={{ borderLeft: `1px solid ${C.line}`, paddingLeft: 28 }}>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: C.gray2, margin: 0 }}>
                Calculators are the easy part. The real product is the layer that turns borrower data, asset context, rules and case history into decisions people can understand and act on.
              </p>
            </div>
          </header>

          <section style={{ background: C.black, color: C.white, borderRadius: 22, padding: "clamp(28px,5vw,48px)", marginBottom: 28 }}>
            <p style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent, marginBottom: 18 }}>
              Real implementation reference
            </p>
            <p style={{ fontFamily: "'Instrument Serif', var(--font-serif), serif", fontSize: "clamp(26px,3.5vw,40px)", lineHeight: 1.2, fontWeight: 400, margin: 0, maxWidth: 930 }}>
              Waaza&apos;s current implementation was designed and built by{" "}
              <a href={WALL_AND_FIFTH_URL} target="_blank" rel="noopener noreferrer" style={{ color: C.accent, textDecoration: "underline", textUnderlineOffset: 5 }}>
                Wall & Fifth
              </a>
              . It combines calculators with persistent client and vessel records, versioned assessment logic, risk flags, readiness outputs, audit history and report-oriented workflows.
            </p>
          </section>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 260px", gap: "56px 64px", alignItems: "start", marginTop: 72 }}>
            <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 22, padding: "clamp(28px,5vw,56px)" }}>
              <Section title="1. Start with the decision, not the dashboard">
                <p>
                  The first mistake in financial-software projects is often designing screens before defining the decision the software is supposed to improve. In asset finance, a user rarely needs a prettier form for its own sake. They need to know whether a case looks plausible, what makes it stronger or weaker, what structure may fit and what should happen next.
                </p>
                <p>
                  Waaza therefore models the case itself. The current data layer includes clients, vessels and assessments rather than treating every calculation as an anonymous one-off submission. A client record can carry residency, available liquidity, net-worth band, income type and ownership intent. A vessel record can carry purchase price, build year, usage type and intended flag. That creates a usable product foundation before any score is calculated.
                </p>
              </Section>

              <Section title="2. Keep calculator maths separate from qualification logic">
                <p>
                  A repayment calculator answers a mathematical question: given a purchase price, deposit, term and rate assumption, what does the repayment picture look like? That is useful, but it is not the same as answering whether a transaction is financeable or how a broker should frame it.
                </p>
                <p>
                  Waaza keeps those ideas distinct. Its public <Link href="/yacht-finance-calculator">yacht finance calculator</Link> helps users explore price, deposit, term and indicative-rate scenarios, while the wider platform introduces readiness scoring, risk factors and recommended paths. This separation prevents a clean monthly-payment number from being mistaken for a lending decision.
                </p>
              </Section>

              <Section title="3. Build the rule layer so it can be versioned">
                <p>
                  When qualification depends on repeatable conditions, burying all of that logic inside UI components becomes difficult to maintain and almost impossible to audit. Waaza&apos;s schema separates rule sets and individual rules from the assessment record itself.
                </p>
                <p>
                  Each assessment can record a rule-set version, and each assessment run stores both the rule-set version and engine version that produced the result. The run also preserves an input snapshot, rule hits and an output snapshot. That architecture matters because a result from six months ago should still be understandable even after the underlying logic evolves.
                </p>
                <div style={{ borderLeft: `3px solid ${C.accent}`, background: C.accentSoft, padding: "20px 22px", margin: "28px 0" }}>
                  <strong style={{ display: "block", marginBottom: 7, fontSize: 15 }}>A useful principle</strong>
                  <span style={{ color: C.gray2, lineHeight: 1.7 }}>
                    If a financial product produces a judgement, store enough context to explain which inputs and which version of the logic produced it.
                  </span>
                </div>
              </Section>

              <Section title="4. Store outputs that are useful to a human">
                <p>
                  Financial decision software should not end with a hidden boolean such as pass or fail. The output has to help a broker, buyer or adviser understand the case.
                </p>
                <p>
                  Waaza&apos;s assessment model can store a readiness score, financing tier, indicative loan-to-value range, risk flags and a recommended path. Those fields are deliberately closer to the language of the workflow. They allow the product to surface both a high-level view and the specific issues underneath it.
                </p>
                <p>
                  This is also why the <Link href="/platform/readiness-scoring">readiness scoring</Link> layer is separate from a calculator. One explains a financing position; the other models arithmetic.
                </p>
              </Section>

              <Section title="5. Treat reports as product output, not an afterthought">
                <p>
                  Complex financial cases often leave the application. A buyer may need to speak to a bank, accountant, lawyer, broker or finance adviser. That makes document output part of the product experience.
                </p>
                <p>
                  Waaza&apos;s <Link href="/platform/report-generator">report workflow</Link> is structured around six recurring sections: executive summary, readiness score, indicative financing structure, LTV and cost projection, risk considerations and next steps. The codebase also includes PDF tooling, so structured application data can be turned into a shareable document rather than manually copied into a separate template.
                </p>
                <p>
                  The important product principle is consistency: the report should be another view of the same case data, not a second version of the truth.
                </p>
              </Section>

              <Section title="6. Design broker UX around progression">
                <p>
                  Good broker software should reduce the amount of interpretation required between steps. A strong flow usually moves from basic case facts, to structured assessment, to an intelligible result, to a clear next action. The interface should make that progression obvious without pretending the underlying finance decision is simpler than it is.
                </p>
                <p>
                  In Waaza, the public calculator is an early-intent entry point, the readiness intake adds context, and platform pages such as <Link href="/platform/scenario-modelling">scenario modelling</Link>, <Link href="/platform/broker-dashboard">broker dashboard</Link> and <Link href="/platform/case-tracking">case tracking</Link> describe the deeper workflow. That product architecture is more useful than trying to force every job into one giant calculator screen.
                </p>
              </Section>

              <Section title="7. Use a data model that can survive the product getting smarter">
                <p>
                  Finance software almost always becomes more complex after launch. New asset rules appear, underwriting assumptions change, workflows split by user type and reporting requirements expand. A disposable form architecture becomes painful very quickly.
                </p>
                <p>
                  Waaza&apos;s PostgreSQL model gives users, clients, vessels, assessments, assessment runs, rule sets, rules and audit logs explicit relationships. Prisma provides the application data layer. That gives the product room to add logic without losing the history of the cases already processed.
                </p>
              </Section>

              <Section title="8. The current Waaza stack">
                <p>
                  The application is built as custom production software rather than a no-code workflow. The current repository uses Next.js 16, React 19 and TypeScript, with Tailwind CSS 4 for the interface. Prisma 6 connects the application to PostgreSQL. The codebase also includes Stripe libraries and pdf-lib.
                </p>
                <div style={{ overflowX: "auto", marginTop: 28 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 620, fontSize: 14 }}>
                    <thead>
                      <tr>
                        <Th>Layer</Th><Th>Implementation</Th><Th>Why it matters</Th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><Td>Application</Td><Td>Next.js 16 + React 19</Td><Td>Public content and product routes in one application</Td></tr>
                      <tr><Td>Language</Td><Td>TypeScript</Td><Td>Typed product and decision logic</Td></tr>
                      <tr><Td>Data</Td><Td>PostgreSQL + Prisma 6</Td><Td>Persistent cases, relationships and versioned assessment records</Td></tr>
                      <tr><Td>Financial logic</Td><Td>RuleSet / Rule / AssessmentRun models</Td><Td>Separates repeatable logic from interface code</Td></tr>
                      <tr><Td>Documents</Td><Td>pdf-lib</Td><Td>Supports generated document workflows</Td></tr>
                      <tr><Td>Payments</Td><Td>Stripe libraries</Td><Td>Payment and account infrastructure in the wider codebase</Td></tr>
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="What this means for financial-software development">
                <p>
                  The broader lesson from Waaza is that custom financial software is rarely about reproducing an Excel calculation in a nicer interface. The valuable software layer is the system around the calculation: persistent case data, rules, traceability, scenarios, structured outputs and the UX that moves a user from uncertainty toward a decision.
                </p>
                <p>
                  That is the part of the Waaza build handled by <a href={WALL_AND_FIFTH_URL} target="_blank" rel="noopener noreferrer">Wall & Fifth</a>: product architecture, interface design and the custom software system that connects those pieces into a usable platform.
                </p>
                <p>
                  For a product-specific breakdown, read <Link href={CASE_STUDY_URL}>How Waaza Was Built: Yacht Financing Software by Wall & Fifth</Link>.
                </p>
              </Section>

              <section style={{ marginTop: 64 }}>
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray3, marginBottom: 18 }}>FAQ</p>
                <h2 style={{ fontFamily: "'Instrument Serif', var(--font-serif), serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 400, lineHeight: 1.08, marginBottom: 28 }}>
                  Building financial software: common questions
                </h2>
                <div>
                  {faqs.map((faq, index) => (
                    <div key={faq.question} style={{ borderTop: `1px solid ${C.line}`, padding: "22px 0", borderBottom: index === faqs.length - 1 ? `1px solid ${C.line}` : undefined }}>
                      <h3 style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.4, marginBottom: 8 }}>{faq.question}</h3>
                      <p style={{ fontSize: 15, lineHeight: 1.75, color: C.gray2, margin: 0 }}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside style={{ position: "sticky", top: 28 }}>
              <div style={{ borderTop: `1px solid ${C.black}`, paddingTop: 18, marginBottom: 38 }}>
                <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.09em", color: C.gray3, marginBottom: 14 }}>Architecture in one line</p>
                <p style={{ fontFamily: "'Instrument Serif', var(--font-serif), serif", fontSize: 23, lineHeight: 1.3, fontWeight: 400, margin: 0 }}>
                  Capture the case. Run versioned logic. Preserve the result. Make the next step obvious.
                </p>
              </div>
              <div style={{ background: C.accent, borderRadius: 16, padding: 22, marginBottom: 20 }}>
                <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Built by</p>
                <p style={{ fontFamily: "'Instrument Serif', var(--font-serif), serif", fontSize: 27, lineHeight: 1.1, marginBottom: 14 }}>Wall & Fifth</p>
                <p style={{ fontSize: 13, lineHeight: 1.65, marginBottom: 18 }}>Product design and custom software development behind Waaza.</p>
                <a href={WALL_AND_FIFTH_URL} target="_blank" rel="noopener noreferrer" style={{ color: C.black, fontSize: 13, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 4 }}>
                  wallandfifth.com →
                </a>
              </div>
              <div style={{ padding: "18px 0", borderTop: `1px solid ${C.line}` }}>
                <p style={{ fontSize: 12, color: C.gray3, marginBottom: 12 }}>Related</p>
                <div style={{ display: "grid", gap: 10, fontSize: 13, lineHeight: 1.5 }}>
                  <Link href={CASE_STUDY_URL}>How Waaza was built</Link>
                  <Link href="/platform/readiness-scoring">Readiness scoring</Link>
                  <Link href="/platform/rule-engine">Rule engine</Link>
                  <Link href="/platform/report-generator">Report generator</Link>
                  <Link href="/yacht-finance-calculator">Yacht finance calculator</Link>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 54 }}>
      <h2 style={{ fontFamily: "'Instrument Serif', var(--font-serif), serif", fontSize: "clamp(30px,3.5vw,44px)", lineHeight: 1.08, fontWeight: 400, letterSpacing: -0.6, marginBottom: 20 }}>
        {title}
      </h2>
      <div style={{ fontSize: 16, lineHeight: 1.84, color: C.gray2 }}>{children}</div>
    </section>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th style={{ textAlign: "left", padding: "12px 10px", borderBottom: `1px solid ${C.black}`, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase" }}>{children}</th>;
}

function Td({ children }: { children: React.ReactNode }) {
  return <td style={{ padding: "14px 10px", borderBottom: `1px solid ${C.line}`, verticalAlign: "top", lineHeight: 1.55 }}>{children}</td>;
}
