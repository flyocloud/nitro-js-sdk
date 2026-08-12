# AGENTS.md

Working notes for agents and humans touching this repository.

## What this repository is

**Almost everything here is generated.** `src/` and `docs/` are produced by
[OpenAPI Generator](https://openapi-generator.tech) from the live Nitro spec at
`https://api.flyo.cloud/nitro/v1/openapi`. Hand-editing a file under `src/` or
`docs/` works right up until the next regeneration silently reverts it.

Fix the upstream OpenAPI spec, then regenerate. If a change genuinely cannot come
from the spec, it belongs in a file the generator does not own.

Files the generator will **not** overwrite (listed in `.openapi-generator-ignore`):

```
test/  .travis.yml  git_push.sh  mocha.opts  README.md  package.json
```

`AGENTS.md`, `UPGRADE.md`, `vite.config.js` and everything under `.github/` are
also safe — the generator has no template for them.

## Regenerating the SDK

### Prerequisites

`generate.sh` calls `openapi-generator-cli`, which is **not** a dependency of this
package. It also needs a JRE, because the generator itself is a Java jar that the
CLI downloads on first run.

```sh
npm install --no-save @openapitools/openapi-generator-cli
export PATH="$PWD/node_modules/.bin:$PATH"
```

`openapitools.json` pins the *generator* to 7.5.0. That pin is deliberate — it
keeps a regeneration diff limited to real spec changes instead of mixing in
template churn. Do not bump it in the same commit as a spec update; if the
generator needs upgrading, do it alone so the template diff is reviewable.

### The procedure

```sh
./generate.sh
```

**The generator only writes files. It never deletes them.** When a schema
disappears upstream, its `src/model/*.js` and `docs/*.md` stay behind, keep
getting exported from `src/index.js`, and quietly rot. Removing them is a manual
step and it is the easiest part of this process to forget.

`.openapi-generator/FILES` is the manifest of everything the generator just
wrote, so diffing it before and after finds the orphans:

```sh
comm -23 <(git show HEAD:.openapi-generator/FILES | sort) \
         <(sort .openapi-generator/FILES)
```

`git rm` whatever that prints, then confirm nothing still references the removed
names:

```sh
grep -rn 'RemovedModelName' src/ docs/
npm run build
```

`npm run build` (vite) is the only check this repo has — there is no test suite,
and `npm test` is not a defined script. A successful build plus a clean grep is
the bar.

### After regenerating

1. Read the diff on `src/index.js` first. It is the public surface, so every
   added, removed or renamed export shows up there in one place.
2. Decide whether removals or renames occurred. If so, the change is **breaking**
   and `UPGRADE.md` is mandatory (see below).
3. Set the version in `package.json` to match. The generator never touches it.

## Commit convention

Commits follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <subject>

<body — why, not what>

<optional BREAKING CHANGE: footer>
```

Types in use here:

| Type | Use for | Version implication |
| --- | --- | --- |
| `feat` | new endpoint, model or exported capability | minor |
| `fix` | corrected behavior in generated or hand-written code | patch |
| `chore` | regeneration with no public surface change, tooling, deps | patch |
| `ci` | workflow changes | none |
| `docs` | README, UPGRADE.md, this file | none |
| `build` | vite config, packaging, lockfiles | patch |

Mark a breaking change either with `!` after the type (`feat!:`) or a
`BREAKING CHANGE:` footer — preferably both, since the `!` is what a reader sees
in a one-line log.

```
feat!: regenerate from Nitro OpenAPI 2.28

Removed the eight Field* exports, renamed BlockSlots -> BlockSlot,
PageBreadcrumbInner -> Breadcrumb and PagesInner -> ContainerPage.

BREAKING CHANGE: Meta.image is now a MetaImage oneOf wrapper rather than
a String. See UPGRADE.md for the migration.
```

**These types do not compute the version automatically.** Releases here are
tag-driven, not `semantic-release` — a human or agent picks the version and the
convention only informs that choice. Do not assume a `feat:` commit bumps
anything on its own.

Write the body to explain *why*. The diff already shows what changed, and for a
regeneration the diff is thousands of lines of generated code — the body is the
only place the reasoning survives.

## UPGRADE.md is mandatory for breaking changes

Every release that changes the public surface **must** document the migration in
`UPGRADE.md` before it ships. This is not optional polish: consumers and agents
upgrading the package have no other record of what moved, because the generated
diff is unreadable at review size.

A change is breaking, and therefore needs an entry, when any of these is true:

- an export was removed or renamed in `src/index.js`
- a property changed type (this is the dangerous one — see below)
- a method signature or return type changed
- an endpoint disappeared

Each entry needs, per change:

1. **What moved**, named exactly — old name and new name, or old type and new type.
2. **A before/after code snippet** using the real runtime accessors.
3. **Whether it fails loudly or silently.** A removed export breaks the build and
   fixes itself under pressure. A retyped property compiles fine and renders
   garbage in production. Say which one you are dealing with, every time.

Verify claims against `src/model/*.js`, **not** against `docs/*.md` — see the
naming trap below. Constructing a model from a sample payload in `node` and
printing the result takes a minute and catches mistakes the docs will happily
confirm.

Close with a migration checklist of `grep` commands, and a machine-readable
rename/removal map for agents doing the work. The 2.0.0 entry is the template.

## Releasing

`package.json` version and the git tag must agree — `.github/workflows/release.yml`
verifies this and refuses to publish on a mismatch.

```sh
npm version major        # or minor / patch — edits package.json, creates the tag
git push --follow-tags
```

That tag push builds, publishes to npm and opens the GitHub release. Prerelease
versions (`2.1.0-beta.0`) go out under the npm `next` dist-tag rather than
`latest`. Nothing publishes on merge to `main`; only a tag does.

If the version in `package.json` was already bumped by an earlier commit, do not
run `npm version` — it would bump again. Tag the existing version directly:

```sh
git tag v2.0.0 && git push origin v2.0.0
```

## Gotchas

**Runtime accessors are snake_case; the docs are camelCase.** `docs/*.md` shows
`updatedAt`, `metaJson`, `entityUniqueId`. The generated classes expose
`updated_at`, `meta_json`, `entity_unique_id`. Reading the camelCase name returns
`undefined` — no error, no warning. The code is the source of truth. This is a
quirk of the generator's JavaScript templates, not something this repo chose.

**`npm install` rewrites `yarn.lock`.** Both lockfiles are committed while the
workflows use npm, so npm helpfully keeps `yarn.lock` in sync and drops an
unrelated thousand-line diff into your change. Run `git checkout -- yarn.lock`
before committing unless the lockfile change is the point. Consolidating onto one
package manager would remove this entirely and is worth doing.

**`oneOf` schemas become wrapper classes.** A `oneOf` in the spec generates a
class holding an `actualInstance`, not a bare value. Reading the property gives
you the wrapper; `getActualInstance()` gives you the value. `toJSON()` unwraps,
so `JSON.stringify` looks correct while template interpolation renders
`[object Object]`. When a regeneration introduces a `oneOf`, treat it as a
silent-failure breaking change and document it accordingly.

**Undeclared response fields are dropped.** Generated models copy only properties
the schema declares. If the spec's prose describes a field that the schema omits,
it will not survive deserialization — `response.body` from a `*WithHttpInfo()`
call is the only place it remains. Fix these upstream in the spec.
