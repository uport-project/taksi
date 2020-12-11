#!/bin/bash
set -e
set -o pipefail

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/.."
cd "$PROJECT_DIR"

git remote set-url origin https://uport-project:$GH_TOKEN@github.com/uport-project/taksi.git
git config user.email $GH_EMAIL
git config user.name $GH_USER
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc

npx lerna publish --conventional-commits --include-merged-tags --no-git-reset  --create-release github --yes
