// app/api/tipping/yachts/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

// POST — create a yacht
export async function POST(req: NextRequest) {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, lengthM, flagState, imageUrl, operatingCurrency } =
      await req.json();

    if (!name) {
      return NextResponse.json(
        { error: "Yacht name is required" },
        { status: 400 }
      );
    }

    // Generate slug from name
    const baseSlug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    // Check for slug collision, append random suffix if needed
    let slug = baseSlug;
    const existing = await prisma.yacht.findUnique({ where: { slug } });
    if (existing) {
      slug = `${baseSlug}-${Math.random().toString(36).slice(2, 6)}`;
    }

    const yacht = await prisma.yacht.create({
      data: {
        ownerId: user.id,
        name,
        slug,
        lengthM: lengthM ? parseFloat(lengthM) : null,
        flagState: flagState || null,
        imageUrl: imageUrl || null,
        operatingCurrency: operatingCurrency || "EUR",
      },
    });

    // Auto-create crew membership for the owner as captain
    await prisma.crewMembership.create({
      data: {
        userId: user.id,
        yachtId: yacht.id,
        roleOnYacht: "CAPTAIN",
        isActive: true,
      },
    });

    return NextResponse.json({ yacht });
  } catch (err) {
    console.error("Create yacht error:", err);
    return NextResponse.json(
      { error: "Failed to create yacht" },
      { status: 500 }
    );
  }
}

// GET — list user's yachts
export async function GET() {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const yachts = await prisma.yacht.findMany({
      where: { ownerId: user.id },
      include: {
        crewMemberships: {
          where: { isActive: true },
          include: {
            user: { select: { id: true, name: true, email: true, stripeOnboardingStatus: true } },
          },
        },
        _count: { select: { charters: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ yachts });
  } catch (err) {
    console.error("List yachts error:", err);
    return NextResponse.json(
      { error: "Failed to list yachts" },
      { status: 500 }
    );
  }
}