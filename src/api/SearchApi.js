/**
 * Flyo Nitro CMS
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-beta.139
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import SitemapResponseInner from '../model/SitemapResponseInner';

/**
* Search service.
* @module api/SearchApi
* @version 1.0.0-beta.139
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
     * Get Search
     * Search inside pages and entities.
     * @param {String} query The query which should be looked up in the site index.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SitemapResponseInner>} and HTTP response
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

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SitemapResponseInner];
      return this.apiClient.callApi(
        '/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Search
     * Search inside pages and entities.
     * @param {String} query The query which should be looked up in the site index.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SitemapResponseInner>}
     */
    search(query) {
      return this.searchWithHttpInfo(query)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
