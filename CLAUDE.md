# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev              # Start dev server (all interfaces)
pnpm build            # Type-check + build to ./dist
pnpm preview          # Preview production build locally

# Cloudflare Pages local emulation
pnpm dev-cloud        # Build then serve via wrangler pages dev
```

There is no test or lint command configured.

## Architecture

This is an **Astro 5** portfolio site with **Tailwind CSS v4**, deployed to **Cloudflare Pages**.

### i18n

All content lives in `src/i18n/ui.ts` as a typed object, not in MDX or a CMS. The `UILocale` interface in `src/i18n/types.ts` defines the full shape expected for each locale.

- **English** is the default locale — served at `/` (no prefix)
- **Spanish** is served at `/es/`
- Pages use `getLangFromUrl()` + `useTranslations()` from `src/i18n/utils.ts` to get translated strings
- Section anchor IDs are also localized (e.g., `"experience"` vs `"experiencia"`)
- To add/edit content (experience, projects, bio), edit the `exp` and `projects` arrays inside each locale block in `src/i18n/ui.ts`

### Environment

The `ISPRODUCTION` boolean env variable (defined in `astro.config.mjs` via `envField`) gates Google Analytics injection in `src/layouts/Layout.astro`. It defaults to `false` in dev.

### Path alias

`@/` maps to `src/` (configured in `tsconfig.json`).

### Pages structure

- `/` — English homepage (`src/pages/index.astro`)
- `/es/` — Spanish homepage (`src/pages/es/index.astro`)
- `/components/` — component showcase page (excluded from sitemap)
- `404` — error page

### Key architectural constraint

Components read their content through the i18n system — there are no props for copy text. To change what is displayed, update `src/i18n/ui.ts`. The `UILocale` type enforces both locales stay in sync.
