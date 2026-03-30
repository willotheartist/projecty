// app/api/tipping/stripe/onboard/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import {
  createConnectedAccount,
  createOnboardingLink,
  checkAccountStatus,
} from "@/lib/stripe";

// POST — start or resume Stripe onboarding for the logged-in user
export async function POST(req: NextRequest) {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://waaza.co";

    const fullUser = await prisma.user.findUnique({
      where: { id: user.id },
    });

    if (!fullUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    let stripeAccountId = fullUser.stripeAccountId;

    // Create Stripe account if doesn't exist
    if (!stripeAccountId) {
      stripeAccountId = await createConnectedAccount(
        fullUser.email,
        fullUser.name || undefined
      );

      await prisma.user.update({
        where: { id: user.id },
        data: {
          stripeAccountId,
          stripeOnboardingStatus: "PENDING",
        },
      });
    }

    // Check if already complete
    const status = await checkAccountStatus(stripeAccountId);

    if (status.isComplete) {
      await prisma.user.update({
        where: { id: user.id },
        data: { stripeOnboardingStatus: "COMPLETE" },
      });

      return NextResponse.json({
        status: "complete",
        message: "Stripe account is fully set up",
      });
    }

    // Generate onboarding link
    const onboardingUrl = await createOnboardingLink(
      stripeAccountId,
      `${appUrl}/dashboard?stripe=complete`,
      `${appUrl}/dashboard?stripe=refresh`
    );

    return NextResponse.json({ onboardingUrl });
  } catch (err) {
    console.error("Stripe onboard error:", err);
    return NextResponse.json(
      { error: "Failed to start Stripe onboarding" },
      { status: 500 }
    );
  }
}

// GET — check current Stripe onboarding status
export async function GET() {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const fullUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: { stripeAccountId: true, stripeOnboardingStatus: true },
    });

    if (!fullUser?.stripeAccountId) {
      return NextResponse.json({
        status: "NOT_STARTED",
        isComplete: false,
      });
    }

    // Check live status from Stripe
    const status = await checkAccountStatus(fullUser.stripeAccountId);

    // Sync to DB if status changed
    if (status.isComplete && fullUser.stripeOnboardingStatus !== "COMPLETE") {
      await prisma.user.update({
        where: { id: user.id },
        data: { stripeOnboardingStatus: "COMPLETE" },
      });
    }

    return NextResponse.json({
      status: status.isComplete ? "COMPLETE" : "PENDING",
      isComplete: status.isComplete,
      chargesEnabled: status.chargesEnabled,
      payoutsEnabled: status.payoutsEnabled,
    });
  } catch (err) {
    console.error("Stripe status error:", err);
    return NextResponse.json(
      { error: "Failed to check Stripe status" },
      { status: 500 }
    );
  }
}