/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.162
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Block from './Block';
import Meta from './Meta';
import PageBreadcrumbInner from './PageBreadcrumbInner';
import PageProperty from './PageProperty';

/**
 * The Page model module.
 * @module model/Page
 * @version 1.0.0-beta.162
 */
class Page {
    /**
     * Constructs a new <code>Page</code>.
     * @alias module:model/Page
     */
    constructor() { 
        
        Page.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Page</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Page} obj Optional instance to populate.
     * @return {module:model/Page} The populated <code>Page</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Page();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], [Block]);
            }
            if (data.hasOwnProperty('depth')) {
                obj['depth'] = ApiClient.convertToType(data['depth'], 'Number');
            }
            if (data.hasOwnProperty('is_home')) {
                obj['is_home'] = ApiClient.convertToType(data['is_home'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
            if (data.hasOwnProperty('is_visible')) {
                obj['is_visible'] = ApiClient.convertToType(data['is_visible'], 'Number');
            }
            if (data.hasOwnProperty('meta_json')) {
                obj['meta_json'] = Meta.constructFromObject(data['meta_json']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': PageProperty});
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], 'String');
            }
            if (data.hasOwnProperty('breadcrumb')) {
                obj['breadcrumb'] = ApiClient.convertToType(data['breadcrumb'], [PageBreadcrumbInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Page</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Page</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
        }
        // ensure the json data is a string
        if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
            throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
        }
        if (data['json']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['json'])) {
                throw new Error("Expected the field `json` to be an array in the JSON data but got " + data['json']);
            }
            // validate the optional field `json` (array)
            for (const item of data['json']) {
                Block.validateJSON(item);
            };
        }
        // validate the optional field `meta_json`
        if (data['meta_json']) { // data not null
          Meta.validateJSON(data['meta_json']);
        }
        // ensure the json data is a string
        if (data['uid'] && !(typeof data['uid'] === 'string' || data['uid'] instanceof String)) {
            throw new Error("Expected the field `uid` to be a primitive type in the JSON string but got " + data['uid']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['target'] && !(typeof data['target'] === 'string' || data['target'] instanceof String)) {
            throw new Error("Expected the field `target` to be a primitive type in the JSON string but got " + data['target']);
        }
        // ensure the json data is a string
        if (data['container'] && !(typeof data['container'] === 'string' || data['container'] instanceof String)) {
            throw new Error("Expected the field `container` to be a primitive type in the JSON string but got " + data['container']);
        }
        if (data['breadcrumb']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['breadcrumb'])) {
                throw new Error("Expected the field `breadcrumb` to be an array in the JSON data but got " + data['breadcrumb']);
            }
            // validate the optional field `breadcrumb` (array)
            for (const item of data['breadcrumb']) {
                PageBreadcrumbInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Page.prototype['id'] = undefined;

/**
 * @member {String} title
 */
Page.prototype['title'] = undefined;

/**
 * Returns the completed href tag. Internal links are appended with trailing slashes, such as `/about-me`, while email links are formatted with `mailto:hello@flyo.ch`.
 * @member {String} href
 */
Page.prototype['href'] = undefined;

/**
 * The slug, in its current form, contains the full path of nested slugs and serves as the identifier for querying the respective page.
 * @member {String} slug
 */
Page.prototype['slug'] = undefined;

/**
 * @member {Array.<module:model/Block>} json
 */
Page.prototype['json'] = undefined;

/**
 * @member {Number} depth
 */
Page.prototype['depth'] = undefined;

/**
 * @member {Number} is_home
 */
Page.prototype['is_home'] = undefined;

/**
 * @member {Number} created_at
 */
Page.prototype['created_at'] = undefined;

/**
 * @member {Number} updated_at
 */
Page.prototype['updated_at'] = undefined;

/**
 * @member {Number} is_visible
 */
Page.prototype['is_visible'] = undefined;

/**
 * @member {module:model/Meta} meta_json
 */
Page.prototype['meta_json'] = undefined;

/**
 * @member {Object.<String, module:model/PageProperty>} properties
 */
Page.prototype['properties'] = undefined;

/**
 * A unique identifier for the page
 * @member {String} uid
 */
Page.prototype['uid'] = undefined;

/**
 * Can be either a page with content (which is default behavior), email, file, url, tel
 * @member {String} type
 */
Page.prototype['type'] = undefined;

/**
 * can be either _self (which is default) or _blank
 * @member {String} target
 */
Page.prototype['target'] = undefined;

/**
 * The container this page belongs, by default all pages belong to the default container which is the main nav.
 * @member {String} container
 */
Page.prototype['container'] = undefined;

/**
 * The breadcrumb of the current site is represented by an array of pages, forming a navigational path. It provides a hierarchical representation of the user's current location within the website. The array is ordered from the innermost page, closest to the current page, to the outermost page, with the current page itself residing at the last position.
 * @member {Array.<module:model/PageBreadcrumbInner>} breadcrumb
 */
Page.prototype['breadcrumb'] = undefined;






export default Page;

