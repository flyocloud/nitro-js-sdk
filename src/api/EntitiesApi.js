/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.150
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Entity from '../model/Entity';

/**
* Entities service.
* @module api/EntitiesApi
* @version 1.0.0-beta.150
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
     * Find entity by slug and optional Type-ID
     * 
     * @param {String} slug When looking up an entity slug, it is advisable to provide the typeId parameter along with it, as slugs are not unique among other entities. Failing to include the typeId parameter may lead to unintended or incorrect results. By specifying the typeId, you can ensure more accurate and targeted retrieval of the desired entity.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.typeId To ensure accurate lookup, it is considered a best practice to include the Type-ID of the entity associated with the slug. The Type-ID, alternatively referred to as the Entity-Definition-Schema ID, serves as a crucial identifier within the system. It uniquely distinguishes and categorizes the Entity-Definition-Schema.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Entity} and HTTP response
     */
    entityBySlugWithHttpInfo(slug, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'slug' is set
      if (slug === undefined || slug === null) {
        throw new Error("Missing the required parameter 'slug' when calling entityBySlug");
      }

      let pathParams = {
        'slug': slug
      };
      let queryParams = {
        'typeId': opts['typeId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Entity;
      return this.apiClient.callApi(
        '/entities/slug/{slug}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find entity by slug and optional Type-ID
     * 
     * @param {String} slug When looking up an entity slug, it is advisable to provide the typeId parameter along with it, as slugs are not unique among other entities. Failing to include the typeId parameter may lead to unintended or incorrect results. By specifying the typeId, you can ensure more accurate and targeted retrieval of the desired entity.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.typeId To ensure accurate lookup, it is considered a best practice to include the Type-ID of the entity associated with the slug. The Type-ID, alternatively referred to as the Entity-Definition-Schema ID, serves as a crucial identifier within the system. It uniquely distinguishes and categorizes the Entity-Definition-Schema.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Entity}
     */
    entityBySlug(slug, opts) {
      return this.entityBySlugWithHttpInfo(slug, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find entity by uniqueid
     * The endpoint provides comprehensive information about a specified entity. An entity represents a collection of information pertaining to a specific data type and is defined by a key-value pair. You can use various data types such as blogs, events, or any other relevant data. However, in order to access an entity, it must be properly configured within the nitro config.
     * @param {String} uniqueid The unique identifier of the given entity is a string composed solely of lowercase alphabetic characters (a-z) and numbers. This identifier is meticulously generated for each data row, ensuring its uniqueness and facilitating efficient data management and retrieval across content pools.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Entity} and HTTP response
     */
    entityByUniqueidWithHttpInfo(uniqueid) {
      let postBody = null;
      // verify the required parameter 'uniqueid' is set
      if (uniqueid === undefined || uniqueid === null) {
        throw new Error("Missing the required parameter 'uniqueid' when calling entityByUniqueid");
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

      let authNames = ['ApiToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Entity;
      return this.apiClient.callApi(
        '/entities/uniqueid/{uniqueid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find entity by uniqueid
     * The endpoint provides comprehensive information about a specified entity. An entity represents a collection of information pertaining to a specific data type and is defined by a key-value pair. You can use various data types such as blogs, events, or any other relevant data. However, in order to access an entity, it must be properly configured within the nitro config.
     * @param {String} uniqueid The unique identifier of the given entity is a string composed solely of lowercase alphabetic characters (a-z) and numbers. This identifier is meticulously generated for each data row, ensuring its uniqueness and facilitating efficient data management and retrieval across content pools.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Entity}
     */
    entityByUniqueid(uniqueid) {
      return this.entityByUniqueidWithHttpInfo(uniqueid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
