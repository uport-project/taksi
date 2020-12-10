#!/bin/bash
set -e
set -o pipefail

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/.."

cd "$PROJECT_DIR"

npx lerna version --canary --force-publish --preid beta --create-release github --tag-version-prefix 'pre' --yes
npx lerna publish from-git --pre-dist-tag beta --tag-version-prefix 'pre' --yes
#npx lerna publish --force-publish --canary --preid beta --pre-dist-tag latest --create-release github --tag-version-prefix 'pre' --yes

# npx lerna publish --force-publish --no-git-tag-version --canary --preid beta --yes --pre-dist-tag beta --no-git-reset --create-release github
# ## tag the prerelease with "v${version}"
# export TAGNAME="pre$(echo "console.log(require('./packages/kerno/package.json').version)" | node)"
# git tag $TAGNAME && git push origin $TAGNAME

# npx lerna publish --force-publish --canary --preid beta --pre-dist-tag latest --create-prerelease github --yes