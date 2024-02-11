/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.172
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import EntityinterfaceInner from '../model/EntityinterfaceInner';

/**
* Search service.
* @module api/SearchApi
* @version 1.0.0-beta.172
*/
export default class SearchApi {

    /**
    * Constructs a new SearchApi. 
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Search by query
     * This endpoint offers a powerful capability to search through the websites sitemap, encompassing both pages and entities. With this endpoint, users can efficiently explore and retrieve information from your sitemap by creating a paginated search experience.
     * @param {String} query The query keyword that needs to be looked up. It is important to ensure that the query is properly URL encoded for accurate processing and retrieval.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/EntityinterfaceInner>} and HTTP response
     */
    searchWithHttpInfo(query) {
      let postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling search");
      }

      let pathParams = {
      };
      let queryParams = {
        'query': query
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [EntityinterfaceInner];
      return this.apiClient.callApi(
        '/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Search by query
     * This endpoint offers a powerful capability to search through the websites sitemap, encompassing both pages and entities. With this endpoint, users can efficiently explore and retrieve information from your sitemap by creating a paginated search experience.
     * @param {String} query The query keyword that needs to be looked up. It is important to ensure that the query is properly URL encoded for accurate processing and retrieval.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/EntityinterfaceInner>}
     */
    search(query) {
      return this.searchWithHttpInfo(query)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
