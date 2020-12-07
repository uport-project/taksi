#!/bin/bash
set -e
set -o pipefail

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/.."

cd "$PROJECT_DIR"

npx lerna publish --conventional-commits --include-merged-tags --no-git-reset  --create-release github --yes
