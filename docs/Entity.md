# FlyoNitroJs.Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**EntityInterface**](EntityInterface.md) |  | [optional] 
**model** | **Object** | All values which are mappend from inside flyo trough the mapping system are stored inside this object. | [optional] 
**language** | **String** | Current language context for entity model data | [optional] 
**jsonld** | **Object** | A Json LD based object with schema.org informations about the entity | [optional] 
**translation** | [**[Translation]**](Translation.md) | The translation contains information about further data in different languages. If the integration is not defined as multi lingual, the translations will be empty. | [optional] 
**breadcrumb** | [**[Breadcrumb]**](Breadcrumb.md) | The breadcrumb of the current site is represented by an array of pages, forming a navigational path. It provides a hierarchical representation of the user&#39;s current location within the website. The array is ordered from the innermost page, closest to the current page, to the outermost page, with the current page itself residing at the last position. | [optional] 


