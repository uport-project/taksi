#!/bin/bash

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/.."

cd "$PROJECT_DIR"

npx lerna version --conventional-commits --conventional-prerelease --force-publish --include-merged-tags --no-git-tag-version --create-release github --preid beta --yes
# tag the release but don't update package.json or changelog files
git add lerna.json
git commit -m "chore(beta-release): tag new release [skip ci]"
git tag $(echo "console.log(require('./lerna.json').version)" | node) && git push -u origin beta --tags
git commit -a -m "chore(beta-release): don't push me"
npx lerna publish from-git --canary --pre-dist-tag beta --no-git-reset --yes
