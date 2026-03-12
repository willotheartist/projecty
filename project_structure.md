# 📁 projecty - Project Structure

*Generated on: 12/03/2026, 13:29:44*

## 📋 Quick Overview

| Metric | Value |
|--------|-------|
| 📄 Total Files | 96 |
| 📁 Total Folders | 54 |
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

- 🔷 **.ts** (TypeScript files): 37 files (38.5%)
- ⚛️ **.tsx** (React TypeScript files): 27 files (28.1%)
- 🖼️ **.png** (PNG images): 5 files (5.2%)
- 🎨 **.svg** (SVG images): 5 files (5.2%)
- ⚙️ **.json** (JSON files): 3 files (3.1%)
- 📄 **.sql** (Other files): 3 files (3.1%)
- 📄 **.txt** (Text files): 2 files (2.1%)
- 📖 **.md** (Markdown files): 2 files (2.1%)
- 🎨 **.css** (Stylesheets): 2 files (2.1%)
- 📄 **.mjs** (Other files): 2 files (2.1%)
- ⚙️ **.yaml** (YAML files): 2 files (2.1%)
- 🚫 **.gitignore** (Git ignore): 1 files (1.0%)
- 🖼️ **.ico** (Icon files): 1 files (1.0%)
- ⚙️ **.toml** (TOML files): 1 files (1.0%)
- 📄 **.prisma** (Other files): 1 files (1.0%)
- 📕 **.pdf** (PDF files): 1 files (1.0%)
- 📄 **.tsbuildinfo** (Other files): 1 files (1.0%)

### By Category

- **TypeScript**: 37 files (38.5%)
- **React**: 27 files (28.1%)
- **Assets**: 11 files (11.5%)
- **Other**: 7 files (7.3%)
- **Config**: 6 files (6.3%)
- **Docs**: 5 files (5.2%)
- **Styles**: 2 files (2.1%)
- **DevOps**: 1 files (1.0%)

### 📁 Largest Directories

- **root**: 96 files
- **app**: 51 files
- **app/api**: 21 files
- **lib**: 13 files
- **public**: 10 files

## 🌳 Directory Structure

```
projecty/
├── 🟡 🚫 **.gitignore**
├── 📂 .vercel/
│   ├── ⚙️ project.json
│   └── 📄 README.txt
├── 🚀 app/
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
│   ├── 🧩 components/
│   │   ├── ⚛️ Header.tsx
│   │   ├── ⚛️ LayoutShell.tsx
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
│   ├── 🖼️ favicon.ico
│   ├── 🎨 globals.css
│   ├── ⚛️ layout.tsx
│   ├── 📂 login/
│   │   ├── ⚛️ layout.tsx
│   │   └── ⚛️ page.tsx
│   ├── 📂 old/
│   │   └── ⚛️ page.tsx
│   ├── ⚛️ page.tsx
│   ├── 📂 simulator/
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
│   └── 📂 wizard/
│   │   ├── ⚛️ page.tsx
│   │   ├── ⚛️ wizard-client.tsx
│   │   └── 🎨 wizard.css
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
- 📕 Docs: PDF files

### Importance Levels
- 🔴 Critical: Essential project files
- 🟡 High: Important configuration files
- 🔵 Medium: Helpful but not essential files
