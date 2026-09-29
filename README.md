# getaiintegrations.com

[![ci](https://github.com/jbisaccia-9/intelligent-integrations-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/jbisaccia-9/intelligent-integrations-hub/actions/workflows/ci.yml)

Source for [getaiintegrations.com](https://getaiintegrations.com) — the portfolio site of
**Joseph Bisaccia**, Lead AI Engineer building secure, governed enterprise AI in
regulated healthcare.

The site is the front door to selected projects from Joseph’s [11 public Python and JavaScript gate repositories](https://github.com/jbisaccia-9):
runnable, tested, CI-checked harnesses with one thesis — **nothing ships until it
passes a gate, and the gate itself must be earned.** This repo holds itself to the same
standard: the site must build, and every repo it links to must exist, before a push lands.

## The gate

| check                                                              | enforced where                                   |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| `npm run build` succeeds                                           | CI on every push/PR                              |
| every `github.com/jbisaccia-9/<repo>` link on the site returns 200 | CI (`scripts/check_links.sh`)                    |
| no secrets, vendor names, or machine paths in tracked content      | local pre-push hook (`scripts/prepush_guard.sh`) |

[`RESULTS.md`](RESULTS.md) is captured output from `scripts/make_results.sh` — regenerated
by script, never hand-edited. Lint/format findings are _reported_ there, not gated: the site
is authored in Lovable, which rewrites formatting on every sync, so a prettier gate would
fail on every regenerated file without saying anything about the site.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # the gate
bash scripts/check_links.sh
```

Install the pre-push guard once per clone:

```bash
cp scripts/prepush_guard.sh .git/hooks/pre-push && chmod +x .git/hooks/pre-push
```

## What the site links to

| repo                                                      | the gate                                                                                                                                                  |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [verify-gate](https://github.com/jbisaccia-9/verify-gate) | document verification requires source facts, disclosure, file fidelity, eligibility, and byte-bound human approval; synthetic counterexamples are refused |
| [fanout-gate](https://github.com/jbisaccia-9/fanout-gate) | private-message delivery refuses invalid inputs and duplicate retries on synthetic fixtures                                                               |
| [rag-gate](https://github.com/jbisaccia-9/rag-gate)       | an index serves only above recall@3 ≥ 0.90 on labeled queries                                                                                             |
| [phi-gate](https://github.com/jbisaccia-9/phi-gate)       | a PHI/PII redaction layer must clear measured recall and precision thresholds                                                                             |
| [kappa-gate](https://github.com/jbisaccia-9/kappa-gate)   | an LLM-as-judge is trusted only above Cohen's κ ≥ 0.70 against hand-authored labels                                                                       |
| [trade-gate](https://github.com/jbisaccia-9/trade-gate)   | no order proceeds while reconciliation, cash, or quote-sanity checks fail                                                                                 |
| [perm-gate](https://github.com/jbisaccia-9/perm-gate)     | zero leaks under scoped credentials; the prompt-layer failure stays demonstrable                                                                          |
| [target-gate](https://github.com/jbisaccia-9/target-gate) | no outbound list is sent until identifiers, freshness, dedupe, and coverage all clear                                                                     |

## Stack

TanStack Start (React 19) · Vite 7 · Tailwind CSS v4 · GSAP ScrollTrigger · deployed on
Lovable Cloud / Cloudflare Workers. Analytics is Google Analytics 4; the `G-…` measurement
ID in `.env` is a public identifier that ships in the page HTML, not a credential — there are
no secrets in this repository or its history.

## Routes

| route                | purpose                                                      |
| -------------------- | ------------------------------------------------------------ |
| `/`                  | scroll narrative: focus, perspective, featured work, contact |
| `/projects`          | professional engagements + the _-gate_ harnesses             |
| `/about`             | career timeline, capabilities, certifications, résumé        |
| `/contact`           | `mailto:` only — no form backend                             |
| `/privacy`, `/terms` | policy pages                                                 |

## What this repo is not

It is not an example of hand-written front-end code — the UI was generated in Lovable and
iterated there. The engineering in this repo is the gate around it, which is the same
thing the rest of the portfolio is about. Client and employer work stays private.

## License

MIT for the source code. Site copy, résumé, videos, and images are © Joseph Bisaccia,
all rights reserved — see [LICENSE](LICENSE).
