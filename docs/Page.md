# FlyoNitroJs.Page

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**title** | **String** |  | [optional] 
**href** | **String** | Returns the completed href tag. Internal links are appended with trailing slashes, such as &#x60;/about-me&#x60;, while email links are formatted with &#x60;mailto:hello@flyo.ch&#x60;. | [optional] 
**slug** | **String** | The slug, in its current form, contains the full path of nested slugs and serves as the identifier for querying the respective page. | [optional] 
**json** | [**[Block]**](Block.md) |  | [optional] 
**depth** | **Number** |  | [optional] 
**isHome** | **Number** |  | [optional] 
**createdAt** | **Number** |  | [optional] 
**updatedAt** | **Number** |  | [optional] 
**isVisible** | **Number** |  | [optional] 
**metaJson** | [**Meta**](Meta.md) |  | [optional] 
**properties** | [**{String: PageProperty}**](PageProperty.md) |  | [optional] 
**uid** | **String** | A unique identifier for the page | [optional] 
**type** | **String** | Can be either a page with content (which is default behavior), email, file, url, tel | [optional] 
**target** | **String** | can be either _self (which is default) or _blank | [optional] 
**container** | **String** | The container this page belongs, by default all pages belong to the default container which is the main nav. | [optional] 
**breadcrumb** | [**[PageBreadcrumbInner]**](PageBreadcrumbInner.md) | The breadcrumb of the current site is represented by an array of pages, forming a navigational path. It provides a hierarchical representation of the user&#39;s current location within the website. The array is ordered from the innermost page, closest to the current page, to the outermost page, with the current page itself residing at the last position. | [optional] 


