# Nitrocms.EntitiesApi

All URIs are relative to *https://api.flyo.cloud/nitro*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entity**](EntitiesApi.md#entity) | **GET** /entities/{uniqueid} | Get Entity



## entity

> Entity200Response entity(uniqueid)

Get Entity

### Example

```javascript
import Nitrocms from 'nitrocms';
let defaultClient = Nitrocms.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Nitrocms.EntitiesApi();
let uniqueid = 2348uc; // String | The unique id of the given entity
apiInstance.entity(uniqueid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueid** | **String**| The unique id of the given entity | 

### Return type

[**Entity200Response**](Entity200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

