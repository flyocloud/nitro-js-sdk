/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.164
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PagesInner model module.
 * @module model/PagesInner
 * @version 1.0.0-beta.164
 */
class PagesInner {
    /**
     * Constructs a new <code>PagesInner</code>.
     * @alias module:model/PagesInner
     */
    constructor() { 
        
        PagesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PagesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagesInner} obj Optional instance to populate.
     * @return {module:model/PagesInner} The populated <code>PagesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PagesInner();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [PagesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PagesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PagesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['target'] && !(typeof data['target'] === 'string' || data['target'] instanceof String)) {
            throw new Error("Expected the field `target` to be a primitive type in the JSON string but got " + data['target']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
        }
        // ensure the json data is a string
        if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
            throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
        }
        if (data['children']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['children'])) {
                throw new Error("Expected the field `children` to be an array in the JSON data but got " + data['children']);
            }
            // validate the optional field `children` (array)
            for (const item of data['children']) {
                PagesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The `page` type is the default behavior for a webpage, but it can also be assigned different types to suit specific purposes. In addition to the default content type, there are several other types available, including `email`, `file`, `url` and `tel`. By specifying these types, you can customize the behavior and functionality of your page to better align with your requirements.
 * @member {String} type
 */
PagesInner.prototype['type'] = undefined;

/**
 * can be either _self (which is default) or _blank
 * @member {String} target
 */
PagesInner.prototype['target'] = undefined;

/**
 * @member {String} label
 */
PagesInner.prototype['label'] = undefined;

/**
 * Returns the completed href tag. Internal links are appended with trailing slashes, such as `/about-me`, while email links are formatted with `mailto:hello@flyo.ch`.
 * @member {String} href
 */
PagesInner.prototype['href'] = undefined;

/**
 * The slug, in its current form, contains the full path of nested slugs and serves as the identifier for querying the respective page.
 * @member {String} slug
 */
PagesInner.prototype['slug'] = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
PagesInner.prototype['properties'] = undefined;

/**
 * Represents a comprehensive collection of pages within the specified container. These pages are organized in a nested tree structure, where each page can have child pages associated with it. These child pages are conveniently stored within the children property of their respective parent page.
 * @member {Array.<module:model/PagesInner>} children
 */
PagesInner.prototype['children'] = undefined;






export default PagesInner;

