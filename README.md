# Multi-Template Repository

A collection of application templates and starters designed to be pulled via `degit` or initialized with Agent Skills.

## 🚀 Usage

You can instantly scaffold any project template from this repository using `degit`:

```bash
# General syntax
npx degit 42arch/app-starter/<template-name> <my-project-name>

# Example: Scaffold a Next.js starter
npx degit 42arch/app-starter/web-nextjs-starter my-next-app
```

---

## 📁 Repository Structure

Each top-level directory in this repository is an independent, production-ready project template:

```text
app-starter/
├── web-nextjs-starter/     # Next.js 16 + Tailwind CSS + shadcn/ui starter
├── tauri-starter/          # Tauri 2.0 (Rust) + Next.js desktop starter
├── pnpm-workspace.yaml     # Monorepo workspace configuration
├── package.json            # Root scripts for building/testing all templates
└── README.md
```

---

## 🛠️ Maintenance & Development

This repository uses **pnpm workspaces** for unified dependency management and automated build verification.

### Run recursive commands across all templates:

```bash
# Install dependencies for all templates
pnpm install

# Build all templates to ensure no broken code
pnpm run build:all

# Lint all templates
pnpm run lint:all
```

---

## ➕ Adding a New Template

1. Create a new directory at the repository root: `mkdir my-new-starter`
2. Place your project boilerplate code inside `my-new-starter/` (include `package.json`, `README.md`, etc.).
3. Test locally using `pnpm run build:all`.
4. Commit and push your changes. The template will immediately be available via `degit 42arch/app-starter/my-new-starter`.
