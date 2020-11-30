#!/bin/bash

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/.."

cd "$PROJECT_DIR"

npx lerna version --conventional-commits --conventional-prerelease --force-publish --include-merged-tags --no-git-tag-version --no-push --create-release github --preid beta --yes
npx lerna publish from-git --canary --pre-dist-tag beta --no-git-reset --yes
