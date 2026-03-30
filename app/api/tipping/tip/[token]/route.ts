// app/api/tipping/tip/[token]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createTipPaymentIntent } from "@/lib/stripe";

// GET — fetch tip session data for the guest tipping page (PUBLIC, no auth)
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
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
                    user: {
                      select: { name: true },
                    },
                  },
                  orderBy: { roleOnYacht: "asc" },
                },
              },
            },
          },
        },
      },
    });

    if (!tipSession) {
      return NextResponse.json({ error: "Tip link not found" }, { status: 404 });
    }

    if (tipSession.status === "PAID") {
      return NextResponse.json({
        error: "This tip has already been paid",
        status: "paid",
        paidAt: tipSession.paidAt,
        tipAmount: tipSession.tipAmount,
      }, { status: 410 });
    }

    if (tipSession.status === "EXPIRED" || tipSession.expiresAt < new Date()) {
      return NextResponse.json({ error: "This tip link has expired" }, { status: 410 });
    }

    // Build the guest-facing response
    const charter = tipSession.charter;
    const yacht = charter.yacht;
    const crew = yacht.crewMemberships.map((cm) => ({
      name: cm.user.name || "Crew member",
      role: cm.roleOnYacht,
    }));

    const suggestedAmount = Math.round(
      charter.baseCharterFee * (tipSession.suggestedPercentage / 100)
    );

    return NextResponse.json({
      yachtName: yacht.name,
      yachtImage: yacht.imageUrl,
      currency: tipSession.paymentCurrency,
      crew,
      crewCount: crew.length,
      charterFee: charter.baseCharterFee,
      suggestedPercentage: tipSession.suggestedPercentage,
      suggestedAmount,
      splitType: tipSession.splitType,
      region: charter.region,
      charterDates: {
        start: charter.startDate,
        end: charter.endDate,
      },
    });
  } catch (err) {
    console.error("Get tip session error:", err);
    return NextResponse.json(
      { error: "Failed to load tip session" },
      { status: 500 }
    );
  }
}

// POST — guest submits a tip amount, creates a Stripe payment intent
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;
    const { amount, coverFee = true } = await req.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "A valid tip amount is required" },
        { status: 400 }
      );
    }

    const tipSession = await prisma.tipSession.findUnique({
      where: { tipLinkToken: token },
      include: {
        charter: {
          include: {
            yacht: {
              select: { name: true, operatingCurrency: true },
            },
          },
        },
      },
    });

    if (!tipSession) {
      return NextResponse.json({ error: "Tip link not found" }, { status: 404 });
    }

    if (tipSession.status !== "PENDING") {
      return NextResponse.json(
        { error: "This tip session is no longer active" },
        { status: 410 }
      );
    }

    const tipAmountCents = Math.round(amount * 100);
    const currency = tipSession.paymentCurrency.toLowerCase();

    const { clientSecret, paymentIntentId, totalChargeCents, waazaFeeCents } =
      await createTipPaymentIntent({
        coverFee,
        tipAmountCents,
        currency,
        tipSessionId: tipSession.id,
        yachtName: tipSession.charter.yacht.name,
      });

    // Update tip session with payment details
    await prisma.tipSession.update({
      where: { id: tipSession.id },
      data: {
        tipAmount: amount,
        waazaFee: waazaFeeCents / 100,
        processingFee: (totalChargeCents - tipAmountCents - waazaFeeCents) / 100,
        stripePaymentIntentId: paymentIntentId,
      },
    });

    return NextResponse.json({
      clientSecret,
      totalCharge: totalChargeCents / 100,
      tipAmount: amount,
      waazaFee: waazaFeeCents / 100,
      currency: tipSession.paymentCurrency,
    });
  } catch (err) {
    console.error("Create payment intent error:", err);
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    );
  }
}