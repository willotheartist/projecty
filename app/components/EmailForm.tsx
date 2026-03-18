"use client";
// app/components/EmailForm.tsx
// Isolated client component — only the email input needs client state.

import { useState } from "react";

const C = {
  accent: "#FFF86C",
  black: "#0a0a0a",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  bg: "#f4f3ef",
};

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 12,
        padding: "16px 28px",
        background: C.accent, borderRadius: 10,
        fontSize: 15, fontWeight: 600, color: C.black,
        fontFamily: "'Inter Tight', sans-serif",
      }}>
        ✓ We'll be in touch shortly
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", maxWidth: 540, margin: "0 auto" }}>
      <input
        type="email"
        placeholder="Work email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        style={{
          flex: 1, minWidth: 220,
          padding: "14px 20px",
          fontSize: 15,
          border: `1px solid ${C.gray5}`,
          borderRadius: 10,
          fontFamily: "'Inter Tight', sans-serif",
          background: C.bg,
          outline: "none",
          transition: "border-color 0.15s",
        }}
        onFocus={(e) => (e.target.style.borderColor = C.accent)}
        onBlur={(e) => (e.target.style.borderColor = C.gray5)}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "14px 32px",
          background: C.accent,
          color: C.black,
          fontSize: 15, fontWeight: 700,
          borderRadius: 10,
          border: "none",
          cursor: "pointer",
          fontFamily: "'Inter Tight', sans-serif",
          transition: "opacity 0.15s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.88")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Book a demo →
      </button>
    </div>
  );
}