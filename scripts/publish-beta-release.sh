#!/bin/bash

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/.."

cd "$PROJECT_DIR"

#npx lerna version prerelease --force-publish --no-git-tag-version --preid beta --yes
npx lerna publish prerelease --force-publish --no-git-tag-version --canary --preid beta --yes --pre-dist-tag beta --no-git-reset --create-release github --yes
# tag the release but don't update package.json or changelog files
git add lerna.json
git commit -m "chore(beta-release): tag new release [skip ci]"
git tag $(echo "console.log(require('./lerna.json').version)" | node) && git push origin beta --tags
#git commit -a -m "chore(beta-release): don't push me"
