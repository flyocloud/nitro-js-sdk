# FlyoNitroJs.EntitiesApi

All URIs are relative to *https://api.flyo.cloud/nitro/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entityBySlug**](EntitiesApi.md#entityBySlug) | **GET** /entities/slug/{slug} | Find entity by slug and optional Entity-Type-ID
[**entityByUniqueid**](EntitiesApi.md#entityByUniqueid) | **GET** /entities/uniqueid/{uniqueid} | Find entity by uniqueid



## entityBySlug

> Entity entityBySlug(slug, opts)

Find entity by slug and optional Entity-Type-ID

The endpoint allows for the retrieval of entities based on their slug, with an optional Entity-Type-ID for more accurate results. The endpoint requires a &#x60;slug&#x60; parameter to be passed in the path, which is necessary for identifying the entity. However, since slugs are not unique across different entities, it is highly recommended to also provide the &#x60;typeId&#x60; parameter through the query to avoid incorrect or unintended results. This &#x60;typeId&#x60; serves as an Entity-Definition-Schema ID, ensuring a more precise and targeted entity retrieval by distinguishing the entities more clearly. The &#x60;slug&#x60; parameter is mandatory and should be a string (e.g., &#39;hello-world&#39;), while the &#x60;typeId&#x60; parameter is optional and should be an integer (e.g., 123), representing the Entity-Definition-Schema ID.

### Example

```javascript
import FlyoNitroJs from '@flyo/nitro-js';
let defaultClient = FlyoNitroJs.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new FlyoNitroJs.EntitiesApi();
let slug = "hello-world"; // String | When looking up an entity slug, it is advisable to provide the typeId parameter along with it, as slugs are not unique among other entities. Failing to include the typeId parameter may lead to unintended or incorrect results. By specifying the typeId, you can ensure more accurate and targeted retrieval of the desired entity.
let opts = {
  'lang': "de", // String | The language context for the current request. If not defined, the defed primary language will be used. If the nitro setup is not configured as multi lingual, the language parameter won't have any effect
  'typeId': 123 // Number | To ensure accurate lookup, it is considered a best practice to include the Type-ID of the entity associated with the slug. The Type-ID, alternatively referred to as the Entity-Definition-Schema ID, serves as a crucial identifier within the system. It uniquely distinguishes and categorizes the Entity-Definition-Schema.
};
apiInstance.entityBySlug(slug, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| When looking up an entity slug, it is advisable to provide the typeId parameter along with it, as slugs are not unique among other entities. Failing to include the typeId parameter may lead to unintended or incorrect results. By specifying the typeId, you can ensure more accurate and targeted retrieval of the desired entity. | 
 **lang** | **String**| The language context for the current request. If not defined, the defed primary language will be used. If the nitro setup is not configured as multi lingual, the language parameter won&#39;t have any effect | [optional] 
 **typeId** | **Number**| To ensure accurate lookup, it is considered a best practice to include the Type-ID of the entity associated with the slug. The Type-ID, alternatively referred to as the Entity-Definition-Schema ID, serves as a crucial identifier within the system. It uniquely distinguishes and categorizes the Entity-Definition-Schema. | [optional] 

### Return type

[**Entity**](Entity.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## entityByUniqueid

> Entity entityByUniqueid(uniqueid, opts)

Find entity by uniqueid

The endpoint provides comprehensive information about a specified entity. An entity represents a collection of information pertaining to a specific data type and is defined by a key-value pair. You can use various data types such as blogs, events, or any other relevant data. However, in order to access an entity, it must be properly configured within the nitro config.

### Example

```javascript
import FlyoNitroJs from '@flyo/nitro-js';
let defaultClient = FlyoNitroJs.ApiClient.instance;
// Configure API key authorization: ApiToken
let ApiToken = defaultClient.authentications['ApiToken'];
ApiToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiToken.apiKeyPrefix = 'Token';

let apiInstance = new FlyoNitroJs.EntitiesApi();
let uniqueid = "2348uc"; // String | The unique identifier of the given entity is a string composed solely of lowercase alphabetic characters (a-z) and numbers. This identifier is meticulously generated for each data row, ensuring its uniqueness and facilitating efficient data management and retrieval across content pools.
let opts = {
  'lang': "de" // String | The language context for the current request. If not defined, the defed primary language will be used. If the nitro setup is not configured as multi lingual, the language parameter won't have any effect
};
apiInstance.entityByUniqueid(uniqueid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueid** | **String**| The unique identifier of the given entity is a string composed solely of lowercase alphabetic characters (a-z) and numbers. This identifier is meticulously generated for each data row, ensuring its uniqueness and facilitating efficient data management and retrieval across content pools. | 
 **lang** | **String**| The language context for the current request. If not defined, the defed primary language will be used. If the nitro setup is not configured as multi lingual, the language parameter won&#39;t have any effect | [optional] 

### Return type

[**Entity**](Entity.md)

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

