# Nitro.EntitiesApi

All URIs are relative to *https://api.flyo.cloud/nitro/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entity**](EntitiesApi.md#entity) | **GET** /entities/{uniqueid} | Get entity by uniqueid



## entity

> EntityResponse entity(uniqueid)

Get entity by uniqueid

The endpoint provides comprehensive information about a specified entity. An entity represents a collection of information pertaining to a specific data type and is defined by a key-value pair. You can use various data types such as blogs, events, or any other relevant data. However, in order to access an entity, it must be properly configured within the nitro config.

### Example

```javascript
import Nitro from 'nitro';
let defaultClient = Nitro.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new Nitro.EntitiesApi();
let uniqueid = 2348uc; // String | The unique identifier of the given entity is a string composed solely of lowercase alphabetic characters (a-z). This identifier is meticulously generated for each data row, ensuring its uniqueness and facilitating efficient data management and retrieval.
apiInstance.entity(uniqueid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueid** | **String**| The unique identifier of the given entity is a string composed solely of lowercase alphabetic characters (a-z). This identifier is meticulously generated for each data row, ensuring its uniqueness and facilitating efficient data management and retrieval. | 

### Return type

[**EntityResponse**](EntityResponse.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

