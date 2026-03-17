# 📁 projecty - Project Structure

*Generated on: 16/03/2026, 22:13:07*

## 📋 Quick Overview

| Metric | Value |
|--------|-------|
| 📄 Total Files | 145 |
| 📁 Total Folders | 89 |
| 🌳 Max Depth | 5 levels |
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

- ⚛️ **.tsx** (React TypeScript files): 62 files (42.8%)
- 🔷 **.ts** (TypeScript files): 40 files (27.6%)
- 🖼️ **.jpg** (JPEG images): 11 files (7.6%)
- 🖼️ **.png** (PNG images): 5 files (3.4%)
- 🎨 **.svg** (SVG images): 5 files (3.4%)
- ⚙️ **.json** (JSON files): 3 files (2.1%)
- 📄 **.sql** (Other files): 3 files (2.1%)
- 📄 **.txt** (Text files): 2 files (1.4%)
- 📖 **.md** (Markdown files): 2 files (1.4%)
- 🎨 **.css** (Stylesheets): 2 files (1.4%)
- 📄 **.mjs** (Other files): 2 files (1.4%)
- ⚙️ **.yaml** (YAML files): 2 files (1.4%)
- 🚫 **.gitignore** (Git ignore): 1 files (0.7%)
- 🖼️ **.ico** (Icon files): 1 files (0.7%)
- ⚙️ **.toml** (TOML files): 1 files (0.7%)
- 📄 **.prisma** (Other files): 1 files (0.7%)
- 📕 **.pdf** (PDF files): 1 files (0.7%)
- 📄 **.tsbuildinfo** (Other files): 1 files (0.7%)

### By Category

- **React**: 62 files (42.8%)
- **TypeScript**: 40 files (27.6%)
- **Assets**: 22 files (15.2%)
- **Other**: 7 files (4.8%)
- **Config**: 6 files (4.1%)
- **Docs**: 5 files (3.4%)
- **Styles**: 2 files (1.4%)
- **DevOps**: 1 files (0.7%)

### 📁 Largest Directories

- **root**: 145 files
- **app**: 88 files
- **app/api**: 21 files
- **public**: 21 files
- **lib**: 14 files

## 🌳 Directory Structure

```
projecty/
├── 🟡 🚫 **.gitignore**
├── 📂 .vercel/
│   ├── ⚙️ project.json
│   └── 📄 README.txt
├── 🚀 app/
│   ├── 📂 about/
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
│   ├── 📂 blog/
│   │   └── ⚛️ page.tsx
│   ├── 📂 boat-finance-calculator/
│   │   └── ⚛️ page.tsx
│   ├── 📂 can-you-finance-a-yacht/
│   │   └── ⚛️ page.tsx
│   ├── 📂 case-studies/
│   │   └── ⚛️ page.tsx
│   ├── 🧩 components/
│   │   ├── ⚛️ Header.tsx
│   │   ├── ⚛️ LayoutShell.tsx
│   │   ├── ⚛️ MarketingRichPage.tsx
│   │   ├── ⚛️ SeoClusterPage.tsx
│   │   └── ⚛️ WaazaAssistant.tsx
│   ├── 📂 dashboard/
│   │   ├── 📂 [id]/
│   │   │   ├── ⚛️ assessment-detail.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── ⚛️ dashboard-client.tsx
│   │   ├── ⚛️ layout.tsx
│   │   ├── ⚛️ page.tsx
│   │   └── 📂 settings/
│   │   │   ├── ⚛️ page.tsx
│   │   │   └── ⚛️ settings-client.tsx
│   ├── ⚛️ DemoPanel.tsx
│   ├── 📂 documentation/
│   │   └── ⚛️ page.tsx
│   ├── 📂 faq/
│   │   └── ⚛️ page.tsx
│   ├── 🖼️ favicon.ico
│   ├── 📂 financing/
│   │   ├── 📂 _components/
│   │   │   └── ⚛️ FinancingSiloShell.tsx
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
│   ├── 📂 integrations/
│   │   └── ⚛️ page.tsx
│   ├── ⚛️ layout.tsx
│   ├── 📂 login/
│   │   ├── ⚛️ layout.tsx
│   │   └── ⚛️ page.tsx
│   ├── 📂 old/
│   │   └── ⚛️ page.tsx
│   ├── ⚛️ page.tsx
│   ├── 📂 partners/
│   │   └── ⚛️ page.tsx
│   ├── 📂 platform/
│   │   ├── 📂 broker-dashboard/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 case-tracking/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 readiness-scoring/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 report-generator/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 rule-engine/
│   │   │   └── ⚛️ page.tsx
│   │   └── 📂 scenario-modelling/
│   │   │   └── ⚛️ page.tsx
│   ├── 🔷 robots.ts
│   ├── 📂 simulator/
│   │   ├── ⚛️ layout.tsx
│   │   └── ⚛️ page.tsx
│   ├── 🔷 sitemap.ts
│   ├── 📂 solutions/
│   │   ├── 📂 broker-networks/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 buyer-reports/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 finance-advisors/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 pre-qualification/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 structuring/
│   │   │   └── ⚛️ page.tsx
│   │   └── 📂 yacht-brokers/
│   │   │   └── ⚛️ page.tsx
│   ├── 📂 superyacht-financing/
│   │   └── ⚛️ page.tsx
│   ├── 📂 v2/
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
│   ├── 📂 engine/
│   │   ├── 🔷 loanSimulator.ts
│   │   ├── 🔷 rateModel.ts
│   │   ├── 🔷 rules.ts
│   │   └── 🔷 runAssessment.ts
│   ├── 📂 pdf/
│   │   └── 🔷 renderAssessmentPdf.ts
│   ├── 🔷 prisma.ts
│   ├── 📂 report/
│   │   └── 🔷 buildReport.ts
│   ├── 📂 seo/
│   │   └── 🔷 schema.ts
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
│   │   └── ⚙️ migration_lock.toml
│   ├── 📄 schema.prisma
│   └── 🔷 seed.ts
├── 📖 project_structure.md
├── 🌐 public/
│   ├── 🖼️ assistantavatar.png
│   ├── 🖼️ faviconico.png
│   ├── 🎨 file.svg
│   ├── 🎨 globe.svg
│   ├── 🖼️ hero.png
│   ├── 📂 home/
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
│   ├── 🎨 next.svg
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
- 🖼️ Assets: Icon files
- 🎨 Styles: Stylesheets
- 📄 Other: Other files
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
