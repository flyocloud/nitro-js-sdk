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

var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "INSERT_YOUR_TOKEN_HERE"

// the config data contains all informations, including all pages to retrieve further informations like page content:
const configData = await new ConfigApi().config()

// retrieve a the content for home page
const homeData = await new PagesApi().home()

// trieve information by a certain slug
const pageData = await new PagesApi().page({slug: 'the/slug/of/the/page'})
```

## Documentation for API Endpoints

All URIs are relative to *https://api.flyo.cloud/nitro*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ConfigApi* | [**config**](docs/ConfigApi.md#config) | **GET** /config | Get Config
*PagesApi* | [**home**](docs/PagesApi.md#home) | **GET** /pages/home | Get Home
*PagesApi* | [**pages**](docs/PagesApi.md#pages) | **GET** /pages | Get Pages
*SitemapApi* | [**pages**](docs/SitemapApi.md) | **GET** /sitemap | Get Pages
*ContentApi* | [**pages**](docs/ContentApi.md) | **PUT** /content/{pageId} | Put Content
