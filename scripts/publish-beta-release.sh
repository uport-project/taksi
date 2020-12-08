#!/bin/bash
set -e
set -o pipefail

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/.."

cd "$PROJECT_DIR"

npx lerna publish --force-publish --no-git-tag-version --canary --preid beta --yes --pre-dist-tag beta --no-git-reset --create-release github
## tag the prerelease with "v${version}"
export TAGNAME="pre$(echo "console.log(require('./packages/kerno/package.json').version)" | node)"
git tag $TAGNAME && git push origin $TAGNAME
