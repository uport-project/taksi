#!/bin/bash

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/.."

cd "$PROJECT_DIR"

npx lerna version --conventional-commits --conventional-prerelease --force-publish --include-merged-tags --no-push --create-release github --preid beta --yes
# tag the release but don't update package.json or changelog files
git tag $(echo "console.log(require('./lerna.json').version)" | node) && git push --tags
git commit -a -m "chore(beta-release): don't push me"
npx lerna publish from-git --canary --pre-dist-tag beta --no-git-reset --registry https://npm.pkg.github.com/uport-project --yes
