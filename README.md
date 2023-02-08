# nitrocms

```
yarn add @flyodev/nitrocms
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript

import { ApiClient, ConfigApi } from '@flyodev/nitrocms'

var defaultClient = ApiClient.instance;
defaultClient.defaultHeaders = {}

var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "TOKEN!"

var configApi = new ConfigApi()

configApi.config().then(data => {
  console.log(data)
})
```

## Documentation for API Endpoints

All URIs are relative to *https://api.flyo.cloud/nitro*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Nitrocms.ConfigApi* | [**config**](docs/ConfigApi.md#config) | **GET** /config | Get Config
*Nitrocms.PagesApi* | [**home**](docs/PagesApi.md#home) | **GET** /pages/home | Get Home
*Nitrocms.PagesApi* | [**pages**](docs/PagesApi.md#pages) | **GET** /pages | Get Pages


## Documentation for Models

 - [Nitrocms.Block](docs/Block.md)
 - [Nitrocms.BlockSlotsInner](docs/BlockSlotsInner.md)
 - [Nitrocms.Config200Response](docs/Config200Response.md)
 - [Nitrocms.Config200ResponseNav](docs/Config200ResponseNav.md)
 - [Nitrocms.Config200ResponseNitro](docs/Config200ResponseNitro.md)
 - [Nitrocms.Page](docs/Page.md)
 - [Nitrocms.PagesInner](docs/PagesInner.md)


## Documentation for Authorization



### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: token
- **Location**: URL query string

