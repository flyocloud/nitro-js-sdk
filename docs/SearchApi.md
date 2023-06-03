# Nitro.SearchApi

All URIs are relative to *https://api.flyo.cloud/nitro/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **GET** /search | Get Search by query



## search

> [EntityinterfaceInner] search(query)

Get Search by query

This endpoint offers a powerful capability to search through the websites sitemap, encompassing both pages and entities. With this endpoint, users can efficiently explore and retrieve information from your sitemap by creating a paginated search experience.

### Example

```javascript
import Nitro from 'nitro';
let defaultClient = Nitro.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new Nitro.SearchApi();
let query = foobar; // String | The query keyword that needs to be looked up. It is important to ensure that the query is properly URL encoded for accurate processing and retrieval.
apiInstance.search(query).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| The query keyword that needs to be looked up. It is important to ensure that the query is properly URL encoded for accurate processing and retrieval. | 

### Return type

[**[EntityinterfaceInner]**](EntityinterfaceInner.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

