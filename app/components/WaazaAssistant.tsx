"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════════
   Waaza AI Assistant — Swap-inspired chat widget
   Clean, modern, premium fintech feel
   ═══════════════════════════════════════════════════════════ */

type Role = "self" | "client" | "browse";
type Step = "intro" | "role" | "selfStart" | "clientMode" | "browseDemo";

type Props = {
  startHref?: string;
};

type Msg = {
  id: string;
  from: "assistant" | "user";
  text: string;
  ts: number;
};

function uid(prefix = "m") {
  return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now()}`;
}

function now() {
  return Date.now();
}

function formatTime(ts: number) {
  const d = new Date(ts);
  return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

/* ── Easing ── */
const springTransition = { type: "spring" as const, stiffness: 380, damping: 30 };
const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] },
};

/* ── Avatar (image) ── */
function WaazaAvatar({ size = 28 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size,
        overflow: "hidden",
        flexShrink: 0,
        background: "#0a0a0a",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assistantavatar.png"
        alt="Waaza AI"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

/* ── Online dot ── */
function OnlineDot() {
  return (
    <span
      style={{
        position: "absolute",
        bottom: -1,
        right: -1,
        width: 10,
        height: 10,
        borderRadius: 10,
        background: "#22c55e",
        border: "2px solid #0a0a0a",
      }}
    />
  );
}

/* ── Typing indicator ── */
function TypingDots() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 10,
        padding: "4px 0",
      }}
    >
      <WaazaAvatar size={26} />
      <div
        style={{
          display: "flex",
          gap: 4,
          padding: "14px 16px",
          borderRadius: "18px 18px 18px 4px",
          background: "#f5f5f5",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: i * 0.12,
              ease: "easeInOut",
            }}
            style={{
              width: 5,
              height: 5,
              borderRadius: 5,
              background: "rgba(0,0,0,0.28)",
              display: "block",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function WaazaAssistant({ startHref = "/wizard" }: Props) {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState<Step>("intro");
  const [role, setRole] = React.useState<Role | null>(null);
  const [typing, setTyping] = React.useState(false);
  const [messages, setMessages] = React.useState<Msg[]>(() => [
    {
      id: uid("a"),
      from: "assistant",
      text: "Hey — welcome to Waaza. I'm your financing guide.",
      ts: now(),
    },
    {
      id: uid("a"),
      from: "assistant",
      text: "Quick question: are you exploring yacht financing for yourself or for a client?",
      ts: now() + 100,
    },
  ]);

  const listRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    });
  }, [open, messages.length, typing]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ── Message helpers ── */
  const pushUser = (text: string) => {
    setMessages((m) => [...m, { id: uid("u"), from: "user", text, ts: now() }]);
  };

  const pushAssistantDelayed = (texts: string[], callback?: () => void) => {
    setTyping(true);
    let delay = 0;
    texts.forEach((text, i) => {
      delay += 600 + text.length * 8; // simulate reading/typing time
      setTimeout(() => {
        setMessages((m) => [...m, { id: uid("a"), from: "assistant", text, ts: now() }]);
        if (i === texts.length - 1) {
          setTyping(false);
          callback?.();
        }
      }, delay);
    });
  };

  /* ── Flow handlers ── */
  const chooseRole = (r: Role) => {
    setRole(r);
    if (r === "self") {
      pushUser("For myself");
      pushAssistantDelayed(
        [
          "Perfect. I can run a quick financing simulation in under 60 seconds.",
          "Ready to start?",
        ],
        () => setStep("selfStart")
      );
      return;
    }
    if (r === "client") {
      pushUser("For a client");
      pushAssistantDelayed(
        [
          "Great — I'll help you run a structured readiness assessment.",
          "Want a quick preview or the full simulation?",
        ],
        () => setStep("clientMode")
      );
      return;
    }
    pushUser("Just browsing");
    pushAssistantDelayed(
      ["No worries. Want to see an example of what Waaza produces?"],
      () => setStep("browseDemo")
    );
  };

  const goStart = () => {
    try {
      localStorage.setItem("waaza_ai_entry", JSON.stringify({ role, ts: now() }));
    } catch {}
    window.location.href = startHref;
  };

  const showExample = () => {
    pushUser("Show me an example");
    pushAssistantDelayed(
      [
        "Here's a sample output:\n\n• Score: 78 / 100 (Conditional)\n• LTV: 45–55%\n• Flags: vessel age, liquidity buffer\n• Path: Structured SPV recommended",
        "Want to run it with your real inputs?",
      ],
      () => setStep("selfStart")
    );
  };

  const quickPreview = () => {
    pushUser("Quick preview");
    pushAssistantDelayed(
      [
        "The quick preview is a lightweight readiness check — useful for early filtering.",
        "When you're ready, the full simulation generates the structured report. Start now?",
      ],
      () => setStep("selfStart")
    );
  };

  const fullSimulation = () => {
    pushUser("Full simulation");
    pushAssistantDelayed(
      [
        "Perfect. We'll collect the minimum inputs and produce a score, LTV band, risk flags, and recommended next steps.",
      ],
      () => setStep("selfStart")
    );
  };

  const dismiss = () => {
    pushUser("Not now");
    pushAssistantDelayed(["All good — I'll be here whenever you're ready."], () => {
      setTimeout(() => setOpen(false), 800);
    });
  };

  /* ── Quick reply chips ── */
  const getChips = (): { label: string; onClick: () => void; primary?: boolean }[] => {
    if (typing) return [];

    if (step === "intro" || step === "role") {
      return [
        { label: "For myself", onClick: () => chooseRole("self") },
        { label: "For a client", onClick: () => chooseRole("client") },
        { label: "Just browsing", onClick: () => chooseRole("browse") },
      ];
    }
    if (step === "clientMode") {
      return [
        { label: "Quick preview", onClick: quickPreview },
        { label: "Full simulation", onClick: fullSimulation, primary: true },
      ];
    }
    if (step === "browseDemo") {
      return [
        { label: "Show me an example", onClick: showExample },
        { label: "Start simulation", onClick: goStart, primary: true },
      ];
    }
    if (step === "selfStart") {
      return [
        { label: "Start simulation", onClick: goStart, primary: true },
        { label: "Not now", onClick: dismiss },
      ];
    }
    return [];
  };

  const chips = getChips();

  /* ── Bubble component ── */
  const Bubble = ({ msg, showAvatar }: { msg: Msg; showAvatar: boolean }) => {
    const isUser = msg.from === "user";

    return (
      <motion.div
        {...fadeUp}
        style={{
          display: "flex",
          flexDirection: isUser ? "row-reverse" : "row",
          alignItems: "flex-end",
          gap: 8,
          padding: "3px 0",
        }}
      >
        {/* Avatar slot */}
        {!isUser ? (
          showAvatar ? (
            <WaazaAvatar size={26} />
          ) : (
            <div style={{ width: 26, flexShrink: 0 }} />
          )
        ) : null}

        <div
          style={{
            maxWidth: "76%",
            display: "flex",
            flexDirection: "column",
            alignItems: isUser ? "flex-end" : "flex-start",
          }}
        >
          <div
            style={{
              padding: "11px 15px",
              borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              background: isUser ? "#0a0a0a" : "#f5f5f5",
              color: isUser ? "#ffffff" : "rgba(0,0,0,0.88)",
              border: isUser ? "none" : "1px solid rgba(0,0,0,0.06)",
              fontSize: 14,
              lineHeight: 1.5,
              fontWeight: 500,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {msg.text}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "rgba(0,0,0,0.34)",
              marginTop: 4,
              padding: isUser ? "0 4px 0 0" : "0 0 0 4px",
              fontWeight: 500,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {formatTime(msg.ts)}
          </div>
        </div>
      </motion.div>
    );
  };

  /* ── Group messages: show avatar only on last consecutive assistant msg ── */
  const shouldShowAvatar = (idx: number) => {
    if (messages[idx].from !== "assistant") return false;
    const next = messages[idx + 1];
    if (!next || next.from !== "assistant") return true;
    return false;
  };

  return (
    <>
      {/* ── FAB (closed state) ── */}
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
            aria-label="Open Waaza AI"
            style={{
              position: "fixed",
              right: 22,
              bottom: 22,
              zIndex: 60,
              borderRadius: 16,
              border: "none",
              background: "#FFF86C",
              padding: "14px 22px 14px 14px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              cursor: "pointer",
              boxShadow: "none",
            }}
          >
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 44,
                  overflow: "hidden",
                  background: "#f4f3ef",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assistantavatar.png"
                  alt="Waaza AI"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 12,
                  height: 12,
                  borderRadius: 12,
                  background: "#22c55e",
                  border: "2.5px solid #FFF86C",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2, textAlign: "left" }}>
              <span style={{ fontSize: 15, color: "#0a0a0a", fontWeight: 800, letterSpacing: -0.3 }}>
                Waaza AI
              </span>
              <span style={{ fontSize: 13, color: "rgba(10,10,10,0.55)", fontWeight: 550 }}>
                Ask me anything
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.2)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                zIndex: 70,
              }}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 0.68, 0, 1.02] }}
              style={{
                position: "fixed",
                right: 18,
                bottom: 18,
                zIndex: 80,
                width: "min(420px, calc(100vw - 36px))",
                height: "min(620px, calc(100dvh - 36px))",
                borderRadius: 20,
                overflow: "hidden",
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.04)",
                display: "grid",
                gridTemplateRows: "auto 1fr auto",
              }}
              role="dialog"
              aria-label="Waaza AI assistant"
            >
              {/* ── Header ── */}
              <div
                style={{
                  background: "#0a0a0a",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Back button */}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.06)",
                      color: "#fff",
                      cursor: "pointer",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 15,
                      transition: "background 150ms",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                    }}
                  >
                    ‹
                  </button>

                  {/* Avatar + info */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 34,
                          overflow: "hidden",
                          background: "#fff",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/assistantavatar.png"
                          alt=""
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>
                      <span
                        style={{
                          position: "absolute",
                          bottom: -1,
                          right: -1,
                          width: 10,
                          height: 10,
                          borderRadius: 10,
                          background: "#22c55e",
                          border: "2px solid #0a0a0a",
                        }}
                      />
                    </div>

                    <div style={{ lineHeight: 1.15 }}>
                      <div style={{ fontWeight: 700, fontSize: 14.5, letterSpacing: -0.2 }}>
                        Waaza AI
                      </div>
                      <div style={{ fontSize: 12, opacity: 0.55, fontWeight: 500 }}>
                        Financing guide
                      </div>
                    </div>
                  </div>
                </div>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.06)",
                    color: "#fff",
                    cursor: "pointer",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 17,
                    transition: "background 150ms",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                  }}
                >
                  ×
                </button>
              </div>

              {/* ── Messages ── */}
              <div
                ref={listRef}
                style={{
                  padding: "16px 16px 8px",
                  overflowY: "auto",
                  overflowX: "hidden",
                  background: "#ffffff",
                }}
              >
                {messages.map((m, idx) => (
                  <Bubble key={m.id} msg={m} showAvatar={shouldShowAvatar(idx)} />
                ))}

                <AnimatePresence>{typing && <TypingDots />}</AnimatePresence>
              </div>

              {/* ── Bottom bar: chips + input ── */}
              <div
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  background: "#ffffff",
                }}
              >
                {/* Quick reply chips */}
                <AnimatePresence mode="wait">
                  {chips.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        padding: "12px 16px 4px",
                      }}
                    >
                      {chips.map((c) => (
                        <motion.button
                          key={c.label}
                          type="button"
                          whileTap={{ scale: 0.98 }}
                          onClick={c.onClick}
                          style={{
                            borderRadius: 10,
                            padding: "10px 18px",
                            fontSize: 13.5,
                            fontWeight: 650,
                            cursor: "pointer",
                            border: c.primary
                              ? "1.5px solid #0a0a0a"
                              : "1.5px solid rgba(0,0,0,0.13)",
                            background: c.primary ? "#0a0a0a" : "#ffffff",
                            color: c.primary ? "#ffffff" : "rgba(0,0,0,0.7)",
                            transition: "background 150ms ease, border-color 150ms ease",
                            boxShadow: "none",
                          }}
                          onMouseEnter={(e) => {
                            const btn = e.currentTarget as HTMLButtonElement;
                            if (c.primary) {
                              btn.style.background = "#1a1a1a";
                            } else {
                              btn.style.background = "#f5f5f5";
                              btn.style.borderColor = "rgba(0,0,0,0.2)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            const btn = e.currentTarget as HTMLButtonElement;
                            if (c.primary) {
                              btn.style.background = "#0a0a0a";
                            } else {
                              btn.style.background = "#ffffff";
                              btn.style.borderColor = "rgba(0,0,0,0.13)";
                            }
                          }}
                        >
                          {c.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Faux input bar (visual only — matches Swap style) */}
                <div style={{ padding: "10px 16px 14px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "11px 14px",
                      borderRadius: 14,
                      border: "1px solid rgba(0,0,0,0.1)",
                      background: "#fafafa",
                    }}
                  >
                    <span style={{ flex: 1, fontSize: 13.5, color: "rgba(0,0,0,0.32)", fontWeight: 500 }}>
                      Write a message...
                    </span>

                    {/* Attachment icon */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(0,0,0,0.28)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                    </svg>

                    {/* Send icon */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(0,0,0,0.28)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}