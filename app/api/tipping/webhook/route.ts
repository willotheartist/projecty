// app/api/tipping/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { constructWebhookEvent, transferToCrewMember } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 }
      );
    }

    const event = constructWebhookEvent(body, signature);

    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object;
      const tipSessionId = paymentIntent.metadata?.tipSessionId;

      if (!tipSessionId) {
        console.warn("Payment intent missing tipSessionId metadata");
        return NextResponse.json({ received: true });
      }

      // Load the tip session with crew data
      const tipSession = await prisma.tipSession.findUnique({
        where: { id: tipSessionId },
        include: {
          charter: {
            include: {
              yacht: {
                include: {
                  crewMemberships: {
                    where: { isActive: true },
                    include: {
                      user: {
                        select: {
                          id: true,
                          stripeAccountId: true,
                          stripeOnboardingStatus: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!tipSession || tipSession.status === "PAID") {
        return NextResponse.json({ received: true });
      }

      const crewMembers = tipSession.charter.yacht.crewMemberships;
      const tipAmountCents = Math.round((tipSession.tipAmount || 0) * 100);
      const currency = tipSession.paymentCurrency.toLowerCase();
      const transferGroup = `tip_${tipSession.id}`;

      // Calculate splits
      const splits: { crewMembershipId: string; amountCents: number; percentage: number }[] = [];

      if (tipSession.splitType === "EQUAL") {
        const perPersonCents = Math.floor(tipAmountCents / crewMembers.length);
        let remainder = tipAmountCents - perPersonCents * crewMembers.length;
        const percentage = 100 / crewMembers.length;

        for (const cm of crewMembers) {
          // Give remainder cents to the first crew member (captain)
          const extra = remainder > 0 ? 1 : 0;
          remainder -= extra;

          splits.push({
            crewMembershipId: cm.id,
            amountCents: perPersonCents + extra,
            percentage,
          });
        }
      } else {
        // Custom split — use splitPercentage from crew memberships
        for (const cm of crewMembers) {
          const pct = cm.splitPercentage || 0;
          splits.push({
            crewMembershipId: cm.id,
            amountCents: Math.round(tipAmountCents * (pct / 100)),
            percentage: pct,
          });
        }
      }

      // Create payouts and transfer to each crew member
      for (const split of splits) {
        const membership = crewMembers.find(
          (cm) => cm.id === split.crewMembershipId
        );

        const stripeAccountId = membership?.user?.stripeAccountId;
        const isOnboarded =
          membership?.user?.stripeOnboardingStatus === "COMPLETE";

        let stripeTransferId: string | null = null;
        let payoutStatus: "PENDING" | "PROCESSING" | "PAID" | "FAILED" =
          "PENDING";

        // Only transfer if crew member has completed Stripe onboarding
        if (stripeAccountId && isOnboarded && split.amountCents > 0) {
          try {
            stripeTransferId = await transferToCrewMember({
              amountCents: split.amountCents,
              currency,
              stripeAccountId,
              transferGroup,
              tipPayoutId: split.crewMembershipId,
            });
            payoutStatus = "PAID";
          } catch (err) {
            console.error(
              `Transfer failed for crew ${split.crewMembershipId}:`,
              err
            );
            payoutStatus = "FAILED";
          }
        }

        await prisma.tipPayout.create({
          data: {
            tipSessionId: tipSession.id,
            crewMembershipId: split.crewMembershipId,
            amount: split.amountCents / 100,
            percentageOfTotal: split.percentage,
            stripeTransferId,
            payoutStatus,
            paidAt: payoutStatus === "PAID" ? new Date() : null,
          },
        });
      }

      // Mark tip session as paid
      await prisma.tipSession.update({
        where: { id: tipSession.id },
        data: {
          status: "PAID",
          paidAt: new Date(),
        },
      });

      console.log(
        `✓ Tip processed: ${tipSession.id} — ${tipSession.tipAmount} ${tipSession.paymentCurrency} split to ${crewMembers.length} crew`
      );
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}