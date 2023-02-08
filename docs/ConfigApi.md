# Nitrocms.ConfigApi

All URIs are relative to *https://edgeapi.flyo.cloud/nitro*

Method | HTTP request | Description
------------- | ------------- | -------------
[**config**](ConfigApi.md#config) | **GET** /config | Get Config



## config

> Config200Response config()

Get Config

Returns all relevant config data to run a site.

### Example

```javascript
import Nitrocms from 'nitrocms';
let defaultClient = Nitrocms.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Nitrocms.ConfigApi();
apiInstance.config().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Config200Response**](Config200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

