// app/homev2/page.tsx
"use client";

import HeaderV2 from "../components/HeaderV2";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  Ship, CreditCard, Users, Zap, Shield, Globe,
  ArrowRight, Check, ChevronDown,
} from "lucide-react";

/* ── palette ── */
const C = {
  yellow: "#FFF86C",
  yellowPale: "#fffde0",
  yellowDark: "#c4b800",
  bg: "#f4f3ef",
  white: "#ffffff",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  dark: "#111110",
  darkSurface: "#1c1c1a",
  green: "#059669",
  line: "rgba(0,0,0,0.06)",
};

const tight = "var(--font-sans-tight), 'Inter Tight', 'Inter', system-ui, sans-serif";
const serif = "var(--font-serif), 'Instrument Serif', Georgia, serif";

/* ── scroll reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".rv");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const rv = (delay = 0): React.CSSProperties => ({
  opacity: 0,
  transform: "translateY(24px)",
  transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
});

/* ── Eyebrow ── */
const Eyebrow = ({ children }: { children: string }) => (
  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.2, textTransform: "uppercase", color: C.gray4, marginBottom: 16, fontFamily: tight }}>{children}</p>
);

/* ── Section heading (serif italic pattern from W&F) ── */
const SHeading = ({ children, light }: { children: React.ReactNode; light?: boolean }) => (
  <h2 style={{
    fontFamily: serif,
    fontSize: "clamp(30px, 4vw, 48px)",
    fontWeight: 400,
    lineHeight: 1.08,
    letterSpacing: "-0.025em",
    color: light ? "#fff" : C.black,
    margin: "0 0 20px",
  }}>{children}</h2>
);

/* ── Accordion item for How It Works ── */
function AccordionStep({ step, isActive, onClick }: { step: { n: string; icon: React.ReactNode; t: string; d: string }; isActive: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "24px 0",
        borderBottom: `1px solid ${C.line}`,
        cursor: "pointer",
        opacity: isActive ? 1 : 0.4,
        transition: "opacity 0.4s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: isActive ? C.yellow : C.gray6, display: "flex", alignItems: "center", justifyContent: "center", color: C.black, transition: "background 0.3s", flexShrink: 0 }}>{step.icon}</div>
        <div>
          <span style={{ fontSize: 12, fontWeight: 600, color: C.gray4, fontFamily: tight }}>{step.n}</span>
          <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em", color: C.black, margin: "2px 0 0", fontFamily: tight }}>{step.t}</h3>
        </div>
      </div>
      <div style={{ maxHeight: isActive ? 120 : 0, overflow: "hidden", transition: "max-height 0.5s cubic-bezier(0.22,1,0.36,1)" }}>
        <p style={{ fontSize: 14, color: C.gray3, lineHeight: 1.65, margin: "12px 0 0 54px", fontFamily: tight }}>{step.d}</p>
      </div>
    </div>
  );
}

/* ── Main export ── */
export default function HomeV2() {
  const ref = useReveal();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { n: "01", icon: <Ship size={20} strokeWidth={1.6} />, t: "Captain sets up", d: "Add your yacht, invite crew, set the split. Generate a unique tipping link for each charter. Takes two minutes." },
    { n: "02", icon: <CreditCard size={20} strokeWidth={1.6} />, t: "Guest tips by card", d: "No app. No account. Scan a QR or tap a link. Apple Pay, Google Pay, or any card. MYBA-guided amounts." },
    { n: "03", icon: <Users size={20} strokeWidth={1.6} />, t: "Crew get paid", d: "Tips split automatically and land in each crew member's bank account. Full transparency, instant payout." },
  ];

  /* auto-cycle steps */
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setActiveStep((p) => (p + 1) % 3), 4500);
  }, []);
  useEffect(() => { startCycle(); return () => { if (intervalRef.current) clearInterval(intervalRef.current); }; }, [startCycle]);
  const handleStepClick = (i: number) => { setActiveStep(i); startCycle(); };

  return (
    <div ref={ref} style={{ fontFamily: tight, color: C.black, background: C.bg }}>
      <HeaderV2 />

      {/* ═══════════ HERO ═══════════ */}
      <section style={{ padding: "clamp(10px, 1.5vw, 16px)" }}>
        <div style={{ position: "relative", minHeight: "calc(100vh - clamp(20px, 3vw, 32px))", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden", borderRadius: "clamp(16px, 2vw, 24px)", background: C.dark }}>
          <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}>
            <source src="/herovideo.mp4" type="video/mp4" />
          </video>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.55) 100%)", zIndex: 1 }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 740, padding: "120px 24px 100px" }}>
            <h1 style={{ fontFamily: tight, fontSize: "clamp(36px, 5.5vw, 62px)", fontWeight: 800, color: "#fff", lineHeight: 1.04, letterSpacing: "-0.045em", marginBottom: 18, opacity: 0, animation: "fu 0.9s 0.3s forwards" }}>
              The cashless way to<br /><span style={{ color: C.yellow }}>tip your crew.</span>
            </h1>
            <p style={{ fontFamily: tight, fontSize: "clamp(14px, 1.5vw, 16px)", color: "rgba(255,255,255,0.6)", maxWidth: 440, margin: "0 auto 36px", lineHeight: 1.65, letterSpacing: "-0.01em", opacity: 0, animation: "fu 0.9s 0.5s forwards" }}>
              Guests tip by card. Crew get paid instantly. No cash, no envelopes, no awkward conversations.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", opacity: 0, animation: "fu 0.9s 0.7s forwards" }}>
              <a href="/login" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 24px", background: C.yellow, color: C.black, fontSize: 14, fontWeight: 600, borderRadius: 9, textDecoration: "none", fontFamily: tight, letterSpacing: "-0.01em" }}>Get started free <ArrowRight size={14} strokeWidth={2.2} /></a>
              <a href="#how-it-works" style={{ display: "inline-flex", alignItems: "center", padding: "12px 24px", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", fontSize: 14, fontWeight: 500, borderRadius: 9, textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", fontFamily: tight }}>How it works</a>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 2, opacity: 0, animation: "fi 1s 1.2s forwards" }}>
            <div style={{ width: 22, height: 36, borderRadius: 11, border: "1.5px solid rgba(255,255,255,0.2)", display: "flex", justifyContent: "center", paddingTop: 7 }}>
              <div style={{ width: 2.5, height: 7, borderRadius: 2, background: "rgba(255,255,255,0.35)", animation: "sb 2s infinite" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ NUMBERS ═══════════ */}
      <section style={{ background: C.white, borderBottom: `1px solid ${C.gray6}` }}>
        <div className="rv" style={{ ...rv(), maxWidth: 1240, margin: "0 auto", padding: "44px clamp(24px, 5vw, 64px)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, textAlign: "center" }}>
          {[{ n: "100%", s: "of tips go to crew" }, { n: "30s", s: "to complete a tip" }, { n: "€0", s: "cost for captains" }, { n: "150+", s: "currencies supported" }].map((d) => (
            <div key={d.n}>
              <div style={{ fontSize: 28, fontWeight: 800, color: C.black, letterSpacing: "-0.04em" }}>{d.n}</div>
              <div style={{ fontSize: 12, color: C.gray4, marginTop: 2, letterSpacing: "-0.01em" }}>{d.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS — Accordion + Visual ═══════════ */}
      <section id="how-it-works" style={{ background: C.bg }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "120px clamp(24px, 5vw, 64px)" }}>
          <div className="rv" style={rv()}>
            <Eyebrow>How it works</Eyebrow>
            <SHeading>Three steps. <em style={{ fontFamily: serif, fontStyle: "italic" }}>Thirty seconds</em>.</SHeading>
          </div>

          <div className="rv" style={{ ...rv(120), display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 64, alignItems: "center", marginTop: 56 }}>
            {/* Left: accordion */}
            <div>
              {steps.map((s, i) => (
                <AccordionStep key={s.n} step={s} isActive={i === activeStep} onClick={() => handleStepClick(i)} />
              ))}
            </div>
            {/* Right: visual placeholder */}
            <div style={{ background: C.white, borderRadius: 18, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", color: C.gray4, fontSize: 14, overflow: "hidden", border: `1px solid ${C.gray6}` }}>
              {activeStep === 0 && "Dashboard — add yacht"}
              {activeStep === 1 && "Guest tipping page"}
              {activeStep === 2 && "Crew payout view"}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOR CAPTAINS ═══════════ */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "120px clamp(24px, 5vw, 64px)", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "center" }}>
          <div className="rv" style={rv()}>
            <Eyebrow>For captains</Eyebrow>
            <SHeading>No more <em style={{ fontFamily: serif, fontStyle: "italic" }}>envelopes</em>.</SHeading>
            <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.7, marginBottom: 28, maxWidth: 420 }}>Set up your yacht once. Add your crew. Before the charter ends, generate a tipping link and share it with your guests. The split is automatic, the payout is instant.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
              {["2-minute setup per yacht", "Automatic equal or custom splits", "Real-time tip tracking", "Works with any charter"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: C.gray2, letterSpacing: "-0.01em" }}>
                  <Check size={15} strokeWidth={2.5} style={{ color: C.green, flexShrink: 0 }} />{t}
                </div>
              ))}
            </div>
            <a href="/login" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13.5, fontWeight: 600, color: C.black, textDecoration: "none", padding: "11px 22px", background: C.yellow, borderRadius: 8, letterSpacing: "-0.01em" }}>Set up your yacht <ArrowRight size={13} strokeWidth={2.2} /></a>
          </div>
          <div className="rv" style={{ ...rv(140), background: C.bg, borderRadius: 18, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: C.gray4, border: `1px solid ${C.gray6}` }}>
            Dashboard screenshot
          </div>
        </div>
      </section>

      {/* ═══════════ FOR GUESTS ═══════════ */}
      <section style={{ background: C.bg }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "120px clamp(24px, 5vw, 64px)", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "center" }}>
          <div className="rv" style={{ ...rv(), background: C.dark, borderRadius: 18, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: C.gray4, overflow: "hidden" }}>
            Tipping page mockup
          </div>
          <div className="rv" style={rv(140)}>
            <Eyebrow>For guests</Eyebrow>
            <SHeading>Tip your crew in <em style={{ fontFamily: serif, fontStyle: "italic" }}>thirty seconds</em>.</SHeading>
            <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.7, marginBottom: 32, maxWidth: 400 }}>No app to download. No account to create. Open the link, see the crew who looked after you, choose your amount, and pay. MYBA-guided suggestions take the guesswork out.</p>
            <div style={{ display: "flex", gap: 20 }}>
              {[{ icon: <Zap size={18} strokeWidth={1.6} />, t: "Instant", s: "No signup" }, { icon: <Shield size={18} strokeWidth={1.6} />, t: "Secure", s: "Stripe-powered" }, { icon: <Globe size={18} strokeWidth={1.6} />, t: "Global", s: "Any currency" }].map((f) => (
                <div key={f.t}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: C.yellowPale, display: "flex", alignItems: "center", justifyContent: "center", color: C.yellowDark, marginBottom: 8 }}>{f.icon}</div>
                  <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: "-0.01em" }}>{f.t}</div>
                  <div style={{ fontSize: 12, color: C.gray4 }}>{f.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOR CREW ═══════════ */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "120px clamp(24px, 5vw, 64px)", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "center" }}>
          <div className="rv" style={rv()}>
            <Eyebrow>For crew</Eyebrow>
            <SHeading>Your tips. <em style={{ fontFamily: serif, fontStyle: "italic" }}>Transparent. Instant</em>.</SHeading>
            <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.7, marginBottom: 28, maxWidth: 420 }}>Every tip is tracked. Every split is visible. Money lands in your bank account — not in an envelope with no receipt. Sign up once, get paid every charter.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              {[{ v: "Direct", s: "to your bank" }, { v: "Every cent", s: "accounted for" }, { v: "Multi-currency", s: "EUR · USD · GBP" }].map((d) => (
                <div key={d.v} style={{ background: C.bg, borderRadius: 10, padding: "14px 12px", textAlign: "center", border: `1px solid ${C.gray6}` }}>
                  <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em" }}>{d.v}</div>
                  <div style={{ fontSize: 11.5, color: C.gray4, marginTop: 2 }}>{d.s}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rv" style={{ ...rv(140), background: C.bg, borderRadius: 18, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: C.gray4, border: `1px solid ${C.gray6}` }}>
            Crew payout view
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIAL ═══════════ */}
      <section style={{ background: C.bg }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "120px clamp(24px, 5vw, 64px)" }}>
          <div className="rv" style={rv()}>
            <Eyebrow>What captains say</Eyebrow>
          </div>
          <div className="rv" style={{ ...rv(80), maxWidth: 640 }}>
            <p style={{ fontFamily: serif, fontSize: "clamp(24px, 3.2vw, 36px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.02em", color: C.black, fontStyle: "italic", margin: "0 0 24px" }}>
              &ldquo;We used to dread the tipping conversation. Now I just hand them a card with a QR code at the final dinner. The crew love it because they see exactly what they earned.&rdquo;
            </p>
            <p style={{ fontSize: 13, color: C.gray4, fontStyle: "normal" }}>Captain, 45m Mediterranean charter yacht</p>
          </div>
        </div>
      </section>

      {/* ═══════════ FLEET / MANAGEMENT — Dark ═══════════ */}
      <section style={{ background: C.dark }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "120px clamp(24px, 5vw, 64px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div className="rv" style={rv()}>
            <Eyebrow>For management companies</Eyebrow>
            <SHeading light>Roll it out across your <em style={{ fontFamily: serif, fontStyle: "italic" }}>fleet</em>.</SHeading>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 28, maxWidth: 420 }}>One dashboard for every yacht you manage. See tipping history across your fleet. Recommend Waaza to your charter guests instead of explaining cash logistics.</p>
            <a href="/login" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13.5, fontWeight: 600, color: C.black, textDecoration: "none", padding: "11px 22px", background: C.yellow, borderRadius: 8, letterSpacing: "-0.01em" }}>Talk to us <ArrowRight size={13} strokeWidth={2.2} /></a>
          </div>
          <div className="rv" style={{ ...rv(140), display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[{ v: "50+", s: "yachts per fleet" }, { v: "Real-time", s: "tip visibility" }, { v: "Multi-yacht", s: "single dashboard" }, { v: "Free", s: "to adopt" }].map((d) => (
              <div key={d.v} style={{ background: C.darkSurface, borderRadius: 14, padding: "22px 18px", textAlign: "center", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: C.yellow, letterSpacing: "-0.03em" }}>{d.v}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>{d.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section style={{ background: C.bg }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "120px clamp(24px, 5vw, 64px)" }}>
          <div className="rv" style={{ ...rv(), textAlign: "center", marginBottom: 48 }}>
            <Eyebrow>Pricing</Eyebrow>
            <SHeading>Free for captains. <em style={{ fontFamily: serif, fontStyle: "italic" }}>Free for crew</em>.</SHeading>
            <p style={{ fontSize: 14.5, color: C.gray3, lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>A 2.5% processing fee is covered by the guest — or deducted from the tip. Their choice.</p>
          </div>
          <div className="rv" style={{ ...rv(100), maxWidth: 440, margin: "0 auto", background: C.white, borderRadius: 16, padding: "28px 32px", border: `1px solid ${C.gray6}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14.5, color: C.gray2 }}><span>Guest tips</span><strong style={{ color: C.black, fontWeight: 700 }}>€10,000</strong></div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13.5, color: C.gray4 }}><span>Processing fee (guest covers)</span><span>€250</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13.5, color: C.gray4 }}><span>Guest is charged</span><span>€10,250</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, marginTop: 8, borderTop: `2px solid ${C.yellow}`, fontSize: 16, fontWeight: 800, color: C.black, letterSpacing: "-0.02em" }}><span>Crew receives</span><span>€10,000</span></div>
          </div>
        </div>
      </section>

      {/* ═══════════ TOOLS ═══════════ */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "100px clamp(24px, 5vw, 64px) 80px" }}>
          <div className="rv" style={{ ...rv(), textAlign: "center", marginBottom: 40 }}>
            <SHeading>More tools for <em style={{ fontFamily: serif, fontStyle: "italic" }}>yacht money</em>.</SHeading>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { t: "Yacht loan calculator", d: "See what a yacht really costs to finance. Monthly payments, deposit, total interest — all in one place.", href: "/yacht-finance-calculator", cta: "Try the calculator" },
              { t: "Coming soon", d: "APA tracker. Ownership cost calculator. Crew payroll integration. Charter deposit handling.", href: null, cta: null },
            ].map((item, i) => (
              <div key={item.t} className="rv" style={{ ...rv(i * 80), background: C.bg, borderRadius: 16, padding: "32px 28px", border: `1px solid ${C.gray6}` }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>{item.t}</h3>
                <p style={{ fontSize: 14, color: C.gray3, lineHeight: 1.65, marginBottom: item.cta ? 16 : 0 }}>{item.d}</p>
                {item.cta && item.href && (
                  <a href={item.href} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 13.5, fontWeight: 600, color: C.black, textDecoration: "none", borderBottom: `2px solid ${C.yellow}`, paddingBottom: 2 }}>{item.cta} <ArrowRight size={12} /></a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section style={{ background: C.yellow }}>
        <div className="rv" style={{ ...rv(), maxWidth: 640, margin: "0 auto", padding: "100px clamp(24px, 5vw, 64px)", textAlign: "center" }}>
          <h2 style={{ fontFamily: tight, fontSize: "clamp(30px, 4.5vw, 50px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1.08, marginBottom: 14, color: C.black }}>Ready to ditch<br />the envelope?</h2>
          <p style={{ fontSize: 15, color: C.gray2, marginBottom: 32, lineHeight: 1.6 }}>Set up your yacht in 2 minutes. Your first charter tip is on us.</p>
          <a href="/login" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: C.black, color: "#fff", fontSize: 15, fontWeight: 600, borderRadius: 10, textDecoration: "none", letterSpacing: "-0.01em" }}>Get started free <ArrowRight size={15} strokeWidth={2.2} /></a>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer style={{ background: C.dark, padding: "80px clamp(24px, 5vw, 64px) 48px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/waaza.png" alt="Waaza" style={{ height: 20, filter: "brightness(0) invert(1)", marginBottom: 14 }} />
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, maxWidth: 240 }}>The cashless tipping platform for charter yachts. A Wall&amp;Fifth company.</p>
            </div>
            {[
              { title: "Product", links: [{ l: "Tipping", h: "/dashboard" }, { l: "Calculator", h: "/yacht-finance-calculator" }, { l: "Pricing", h: "/pricing" }] },
              { title: "Resources", links: [{ l: "Financing guides", h: "/financing" }, { l: "Blog", h: "/blog" }, { l: "FAQ", h: "/faq" }] },
              { title: "Company", links: [{ l: "About", h: "/about" }, { l: "Partners", h: "/partners" }, { l: "Contact", h: "/about" }] },
            ].map((col) => (
              <div key={col.title}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>{col.title}</div>
                {col.links.map((link) => (
                  <a key={link.l} href={link.h} style={{ display: "block", fontSize: 13.5, color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: 9 }}>{link.l}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.2)" }}>© 2026 Waaza</p>
            <div style={{ display: "flex", gap: 18 }}>
              {["Privacy", "Terms"].map((t) => <a key={t} href="#" style={{ fontSize: 11.5, color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>{t}</a>)}
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════ KEYFRAMES ═══════════ */}
      <style>{`
        @keyframes fu { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fi { from { opacity:0; } to { opacity:1; } }
        @keyframes sb { 0%,100% { transform:translateY(0); opacity:0.4; } 50% { transform:translateY(5px); opacity:0.8; } }
        html { scroll-behavior: smooth; }
        @media (max-width: 820px) {
          section div[style*="grid-template-columns: 1fr 1.2fr"],
          section div[style*="grid-template-columns: 1.2fr 1fr"],
          section div[style*="grid-template-columns: 1fr 1.3fr"],
          section div[style*="grid-template-columns: 1fr 1fr"],
          section div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section div[style*="repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}