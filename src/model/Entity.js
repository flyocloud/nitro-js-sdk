/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.197
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EntityInterface from './EntityInterface';

/**
 * The Entity model module.
 * @module model/Entity
 * @version 1.0.0-beta.197
 */
class Entity {
    /**
     * Constructs a new <code>Entity</code>.
     * @alias module:model/Entity
     */
    constructor() { 
        
        Entity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Entity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entity} obj Optional instance to populate.
     * @return {module:model/Entity} The populated <code>Entity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entity();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = EntityInterface.constructFromObject(data['entity']);
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], Object);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('jsonld')) {
                obj['jsonld'] = ApiClient.convertToType(data['jsonld'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Entity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Entity</code>.
     */
    static validateJSON(data) {
        // validate the optional field `entity`
        if (data['entity']) { // data not null
          EntityInterface.validateJSON(data['entity']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }

        return true;
    }


}



/**
 * @member {module:model/EntityInterface} entity
 */
Entity.prototype['entity'] = undefined;

/**
 * All values which are mappend from inside flyo trough the mapping system are stored inside this object.
 * @member {Object} model
 */
Entity.prototype['model'] = undefined;

/**
 * Current language context for entity model data
 * @member {String} language
 */
Entity.prototype['language'] = undefined;

/**
 * A Json LD based object with schema.org informations about the entity
 * @member {Object} jsonld
 */
Entity.prototype['jsonld'] = undefined;






export default Entity;

