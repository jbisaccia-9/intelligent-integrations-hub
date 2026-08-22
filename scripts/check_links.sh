#!/bin/bash
# Link gate: every github.com/jbisaccia-9/<repo> the site references must
# resolve (HTTP 200). A portfolio that links to a repo that isn't public is
# the one overclaim a reviewer catches in one click.
set -uo pipefail
cd "$(git rev-parse --show-toplevel)"
fail=0
# -o prints only the match; -h drops filenames; sort -u dedupes.
for url in $(grep -rhoE 'https://github\.com/jbisaccia-9/[A-Za-z0-9_-]+' src README.md | sort -u); do
  code=$(curl -s -o /dev/null -w '%{http_code}' -L "$url")
  if [ "$code" = "200" ]; then echo "  PASS  $code $url"; else echo "  FAIL  $code $url"; fail=1; fi
done
[ $fail -eq 0 ] && echo "LINK GATE: PASSED - every linked repo resolves." || { echo "LINK GATE: FAILED"; exit 1; }
