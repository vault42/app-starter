# Tauri + Next.js Starter Template

A modern, production-ready desktop application starter using **Tauri 2.0** and **Next.js 16**.

## 🚀 Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Light/Dark mode)

### Desktop (Backend)
- **Engine**: [Tauri 2.0](https://tauri.app/)
- **Language**: [Rust](https://www.rust-lang.org/)

### Quality & Automation
- **Linting**: [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- **CI/CD**: GitHub Actions (Linting, Rust Check)

---

## 📂 Project Structure

- `src/`: Next.js frontend source code.
- `src-tauri/`: Rust backend source code and Tauri configuration.
- `.github/`: CI/CD workflows.

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js 22+](https://nodejs.org/)
- [pnpm 9+](https://pnpm.io/)
- [Rust toolchain](https://www.rust-lang.org/tools/install)
- [Tauri prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites) (System dependencies for your OS)

### Installation
```bash
pnpm install
```

### Development
Start the development server with Tauri:
```bash
pnpm tauri dev
```
*Note: This will launch a desktop window with hot-reloading for both frontend and backend.*

For web-only development:
```bash
pnpm dev
```

### Build
To build the production-ready desktop application:
```bash
pnpm tauri build
```

---

## 🤖 Automation & CI/CD

This project is configured with GitHub Actions to ensure code quality:

1.  **Continuous Integration**: Every Push/PR triggers `.github/workflows/ci.yml` which runs:
    - `pnpm lint`: Frontend style and quality check.
    - `cargo check`: Rust backend validation.

---

## 📄 License

This project is licensed under the MIT License.
