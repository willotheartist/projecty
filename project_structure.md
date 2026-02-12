# 📁 projecty - Project Structure

*Generated on: 12/02/2026, 15:44:45*

## 📋 Quick Overview

| Metric | Value |
|--------|-------|
| 📄 Total Files | 63 |
| 📁 Total Folders | 31 |
| 🌳 Max Depth | 4 levels |
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

- 🔷 **.ts** (TypeScript files): 24 files (38.1%)
- ⚛️ **.tsx** (React TypeScript files): 9 files (14.3%)
- 🖼️ **.png** (PNG images): 5 files (7.9%)
- 🎨 **.svg** (SVG images): 5 files (7.9%)
- ⚙️ **.json** (JSON files): 3 files (4.8%)
- 📄 **.txt** (Text files): 2 files (3.2%)
- 📖 **.md** (Markdown files): 2 files (3.2%)
- 🎨 **.css** (Stylesheets): 2 files (3.2%)
- 📄 **.mjs** (Other files): 2 files (3.2%)
- ⚙️ **.yaml** (YAML files): 2 files (3.2%)
- 📄 **.sql** (Other files): 2 files (3.2%)
- 🚫 **.gitignore** (Git ignore): 1 files (1.6%)
- 🖼️ **.ico** (Icon files): 1 files (1.6%)
- ⚙️ **.toml** (TOML files): 1 files (1.6%)
- 📄 **.prisma** (Other files): 1 files (1.6%)
- 📕 **.pdf** (PDF files): 1 files (1.6%)

### By Category

- **TypeScript**: 24 files (38.1%)
- **Assets**: 11 files (17.5%)
- **React**: 9 files (14.3%)
- **Config**: 6 files (9.5%)
- **Docs**: 5 files (7.9%)
- **Other**: 5 files (7.9%)
- **Styles**: 2 files (3.2%)
- **DevOps**: 1 files (1.6%)

### 📁 Largest Directories

- **root**: 63 files
- **app**: 22 files
- **lib**: 11 files
- **app/api**: 10 files
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
│   │   ├── 📂 dev/
│   │   │   ├── 📂 demo/
│   │   │   │   └── 🔷 route.ts
│   │   │   ├── 📂 patch-rules-v1/
│   │   │   │   └── 🔷 route.ts
│   │   │   └── 📂 ping-db/
│   │   │   │   └── 🔷 route.ts
│   │   └── 📂 wizard/
│   │   │   └── 📂 assess/
│   │   │   │   └── 🔷 route.ts
│   ├── 🧩 components/
│   │   ├── ⚛️ Header.tsx
│   │   └── ⚛️ WaazaAssistant.tsx
│   ├── ⚛️ DemoPanel.tsx
│   ├── 🖼️ favicon.ico
│   ├── 🎨 globals.css
│   ├── ⚛️ layout.tsx
│   ├── 📂 old/
│   │   └── ⚛️ page.tsx
│   ├── ⚛️ page.tsx
│   ├── 📂 simulator/
│   │   └── ⚛️ page.tsx
│   ├── 📂 v2/
│   └── 📂 wizard/
│   │   ├── ⚛️ page.tsx
│   │   ├── ⚛️ wizard-client.tsx
│   │   └── 🎨 wizard.css
├── 🔵 🔍 **eslint.config.mjs**
├── 📄 headers.txt
├── 📚 lib/
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
└── 🟡 🔷 **tsconfig.json**
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
