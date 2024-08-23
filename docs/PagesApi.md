# FlyoNitroJs.PagesApi

All URIs are relative to *https://api.flyo.cloud/nitro/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**home**](PagesApi.md#home) | **GET** /pages/home | Get Home
[**page**](PagesApi.md#page) | **GET** /pages | Get Page by slug



## home

> Page home(opts)

Get Home

This endpoint allows you to retrieve the designated homepage of a website. Alternatively, you can utilize the pages endpoint by specifying an empty slug parameter to achieve the same result. By using either of these methods, you can effectively access the desired homepage of the website.

### Example

```javascript
import FlyoNitroJs from '@flyo/nitro-js';
let defaultClient = FlyoNitroJs.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new FlyoNitroJs.PagesApi();
let opts = {
  'lang': "de" // String | The language context for the current request. If not defined, the defed primary language will be used. If the nitro setup is not configured as multi lingual, the language parameter won't have any effect
};
apiInstance.home(opts).then((data) => {
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

[**Page**](Page.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## page

> Page page(opts)

Get Page by slug

This endpoint retrieves comprehensive information from a specified page using either a slug or a path. The slug refers to a unique identifier for the page, while the path is the slug with a leading slash. By providing either the slug or the path as input, the function will gather all the relevant details associated with the page.

### Example

```javascript
import FlyoNitroJs from '@flyo/nitro-js';
let defaultClient = FlyoNitroJs.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new FlyoNitroJs.PagesApi();
let opts = {
  'slug': "foo/bar", // String | The function retrieves a specific page by its slug. If no slug is provided, it automatically returns the homepage. Moreover, it seamlessly handles paths with subpages, allowing for nested URLs like \"testpage/subpage\". In this way, a forward slash (\"/\") within the path is recognized as a valid character and processed accordingly.
  'lang': "de" // String | The language context for the current request. If not defined, the defed primary language will be used. If the nitro setup is not configured as multi lingual, the language parameter won't have any effect
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
 **slug** | **String**| The function retrieves a specific page by its slug. If no slug is provided, it automatically returns the homepage. Moreover, it seamlessly handles paths with subpages, allowing for nested URLs like \&quot;testpage/subpage\&quot;. In this way, a forward slash (\&quot;/\&quot;) within the path is recognized as a valid character and processed accordingly. | [optional] 
 **lang** | **String**| The language context for the current request. If not defined, the defed primary language will be used. If the nitro setup is not configured as multi lingual, the language parameter won&#39;t have any effect | [optional] 

### Return type

[**Page**](Page.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

