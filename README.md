# Flyo Nitro JavaScript SDK

```
yarn add @flyo/nitro-js
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import { ApiClient, ConfigApi, PagesApi } from '@flyo/nitro-js'

var defaultClient = ApiClient.instance;
defaultClient.defaultHeaders = {}

let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';

// the config data contains all informations, including all pages to retrieve further informations like page content:
const configData = await new ConfigApi().config()

// retrieve a the content for home page
const homeData = await new PagesApi().home()

// trieve information by a certain slug
const pageData = await new PagesApi().page({slug: 'the/slug/of/the/page'})
```

## Documentation

[Read More in the Docs](https://dev.flyo.cloud/nitro/javascript)

## Releasing

Regenerate the client from the current OpenAPI spec with `./generate.sh`, then cut
a semantic version. Pushing the tag builds the package, publishes it to npm and
opens the matching GitHub release:

```
npm version major   # or minor / patch / 2.0.0
git push --follow-tags
```

The tag has to match the version in `package.json`, otherwise the release
workflow fails before publishing anything. Prerelease versions such as
`2.1.0-beta.0` go out under the npm `next` dist-tag rather than `latest`.