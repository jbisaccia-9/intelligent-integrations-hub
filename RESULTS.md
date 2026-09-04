# Results

Generated 2026-09-01 by `scripts/make_results.sh` — every block below is captured command output, not prose.

## Build (the gate)

`npm run build` — exit 0

```
.output/server/_libs/three.mjs                          1,066.72 kB
✓ built in 1.91s

[nitro]  WARN  [cloudflare] Wrangler config main is overridden and will be ignored.

ℹ Generated .output/server/wrangler.json
ℹ Generated .wrangler/deploy/config.json
ℹ Generated .output/public/_headers
ℹ Generated .output/nitro.json

[nitro] ✔ You can preview this build using npx vite preview
[nitro] ✔ You can deploy this build using npx nitro deploy --prebuilt
```

## Lint (reported, not gated)

`npm run lint` — exit 1

```
✖ 265 problems (259 errors, 6 warnings)
  259 errors and 0 warnings potentially fixable with the `--fix` option.

```

## Link gate

`bash scripts/check_links.sh` — exit 0

```
  PASS  200 https://github.com/jbisaccia-9/intelligent-integrations-hub
  PASS  200 https://github.com/jbisaccia-9/kappa-gate
  PASS  200 https://github.com/jbisaccia-9/perm-gate
  PASS  200 https://github.com/jbisaccia-9/phi-gate
  PASS  200 https://github.com/jbisaccia-9/rag-gate
  PASS  200 https://github.com/jbisaccia-9/roi-gate
  PASS  200 https://github.com/jbisaccia-9/target-gate
  PASS  200 https://github.com/jbisaccia-9/trade-gate
LINK GATE: PASSED - every linked repo resolves.
```

