import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import TipPageClient from "./tip-page-client";

export default async function TipPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const tipSession = await prisma.tipSession.findUnique({
    where: { tipLinkToken: token },
    include: {
      charter: {
        include: {
          yacht: {
            select: {
              name: true,
              imageUrl: true,
              operatingCurrency: true,
              crewMemberships: {
                where: { isActive: true },
                include: {
                  user: { select: { name: true } },
                },
                orderBy: { roleOnYacht: "asc" },
              },
            },
          },
        },
      },
    },
  });

  if (!tipSession) return notFound();

  if (tipSession.status === "PAID") {
    return (
      <div style={{ textAlign: "center", padding: "80px 24px" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
        <h1
          style={{
            fontFamily: "var(--font-serif), 'Instrument Serif', serif",
            fontSize: 28,
            fontWeight: 400,
            marginBottom: 8,
          }}
        >
          Tip received
        </h1>
        <p style={{ color: "#6b7280", fontSize: 15 }}>
          {tipSession.tipAmount?.toLocaleString("en", {
            style: "currency",
            currency: tipSession.paymentCurrency,
          })}{" "}
          was sent to the crew. Thank you!
        </p>
      </div>
    );
  }

  if (tipSession.status === "EXPIRED" || tipSession.expiresAt < new Date()) {
    return (
      <div style={{ textAlign: "center", padding: "80px 24px" }}>
        <h1
          style={{
            fontFamily: "var(--font-serif), 'Instrument Serif', serif",
            fontSize: 28,
            fontWeight: 400,
            marginBottom: 8,
          }}
        >
          Link expired
        </h1>
        <p style={{ color: "#6b7280", fontSize: 15 }}>
          This tipping link is no longer active. Please contact your broker.
        </p>
      </div>
    );
  }

  const charter = tipSession.charter;
  const yacht = charter.yacht;
  const crew = yacht.crewMemberships.map((cm) => ({
    name: cm.user.name || "Crew member",
    role: cm.roleOnYacht,
  }));

  const suggestedAmount = Math.round(
    charter.baseCharterFee * (tipSession.suggestedPercentage / 100)
  );

  return (
    <TipPageClient
      token={token}
      yachtName={yacht.name}
      yachtImage={yacht.imageUrl}
      crew={crew}
      currency={tipSession.paymentCurrency}
      charterFee={charter.baseCharterFee}
      suggestedPercentage={tipSession.suggestedPercentage}
      suggestedAmount={suggestedAmount}
      region={charter.region}
    />
  );
}
