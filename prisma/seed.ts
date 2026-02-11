import { PrismaClient } from "@prisma/client";
import type { Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function ensureRuleSet(version: string, rules: Prisma.RuleCreateWithoutRuleSetInput[]) {
  const existing = await prisma.ruleSet.findUnique({ where: { version } });

  if (existing) {
    console.log(`ℹ️ RuleSet ${version} already exists — skipping`);
    return;
  }

  await prisma.ruleSet.create({
    data: {
      version,
      rules: {
        create: rules,
      },
    },
  });

  console.log(`✅ Seeded RuleSet ${version}`);
}

async function main() {
  const rules: Prisma.RuleCreateWithoutRuleSetInput[] = [
    // Strong liquidity
    {
      condition: { field: "client.liquidityAvailable", op: ">=", value: 1000000 } as Prisma.InputJsonValue,
      weight: 1,
      effect: { scoreDelta: 25, flagCode: null } as Prisma.InputJsonValue,
    },

    // Low liquidity
    {
      condition: { field: "client.liquidityAvailable", op: "<", value: 250000 } as Prisma.InputJsonValue,
      weight: 1,
      effect: {
        scoreDelta: -25,
        flagCode: "LOW_LIQUIDITY_BUFFER",
        severity: "HIGH",
      } as Prisma.InputJsonValue,
    },

    // Business income complexity
    {
      condition: { field: "client.incomeType", op: "==", value: "BUSINESS" } as Prisma.InputJsonValue,
      weight: 1,
      effect: {
        scoreDelta: -5,
        flagCode: "BUSINESS_INCOME_UNDERWRITING_COMPLEXITY",
        severity: "MEDIUM",
      } as Prisma.InputJsonValue,
    },

    // Older vessel
    {
      condition: { field: "vessel.yearBuilt", op: "<=", value: 2000 } as Prisma.InputJsonValue,
      weight: 1,
      effect: {
        scoreDelta: -20,
        flagCode: "OLDER_VESSEL_LIMITED_LENDER_APPETITE",
        severity: "HIGH",
      } as Prisma.InputJsonValue,
    },

    // Charter usage
    {
      condition: { field: "vessel.usageType", op: "==", value: "CHARTER" } as Prisma.InputJsonValue,
      weight: 1,
      effect: {
        scoreDelta: -15,
        flagCode: "CHARTER_COMPLIANCE_COMPLEXITY",
        severity: "MEDIUM",
      } as Prisma.InputJsonValue,
    },

    // SPV ownership
    {
      condition: { field: "client.ownershipIntent", op: "==", value: "SPV" } as Prisma.InputJsonValue,
      weight: 1,
      effect: {
        scoreDelta: -5,
        flagCode: "SPV_STRUCTURING_REVIEW_REQUIRED",
        severity: "LOW",
      } as Prisma.InputJsonValue,
    },
  ];

  await ensureRuleSet("v2.0", rules);
}

main()
  .catch((e: unknown) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
