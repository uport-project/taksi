#!/bin/bash
set -e
set -o pipefail

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/.."

cd "$PROJECT_DIR"

npx lerna publish --conventional-prerelease --force-publish --canary --no-git-reset --no-git-tag-version --include-merged-tags --preid next --pre-dist-tag next --yes
