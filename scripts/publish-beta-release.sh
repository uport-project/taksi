#!/bin/bash

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/.."

cd "$PROJECT_DIR"

#npx lerna version prerelease --force-publish --no-git-tag-version --preid beta --yes
npx lerna publish --force-publish --no-git-tag-version --canary --preid beta --yes --pre-dist-tag beta --no-git-reset --create-release github
## tag the release but don't update package.json or changelog files
#git add lerna.json
#git commit -m "chore(beta-release): tag new release [skip ci]"
export TAGNAME="v$(echo "console.log(require('./packages/kerno/package.json').version)" | node)"
git tag $TAGNAME && git push origin $TAGNAME
##git commit -a -m "chore(beta-release): don't push me"
