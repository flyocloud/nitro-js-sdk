# Nitro.ConfigResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nitro** | [**ConfigResponseNitro**](ConfigResponseNitro.md) |  | [optional] 
**pages** | **[String]** | A unique array of slugs is available for the entire site configuration, providing you with the flexibility to register specific routes for your application or compare a slug against this array. This comparison enables you to determine whether to return a \&quot;404 Not Found\&quot; exception or handle the request differently. By utilizing this array, you can easily manage and control the slugs used in your application, ensuring that only valid and registered routes are accessible. This approach helps maintain the integrity and security of your site&#39;s navigation, preventing users from accessing undefined or unauthorized pages. | [optional] 
**containers** | [**{String: ConfigResponseContainersValue}**](ConfigResponseContainersValue.md) |  | [optional] 
**globals** | **Object** | The globals section serves as a crucial component in the overall structure of the code. It consists of an associative array that allows users to define their own unique keys, each of which contains an array of items representing data sourced from a Content Pool. This data is essential as it needs to be accessible throughout the entire scope of the website, ensuring its availability whenever required. By leveraging this globals section, developers can efficiently manage and access these globally significant data sets. | [optional] 


