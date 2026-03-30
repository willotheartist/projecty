# 📁 projecty - Project Structure

*Generated on: 30/03/2026, 16:26:11*

## 📋 Quick Overview

| Metric | Value |
|--------|-------|
| 📄 Total Files | 271 |
| 📁 Total Folders | 143 |
| 🌳 Max Depth | 6 levels |
| 🛠️ Tech Stack | React, Next.js, TypeScript, CSS, Node.js |

## ⭐ Important Files

- 🟡 🚫 **.gitignore** - Git ignore rules
- 🔴 📖 **README.md** - Project documentation
- 🔵 🔍 **eslint.config.mjs** - ESLint config
- 🟡 ▲ **next.config.ts** - Next.js config
- 🔴 📦 **package.json** - Package configuration
- 🟡 🔷 **tsconfig.json** - TypeScript config

## 📊 File Statistics

### By File Type

- ⚛️ **.tsx** (React TypeScript files): 146 files (53.9%)
- 🔷 **.ts** (TypeScript files): 51 files (18.8%)
- 🖼️ **.jpg** (JPEG images): 22 files (8.1%)
- 🖼️ **.png** (PNG images): 21 files (7.7%)
- 🎨 **.svg** (SVG images): 5 files (1.8%)
- 📄 **.sql** (Other files): 4 files (1.5%)
- ⚙️ **.json** (JSON files): 3 files (1.1%)
- 📄 **.bak** (Other files): 3 files (1.1%)
- 📄 **.txt** (Text files): 2 files (0.7%)
- 📖 **.md** (Markdown files): 2 files (0.7%)
- 🎨 **.css** (Stylesheets): 2 files (0.7%)
- 📄 **.mjs** (Other files): 2 files (0.7%)
- ⚙️ **.yaml** (YAML files): 2 files (0.7%)
- 🚫 **.gitignore** (Git ignore): 1 files (0.4%)
- 🖼️ **.ico** (Icon files): 1 files (0.4%)
- ⚙️ **.toml** (TOML files): 1 files (0.4%)
- 📄 **.prisma** (Other files): 1 files (0.4%)
- 📕 **.pdf** (PDF files): 1 files (0.4%)
- 📄 **.tsbuildinfo** (Other files): 1 files (0.4%)

### By Category

- **React**: 146 files (53.9%)
- **TypeScript**: 51 files (18.8%)
- **Assets**: 49 files (18.1%)
- **Other**: 11 files (4.1%)
- **Config**: 6 files (2.2%)
- **Docs**: 5 files (1.8%)
- **Styles**: 2 files (0.7%)
- **DevOps**: 1 files (0.4%)

### 📁 Largest Directories

- **root**: 271 files
- **app**: 179 files
- **public**: 48 files
- **app/api**: 27 files
- **public/home**: 22 files

## 🌳 Directory Structure

```
projecty/
├── 🟡 🚫 **.gitignore**
├── 📂 .vercel/
│   ├── ⚙️ project.json
│   └── 📄 README.txt
├── 🚀 app/
│   ├── 📂 about/
│   │   ├── ⚛️ opengraph-image.tsx
│   │   └── ⚛️ page.tsx
│   ├── 🔌 api/
│   │   ├── 📂 assess/
│   │   │   └── 🔷 route.ts
│   │   ├── 📂 assessments/
│   │   │   ├── 📂 broker-summary/
│   │   │   │   └── 🔷 route.ts
│   │   │   ├── 📂 report/
│   │   │   │   └── 🔷 route.ts
│   │   │   ├── 📂 report.pdf/
│   │   │   │   └── 🔷 route.ts
│   │   │   ├── 📂 run/
│   │   │   │   └── 🔷 route.ts
│   │   │   └── 📂 whatif/
│   │   │   │   └── 🔷 route.ts
│   │   ├── 📂 auth/
│   │   │   ├── 📂 login/
│   │   │   │   └── 🔷 route.ts
│   │   │   ├── 📂 logout/
│   │   │   │   └── 🔷 route.ts
│   │   │   ├── 📂 me/
│   │   │   │   └── 🔷 route.ts
│   │   │   └── 📂 register/
│   │   │   │   └── 🔷 route.ts
│   │   ├── 📂 dashboard/
│   │   │   ├── 📂 [id]/
│   │   │   │   └── 🔷 route.ts
│   │   │   └── 🔷 route.ts
│   │   ├── 📂 dev/
│   │   │   ├── 📂 demo/
│   │   │   │   └── 🔷 route.ts
│   │   │   ├── 📂 patch-rules-v1/
│   │   │   │   └── 🔷 route.ts
│   │   │   └── 📂 ping-db/
│   │   │   │   └── 🔷 route.ts
│   │   ├── 📂 keys/
│   │   │   └── 🔷 route.ts
│   │   ├── 📂 tipping/
│   │   │   ├── 📂 charters/
│   │   │   │   └── 🔷 route.ts
│   │   │   ├── 📂 stripe/
│   │   │   │   └── 📂 onboard/
│   │   │   │   │   └── 🔷 route.ts
│   │   │   ├── 📂 tip/
│   │   │   │   └── 📂 [token]/
│   │   │   │   │   └── 🔷 route.ts
│   │   │   ├── 📂 webhook/
│   │   │   │   └── 🔷 route.ts
│   │   │   └── 📂 yachts/
│   │   │   │   ├── 📂 [yachtId]/
│   │   │   │   │   └── 📂 crew/
│   │   │   │   │   │   └── 🔷 route.ts
│   │   │   │   └── 🔷 route.ts
│   │   ├── 📂 v1/
│   │   │   ├── 📂 assessments/
│   │   │   │   ├── 📂 [id]/
│   │   │   │   │   └── 🔷 route.ts
│   │   │   │   └── 🔷 route.ts
│   │   │   └── 📂 reports/
│   │   │   │   └── 🔷 route.ts
│   │   ├── 📂 widget/
│   │   │   └── 📂 assess/
│   │   │   │   └── 🔷 route.ts
│   │   └── 📂 wizard/
│   │   │   └── 📂 assess/
│   │   │   │   └── 🔷 route.ts
│   ├── 📂 assessment/
│   │   └── 📂 how-much-yacht-can-i-afford/
│   │   │   └── ⚛️ page.tsx
│   ├── 📂 blog/
│   │   └── ⚛️ page.tsx
│   ├── 📂 boat-finance-calculator/
│   │   └── ⚛️ page.tsx
│   ├── 📂 can-you-finance-a-yacht/
│   │   └── ⚛️ page.tsx
│   ├── 📂 case-studies/
│   │   └── ⚛️ page.tsx
│   ├── 📂 compare/
│   │   ├── 📂 _components/
│   │   │   └── ⚛️ CompareSiloShell.tsx
│   │   ├── 📂 boat-loan-vs-personal-loan/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 loan-vs-leasing-for-yacht-purchases/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 malta-vs-french-leasing/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 new-vs-used-yacht-financing/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ opengraph-image.tsx
│   │   ├── ⚛️ page.tsx
│   │   └── 📂 personal-vs-company-yacht-ownership/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   ├── 🧩 components/
│   │   ├── ⚛️ EmailForm.tsx
│   │   ├── ⚛️ Footer.tsx
│   │   ├── ⚛️ Header.tsx
│   │   ├── ⚛️ HomePageClient.tsx
│   │   ├── ⚛️ LayoutShell.tsx
│   │   ├── ⚛️ MarketingRichPage.tsx
│   │   ├── ⚛️ ScrollWatcher.tsx
│   │   ├── ⚛️ SeoClusterPage.tsx
│   │   └── ⚛️ WaazaAssistant.tsx
│   ├── 📂 dashboard/
│   │   ├── 📂 [id]/
│   │   │   ├── ⚛️ assessment-detail.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ dashboard-client.tsx
│   │   ├── 📄 dashboard-client.tsx.bak
│   │   ├── ⚛️ layout.tsx
│   │   ├── 📄 layout.tsx.bak
│   │   ├── ⚛️ page.tsx
│   │   └── 📂 settings/
│   │   │   ├── ⚛️ page.tsx
│   │   │   └── ⚛️ settings-client.tsx
│   ├── ⚛️ DemoPanel.tsx
│   ├── 📂 documentation/
│   │   ├── ⚛️ opengraph-image.tsx
│   │   └── ⚛️ page.tsx
│   ├── 📂 faq/
│   │   └── ⚛️ page.tsx
│   ├── 🖼️ favicon.ico
│   ├── 📂 financing/
│   │   ├── 📂 _components/
│   │   │   └── ⚛️ FinancingSiloShell.tsx
│   │   ├── 📂 can-you-finance-a-yacht/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 how-to-finance-a-yacht-purchase/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 how-vessel-age-affects-financing/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 how-yacht-financing-works/
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ page.tsx
│   │   ├── 📂 typical-deposit-for-yacht-financing/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 what-is-yacht-financing/
│   │   │   └── ⚛️ page.tsx
│   │   └── 📂 what-lenders-look-for-in-yacht-financing/
│   │   │   └── ⚛️ page.tsx
│   ├── 🎨 globals.css
│   ├── 📂 how-long-can-you-finance-a-yacht/
│   │   └── ⚛️ page.tsx
│   ├── 📂 insurance/
│   │   ├── 📂 _components/
│   │   │   └── ⚛️ InsuranceSiloShell.tsx
│   │   ├── 📂 boat-insurance-cost/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 boat-insurance-uk/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 hull-and-machinery-insurance/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ layout.tsx
│   │   ├── 📂 marine-insurance-companies/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ opengraph-image.tsx
│   │   ├── ⚛️ page.tsx
│   │   ├── 📂 third-party-boat-insurance/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 yacht-insurance-basics/
│   │   │   └── ⚛️ page.tsx
│   │   └── 📂 yacht-insurance-vs-financing-requirements/
│   │   │   └── ⚛️ page.tsx
│   ├── 📂 integrations/
│   │   └── ⚛️ page.tsx
│   ├── ⚛️ layout.tsx
│   ├── 📂 lenders/
│   │   ├── 📂 _components/
│   │   │   └── ⚛️ LendersSiloShell.tsx
│   │   ├── 📂 bnp-paribas-yacht-financing/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 lloyds-bank-yacht-financing/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ opengraph-image.tsx
│   │   ├── ⚛️ page.tsx
│   │   ├── 📂 private-bank-vs-marine-lender/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 what-lenders-look-for-in-a-yacht-loan/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   └── 📂 who-finances-yachts-in-the-uk/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   ├── 📂 login/
│   │   ├── ⚛️ layout.tsx
│   │   └── ⚛️ page.tsx
│   ├── 📂 old/
│   │   └── ⚛️ page.tsx
│   ├── ⚛️ opengraph-image.tsx
│   ├── ⚛️ page.tsx
│   ├── 📂 partners/
│   │   └── ⚛️ page.tsx
│   ├── 📂 platform/
│   │   ├── 📂 broker-dashboard/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 case-tracking/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ opengraph-image.tsx
│   │   ├── 📂 readiness-scoring/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 report-generator/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 rule-engine/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   └── 📂 scenario-modelling/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   ├── 🔷 robots.ts
│   ├── 📂 simulator/
│   │   ├── ⚛️ layout.tsx
│   │   └── ⚛️ page.tsx
│   ├── 🔷 sitemap.ts
│   ├── 📂 solutions/
│   │   ├── 📂 broker-networks/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 buyer-reports/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 finance-advisors/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ opengraph-image.tsx
│   │   ├── 📂 pre-qualification/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 structuring/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   └── 📂 yacht-brokers/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   ├── 📂 structuring/
│   │   ├── 📂 _components/
│   │   │   └── ⚛️ StructuringSiloShell.tsx
│   │   ├── 📂 buying-a-yacht-through-a-company/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ layout.tsx
│   │   ├── 📂 malta-yacht-leasing/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ opengraph-image.tsx
│   │   ├── ⚛️ page.tsx
│   │   ├── 📂 personal-vs-spv-yacht-ownership/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 vat-on-yacht-purchases-in-europe/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   │   └── 📂 yacht-vat-explained/
│   │   │   ├── ⚛️ opengraph-image.tsx
│   │   │   └── ⚛️ page.tsx
│   ├── 📂 superyacht-financing/
│   │   └── ⚛️ page.tsx
│   ├── 📂 tip/
│   │   ├── 📂 [token]/
│   │   │   ├── ⚛️ page.tsx
│   │   │   └── ⚛️ tip-page-client.tsx
│   │   └── ⚛️ layout.tsx
│   ├── 📂 widget/
│   │   ├── 📂 demo/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 findaly/
│   │   │   ├── 📂 demo/
│   │   │   │   └── ⚛️ page.tsx
│   │   │   ├── ⚛️ findaly-widget.tsx
│   │   │   ├── ⚛️ layout.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ layout.tsx
│   │   ├── ⚛️ page.tsx
│   │   └── ⚛️ widget-client.tsx
│   ├── 📂 wizard/
│   │   ├── ⚛️ layout.tsx
│   │   ├── ⚛️ page.tsx
│   │   ├── ⚛️ wizard-client.tsx
│   │   └── 🎨 wizard.css
│   ├── 📂 yacht-finance-calculator/
│   │   └── ⚛️ page.tsx
│   └── 📂 yacht-financing/
│   │   └── ⚛️ page.tsx
├── 🔵 🔍 **eslint.config.mjs**
├── 📄 headers.txt
├── 📚 lib/
│   ├── 🔷 apiAuth.ts
│   ├── 🔷 auth.ts
│   ├── 📂 compare/
│   │   └── 🔷 types.ts
│   ├── 📂 engine/
│   │   ├── 🔷 loanSimulator.ts
│   │   ├── 🔷 rateModel.ts
│   │   ├── 🔷 rules.ts
│   │   └── 🔷 runAssessment.ts
│   ├── 📂 insurance/
│   │   └── 🔷 types.ts
│   ├── 📂 lenders/
│   │   └── 🔷 types.ts
│   ├── ⚛️ og.tsx
│   ├── 📂 pdf/
│   │   └── 🔷 renderAssessmentPdf.ts
│   ├── 🔷 prisma.ts
│   ├── 📂 report/
│   │   └── 🔷 buildReport.ts
│   ├── 📂 seo/
│   │   └── 🔷 schema.ts
│   ├── 🔷 stripe.ts
│   ├── 📂 structuring/
│   │   └── 🔷 types.ts
│   └── 📂 wizard/
│   │   ├── 🔷 defaults.ts
│   │   ├── 🔷 labels.ts
│   │   ├── 🔷 scoring.ts
│   │   └── 🔷 types.ts
├── 🔷 next-env.d.ts
├── 🟡 ▲ **next.config.ts**
├── 🔴 📦 **package.json**
├── ⚙️ pnpm-lock.yaml
├── ⚙️ pnpm-workspace.yaml
├── 📄 postcss.config.mjs
├── 📂 prisma/
│   ├── 📂 migrations/
│   │   ├── 📂 20260210140801_init/
│   │   │   └── 📄 migration.sql
│   │   ├── 📂 20260210144754_assessment_runs/
│   │   │   └── 📄 migration.sql
│   │   ├── 📂 20260212145659_add_user_auth/
│   │   │   └── 📄 migration.sql
│   │   ├── 📂 20260330120538_add_tipping/
│   │   │   └── 📄 migration.sql
│   │   └── ⚙️ migration_lock.toml
│   ├── 📄 schema.prisma
│   ├── 📄 schema.prisma.bak
│   └── 🔷 seed.ts
├── 📖 project_structure.md
├── 🌐 public/
│   ├── 🖼️ assistantavatar.png
│   ├── 🖼️ faviconico.png
│   ├── 🎨 file.svg
│   ├── 🎨 globe.svg
│   ├── 🖼️ hero.png
│   ├── 📂 home/
│   │   ├── 🖼️ waaza-promo-1.jpg
│   │   ├── 🖼️ waaza-promo-10.jpg
│   │   ├── 🖼️ waaza-promo-11.jpg
│   │   ├── 🖼️ waaza-promo-2.jpg
│   │   ├── 🖼️ waaza-promo-3.jpg
│   │   ├── 🖼️ waaza-promo-4.jpg
│   │   ├── 🖼️ waaza-promo-5.jpg
│   │   ├── 🖼️ waaza-promo-6.jpg
│   │   ├── 🖼️ waaza-promo-7.jpg
│   │   ├── 🖼️ waaza-promo-8.jpg
│   │   ├── 🖼️ waaza-promo-9.jpg
│   │   ├── 🖼️ waaza-yacht-financing-tool--1.jpg
│   │   ├── 🖼️ waaza-yacht-financing-tool--10.jpg
│   │   ├── 🖼️ waaza-yacht-financing-tool--11.jpg
│   │   ├── 🖼️ waaza-yacht-financing-tool--2.jpg
│   │   ├── 🖼️ waaza-yacht-financing-tool--3.jpg
│   │   ├── 🖼️ waaza-yacht-financing-tool--4.jpg
│   │   ├── 🖼️ waaza-yacht-financing-tool--5.jpg
│   │   ├── 🖼️ waaza-yacht-financing-tool--6.jpg
│   │   ├── 🖼️ waaza-yacht-financing-tool--7.jpg
│   │   ├── 🖼️ waaza-yacht-financing-tool--8.jpg
│   │   └── 🖼️ waaza-yacht-financing-tool--9.jpg
│   ├── 🖼️ iconpng.png
│   ├── 📂 insurance/
│   │   ├── 🖼️ waaza-insurance-1.png
│   │   ├── 🖼️ waaza-insurance-2.png
│   │   ├── 🖼️ waaza-insurance-3.png
│   │   ├── 🖼️ waaza-insurance-4.png
│   │   ├── 🖼️ waaza-insurance-5.png
│   │   ├── 🖼️ waaza-insurance-6.png
│   │   ├── 🖼️ waaza-insurance-7.png
│   │   └── 🖼️ waaza-insurance-8.png
│   ├── 🎨 next.svg
│   ├── 📂 og/
│   ├── 📂 structuring/
│   │   ├── 🖼️ waaza-insurance-1.png
│   │   ├── 🖼️ waaza-insurance-2.png
│   │   ├── 🖼️ waaza-insurance-3.png
│   │   ├── 🖼️ waaza-insurance-4.png
│   │   ├── 🖼️ waaza-insurance-5.png
│   │   ├── 🖼️ waaza-insurance-6.png
│   │   ├── 🖼️ waaza-insurance-7.png
│   │   └── 🖼️ waaza-insurance-8.png
│   ├── 🎨 vercel3.svg
│   ├── 🖼️ waaza.png
│   └── 🎨 window.svg
├── 🔴 📖 **README.md**
├── 📕 report.pdf
├── 🟡 🔷 **tsconfig.json**
└── 📄 tsconfig.tsbuildinfo
```

## 📖 Legend

### File Types
- 🚫 DevOps: Git ignore
- 📄 Docs: Text files
- ⚙️ Config: JSON files
- 📖 Docs: Markdown files
- ⚛️ React: React TypeScript files
- 🔷 TypeScript: TypeScript files
- 📄 Other: Other files
- 🖼️ Assets: Icon files
- 🎨 Styles: Stylesheets
- ⚙️ Config: YAML files
- ⚙️ Config: TOML files
- 🖼️ Assets: PNG images
- 🎨 Assets: SVG images
- 🖼️ Assets: JPEG images
- 📕 Docs: PDF files

### Importance Levels
- 🔴 Critical: Essential project files
- 🟡 High: Important configuration files
- 🔵 Medium: Helpful but not essential files
