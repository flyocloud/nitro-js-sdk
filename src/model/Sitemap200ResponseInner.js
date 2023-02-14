/**
 * Flyo Nitro Cms
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-beta.126
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Sitemap200ResponseInner model module.
 * @module model/Sitemap200ResponseInner
 * @version 1.0.0-beta.126
 */
class Sitemap200ResponseInner {
    /**
     * Constructs a new <code>Sitemap200ResponseInner</code>.
     * @alias module:model/Sitemap200ResponseInner
     */
    constructor() { 
        
        Sitemap200ResponseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Sitemap200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Sitemap200ResponseInner} obj Optional instance to populate.
     * @return {module:model/Sitemap200ResponseInner} The populated <code>Sitemap200ResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sitemap200ResponseInner();

            if (data.hasOwnProperty('entity_unique_id')) {
                obj['entity_unique_id'] = ApiClient.convertToType(data['entity_unique_id'], 'String');
            }
            if (data.hasOwnProperty('entity_title')) {
                obj['entity_title'] = ApiClient.convertToType(data['entity_title'], 'String');
            }
            if (data.hasOwnProperty('entity_slug')) {
                obj['entity_slug'] = ApiClient.convertToType(data['entity_slug'], 'String');
            }
            if (data.hasOwnProperty('entity_type')) {
                obj['entity_type'] = ApiClient.convertToType(data['entity_type'], 'String');
            }
            if (data.hasOwnProperty('entity_type_id')) {
                obj['entity_type_id'] = ApiClient.convertToType(data['entity_type_id'], 'Number');
            }
            if (data.hasOwnProperty('entity_time_start')) {
                obj['entity_time_start'] = ApiClient.convertToType(data['entity_time_start'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Sitemap200ResponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Sitemap200ResponseInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['entity_unique_id'] && !(typeof data['entity_unique_id'] === 'string' || data['entity_unique_id'] instanceof String)) {
            throw new Error("Expected the field `entity_unique_id` to be a primitive type in the JSON string but got " + data['entity_unique_id']);
        }
        // ensure the json data is a string
        if (data['entity_title'] && !(typeof data['entity_title'] === 'string' || data['entity_title'] instanceof String)) {
            throw new Error("Expected the field `entity_title` to be a primitive type in the JSON string but got " + data['entity_title']);
        }
        // ensure the json data is a string
        if (data['entity_slug'] && !(typeof data['entity_slug'] === 'string' || data['entity_slug'] instanceof String)) {
            throw new Error("Expected the field `entity_slug` to be a primitive type in the JSON string but got " + data['entity_slug']);
        }
        // ensure the json data is a string
        if (data['entity_type'] && !(typeof data['entity_type'] === 'string' || data['entity_type'] instanceof String)) {
            throw new Error("Expected the field `entity_type` to be a primitive type in the JSON string but got " + data['entity_type']);
        }
        // ensure the json data is a string
        if (data['entity_time_start'] && !(typeof data['entity_time_start'] === 'string' || data['entity_time_start'] instanceof String)) {
            throw new Error("Expected the field `entity_time_start` to be a primitive type in the JSON string but got " + data['entity_time_start']);
        }

        return true;
    }


}



/**
 * Unique ID
 * @member {String} entity_unique_id
 */
Sitemap200ResponseInner.prototype['entity_unique_id'] = undefined;

/**
 * @member {String} entity_title
 */
Sitemap200ResponseInner.prototype['entity_title'] = undefined;

/**
 * @member {String} entity_slug
 */
Sitemap200ResponseInner.prototype['entity_slug'] = undefined;

/**
 * @member {String} entity_type
 */
Sitemap200ResponseInner.prototype['entity_type'] = undefined;

/**
 * @member {Number} entity_type_id
 */
Sitemap200ResponseInner.prototype['entity_type_id'] = undefined;

/**
 * @member {String} entity_time_start
 */
Sitemap200ResponseInner.prototype['entity_time_start'] = undefined;






export default Sitemap200ResponseInner;
