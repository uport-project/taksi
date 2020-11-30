#!/bin/bash

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/.."

cd "$PROJECT_DIR"

npx lerna version --conventional-commits --conventional-graduate --include-merged-tags --create-release github --yes
npx lerna publish from-git --no-git-reset --include-merged-tags --yes
