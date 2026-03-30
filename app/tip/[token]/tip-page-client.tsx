"use client";

import { useState, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const C = {
  yellow: "#FFF86C",
  yellowDark: "#E6DF00",
  bg: "#FFF86C",
  white: "#ffffff",
  black: "#0a0a0a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#f4f3ef",
  green: "#059669",
  greenBg: "#ecfdf5",
  greenBorder: "#a7f3d0",
};

const WAAZA_FEE_PERCENT = 2.5;

const ROLE_LABELS: Record<string, string> = {
  CAPTAIN: "Captain",
  CHEF: "Chef",
  STEW: "Steward/ess",
  DECKHAND: "Deckhand",
  ENGINEER: "Engineer",
  OTHER: "Crew",
};

function fmt(amount: number, currency: string) {
  return amount.toLocaleString("en", {
    style: "currency",
    currency,
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function fmtWhole(amount: number, currency: string) {
  return amount.toLocaleString("en", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

type Props = {
  token: string;
  yachtName: string;
  yachtImage: string | null;
  crew: { name: string; role: string }[];
  currency: string;
  charterFee: number;
  suggestedPercentage: number;
  suggestedAmount: number;
  region: string;
};

function CheckoutForm({
  totalCharge,
  currency,
  onSuccess,
}: {
  totalCharge: number;
  currency: string;
  onSuccess: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError("");

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
      redirect: "if_required",
    });

    if (result.error) {
      setError(result.error.message || "Payment failed");
      setLoading(false);
    } else if (result.paymentIntent?.status === "succeeded") {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement options={{ layout: "tabs" }} />

      {error && (
        <div
          style={{
            marginTop: 16,
            padding: "10px 14px",
            borderRadius: 10,
            background: "#fef2f2",
            border: "1px solid #fecaca",
            color: "#dc2626",
            fontSize: 13,
          }}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        style={{
          width: "100%",
          marginTop: 20,
          padding: "14px 24px",
          background: C.black,
          color: "#fff",
          fontSize: 15,
          fontWeight: 600,
          borderRadius: 10,
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.6 : 1,
          fontFamily: "inherit",
          transition: "opacity .2s",
        }}
      >
        {loading ? "Processing..." : `Pay ${fmt(totalCharge, currency)}`}
      </button>
    </form>
  );
}

export default function TipPageClient({
  token,
  yachtName,
  yachtImage,
  crew,
  currency,
  charterFee,
  suggestedPercentage,
  suggestedAmount,
  region,
}: Props) {
  const [step, setStep] = useState<"amount" | "pay" | "done">("amount");
  const [tipAmount, setTipAmount] = useState(suggestedAmount);
  const [customAmount, setCustomAmount] = useState("");
  const [coverFee, setCoverFee] = useState(true);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [totalCharge, setTotalCharge] = useState(0);
  const [loading, setLoading] = useState(false);

  const regionLabel =
    region === "MED"
      ? "Mediterranean"
      : region === "CARIBBEAN"
      ? "Caribbean"
      : region === "US"
      ? "US waters"
      : "";

  const percentOptions = [
    { label: "10%", value: Math.round(charterFee * 0.1) },
    { label: "15%", value: Math.round(charterFee * 0.15) },
    { label: "20%", value: Math.round(charterFee * 0.2) },
  ];

  const currentTip = customAmount ? parseFloat(customAmount) || 0 : tipAmount;
  const fee = Math.round(currentTip * (WAAZA_FEE_PERCENT / 100) * 100) / 100;
  const crewReceives = coverFee ? currentTip : Math.round((currentTip - fee) * 100) / 100;
  const guestPays = coverFee ? Math.round((currentTip + fee) * 100) / 100 : currentTip;

  const handleProceedToPayment = useCallback(async () => {
    if (!currentTip || currentTip <= 0) return;

    setLoading(true);

    try {
      const res = await fetch(`/api/tipping/tip/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: currentTip,
          coverFee,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data.error);
        return;
      }

      setClientSecret(data.clientSecret);
      setTotalCharge(data.totalCharge);
      setTipAmount(currentTip);
      setStep("pay");
    } catch (err) {
      console.error("Failed to create payment:", err);
    } finally {
      setLoading(false);
    }
  }, [token, currentTip, coverFee]);

  if (step === "done") {
    return (
      <div
        style={{
          background: C.white,
          borderRadius: 20,
          padding: "48px 36px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: C.greenBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            fontSize: 28,
            color: C.green,
          }}
        >
          ✓
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif), 'Instrument Serif', serif",
            fontSize: 28,
            fontWeight: 400,
            marginBottom: 8,
          }}
        >
          Thank you
        </h1>
        <p style={{ color: C.gray3, fontSize: 15, marginBottom: 4 }}>
          {fmtWhole(crewReceives, currency)} has been sent to the crew of{" "}
          <strong>{yachtName}</strong>.
        </p>
        <p style={{ color: C.gray4, fontSize: 13 }}>
          Each crew member will receive their share directly.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/waaza.png" alt="Waaza" style={{ height: 28 }} />
      </div>

      {/* Card */}
      <div style={{ background: C.white, borderRadius: 20, padding: "36px 32px" }}>
        {/* Yacht info */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          {yachtImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={yachtImage}
              alt={yachtName}
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 12,
              }}
            />
          )}
          <h1
            style={{
              fontFamily: "var(--font-serif), 'Instrument Serif', serif",
              fontSize: 26,
              fontWeight: 400,
              letterSpacing: -0.3,
              marginBottom: 4,
            }}
          >
            Tip the crew of {yachtName}
          </h1>
          {regionLabel && (
            <p style={{ fontSize: 13, color: C.gray4 }}>{regionLabel} charter</p>
          )}
        </div>

        {/* Crew list */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          {crew.map((c, i) => (
            <div
              key={i}
              style={{
                background: C.gray6,
                borderRadius: 8,
                padding: "6px 12px",
                fontSize: 13,
                color: C.gray2,
              }}
            >
              <span style={{ fontWeight: 600 }}>{c.name}</span>
              <span style={{ color: C.gray4, marginLeft: 4 }}>
                {ROLE_LABELS[c.role] || c.role}
              </span>
            </div>
          ))}
        </div>

        {step === "amount" && (
          <>
            {/* MYBA suggestion */}
            <p
              style={{
                fontSize: 13,
                color: C.gray3,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              MYBA suggests {suggestedPercentage}% for {regionLabel || "this region"}
            </p>

            {/* Percentage buttons */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 10,
                marginBottom: 16,
              }}
            >
              {percentOptions.map((opt) => {
                const isSelected = tipAmount === opt.value && !customAmount;
                return (
                  <button
                    key={opt.label}
                    onClick={() => {
                      setTipAmount(opt.value);
                      setCustomAmount("");
                    }}
                    style={{
                      padding: "14px 8px",
                      borderRadius: 10,
                      border: isSelected
                        ? `2px solid ${C.black}`
                        : `1px solid ${C.gray5}`,
                      background: isSelected ? C.yellow : C.white,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      textAlign: "center",
                      transition: "all .15s",
                    }}
                  >
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{opt.label}</div>
                    <div style={{ fontSize: 13, color: C.gray3 }}>
                      {fmtWhole(opt.value, currency)}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom amount */}
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  color: C.gray3,
                  marginBottom: 6,
                  textAlign: "center",
                }}
              >
                Or enter a custom amount
              </label>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  if (e.target.value) setTipAmount(parseFloat(e.target.value));
                }}
                placeholder={`e.g. ${suggestedAmount}`}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  fontSize: 18,
                  fontWeight: 600,
                  border: `1px solid ${C.gray5}`,
                  borderRadius: 10,
                  background: C.gray6,
                  fontFamily: "inherit",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Per crew member breakdown */}
            {currentTip > 0 && crew.length > 0 && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  color: C.gray4,
                  marginBottom: 16,
                }}
              >
                {fmtWhole(crewReceives, currency)} ÷ {crew.length} crew ={" "}
                <strong style={{ color: C.gray2 }}>
                  {fmtWhole(Math.floor(crewReceives / crew.length), currency)}
                </strong>{" "}
                each
              </p>
            )}

            {/* Cover fee toggle */}
            {currentTip > 0 && (
              <div
                onClick={() => setCoverFee(!coverFee)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  borderRadius: 12,
                  border: coverFee
                    ? `2px solid ${C.green}`
                    : `1px solid ${C.gray5}`,
                  background: coverFee ? C.greenBg : C.white,
                  cursor: "pointer",
                  marginBottom: 20,
                  transition: "all .2s",
                  userSelect: "none",
                }}
              >
                {/* Heart icon */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: coverFee ? C.green : C.gray5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background .2s",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={coverFee ? "#fff" : C.gray4}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.black }}>
                    Cover the processing fee
                  </div>
                  <div style={{ fontSize: 12, color: coverFee ? C.green : C.gray4 }}>
                    {coverFee
                      ? `You pay ${fmt(guestPays, currency)} · crew receive the full ${fmtWhole(currentTip, currency)}`
                      : `Crew receive ${fmt(crewReceives, currency)} after ${fmt(fee, currency)} fee`}
                  </div>
                </div>

                {/* Toggle switch */}
                <div
                  style={{
                    width: 44,
                    height: 24,
                    borderRadius: 12,
                    background: coverFee ? C.green : C.gray5,
                    position: "relative",
                    transition: "background .2s",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "#fff",
                      position: "absolute",
                      top: 2,
                      left: coverFee ? 22 : 2,
                      transition: "left .2s",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Summary before proceeding */}
            {currentTip > 0 && (
              <div
                style={{
                  background: C.gray6,
                  borderRadius: 10,
                  padding: "12px 16px",
                  marginBottom: 20,
                  fontSize: 13,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 4,
                    color: C.gray2,
                  }}
                >
                  <span>Crew receives</span>
                  <strong>{fmt(crewReceives, currency)}</strong>
                </div>
                {fee > 0 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: C.gray4,
                      marginBottom: 4,
                    }}
                  >
                    <span>Processing fee</span>
                    <span>{coverFee ? fmt(fee, currency) : "deducted from tip"}</span>
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 8,
                    marginTop: 4,
                    borderTop: `1px solid ${C.gray5}`,
                    fontWeight: 600,
                    color: C.black,
                    fontSize: 15,
                  }}
                >
                  <span>You pay</span>
                  <span>{fmt(guestPays, currency)}</span>
                </div>
              </div>
            )}

            {/* Proceed button */}
            <button
              onClick={handleProceedToPayment}
              disabled={loading || currentTip <= 0}
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
                opacity: loading || currentTip <= 0 ? 0.5 : 1,
                fontFamily: "inherit",
                transition: "opacity .2s",
              }}
            >
              {loading
                ? "Setting up payment..."
                : `Pay ${fmt(guestPays, currency)}`}
            </button>
          </>
        )}

        {step === "pay" && clientSecret && (
          <>
            {/* Payment summary */}
            <div
              style={{
                background: C.greenBg,
                border: `1px solid ${C.greenBorder}`,
                borderRadius: 10,
                padding: "12px 16px",
                marginBottom: 20,
                fontSize: 13,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 4,
                  color: C.gray2,
                }}
              >
                <span>Crew receives</span>
                <strong style={{ color: C.green }}>{fmt(crewReceives, currency)}</strong>
              </div>
              {fee > 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: C.gray4,
                  }}
                >
                  <span>Processing fee</span>
                  <span>{fmt(fee, currency)}</span>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: 8,
                  marginTop: 4,
                  borderTop: `1px solid ${C.greenBorder}`,
                  fontWeight: 600,
                  color: C.black,
                }}
              >
                <span>Your card will be charged</span>
                <span>{fmt(totalCharge, currency)}</span>
              </div>
            </div>

            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: {
                  theme: "stripe",
                  variables: {
                    fontFamily: "Inter, sans-serif",
                    borderRadius: "10px",
                  },
                },
              }}
            >
              <CheckoutForm
                totalCharge={totalCharge}
                currency={currency}
                onSuccess={() => setStep("done")}
              />
            </Elements>

            <button
              onClick={() => setStep("amount")}
              style={{
                width: "100%",
                marginTop: 12,
                padding: "10px",
                background: "none",
                border: "none",
                fontSize: 13,
                color: C.gray4,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              ← Change amount
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <p
        style={{
          textAlign: "center",
          fontSize: 11,
          color: C.gray4,
          marginTop: 24,
        }}
      >
        Powered by Waaza · Payments secured by Stripe
      </p>
    </>
  );
}
