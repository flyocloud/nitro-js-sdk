# FlyoNitroJs.EntityinterfaceInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityUniqueId** | **String** | Unique ID | [optional] 
**entityTitle** | **String** | The standard interface title resolved for the current entity | [optional] 
**entityTeaser** | **String** | The standard interface teaser resolved for the current entity | [optional] 
**entitySlug** | **String** | The slug for the given item, this can be either unique or not, depending on the configuration of the entity definition schema. | [optional] 
**entityTimeStart** | **Number** | The shared entity interface time start attribute. If not defined, null or 0 is returned | [optional] 
**entityType** | **String** |  | [optional] 
**entityTypeId** | **Number** | The Type-ID, alternatively referred to as the Entity-Definition-Schema ID, serves as a crucial identifier within the system. It uniquely distinguishes and categorizes the Entity-Definition-Schema. | [optional] 
**entityImage** | **String** | For image manipulation please see https://docs.flyo.cloud/doc/assets-images | [optional] 
**updatedAt** | **Number** | A Unix timestamp indicating when the entity has been updated last time in Flyo. For entries which represent a Nitro page, this is the last time the content delivered for that page actually changed — a rebuild which produces identical output does not move it. Use this value as the &#x60;lastmod&#x60; information when generating a sitemap. | [optional] 
**href** | **String** | Returns the completed href tag. Internal links are appended with trailing slashes, such as &#x60;/about-me&#x60;, while email links are formatted with &#x60;mailto:hello@flyo.ch&#x60;. | [optional] 
**routes** | [**Routes**](Routes.md) |  | [optional] 


