# Nitrocms.ContentApi

All URIs are relative to *https://api.flyo.cloud/nitro*

Method | HTTP request | Description
------------- | ------------- | -------------
[**putContent**](ContentApi.md#putContent) | **PUT** /content/{pageId} | Put Content



## putContent

> putContent(pageId, opts)

Put Content

### Example

```javascript
import Nitrocms from 'nitrocms';
let defaultClient = Nitrocms.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Nitrocms.ContentApi();
let pageId = 123; // String | The id of the given page
let opts = {
  'content': new Nitrocms.Content() // Content | 
};
apiInstance.putContent(pageId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageId** | **String**| The id of the given page | 
 **content** | [**Content**](Content.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

