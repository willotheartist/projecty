// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  black: "#0a0a0a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  red: "#dc2626",
};

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const body: Record<string, string> = { email, password };
      if (mode === "register" && name) body.name = name;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("Network error — please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 420 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/waaza.png" alt="Waaza" style={{ height: 32, marginBottom: 12 }} />
          <p style={{ fontSize: 14, color: C.gray3 }}>Yacht Financing Intelligence</p>
        </div>

        {/* Card */}
        <div
          style={{
            background: C.white,
            borderRadius: 20,
            padding: "40px 36px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-serif), 'Instrument Serif', serif",
              fontSize: 32,
              fontWeight: 400,
              letterSpacing: -0.5,
              marginBottom: 8,
              color: C.black,
            }}
          >
            {mode === "login" ? "Welcome back" : "Create account"}
          </h1>
          <p style={{ fontSize: 14, color: C.gray3, marginBottom: 32 }}>
            {mode === "login"
              ? "Sign in to access your dashboard."
              : "Get started with Waaza."}
          </p>

          <form onSubmit={handleSubmit}>
            {mode === "register" && (
              <div style={{ marginBottom: 20 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.gray2,
                    marginBottom: 6,
                  }}
                >
                  Full name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: 15,
                    border: `1px solid ${C.gray5}`,
                    borderRadius: 10,
                    background: C.bg,
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            )}

            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.gray2,
                  marginBottom: 6,
                }}
              >
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  fontSize: 15,
                  border: `1px solid ${C.gray5}`,
                  borderRadius: 10,
                  background: C.bg,
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ marginBottom: 28 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.gray2,
                  marginBottom: 6,
                }}
              >
                Password
              </label>
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "register" ? "Min 8 characters" : "••••••••"}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  fontSize: 15,
                  border: `1px solid ${C.gray5}`,
                  borderRadius: 10,
                  background: C.bg,
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {error && (
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  color: C.red,
                  fontSize: 13,
                  fontWeight: 500,
                  marginBottom: 20,
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px 24px",
                background: C.black,
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                borderRadius: 10,
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
                transition: "opacity .2s, background .2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "#1a1a1a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = C.black;
              }}
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                ? "Sign in"
                : "Create account"}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <button
              type="button"
              onClick={() => {
                setMode(mode === "login" ? "register" : "login");
                setError("");
              }}
              style={{
                background: "none",
                border: "none",
                fontSize: 13,
                color: C.gray3,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {mode === "login" ? (
                <>
                  Don&apos;t have an account?{" "}
                  <span style={{ color: C.black, fontWeight: 600 }}>Sign up</span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span style={{ color: C.black, fontWeight: 600 }}>Sign in</span>
                </>
              )}
            </button>
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: 12, color: C.gray4, marginTop: 24 }}>
          © 2026 Waaza — Yacht Financing Intelligence
        </p>
      </div>
    </div>
  );
}