# FlyoNitroJs.EntityInterface

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **Number** | A sequential index serves as a version identifier for an item, allowing for improved organization and extended functionality. By assigning a unique numerical value to each version, it becomes easier to track and manage different iterations of an item over time. | [optional] 
**entityMetric** | [**EntityMetric**](EntityMetric.md) |  | [optional] 
**entityUniqueId** | **String** | Unique ID | [optional] 
**entityId** | **String** | An unique ID across the flyo sytem | [optional] 
**entityImage** | **String** | For image manipulation please see https://dev.flyo.cloud/dev/infos/images.html | [optional] 
**entitySlug** | **String** | The slug for the given item, this can be either unique or not, depending on the configuration of the entity definition schema. | [optional] 
**entityTeaser** | **String** | The standard interface teaser resolved for the current entity | [optional] 
**entityTimeEnd** | **String** | Unique ID | [optional] 
**entityTimeStart** | **String** | If not defined, null is returned | [optional] 
**entityTitle** | **String** | The standard interface title resolved for the current entity | [optional] 
**entityType** | **String** |  | [optional] 
**entityTypeId** | **Number** | The Type-ID, alternatively referred to as the Entity-Definition-Schema ID, serves as a crucial identifier within the system. It uniquely distinguishes and categorizes the Entity-Definition-Schema. | [optional] 
**updatedAt** | **String** |  | [optional] 
**routes** | **{String: String}** |  | [optional] 


