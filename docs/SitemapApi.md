# Nitro.SitemapApi

All URIs are relative to *https://api.flyo.cloud/nitro/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sitemap**](SitemapApi.md#sitemap) | **GET** /sitemap | Get Sitemap



## sitemap

> [EntityinterfaceInner] sitemap()

Get Sitemap

This endpoint provides comprehensive data for generating the sitemap. It encompasses all the necessary information, including pages from containers, as well as all entities that have been mapped.

### Example

```javascript
import Nitro from 'nitro';
let defaultClient = Nitro.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new Nitro.SitemapApi();
apiInstance.sitemap().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[EntityinterfaceInner]**](EntityinterfaceInner.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

