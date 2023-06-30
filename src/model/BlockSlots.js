/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.145
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Block from './Block';

/**
 * The BlockSlots model module.
 * @module model/BlockSlots
 * @version 1.0.0-beta.145
 */
class BlockSlots {
    /**
     * Constructs a new <code>BlockSlots</code>.
     * @alias module:model/BlockSlots
     */
    constructor() { 
        
        BlockSlots.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BlockSlots</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockSlots} obj Optional instance to populate.
     * @return {module:model/BlockSlots} The populated <code>BlockSlots</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockSlots();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], [Block]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BlockSlots</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlockSlots</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        if (data['content']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['content'])) {
                throw new Error("Expected the field `content` to be an array in the JSON data but got " + data['content']);
            }
            // validate the optional field `content` (array)
            for (const item of data['content']) {
                Block.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * The unique identifier of the slot
 * @member {String} identifier
 */
BlockSlots.prototype['identifier'] = undefined;

/**
 * @member {Array.<module:model/Block>} content
 */
BlockSlots.prototype['content'] = undefined;






export default BlockSlots;

