# Agent notes

- pnpm 12 ignores the `pnpm` field in `package.json`. Put dependency `overrides` and `allowBuilds` (build-script approvals) in `pnpm-workspace.yaml`. Without `allowBuilds`, `pnpm i` fails with `ERR_PNPM_IGNORED_BUILDS` for `esbuild` and `workerd`, and both are needed by Astro and Wrangler.
