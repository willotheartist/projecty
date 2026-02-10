import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const ruleSet = await prisma.ruleSet.findUnique({
    where: { version: "v1.0" },
  });

  if (!ruleSet) {
    return NextResponse.json(
      { ok: false, error: "RuleSet v1.0 missing (run pnpm prisma db seed)" },
      { status: 400 }
    );
  }

  const user = await prisma.user.upsert({
    where: { email: "founder@projecty.local" },
    update: {},
    create: { email: "founder@projecty.local", role: "ADMIN" },
  });

  const client = await prisma.client.create({
    data: {
      name: "Sample Buyer",
      residency: "UK",
      liquidityAvailable: 650000,
      netWorthBand: "5-10M",
      incomeType: "BUSINESS",
      ownershipIntent: "SPV",
      createdById: user.id,
    },
  });

  const vessel = await prisma.vessel.create({
    data: {
      clientId: client.id,
      purchasePrice: 3200000,
      yearBuilt: 2012,
      usageType: "PRIVATE",
      intendedFlag: "Malta",
    },
  });

  const assessment = await prisma.assessment.create({
    data: {
      clientId: client.id,
      vesselId: vessel.id,
      createdById: user.id,
      ruleSetVersion: "v1.0",
      readinessScore: null,
      tier: null,
      ltvEstimateMin: null,
      ltvEstimateMax: null,
      riskFlags: [],
      recommendedPath: null,
    },
  });

  return NextResponse.json({
    ok: true,
    created: {
      user: { id: user.id, email: user.email },
      client: { id: client.id },
      vessel: { id: vessel.id },
      assessment: { id: assessment.id },
    },
  });
}
