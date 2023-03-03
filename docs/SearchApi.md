# Nitrocms.SearchApi

All URIs are relative to *https://api.flyo.cloud/nitro*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **GET** /search | Get Search



## search

> [SitemapResponseInner] search(query)

Get Search

Search inside pages and entities.

### Example

```javascript
import Nitrocms from 'nitrocms';
let defaultClient = Nitrocms.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Nitrocms.SearchApi();
let query = foobar; // String | The query which should be looked up in the site index.
apiInstance.search(query).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| The query which should be looked up in the site index. | 

### Return type

[**[SitemapResponseInner]**](SitemapResponseInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

