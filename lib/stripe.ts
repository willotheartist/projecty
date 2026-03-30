// lib/stripe.ts
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-03-25.dahlia",
  typescript: true,
});

// Waaza fee: 2.5% of tip amount
export const WAAZA_FEE_PERCENT = 2.5;

export async function createConnectedAccount(email: string, name?: string) {
  const account = await stripe.accounts.create({
    type: "express",
    email,
    capabilities: {
      transfers: { requested: true },
    },
    business_type: "individual",
    metadata: {
      platform: "waaza",
    },
    ...(name && {
      individual: {
        first_name: name.split(" ")[0],
        last_name: name.split(" ").slice(1).join(" ") || undefined,
      },
    }),
  });

  return account.id;
}

export async function createOnboardingLink(
  stripeAccountId: string,
  returnUrl: string,
  refreshUrl: string
) {
  const link = await stripe.accountLinks.create({
    account: stripeAccountId,
    type: "account_onboarding",
    return_url: returnUrl,
    refresh_url: refreshUrl,
  });

  return link.url;
}

export async function checkAccountStatus(stripeAccountId: string) {
  const account = await stripe.accounts.retrieve(stripeAccountId);

  return {
    chargesEnabled: account.charges_enabled,
    payoutsEnabled: account.payouts_enabled,
    detailsSubmitted: account.details_submitted,
    isComplete:
      account.charges_enabled &&
      account.payouts_enabled &&
      account.details_submitted,
  };
}

export async function createTipPaymentIntent({
  coverFee = true,
  tipAmountCents,
  currency,
  tipSessionId,
  yachtName,
}: {
  coverFee?: boolean;
  tipAmountCents: number;
  currency: string;
  tipSessionId: string;
  yachtName: string;
}) {
  const waazaFeeCents = Math.round(
    tipAmountCents * (WAAZA_FEE_PERCENT / 100)
  );

  const totalChargeCents = coverFee ? tipAmountCents + waazaFeeCents : tipAmountCents;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalChargeCents,
    currency: currency.toLowerCase(),
    metadata: {
      tipSessionId,
      yachtName,
      tipAmountCents: tipAmountCents.toString(),
      waazaFeeCents: waazaFeeCents.toString(),
    },
    transfer_group: `tip_${tipSessionId}`,
  });

  return {
    clientSecret: paymentIntent.client_secret,
    paymentIntentId: paymentIntent.id,
    totalChargeCents,
    waazaFeeCents,
  };
}

export async function transferToCrewMember({
  amountCents,
  currency,
  stripeAccountId,
  transferGroup,
  tipPayoutId,
}: {
  amountCents: number;
  currency: string;
  stripeAccountId: string;
  transferGroup: string;
  tipPayoutId: string;
}) {
  const transfer = await stripe.transfers.create({
    amount: amountCents,
    currency: currency.toLowerCase(),
    destination: stripeAccountId,
    transfer_group: transferGroup,
    metadata: {
      tipPayoutId,
      platform: "waaza",
    },
  });

  return transfer.id;
}

export function constructWebhookEvent(
  body: string | Buffer,
  signature: string
) {
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error("STRIPE_WEBHOOK_SECRET is not set");
  }

  return stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET
  );
}
