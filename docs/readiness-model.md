# Waaza financing preparation model v3.0

## Why change

The seeded legacy model starts at 60 and stacks absolute cash, business-income, age, charter and SPV penalties. Those penalties total 70, so a profile can be clamped to zero. Cash is tested against 250,000 and 1,000,000 without reference to purchase price. The wizard collects no requested loan, repayment surplus or ownership-cost budget. A zero therefore cannot be interpreted as a lender decision.

## Scope

New public wizard assessments use `readiness_v3.0`. Inputs, currency, original intake answers, component points, assumptions and explanations are stored in existing JSON snapshots. No migration or production ruleset rewrite is required. Existing assessments retain their historical model and result. Rerunning a saved v3 assessment uses its recorded financial plan, updated purchase price/liquidity, and the same version. Legacy widget and API callers without the additional plan inputs continue using the legacy model; they must adopt the new questions before being migrated.

The intake groups the buyer, vessel, funding, monthly budget, evidence and final review into six guided sections, replacing low-information wealth-band, EU-residency, liquidity-holder, risk-checkbox and timeline questions with financial-plan and evidence questions. Context such as income type, ownership, residency, vessel age and use is retained for professional review, not used as automatic penalties. The score is not a probability of approval, maximum LTV, interest quote or lending eligibility decision.

## Inputs and calculation

All money uses one user-selected currency. No FX conversion occurs. The planning rate defaults to 8% and the term to 10 years, visibly editable assumptions rather than market quotes. Interest is modelled as a nominal annual rate paid monthly, fully amortizing with no balloon or financed fees. Stress rate = entered rate + 2 percentage points.

- Monthly payment = principal × monthly rate / (1 − (1 + monthly rate)^(-months)). At 0% interest use principal / months.
- Buyer contribution = price − requested loan.
- Purchase cash needed = contribution + entered taxes/fees/initial works.
- Cash gap = max(0, cash needed − liquidity).
- Remaining cash = max(0, liquidity − cash needed).
- Payment coverage = entered monthly surplus / stressed payment. Surplus excludes tax, living costs, existing debts AND yacht operating costs.
- Reserve months = remaining cash / (monthly ownership costs + stressed payment).

| Component | Points | Method |
| --- | ---: | --- |
| Deposit and costs | 30 | 30 × min(1, contribution / price / 0.5) × min(1, liquidity / purchase cash needed). Cash coverage is 1 if cash needed is zero. |
| Repayment | 30 | 30 × min(1, stressed payment coverage / 1.5) |
| Reserves | 15 | 15 × min(1, reserve months / 6) |
| Buyer evidence | 15 | Not started 0; partial 8; complete 15 |
| Vessel/structure evidence | 10 | Not started 0; pending 5; professionally reviewed 10 |

Each component is rounded to an integer before summing. A positive purchase cash gap or coverage below 1 caps the total at 49 and displays the reason. Full documentation cannot mask an unfunded plan. Scores 80–100 mean well prepared for review, 50–79 preparation gaps, and 0–49 plan needs work. Zero remains possible for an explicitly weak/unprepared plan; missing data is rejected rather than imputed as zero.

Requested loan-to-price is calculated independently. No lender LTV band is inferred from the score; v3 stores null in the legacy estimate columns and displays requested loan-to-price from its snapshot instead.

## Interpretation and limits

Weights, 50% full-point contribution, 1.5x coverage, six-month reserves and the 49 cap are transparent Waaza product choices. They have not been fitted to lender approvals or validated as universal credit criteria. Self-reported documents can increase preparation points but are not independently verified. Asset-backed/private-bank facilities, balloons, charter projections and country-specific eligibility need separate professional review. Increasing the deposit reduces the loan but also uses reserves; this tradeoff is intentional.

Official reference consulted 10 September 2026: [Lombard leisure marine finance](https://www.lombard.co.uk/assets/marine-finance/leisure-marine-finance.html). It describes tailored terms and company/LLP eligibility, which illustrates why business ownership alone must not be treated as universally negative. That source does not endorse this scoring rubric.

## Verification

Run `node --test tests/readiness.test.cjs` after installing the project dependencies with PNPM. Tests cover payment arithmetic, zero interest, monetary-scale invariance, cash and repayment gaps, monotonicity, evidence stages, validation, score reconciliation and persistence. TypeScript and targeted ESLint are also required. Before production release, complete a real wizard assessment and download its PDF against a working database. Browser interaction in the current environment is blocked for localhost, and no live Vercel/Neon verification has been completed.

## Planning experience

The results dashboard separates the saved position, interactive scenarios, and prioritised next steps. Scenarios use the same pure calculation as the server and do not mutate the saved assessment. Saving explicitly submits a fresh assessment and then switches the PDF download to that new ID. The original record remains intact. Comparison includes payment, total modelled interest, cash gap, retained cash, reserve months and payment coverage. Evidence presets are clearly hypothetical until the user confirms they reflect their actual position.

New snapshots also include the financial plan inside the scored output. PDFs use it to illustrate interest-rate sensitivity, total repayments and remaining balance at selected years. Older v3 snapshots without the nested plan continue to render their existing sections.

September planner upgrade checks: TypeScript and targeted ESLint pass; all 13 model/persistence tests pass. A five-page PDF was generated, bounds-checked and its new repayment page visually inspected. Local Next preview also encountered an environment-level network-interface error; browser interaction and live deployment remain unverified.
