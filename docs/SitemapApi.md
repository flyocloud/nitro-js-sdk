# FlyoNitroJs.SitemapApi

All URIs are relative to *https://api.flyo.cloud/nitro/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sitemap**](SitemapApi.md#sitemap) | **GET** /sitemap | Get Sitemap



## sitemap

> [EntityinterfaceInner] sitemap(opts)

Get Sitemap

This endpoint provides comprehensive data for generating the sitemap. It encompasses all the necessary information, including pages from containers, as well as all entities that have been mapped.

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
  'lang': "de" // String | The language context for the current request. If not defined, the defed primary language will be used. If the nitro setup is not configured as multi lingual, the language parameter won't have any effect
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
 **lang** | **String**| The language context for the current request. If not defined, the defed primary language will be used. If the nitro setup is not configured as multi lingual, the language parameter won&#39;t have any effect | [optional] 

### Return type

[**[EntityinterfaceInner]**](EntityinterfaceInner.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

