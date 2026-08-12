# AGENTS.md — Vercel Deployment

This Next.js app failed Vercel production builds. Root causes, the fixes that have
been applied, and the rules to keep so it keeps deploying.

## Root causes (why it failed)

1. **framer-motion / motion-dom version mismatch (the build breaker)**
   - `package.json` requested `framer-motion@^13.1.0`, but a `pnpm.overrides` block
     force-pinned `motion-dom` to **`12.23.23`**.
   - `framer-motion@13.x` imports `motion-dom@13.x`-only exports (`Feature`,
     `supportsViewTimeline`, `supportsScrollTimeline`, `VisualElementDragControls`,
     etc.). These don't exist in `motion-dom@12.x`.
   - `next build` failed with 93 Turbopack errors of the form
     *"Export X doesn't exist in target module"*
     (`node_modules/.pnpm/motion-dom@12.23.23/...`).

2. **Stale lockfile inconsistent with `package.json`**
   - `pnpm-lock.yaml` still resolved `framer-motion` as `12.23.26` while
     `package.json` declared `^13.1.0`. A `pnpm install --frozen-lockfile` (the
     default on Vercel) would either fail the integrity check or install the
     wrong/mismatched versions.

3. **Multiple lockfiles**
   - `package-lock.json` and `pnpm-lock.yaml` both existed. This is ambiguous for
     Vercel's framework detection and made Next.js/Turbopack pick the wrong
     workspace root ("We detected multiple lockfiles...").

## Fixes already applied

- `package.json`
  - Removed the `pnpm.overrides` → `motion-dom: 12.23.23` pin.
  - Removed the direct `motion-dom` / `motion-utils` dependencies (they are
    transitive deps of `framer-motion`; only `framer-motion` is imported in code).
  - Kept `framer-motion: ^13.1.0` and added `"engines": { "node": ">=18.18.0" }`.
- `pnpm-lock.yaml` regenerated so it resolves `framer-motion@13.1.0` with
  `motion-dom@13.0.0` / `motion-utils@13.0.0` and matches `package.json`.
- `package-lock.json` deleted — pnpm is the only package manager (see
  `packageManager` in `package.json`). Never add it back.
- Deleted stray `/Users/howardchen/pnpm-workspace.yaml` and
  `/Users/howardchen/pnpm-lock.yaml` (accidental artifacts from an interrupted
  `pnpm install` run in the home directory). A malformed `pnpm-workspace.yaml`
  anywhere in the parent path breaks every `pnpm install`
  (`ERR_PNPM_IGNORED_BUILDS` / "packages field missing or empty") and confuses
  Turbopack's workspace-root detection.

## How it was verified

```
pnpm install --frozen-lockfile   # clean install from lockfile (like Vercel)
pnpm build                       # next build
```

`next build` now completes: all routes (`/`, `/about`, `/commitments`,
`/contact`, `/leadership`) compile and prerender as static pages.

## Rules / conventions (keep these)

- **Never downgrade `motion-dom`.** `framer-motion` and `motion-dom`/`motion-utils`
  must always resolve to the same major version (currently `13.x`). Do not use
  `pnpm.overrides` to pin `motion-dom` below `framer-motion`'s requirement.
- **Keep a single lockfile.** Only `pnpm-lock.yaml`; do not commit
  `package-lock.json` or `yarn.lock`.
- **Keep the lockfile in sync with `package.json`.** After any dependency change
  run `pnpm install` (not `--frozen-lockfile`) and commit the updated lockfile.
  Use `pnpm install --frozen-lockfile` for CI/clean checks.
- **Use pnpm**, not npm, when installing (`packageManager: pnpm@9.15.0`).
- **Version pins that must move together** (framer-motion ↔ motion-dom
  ↔ motion-utils): bump all three at once, then regenerate the lockfile.
- `pnpm` 11+ on your local machine reports `ERR_PNPM_IGNORED_BUILDS` for
  transitive build scripts (e.g. `@firebase/util`, `protobufjs`); this is a local
  pnpm-11-only check and does not affect Vercel (it uses pnpm 9.15.0 per
  `packageManager`). Prefer pnpm@9.15.0 locally (e.g. `corepack use`,
  `pnpm@9.15.0` via Corepack) to match Vercel.

## Deployment prerequisites

- No extra `vercel.json` is required; Vercel auto-detects the Next.js framework
  and `pnpm`.
- `next.config.mjs` intentionally sets `typescript.ignoreBuildErrors: true` and
  `images.unoptimized: true` — harmless for Vercel, leave as-is.
- Push the committed `package.json` + regenerated `pnpm-lock.yaml`; Vercel will do
  `pnpm install --frozen-lockfile` then `next build`.