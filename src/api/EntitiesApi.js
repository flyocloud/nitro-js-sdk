/**
 * Flyo Nitro CMS
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-beta.127
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Entity200Response from '../model/Entity200Response';

/**
* Entities service.
* @module api/EntitiesApi
* @version 1.0.0-beta.127
*/
export default class EntitiesApi {

    /**
    * Constructs a new EntitiesApi. 
    * @alias module:api/EntitiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get entity by uniqueid
     * @param {String} uniqueid The unique id of the given entity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Entity200Response} and HTTP response
     */
    entityWithHttpInfo(uniqueid) {
      let postBody = null;
      // verify the required parameter 'uniqueid' is set
      if (uniqueid === undefined || uniqueid === null) {
        throw new Error("Missing the required parameter 'uniqueid' when calling entity");
      }

      let pathParams = {
        'uniqueid': uniqueid
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
      let returnType = Entity200Response;
      return this.apiClient.callApi(
        '/entities/{uniqueid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get entity by uniqueid
     * @param {String} uniqueid The unique id of the given entity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Entity200Response}
     */
    entity(uniqueid) {
      return this.entityWithHttpInfo(uniqueid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
