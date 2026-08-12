# Upgrade Guide

## 1.x → 2.0.0

Version 2.0.0 is a regeneration against Nitro OpenAPI **2.28** (1.x tracked
`1.0.0-beta.197`). No API class or method changed name or signature, and every
endpoint returns the same top-level type as before. The breaking changes are all
in the model layer: eight exports were removed, three were renamed, and two
properties changed type.

```
npm install @flyo/nitro-js@^2.0.0
```

### At a glance

| | |
| --- | --- |
| Endpoints added or removed | none |
| Method signatures changed | none |
| Return types changed | none |
| Model exports removed | 8 |
| Model exports renamed | 3 |
| Property types changed | 2 |

---

## Breaking changes

### 1. The `Field*` models are gone

`FieldAddress`, `FieldCheckboxList`, `FieldDropdown`, `FieldFile`, `FieldImage`,
`FieldLink`, `FieldSchema` and `FieldWysiwyg` are no longer exported.

These were documentation-only classes. Nothing in the SDK ever produced one: no
other model referenced them, and no endpoint deserialized into them. They
described the *shapes* you find inside `Block.content` and `Block.items`, both of
which are typed as plain `Object` and always were. If you imported them, you were
using them as hand-written type hints.

```js
// Before — imports resolve, but nothing ever returns these
import { FieldImage, FieldLink } from '@flyo/nitro-js'

// After — define the shapes you rely on in your own code
const image = block.content.hero_image   // plain object, unchanged at runtime
const link  = block.content.cta_link     // plain object, unchanged at runtime
```

The runtime data is **byte-for-byte identical**. Only the (unused) class exports
disappeared, so this breaks compilation and nothing else.

### 2. Three models were renamed

| 1.x | 2.0.0 | Shape |
| --- | --- | --- |
| `BlockSlots` | `BlockSlot` | identical |
| `PageBreadcrumbInner` | `Breadcrumb` | gained `href` |
| `PagesInner` | `ContainerPage` | identical (`children` recurses into `ContainerPage`) |

```js
// Before
import { BlockSlots, PageBreadcrumbInner, PagesInner } from '@flyo/nitro-js'

// After
import { BlockSlot, Breadcrumb, ContainerPage } from '@flyo/nitro-js'
```

Property access on instances is unchanged — only the class names moved.

### 3. `Meta.image` is now a union wrapper, not a string

This is the one change that breaks at **runtime** rather than at compile time,
and it is easy to miss because nothing throws — you just render `[object Object]`.

`Meta.image` was a `String`. It is now `MetaImage`, a `oneOf(String, Boolean)`
wrapper: the API returns a path when a meta image is set, and `false` when it is
not.

```js
// Before
const src = page.meta_json.image          // "/path/to/image.jpg"

// After
const src = page.meta_json.image?.getActualInstance()   // "/path/to/image.jpg" | false
if (src) { /* render <img src={src}> */ }
```

`getActualInstance()` and the `actualInstance` property both return the unwrapped
value. `MetaImage` also defines `toJSON()`, so `JSON.stringify(page.meta_json)`
still serializes to the raw value — the break only shows up on direct property
access. Interpolating the wrapper into a template renders `[object Object]`,
which is exactly how this change tends to reach production unnoticed.

### 4. `routes` on search and sitemap results changed type

`EntityinterfaceInner.routes` — the entries returned by `SearchApi.search()` and
`SitemapApi.sitemap()` — went from `{String: String}` to the new `Routes` model.
`Routes` is still a string map, but it carries an extra `_empty` boolean marking
whether any route could be resolved for the current context.

```js
// Before
const path = result.routes[myRouteKey]

// After — same lookup, plus an explicit "nothing resolved" signal
if (!result.routes._empty) {
  const path = result.routes[myRouteKey]
}
```

`EntityInterface.routes` — the one reachable via `Entity.entity` from
`EntitiesApi` — is **unchanged** and remains `{String: String}`. Only the
search/sitemap variant moved.

---

## New in 2.0.0

### Search gained sorting and pagination

`SearchApi.search()` takes two new optional parameters. The signature is
unchanged; both live in `opts`.

```js
const results = await new SearchApi().search('query', {
  sort: '-updated_at',   // default: relevance
  page: 2,               // default: 1
  lang: 'de',
})
```

`sort` accepts `score`, `title`, `time_start`, `updated_at`, each optionally
prefixed with `-` for descending. A `+` prefix is not supported. Default ordering
is `score` (relevance, highest first).

Note that `time_start` only means something for entities implementing the shared
time interface; everything else reports `0` and sorts together.

### Translations

`Page.translation` and `Entity.translation` are new, each an array of
`Translation` (`language` → `TranslationLanguage` with `shortcode` and `name`,
plus `slug`, `title`, `href`). Both are empty when the Nitro setup is not
configured as multilingual.

### Other additions

| Model | New property | Notes |
| --- | --- | --- |
| `Page` | `jsonld` | schema.org object for the page |
| `Entity` | `breadcrumb` | array of `Breadcrumb` |
| `Breadcrumb` | `href` | resolved URL path; previously slug/title only |
| `EntityinterfaceInner` | `href` | resolved URL path for search and sitemap rows |
| `EntityinterfaceInner` | `updated_at` | Unix timestamp; use as sitemap `lastmod` |

`updated_at` tracks when delivered content actually changed — a rebuild producing
identical output does not move it, so it is safe as a `lastmod` value.

### Careful: the generated docs and the generated code disagree on names

`docs/*.md` lists properties in camelCase (`updatedAt`, `metaJson`,
`entityUniqueId`), but the model classes expose the raw wire names in snake_case
(`updated_at`, `meta_json`, `entity_unique_id`). The code is what runs — reading
`row.updatedAt` yields `undefined`.

This is a quirk of the generator's JavaScript templates and is **not new in
2.0.0**; 1.x behaved identically. It is called out here because the new
properties are easy to wire up from the doc tables and then silently read back
`undefined`.

### Behavioral clarifications from the spec

These are not SDK changes, but the 2.28 spec documents them for the first time
and they affect how you consume the responses:

- **Search** filters by language in multilingual setups, honoring `lang`.
- **Sitemap** does the opposite: it returns *all* language variants of every page
  and entity regardless of `lang`, for complete SEO coverage.

---

## Known gap

The search endpoint documents a `score` field on each result, but the OpenAPI
schema for `entityinterface` does not declare it. Generated models copy only
declared properties, so **`score` is dropped during deserialization** and is not
readable from `EntityinterfaceInner`.

Results still arrive sorted by relevance, so this only matters if you need the
numeric score itself. If you do, read it off the raw response:

```js
const { response } = await new SearchApi().searchWithHttpInfo('query')
const raw = response.body   // parsed JSON, before model construction
```

Note that the `data` half of that pair is already deserialized into
`EntityinterfaceInner` instances, so `score` is missing from it too —
`response.body` is the only place the field survives.

This needs a fix in the upstream spec, not in the SDK.

---

## Migration checklist

Renames and removals are mechanical. From your project root:

```sh
# 1. Renamed exports — safe to rewrite
grep -rn 'BlockSlots\|PageBreadcrumbInner\|PagesInner' src/

# 2. Removed exports — no drop-in replacement, delete the import
grep -rn 'FieldAddress\|FieldCheckboxList\|FieldDropdown\|FieldFile' src/
grep -rn 'FieldImage\|FieldLink\|FieldSchema\|FieldWysiwyg' src/

# 3. Runtime break — every read of a meta image needs unwrapping
grep -rn 'meta_json' src/

# 4. Type change — only on search/sitemap results, not on Entity.entity
grep -rn '\.routes' src/
```

Steps 1 and 2 fail loudly at build time. **Step 3 fails silently** — it renders
`[object Object]` instead of an image path, so check it by eye even if your build
is clean.

### Rename map

```json
{
  "renamed": {
    "BlockSlots": "BlockSlot",
    "PageBreadcrumbInner": "Breadcrumb",
    "PagesInner": "ContainerPage"
  },
  "removed": [
    "FieldAddress", "FieldCheckboxList", "FieldDropdown", "FieldFile",
    "FieldImage", "FieldLink", "FieldSchema", "FieldWysiwyg"
  ],
  "added": [
    "BlockSlot", "Breadcrumb", "ContainerPage", "MetaImage",
    "Routes", "Translation", "TranslationLanguage"
  ],
  "retypedProperties": {
    "Meta.image": { "from": "String", "to": "MetaImage (oneOf String|Boolean)" },
    "EntityinterfaceInner.routes": { "from": "{String: String}", "to": "Routes" }
  },
  "unchanged": {
    "apiClasses": ["ConfigApi", "PagesApi", "EntitiesApi", "SearchApi", "SitemapApi", "VersionApi"],
    "methodSignatures": true,
    "returnTypes": true,
    "EntityInterface.routes": "{String: String}"
  },
  "accessorNaming": "snake_case at runtime (meta_json, updated_at, entity_unique_id) — the camelCase in docs/*.md is not what the classes expose"
}
```
