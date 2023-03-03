# Nitrocms.PagesApi

All URIs are relative to *https://api.flyo.cloud/nitro*

Method | HTTP request | Description
------------- | ------------- | -------------
[**home**](PagesApi.md#home) | **GET** /pages/home | Get Home
[**page**](PagesApi.md#page) | **GET** /pages | Get page by slug



## home

> Page home()

Get Home

Returns the homepage from the site.

### Example

```javascript
import Nitrocms from 'nitrocms';
let defaultClient = Nitrocms.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Nitrocms.PagesApi();
apiInstance.home().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Page**](Page.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## page

> Page page(opts)

Get page by slug

Returns all informations from a given page by either a slug or a path which is the same as the slug with a leading slash.

### Example

```javascript
import Nitrocms from 'nitrocms';
let defaultClient = Nitrocms.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Nitrocms.PagesApi();
let opts = {
  'slug': foo/bar // String | The pages slug, if none give the homepage is returned. Also paths with subpages are allowed
};
apiInstance.page(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| The pages slug, if none give the homepage is returned. Also paths with subpages are allowed | [optional] 

### Return type

[**Page**](Page.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

