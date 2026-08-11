# FlyoNitroJs.SitemapApi

All URIs are relative to *https://api.flyo.cloud/nitro/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sitemap**](SitemapApi.md#sitemap) | **GET** /sitemap | Get Sitemap



## sitemap

> [EntityinterfaceInner] sitemap(opts)

Get Sitemap

This endpoint provides comprehensive data for generating the sitemap. It encompasses all the necessary information, including pages from containers, as well as all entities that have been mapped. Each item includes an &#x60;href&#x60; attribute containing the resolved URL path for the entity and an &#x60;updated_at&#x60; Unix timestamp which should be used as the &#x60;lastmod&#x60; value of the sitemap entry. In multi-lingual setups, the sitemap returns all language variants of every entity and page, regardless of the &#x60;lang&#x60; parameter. This ensures complete SEO coverage across all configured languages.

### Example

```javascript
import FlyoNitroJs from '@flyo/nitro-js';
let defaultClient = FlyoNitroJs.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new FlyoNitroJs.SitemapApi();
let opts = {
  'lang': "de" // String | Specifies the language context for the current request. If not provided, the default primary language will be used. This parameter has no effect if the Nitro setup is not configured for multiple languages.
};
apiInstance.sitemap(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lang** | **String**| Specifies the language context for the current request. If not provided, the default primary language will be used. This parameter has no effect if the Nitro setup is not configured for multiple languages. | [optional] 

### Return type

[**[EntityinterfaceInner]**](EntityinterfaceInner.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

