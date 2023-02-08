/**
 * Flyo Nitro Cms
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-beta.125
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Page from '../model/Page';

/**
* Pages service.
* @module api/PagesApi
* @version 1.0.0-beta.125
*/
export default class PagesApi {

    /**
    * Constructs a new PagesApi. 
    * @alias module:api/PagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Home
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Page} and HTTP response
     */
    homeWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Page;
      return this.apiClient.callApi(
        '/pages/home', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Home
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Page}
     */
    home() {
      return this.homeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Pages
     * @param {Object} opts Optional parameters
     * @param {String} opts.slug The pages slug, if none give the homepage is returned. Also paths with subpages are allowed
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Page} and HTTP response
     */
    pagesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'slug': opts['slug']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Page;
      return this.apiClient.callApi(
        '/pages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Pages
     * @param {Object} opts Optional parameters
     * @param {String} opts.slug The pages slug, if none give the homepage is returned. Also paths with subpages are allowed
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Page}
     */
    pages(opts) {
      return this.pagesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}