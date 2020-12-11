# Monorepo release automation sandbox

## What's here

* we have a `master` branch that can automatically publish using lerna conventional commits
* and a `beta` branch that pushes canary releases only to npm
* whenever a push is made to `master`, it is merged back to `beta`
  as long as there are no conflicts (using a github action)

## Gotchas

With `lerna`, semantic release only gets triggered when there are relevant changes in packages.
Relevant changes mean non-whitespace changes in package source files.
Commits that don't respect this are ignored when it decides if a new version is cut,
even if they have the proper conventional commit message.

Also, tags that appear between the previous and current releases screw up this process.
Only commits between that tag and the HEAD are considered, ignoring the commits between the
previous release and the tag.

## Suggested workflows

With the setup that exists in this repo, one can switch between several workflows.
Ideally just adopt one and stick to it, but one is not forced to do that.

Use squash-merge for PRs and merge commits between `master` and `beta`.
Squash-merging allows maintainers to reformat commit messages to add references to
issues and signal breaking changes.
Merge commits between `master` and `beta` are useful for long-running beta development.

### 1. continuous semver

* use the `master` branch with continuous integration for everything
* this is the non-romantic recommendation from semantic-release,
  only applied to all packages at once using lerna
  
**PRO**:
  maintainers don't get attached to release numbers

**CON**:
  some users may find it hard to keep up 

### 2. continuous semver for minor and patch, predictable major

* use main branch with continuous integration for fixes and features
* use beta branch for breaking changes
  In practice, we would have to figure out which PRs create breaking changes and rebase them on `beta`
  as well as taking care to use proper commit message discipline
* breaking changes can be merged back into main predictably by making a PR from `beta` to `master`
  This triggers the usual semantic release that will bump the major version

**PRO**:
  maintainers don't get attached to most release numbers, and breaking changes can be grouped together

**CON**:
  greater attention is needed to make sure that PRs are based on the proper branch

### 3. `@next` and `@latest`

* always develop against the `beta` branch which would trigger automatic `@next` releases
* merge `beta` back into `main` periodically to turn `@next` into the official `@latest`

**PRO**:
  allows predictable release cycles, while relieving maintainers from the burden of release numbers  

**CON**:
  too many releases
