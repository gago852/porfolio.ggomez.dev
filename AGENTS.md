# Agent notes

- pnpm 12 ignores the `pnpm` field in `package.json`. Put dependency `overrides` and `allowBuilds` (build-script approvals) in `pnpm-workspace.yaml`. Without `allowBuilds`, `pnpm i` fails with `ERR_PNPM_IGNORED_BUILDS` for `esbuild` and `workerd`, and both are needed by Astro and Wrangler.
- Cloudflare's build image defaults to pnpm 10.11.1, which rejects a `pnpm-workspace.yaml` without a `packages` field ("packages field missing or empty"). The project pins pnpm 12 with `packageManager` in `package.json`, and Cloudflare honors it, so no `PNPM_VERSION` env var is needed in the dashboard.
- `pnpm-lock.yaml` records the `packageManager` version (pnpm 12 adds a `packageManagerDependencies` block at the top). After changing `packageManager`, run `pnpm i` and commit the lockfile, or Cloudflare's `pnpm install --frozen-lockfile` fails with a lockfile mismatch.
