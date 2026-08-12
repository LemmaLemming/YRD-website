# AGENT INSTRUCTIONS FOR THIS REPOSITORY

This repository uses **Next.js** and is deployed to **Vercel**.

## Package Management & Deployment Environment
1. **STRICTLY USE PNPM:** You must only use `pnpm` for package management (`pnpm install`, `pnpm add`, `pnpm run build`, etc.).
2. **NO NPM:** Do not use `npm` or `yarn`.
3. **NO PACKAGE-LOCK.JSON:** Ensure `package-lock.json` or `yarn.lock` are NEVER created or committed. The only lockfile allowed is `pnpm-lock.yaml`.

## Known Dependency Quirks
- **Framer Motion:** If you add or update `framer-motion`, Vercel builds may fail due to unresolved internal dependencies like `motion-dom` or `motion-utils`. You must explicitly add them to `package.json` (`pnpm add framer-motion motion-dom motion-utils`). Ensure their versions are compatible (e.g. `motion-dom` version 13.0.0 matches `framer-motion` 13.x).
- **Build Commands:** Use `pnpm build` to verify that production builds will succeed on Vercel.

## Core Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (v4)
- **Animations:** framer-motion
- **Components:** Radix UI / shadcn/ui patterns
- **Scrolling:** Lenis
