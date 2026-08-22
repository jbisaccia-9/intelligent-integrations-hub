#!/bin/bash
# Regenerates RESULTS.md from captured command output. Never hand-edit RESULTS.md.
set -uo pipefail
cd "$(git rev-parse --show-toplevel)"
out=RESULTS.md
root=$(pwd)
run() {  # run <title> <lines> <cmd...>  - captures exit code + last N lines of output
  local title="$1"; local n="$2"; shift 2
  local tmp; tmp=$(mktemp)
  "$@" >"$tmp" 2>&1; local rc=$?
  { echo "## $title"; echo; echo "\`$*\` — exit $rc"; echo; echo '```'; tail -n "$n" "$tmp" | sed -E "s/\x1b\[[0-9;]*m//g; s#$root#.#g"; echo '```'; echo; } >>"$out"
  rm -f "$tmp"
}
{ echo "# Results"; echo; echo "Generated $(date +%F) by \`scripts/make_results.sh\` — every block below is captured command output, not prose."; echo; } >"$out"
run "Build (the gate)" 12 npm run build
# Only the summary: the full list is formatting noise from the site generator.
run "Lint (reported, not gated)" 3 npm run lint
run "Link gate" 12 bash scripts/check_links.sh
echo "wrote $out"
