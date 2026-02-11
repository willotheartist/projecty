// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function ensureRuleSet(version: string, rules: any[]) {
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
  await ensureRuleSet("v2.0", [
    // Strong liquidity
    {
      condition: { field: "client.liquidityAvailable", op: ">=", value: 1000000 },
      weight: 1,
      effect: {
        scoreDelta: 25,
        flagCode: null,
      },
    },

    // Low liquidity
    {
      condition: { field: "client.liquidityAvailable", op: "<", value: 250000 },
      weight: 1,
      effect: {
        scoreDelta: -25,
        flagCode: "LOW_LIQUIDITY_BUFFER",
        severity: "HIGH",
      },
    },

    // Business income complexity
    {
      condition: { field: "client.incomeType", op: "==", value: "BUSINESS" },
      weight: 1,
      effect: {
        scoreDelta: -5,
        flagCode: "BUSINESS_INCOME_UNDERWRITING_COMPLEXITY",
        severity: "MEDIUM",
      },
    },

    // Older vessel
    {
      condition: { field: "vessel.yearBuilt", op: "<=", value: 2000 },
      weight: 1,
      effect: {
        scoreDelta: -20,
        flagCode: "OLDER_VESSEL_LIMITED_LENDER_APPETITE",
        severity: "HIGH",
      },
    },

    // Charter usage
    {
      condition: { field: "vessel.usageType", op: "==", value: "CHARTER" },
      weight: 1,
      effect: {
        scoreDelta: -15,
        flagCode: "CHARTER_COMPLIANCE_COMPLEXITY",
        severity: "MEDIUM",
      },
    },

    // SPV ownership
    {
      condition: { field: "client.ownershipIntent", op: "==", value: "SPV" },
      weight: 1,
      effect: {
        scoreDelta: -5,
        flagCode: "SPV_STRUCTURING_REVIEW_REQUIRED",
        severity: "LOW",
      },
    },
  ]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
