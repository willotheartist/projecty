// app/api/tipping/charters/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import crypto from "crypto";

// Suggested tip percentages by region
const REGION_DEFAULTS: Record<string, number> = {
  MED: 10,
  CARIBBEAN: 17.5,
  US: 17.5,
  OTHER: 10,
};

// POST — create a charter + tip session + generate link
export async function POST(req: NextRequest) {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const {
      yachtId,
      startDate,
      endDate,
      baseCharterFee,
      feeCurrency,
      region,
      guestName,
      guestEmail,
      splitType,
    } = await req.json();

    if (!yachtId || !startDate || !endDate || !baseCharterFee) {
      return NextResponse.json(
        { error: "yachtId, startDate, endDate, and baseCharterFee are required" },
        { status: 400 }
      );
    }

    // Verify ownership
    const yacht = await prisma.yacht.findFirst({
      where: { id: yachtId, ownerId: user.id },
    });

    if (!yacht) {
      return NextResponse.json({ error: "Yacht not found" }, { status: 404 });
    }

    const charterRegion = region || "MED";
    const suggestedPercentage = REGION_DEFAULTS[charterRegion] || 10;

    // Generate unique tip link token
    const tipLinkToken = crypto.randomBytes(16).toString("hex");

    // Expires 30 days after charter end date
    const expiresAt = new Date(endDate);
    expiresAt.setDate(expiresAt.getDate() + 30);

    // Create charter + tip session in a transaction
    const charter = await prisma.charter.create({
      data: {
        yachtId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        baseCharterFee: parseFloat(baseCharterFee),
        feeCurrency: feeCurrency || yacht.operatingCurrency,
        region: charterRegion,
        guestName: guestName || null,
        guestEmail: guestEmail || null,
        status: "UPCOMING",
        tipSession: {
          create: {
            tipLinkToken,
            splitType: splitType || "EQUAL",
            suggestedPercentage,
            status: "PENDING",
            paymentCurrency: feeCurrency || yacht.operatingCurrency,
            expiresAt,
          },
        },
      },
      include: {
        tipSession: true,
        yacht: { select: { name: true, slug: true } },
      },
    });

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://waaza.co";
    const tipLink = `${appUrl}/tip/${tipLinkToken}`;

    return NextResponse.json({
      charter,
      tipLink,
      tipLinkToken,
    });
  } catch (err) {
    console.error("Create charter error:", err);
    return NextResponse.json(
      { error: "Failed to create charter" },
      { status: 500 }
    );
  }
}

// GET — list charters for user's yachts
export async function GET(req: NextRequest) {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const yachtId = url.searchParams.get("yachtId");

    const charters = await prisma.charter.findMany({
      where: {
        yacht: { ownerId: user.id },
        ...(yachtId && { yachtId }),
      },
      include: {
        yacht: { select: { name: true, slug: true } },
        tipSession: {
          select: {
            id: true,
            tipLinkToken: true,
            status: true,
            tipAmount: true,
            waazaFee: true,
            paidAt: true,
            splitType: true,
            suggestedPercentage: true,
          },
        },
      },
      orderBy: { startDate: "desc" },
    });

    return NextResponse.json({ charters });
  } catch (err) {
    console.error("List charters error:", err);
    return NextResponse.json(
      { error: "Failed to list charters" },
      { status: 500 }
    );
  }
}