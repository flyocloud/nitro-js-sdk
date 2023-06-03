# Nitro.ConfigApi

All URIs are relative to *https://api.flyo.cloud/nitro/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**config**](ConfigApi.md#config) | **GET** /config | Get Config



## config

> ConfigResponse config()

Get Config

The config API endpoint provides comprehensive information required for configuring the layout of websites. It encompasses various essential elements, including containers with pages, an extensive list of available slugs, globals containing content pool data, and crucial details about the Nitro configuration itself. By accessing this endpoint, developers can gather all the necessary data to effectively design and structure their websites. The endpoint offers a holistic view of the website&#39;s layout, empowering developers to tailor the user experience and optimize the overall design.

### Example

```javascript
import Nitro from 'nitro';
let defaultClient = Nitro.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new Nitro.ConfigApi();
apiInstance.config().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ConfigResponse**](ConfigResponse.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

