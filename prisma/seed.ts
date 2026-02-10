import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const version = "v1.0";

  const existing = await prisma.ruleSet.findUnique({ where: { version } });

  if (!existing) {
    await prisma.ruleSet.create({
      data: {
        version,
        rules: {
          create: [
            {
              // Liquidity strength example rule
              condition: { field: "liquidityAvailable", op: ">=", value: 500000 },
              weight: 20,
              effect: { type: "score_add", value: 20, flag: null },
            },
            {
              // Vessel age penalty example rule
              condition: { field: "yearBuilt", op: "<=", value: 2005 },
              weight: -15,
              effect: { type: "score_add", value: -15, flag: "Older vessel increases lender constraints" },
            },
            {
              // Charter usage complexity
              condition: { field: "usageType", op: "==", value: "CHARTER" },
              weight: -10,
              effect: { type: "score_add", value: -10, flag: "Charter usage adds compliance complexity" },
            },
          ],
        },
      },
    });

    console.log(`✅ Seeded RuleSet ${version}`);
  } else {
    console.log(`ℹ️ RuleSet ${version} already exists — skipping`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
