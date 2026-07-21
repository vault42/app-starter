# Vite React Starter

This is a modern, high-performance Vite + React starter template project designed to help developers build React 19 applications rapidly. It integrates industry best practices and a suite of high-quality fundamental libraries out of the box.

## 🚀 Features

- **Vite & React 19** - Enjoy blazing-fast Hot Module Replacement (HMR) and the latest features of React 19.
- **Tailwind CSS v4** - Next-generation utility-first CSS framework for rapid and agile styling.
- **shadcn/ui Integration** - Pre-configured premium, accessible modern components (such as Card, Button, and DropdownMenu) built on top of Radix UI.
- **Zustand State Management** - Lightweight, blazing-fast state management with zero boilerplate, pre-configured with the `persist` middleware for out-of-the-box local storage synchronization.
- **react-intl Localization** - A lightweight localization solution leveraging the browser's native `Intl` APIs, fully translated in Chinese & English with dynamic switching.
- **Dark Mode Support** - Full dark/light and system preference theme switching logic.
- **Linting & Code Quality** - Pre-configured with a modern ESLint setup for uniform coding styles.

## 📂 Project Structure

```text
src/
├── components/          # Shared components (contains shadcn UI and Toggle controls)
│   ├── ui/              # shadcn UI core components (card, button, dropdown-menu, etc.)
│   ├── mode-toggle.tsx  # Dark/Light theme toggle component
│   └── language-toggle.tsx # English/Chinese language switch component
├── hooks/               # Custom global React Hooks
├── lib/                 # Utility functions (utils.ts)
├── locales/             # Localization language packets (zh.json, en.json)
├── pages/               # Page view components (Home.tsx)
├── store/               # Zustand store directory (useLocaleStore.ts)
├── App.tsx              # App entry component configuring Providers
└── main.tsx             # Root entry script loading configurations
```

## 🛠 Available Scripts

In the project root directory, you can run the following commands:

```bash
# Start the local development server
pnpm dev

# Perform TypeScript type checks and build for production
pnpm build

# Run ESLint code quality checks
pnpm lint

# Automatically fix code formatting and lint errors
pnpm lint:fix

# Preview the built production application locally
pnpm preview
```
