// app/homev2/page.tsx
"use client";

import { useEffect, useRef } from "react";

const C = {
  yellow: "#FFF86C",
  yellowDark: "#e8df00",
  bg: "#f4f3ef",
  white: "#ffffff",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  dark: "#1a1a1a",
  darkSurface: "#232323",
};

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const revealStyle: React.CSSProperties = {
  opacity: 0,
  transform: "translateY(32px)",
  transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
};

const serif = "var(--font-serif), 'Instrument Serif', Georgia, serif";
const sans = "var(--font-sans), 'Inter', system-ui, sans-serif";

export default function HomeV2() {
  const wrapRef = useScrollReveal();

  return (
    <div ref={wrapRef} style={{ fontFamily: sans, color: C.black, background: C.bg }}>
      {/* ════════════════════ HERO ════════════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          background: C.dark,
        }}
      >
        {/* Background video/image placeholder */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.85) 100%)",
            zIndex: 1,
          }}
        />
        {/* Replace this div with a <video> when you have footage */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/home/waaza-promo-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 800, padding: "0 24px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/waaza.png"
            alt="Waaza"
            style={{
              height: 36,
              marginBottom: 40,
              filter: "brightness(0) invert(1)",
              opacity: 0,
              animation: "fadeIn 1s 0.2s forwards",
            }}
          />
          <h1
            style={{
              fontFamily: serif,
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: -1,
              marginBottom: 20,
              opacity: 0,
              animation: "fadeUp 0.9s 0.4s forwards",
            }}
          >
            Yacht crew tipping,
            <br />
            <span style={{ color: C.yellow }}>made simple.</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(255,255,255,0.7)",
              maxWidth: 540,
              margin: "0 auto 36px",
              lineHeight: 1.6,
              opacity: 0,
              animation: "fadeUp 0.9s 0.6s forwards",
            }}
          >
            Guests tip by card. Crew get paid instantly.
            <br />
            No cash, no envelopes, no awkward conversations.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              opacity: 0,
              animation: "fadeUp 0.9s 0.8s forwards",
            }}
          >
            <a
              href="/login"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                background: C.yellow,
                color: C.black,
                fontSize: 15,
                fontWeight: 600,
                borderRadius: 10,
                textDecoration: "none",
                fontFamily: sans,
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,248,108,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Set up your yacht →
            </a>
            <a
              href="#how-it-works"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "14px 28px",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 10,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                fontFamily: sans,
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            opacity: 0,
            animation: "fadeIn 1s 1.2s forwards",
          }}
        >
          <div
            style={{
              width: 24,
              height: 40,
              borderRadius: 12,
              border: "2px solid rgba(255,255,255,0.3)",
              display: "flex",
              justifyContent: "center",
              paddingTop: 8,
            }}
          >
            <div
              style={{
                width: 3,
                height: 8,
                borderRadius: 2,
                background: "rgba(255,255,255,0.5)",
                animation: "scrollBounce 2s infinite",
              }}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════ TRUST BAR ════════════════════ */}
      <section style={{ background: C.white, borderBottom: `1px solid ${C.gray6}` }}>
        <div
          className="reveal"
          style={{
            ...revealStyle,
            maxWidth: 960,
            margin: "0 auto",
            padding: "40px 24px",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 24,
            textAlign: "center",
          }}
        >
          {[
            { big: "100%", sub: "goes to crew" },
            { big: "30 sec", sub: "to tip" },
            { big: "€0", sub: "for captains & crew" },
            { big: "Stripe", sub: "powered payments" },
          ].map((s) => (
            <div key={s.big} style={{ minWidth: 120 }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: C.black, letterSpacing: -0.5 }}>{s.big}</div>
              <div style={{ fontSize: 13, color: C.gray4 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════ HOW IT WORKS ════════════════════ */}
      <section id="how-it-works" style={{ padding: "100px 24px", maxWidth: 960, margin: "0 auto" }}>
        <div className="reveal" style={{ ...revealStyle, textAlign: "center", marginBottom: 60 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: C.gray4, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>How it works</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, letterSpacing: -0.5, lineHeight: 1.15 }}>
            Three steps. Thirty seconds.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            { num: "1", title: "Captain sets up", desc: "Add your yacht, invite crew, set the split. Generate a tipping link for each charter. Takes two minutes." },
            { num: "2", title: "Guest tips by card", desc: "No app. No account. Scan a QR or tap a link. Apple Pay, Google Pay, or card. MYBA-guided suggestions." },
            { num: "3", title: "Crew get paid", desc: "Money splits automatically and lands in each crew member's bank account. Full transparency, instant payout." },
          ].map((step, i) => (
            <div
              key={step.num}
              className="reveal"
              style={{
                ...revealStyle,
                transitionDelay: `${i * 0.12}s`,
                background: C.white,
                borderRadius: 16,
                padding: "32px 28px",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: C.yellow,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 700,
                  color: C.black,
                  marginBottom: 16,
                }}
              >
                {step.num}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: C.black }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: C.gray3, lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════ FEATURE: FOR CAPTAINS ════════════════════ */}
      <section style={{ background: C.white }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "100px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div className="reveal" style={revealStyle}>
            <p style={{ fontSize: 13, fontWeight: 600, color: C.gray4, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>For captains</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400, letterSpacing: -0.3, lineHeight: 1.2, marginBottom: 16 }}>
              No more envelopes.
            </h2>
            <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.7, marginBottom: 24 }}>
              Set up your yacht once. Add your crew. Before the charter ends, generate a tipping link and share it with your guests. The split is automatic, the payout is instant, and your crew sees exactly what they earned.
            </p>
            <a
              href="/login"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                fontWeight: 600,
                color: C.black,
                textDecoration: "none",
                borderBottom: `2px solid ${C.yellow}`,
                paddingBottom: 2,
              }}
            >
              Set up your yacht →
            </a>
          </div>
          <div
            className="reveal"
            style={{
              ...revealStyle,
              transitionDelay: "0.15s",
              background: C.bg,
              borderRadius: 20,
              height: 360,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              color: C.gray4,
            }}
          >
            {/* Replace with dashboard screenshot */}
            Dashboard screenshot
          </div>
        </div>
      </section>

      {/* ════════════════════ FEATURE: FOR GUESTS ════════════════════ */}
      <section>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "100px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div
            className="reveal"
            style={{
              ...revealStyle,
              background: C.yellow,
              borderRadius: 20,
              height: 360,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              color: C.black,
              order: 1,
            }}
          >
            {/* Replace with phone mockup of tipping page */}
            Tipping page mockup
          </div>
          <div className="reveal" style={{ ...revealStyle, transitionDelay: "0.15s", order: 2 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: C.gray4, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>For guests</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400, letterSpacing: -0.3, lineHeight: 1.2, marginBottom: 16 }}>
              Tip your crew in 30 seconds.
            </h2>
            <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.7, marginBottom: 24 }}>
              No app to download. No account to create. Open the link, see the crew who looked after you, choose your amount, and pay with Apple Pay or card. MYBA-guided suggestions take the guesswork out.
            </p>
            <p style={{ fontSize: 13, color: C.gray4, fontStyle: "italic" }}>
              "We used to dread the tipping conversation. Now I just hand them a card with a QR code."
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════ FEATURE: FOR CREW ════════════════════ */}
      <section style={{ background: C.white }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "100px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div className="reveal" style={revealStyle}>
            <p style={{ fontSize: 13, fontWeight: 600, color: C.gray4, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>For crew</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400, letterSpacing: -0.3, lineHeight: 1.2, marginBottom: 16 }}>
              Your tips. Transparent. Instant.
            </h2>
            <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.7, marginBottom: 24 }}>
              Every tip is tracked. Every split is visible. Money lands in your bank account — not in an envelope with no receipt. Sign up once, get paid every charter.
            </p>
            <div style={{ display: "flex", gap: 24, marginTop: 8 }}>
              {[
                { val: "Direct", sub: "to your bank" },
                { val: "Every cent", sub: "accounted for" },
                { val: "Multi-currency", sub: "EUR, USD, GBP" },
              ].map((s) => (
                <div key={s.val}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.black }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: C.gray4 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="reveal"
            style={{
              ...revealStyle,
              transitionDelay: "0.15s",
              background: C.bg,
              borderRadius: 20,
              height: 360,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              color: C.gray4,
            }}
          >
            {/* Replace with crew payout screenshot */}
            Crew payout view
          </div>
        </div>
      </section>

      {/* ════════════════════ FOR MANAGEMENT COMPANIES ════════════════════ */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <div className="reveal" style={{ ...revealStyle, maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: C.gray4, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>For management companies &amp; brokers</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400, letterSpacing: -0.3, lineHeight: 1.2, marginBottom: 16 }}>
            Roll it out across your fleet.
          </h2>
          <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.7, marginBottom: 32 }}>
            One dashboard for every yacht you manage. See tipping history across your fleet. Recommend Waaza to your charter guests instead of explaining cash logistics. Free to adopt.
          </p>
          <a
            href="/login"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              fontWeight: 600,
              color: C.black,
              textDecoration: "none",
              borderBottom: `2px solid ${C.yellow}`,
              paddingBottom: 2,
            }}
          >
            Talk to us about fleet setup →
          </a>
        </div>
      </section>

      {/* ════════════════════ PRICING ════════════════════ */}
      <section style={{ background: C.dark, color: "#fff" }}>
        <div
          className="reveal"
          style={{
            ...revealStyle,
            maxWidth: 640,
            margin: "0 auto",
            padding: "100px 24px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Pricing</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400, letterSpacing: -0.3, lineHeight: 1.2, marginBottom: 16, color: "#fff" }}>
            Free for captains. Free for crew.
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 32 }}>
            A small processing fee is added for the guest, or deducted from the tip — their choice. 100% of the intended tip always reaches the crew.
          </p>
          <div
            style={{
              background: C.darkSurface,
              borderRadius: 14,
              padding: "20px 28px",
              fontSize: 14,
              color: "rgba(255,255,255,0.7)",
              textAlign: "left",
              maxWidth: 400,
              margin: "0 auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span>Guest tips</span>
              <strong style={{ color: "#fff" }}>€10,000</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span>Processing fee</span>
              <span>€250</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 10,
                marginTop: 6,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                fontWeight: 600,
                color: C.yellow,
                fontSize: 15,
              }}
            >
              <span>Crew receives</span>
              <span>€10,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ TOOLS ════════════════════ */}
      <section style={{ padding: "80px 24px", maxWidth: 960, margin: "0 auto" }}>
        <div className="reveal" style={{ ...revealStyle, textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, letterSpacing: -0.3 }}>
            More tools for yacht money.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div className="reveal" style={{ ...revealStyle, background: C.white, borderRadius: 14, padding: "28px 24px" }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Yacht loan calculator</h3>
            <p style={{ fontSize: 13, color: C.gray3, lineHeight: 1.6, marginBottom: 12 }}>See what a yacht really costs to finance. Monthly payments, deposit, total interest.</p>
            <a href="/calculator" style={{ fontSize: 13, fontWeight: 600, color: C.black, textDecoration: "none", borderBottom: `2px solid ${C.yellow}`, paddingBottom: 1 }}>Try the calculator →</a>
          </div>
          <div className="reveal" style={{ ...revealStyle, transitionDelay: "0.1s", background: C.white, borderRadius: 14, padding: "28px 24px" }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Coming soon</h3>
            <p style={{ fontSize: 13, color: C.gray3, lineHeight: 1.6 }}>APA tracker. Ownership cost calculator. Crew payroll. Charter deposit handling.</p>
          </div>
        </div>
      </section>

      {/* ════════════════════ CTA ════════════════════ */}
      <section style={{ background: C.yellow }}>
        <div
          className="reveal"
          style={{
            ...revealStyle,
            maxWidth: 640,
            margin: "0 auto",
            padding: "100px 24px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, letterSpacing: -0.5, lineHeight: 1.15, marginBottom: 16, color: C.black }}>
            Ready to ditch
            <br />
            the envelope?
          </h2>
          <p style={{ fontSize: 15, color: C.gray2, marginBottom: 32, lineHeight: 1.6 }}>
            Set up your yacht in 2 minutes. First charter tip is on us.
          </p>
          <a
            href="/login"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 32px",
              background: C.black,
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 12,
              textDecoration: "none",
              fontFamily: sans,
              transition: "transform 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Get started free →
          </a>
        </div>
      </section>

      {/* ════════════════════ FOOTER ════════════════════ */}
      <footer style={{ background: C.dark, padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/waaza.png" alt="Waaza" style={{ height: 24, filter: "brightness(0) invert(1)", marginBottom: 20 }} />
          <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 20, flexWrap: "wrap" }}>
            {[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Guides", href: "/guides" },
              { label: "Calculator", href: "/calculator" },
              { label: "About", href: "/about" },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            © 2026 Waaza · Yacht money, made simple.
          </p>
        </div>
      </footer>

      {/* ════════════════════ ANIMATIONS ════════════════════ */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
        }
        html { scroll-behavior: smooth; }
        @media (max-width: 640px) {
          section > div[style*="grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}