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