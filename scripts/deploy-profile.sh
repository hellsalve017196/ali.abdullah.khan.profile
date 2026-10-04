#!/usr/bin/env bash
# Deploy the public profile (README + markdown) into a target folder . normally a
# clone of the GitHub profile repo (hellsalve017196/hellsalve017196), so that
# README.md renders as the GitHub profile page.
#
# Usage:
#   scripts/deploy-profile.sh <target-dir>
#
# Env:
#   SKIP_LINK_CHECK=1   skip `npm run check:links` before copying
#
# Exclusions come from .deployignore (one glob per line, case-insensitive,
# matched against repo-relative paths).
set -euo pipefail

TARGET="${1:-}"
if [[ -z "$TARGET" ]]; then
  echo "usage: $0 <target-dir>" >&2
  exit 2
fi
if [[ ! -d "$TARGET" ]]; then
  echo "target '$TARGET' does not exist" >&2
  exit 2
fi

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"
TARGET="$(cd "$TARGET" && pwd)"

IGNORE_FILE="$REPO_ROOT/.deployignore"
[[ -f "$IGNORE_FILE" ]] || { echo ".deployignore missing" >&2; exit 1; }

PATTERNS=()
while IFS= read -r line; do
  PATTERNS+=("$line")
done < <(grep -Ev '^[[:space:]]*(#|$)' "$IGNORE_FILE" | sed 's/[[:space:]]*$//')

is_ignored() {
  local p="$1" pat g rest
  shopt -s nocasematch
  for pat in "${PATTERNS[@]}"; do
    g="$pat"
    # shellcheck disable=SC2053
    if [[ "$p" == $g ]]; then shopt -u nocasematch; return 0; fi
    if [[ "$g" == \*\*/* ]]; then
      rest="${g#\*\*/}"
      # shellcheck disable=SC2053
      if [[ "$p" == $rest || "$p" == */$rest ]]; then shopt -u nocasematch; return 0; fi
    fi
  done
  shopt -u nocasematch
  return 1
}

if [[ "${SKIP_LINK_CHECK:-0}" != "1" ]]; then
  echo "[1/3] Link check..."
  npm run --silent check:links
fi

echo "[2/3] Copying files to $TARGET ..."
COUNT=0
while IFS= read -r -d '' file; do
  rel="${file#./}"
  [[ "$rel" == .git/* ]] && continue
  is_ignored "$rel" && continue
  dest="$TARGET/$rel"
  mkdir -p "$(dirname "$dest")"
  cp -f "$file" "$dest"
  COUNT=$((COUNT + 1))
done < <(find . -type f -not -path './.git/*' -print0)

echo "[3/3] Copied $COUNT files."
