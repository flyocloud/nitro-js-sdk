# FlyoNitroJs.VersionApi

All URIs are relative to *https://api.flyo.cloud/nitro/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**version**](VersionApi.md#version) | **GET** /version | Get Version Information



## version

> VersionResponse version(opts)

Get Version Information

The Version API endpoint offers a highly efficient solution for evaluating the current caching status of your application&#39;s caching mechanism. This functionality allows you to cache the entire application configuration and page responses indefinitely. However, utilizing this endpoint enables you to assess the validity of the cache by sending a request to determine its current status. This caching endpoint is specifically designed for optimal performance when compared to the configuration endpoint, which requires more thorough evaluation and encompasses a substantial response body.

### Example

```javascript
import FlyoNitroJs from '@flyo/nitro-js';
let defaultClient = FlyoNitroJs.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new FlyoNitroJs.VersionApi();
let opts = {
  'lang': "de" // String | The language context for the current request. If not defined, the defed primary language will be used. If the nitro setup is not configured as multi lingual, the language parameter won't have any effect
};
apiInstance.version(opts).then((data) => {
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

[**VersionResponse**](VersionResponse.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

