# Agent notes

- pnpm 12 ignores the `pnpm` field in `package.json`. Put dependency `overrides` and `allowBuilds` (build-script approvals) in `pnpm-workspace.yaml`. Without `allowBuilds`, `pnpm i` fails with `ERR_PNPM_IGNORED_BUILDS` for `esbuild` and `workerd`, and both are needed by Astro and Wrangler.
- Cloudflare's build image defaults to pnpm 10.11.1, which rejects a `pnpm-workspace.yaml` without a `packages` field ("packages field missing or empty"). The project pins pnpm 12 with `packageManager` in `package.json`. The `PNPM_VERSION` env var in the Cloudflare dashboard must also match.
