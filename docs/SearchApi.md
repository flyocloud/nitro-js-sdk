# FlyoNitroJs.SearchApi

All URIs are relative to *https://api.flyo.cloud/nitro/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **GET** /search | Get Search by query



## search

> [EntityinterfaceInner] search(query, opts)

Get Search by query

This endpoint offers a powerful full-text search through the websites sitemap, encompassing both pages and entities. It performs word-based matching against entity titles and teasers. Each result includes a &#x60;score&#x60; field representing the relevance of the match. By default, results are sorted by relevance (highest score first). Each result also includes an &#x60;href&#x60; attribute containing the resolved URL path for the entity. In multi-lingual setups, search results are automatically filtered to match the current language context specified via the &#x60;lang&#x60; parameter, ensuring only results relevant to the requested language are returned.

### Example

```javascript
import FlyoNitroJs from '@flyo/nitro-js';
let defaultClient = FlyoNitroJs.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new FlyoNitroJs.SearchApi();
let query = "foobar"; // String | The query keyword that needs to be looked up. It is important to ensure that the query is properly URL encoded for accurate processing and retrieval.
let opts = {
  'sort': "score", // String | Optional sort field. If not provided, results are sorted by `score` (relevance) by default which is the recommended behavior for search. The `score` value reflects how well the result matches the query — higher scores indicate better matches. Use `-` as a prefix for descending order (for example `-title`). Ascending order uses the plain field name (for example `title`). A `+` prefix is not supported. The `time_start` field is derived from the shared entity time interface and is only meaningful for entities that implement it; entities without that interface return `time_start` as `0`, so use this sort carefully.
  'page': 1, // Number | The page number for paginated results. Defaults to 1 if not provided.
  'lang': "de" // String | Specifies the language context for the current request. If not provided, the default primary language will be used. This parameter has no effect if the Nitro setup is not configured for multiple languages.
};
apiInstance.search(query, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| The query keyword that needs to be looked up. It is important to ensure that the query is properly URL encoded for accurate processing and retrieval. | 
 **sort** | **String**| Optional sort field. If not provided, results are sorted by &#x60;score&#x60; (relevance) by default which is the recommended behavior for search. The &#x60;score&#x60; value reflects how well the result matches the query — higher scores indicate better matches. Use &#x60;-&#x60; as a prefix for descending order (for example &#x60;-title&#x60;). Ascending order uses the plain field name (for example &#x60;title&#x60;). A &#x60;+&#x60; prefix is not supported. The &#x60;time_start&#x60; field is derived from the shared entity time interface and is only meaningful for entities that implement it; entities without that interface return &#x60;time_start&#x60; as &#x60;0&#x60;, so use this sort carefully. | [optional] 
 **page** | **Number**| The page number for paginated results. Defaults to 1 if not provided. | [optional] [default to 1]
 **lang** | **String**| Specifies the language context for the current request. If not provided, the default primary language will be used. This parameter has no effect if the Nitro setup is not configured for multiple languages. | [optional] 

### Return type

[**[EntityinterfaceInner]**](EntityinterfaceInner.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

