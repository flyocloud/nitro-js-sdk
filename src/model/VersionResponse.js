/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.153
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The VersionResponse model module.
 * @module model/VersionResponse
 * @version 1.0.0-beta.153
 */
class VersionResponse {
    /**
     * Constructs a new <code>VersionResponse</code>.
     * @alias module:model/VersionResponse
     */
    constructor() { 
        
        VersionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VersionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionResponse} obj Optional instance to populate.
     * @return {module:model/VersionResponse} The populated <code>VersionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionResponse();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VersionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VersionResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Whenever Flyo generates new data, the version number will be appropriately incremented. If this value is employed for caching, it will undergo less frequent purging in comparison to the `updated_at` value, thus extending its longevity. (last longer)
 * @member {Number} version
 */
VersionResponse.prototype['version'] = undefined;

/**
 * A Unix timestamp indicating when the Nitro was last updated. This timestamp does not correlate with the version number. If this value is utilized for caching purposes, it will experience more frequent purges compared to the version number, leading to shorter caching intervals. (last shorter)
 * @member {Number} updated_at
 */
VersionResponse.prototype['updated_at'] = undefined;






export default VersionResponse;

