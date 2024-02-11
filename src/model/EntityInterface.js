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

import ApiClient from '../ApiClient';
import EntityMetric from './EntityMetric';

/**
 * The EntityInterface model module.
 * @module model/EntityInterface
 * @version 1.0.0-beta.172
 */
class EntityInterface {
    /**
     * Constructs a new <code>EntityInterface</code>.
     * @alias module:model/EntityInterface
     */
    constructor() { 
        
        EntityInterface.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntityInterface</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityInterface} obj Optional instance to populate.
     * @return {module:model/EntityInterface} The populated <code>EntityInterface</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityInterface();

            if (data.hasOwnProperty('_version')) {
                obj['_version'] = ApiClient.convertToType(data['_version'], 'Number');
            }
            if (data.hasOwnProperty('entity_metric')) {
                obj['entity_metric'] = EntityMetric.constructFromObject(data['entity_metric']);
            }
            if (data.hasOwnProperty('entity_unique_id')) {
                obj['entity_unique_id'] = ApiClient.convertToType(data['entity_unique_id'], 'String');
            }
            if (data.hasOwnProperty('entity_id')) {
                obj['entity_id'] = ApiClient.convertToType(data['entity_id'], 'Number');
            }
            if (data.hasOwnProperty('entity_image')) {
                obj['entity_image'] = ApiClient.convertToType(data['entity_image'], 'String');
            }
            if (data.hasOwnProperty('entity_slug')) {
                obj['entity_slug'] = ApiClient.convertToType(data['entity_slug'], 'String');
            }
            if (data.hasOwnProperty('entity_teaser')) {
                obj['entity_teaser'] = ApiClient.convertToType(data['entity_teaser'], 'String');
            }
            if (data.hasOwnProperty('entity_time_end')) {
                obj['entity_time_end'] = ApiClient.convertToType(data['entity_time_end'], 'Number');
            }
            if (data.hasOwnProperty('entity_time_start')) {
                obj['entity_time_start'] = ApiClient.convertToType(data['entity_time_start'], 'Number');
            }
            if (data.hasOwnProperty('entity_title')) {
                obj['entity_title'] = ApiClient.convertToType(data['entity_title'], 'String');
            }
            if (data.hasOwnProperty('entity_type')) {
                obj['entity_type'] = ApiClient.convertToType(data['entity_type'], 'String');
            }
            if (data.hasOwnProperty('entity_type_id')) {
                obj['entity_type_id'] = ApiClient.convertToType(data['entity_type_id'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
            if (data.hasOwnProperty('routes')) {
                obj['routes'] = ApiClient.convertToType(data['routes'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EntityInterface</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EntityInterface</code>.
     */
    static validateJSON(data) {
        // validate the optional field `entity_metric`
        if (data['entity_metric']) { // data not null
          EntityMetric.validateJSON(data['entity_metric']);
        }
        // ensure the json data is a string
        if (data['entity_unique_id'] && !(typeof data['entity_unique_id'] === 'string' || data['entity_unique_id'] instanceof String)) {
            throw new Error("Expected the field `entity_unique_id` to be a primitive type in the JSON string but got " + data['entity_unique_id']);
        }
        // ensure the json data is a string
        if (data['entity_image'] && !(typeof data['entity_image'] === 'string' || data['entity_image'] instanceof String)) {
            throw new Error("Expected the field `entity_image` to be a primitive type in the JSON string but got " + data['entity_image']);
        }
        // ensure the json data is a string
        if (data['entity_slug'] && !(typeof data['entity_slug'] === 'string' || data['entity_slug'] instanceof String)) {
            throw new Error("Expected the field `entity_slug` to be a primitive type in the JSON string but got " + data['entity_slug']);
        }
        // ensure the json data is a string
        if (data['entity_teaser'] && !(typeof data['entity_teaser'] === 'string' || data['entity_teaser'] instanceof String)) {
            throw new Error("Expected the field `entity_teaser` to be a primitive type in the JSON string but got " + data['entity_teaser']);
        }
        // ensure the json data is a string
        if (data['entity_title'] && !(typeof data['entity_title'] === 'string' || data['entity_title'] instanceof String)) {
            throw new Error("Expected the field `entity_title` to be a primitive type in the JSON string but got " + data['entity_title']);
        }
        // ensure the json data is a string
        if (data['entity_type'] && !(typeof data['entity_type'] === 'string' || data['entity_type'] instanceof String)) {
            throw new Error("Expected the field `entity_type` to be a primitive type in the JSON string but got " + data['entity_type']);
        }

        return true;
    }


}



/**
 * A sequential index serves as a version identifier for an item, allowing for improved organization and extended functionality. By assigning a unique numerical value to each version, it becomes easier to track and manage different iterations of an item over time.
 * @member {Number} _version
 */
EntityInterface.prototype['_version'] = undefined;

/**
 * @member {module:model/EntityMetric} entity_metric
 */
EntityInterface.prototype['entity_metric'] = undefined;

/**
 * Unique ID
 * @member {String} entity_unique_id
 */
EntityInterface.prototype['entity_unique_id'] = undefined;

/**
 * An unique ID across the flyo sytem
 * @member {Number} entity_id
 */
EntityInterface.prototype['entity_id'] = undefined;

/**
 * For image manipulation please see https://dev.flyo.cloud/dev/infos/images.html
 * @member {String} entity_image
 */
EntityInterface.prototype['entity_image'] = undefined;

/**
 * The slug for the given item, this can be either unique or not, depending on the configuration of the entity definition schema.
 * @member {String} entity_slug
 */
EntityInterface.prototype['entity_slug'] = undefined;

/**
 * The standard interface teaser resolved for the current entity
 * @member {String} entity_teaser
 */
EntityInterface.prototype['entity_teaser'] = undefined;

/**
 * The shared entity interface time end attribute. If not defined, null or 0 is returned
 * @member {Number} entity_time_end
 */
EntityInterface.prototype['entity_time_end'] = undefined;

/**
 * The shared entity interface time start attribute. If not defined, null or 0 is returned
 * @member {Number} entity_time_start
 */
EntityInterface.prototype['entity_time_start'] = undefined;

/**
 * The standard interface title resolved for the current entity
 * @member {String} entity_title
 */
EntityInterface.prototype['entity_title'] = undefined;

/**
 * 
 * @member {String} entity_type
 */
EntityInterface.prototype['entity_type'] = undefined;

/**
 * The Type-ID, alternatively referred to as the Entity-Definition-Schema ID, serves as a crucial identifier within the system. It uniquely distinguishes and categorizes the Entity-Definition-Schema.
 * @member {Number} entity_type_id
 */
EntityInterface.prototype['entity_type_id'] = undefined;

/**
 * A Unix timestamp indicating when the entity has been updated last time in Flyo.
 * @member {Number} updated_at
 */
EntityInterface.prototype['updated_at'] = undefined;

/**
 * @member {Object.<String, String>} routes
 */
EntityInterface.prototype['routes'] = undefined;






export default EntityInterface;

