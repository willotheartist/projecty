// app/api/tipping/yachts/[yachtId]/crew/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

// POST — add a crew member (by email, creates user if needed)
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ yachtId: string }> }
) {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { yachtId } = await params;

    // Verify ownership
    const yacht = await prisma.yacht.findFirst({
      where: { id: yachtId, ownerId: user.id },
    });

    if (!yacht) {
      return NextResponse.json({ error: "Yacht not found" }, { status: 404 });
    }

    const { email, name, roleOnYacht } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Crew member email is required" },
        { status: 400 }
      );
    }

    // Find or create the crew member user
    let crewUser = await prisma.user.findUnique({ where: { email } });

    if (!crewUser) {
      crewUser = await prisma.user.create({
        data: {
          email,
          name: name || null,
          role: "CREW",
        },
      });
    }

    // Check for existing membership
    const existingMembership = await prisma.crewMembership.findUnique({
      where: { userId_yachtId: { userId: crewUser.id, yachtId } },
    });

    if (existingMembership) {
      // Reactivate if inactive
      if (!existingMembership.isActive) {
        const updated = await prisma.crewMembership.update({
          where: { id: existingMembership.id },
          data: {
            isActive: true,
            roleOnYacht: roleOnYacht || existingMembership.roleOnYacht,
          },
          include: {
            user: { select: { id: true, name: true, email: true, stripeOnboardingStatus: true } },
          },
        });
        return NextResponse.json({ crewMembership: updated });
      }

      return NextResponse.json(
        { error: "This person is already crew on this yacht" },
        { status: 409 }
      );
    }

    const crewMembership = await prisma.crewMembership.create({
      data: {
        userId: crewUser.id,
        yachtId,
        roleOnYacht: roleOnYacht || "OTHER",
        isActive: true,
      },
      include: {
        user: { select: { id: true, name: true, email: true, stripeOnboardingStatus: true } },
      },
    });

    return NextResponse.json({ crewMembership });
  } catch (err) {
    console.error("Add crew error:", err);
    return NextResponse.json(
      { error: "Failed to add crew member" },
      { status: 500 }
    );
  }
}