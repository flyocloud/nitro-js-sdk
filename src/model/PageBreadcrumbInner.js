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

/**
 * The PageBreadcrumbInner model module.
 * @module model/PageBreadcrumbInner
 * @version 1.0.0-beta.145
 */
class PageBreadcrumbInner {
    /**
     * Constructs a new <code>PageBreadcrumbInner</code>.
     * @alias module:model/PageBreadcrumbInner
     */
    constructor() { 
        
        PageBreadcrumbInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageBreadcrumbInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageBreadcrumbInner} obj Optional instance to populate.
     * @return {module:model/PageBreadcrumbInner} The populated <code>PageBreadcrumbInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageBreadcrumbInner();

            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageBreadcrumbInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageBreadcrumbInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
            throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * Meta page title
 * @member {String} slug
 */
PageBreadcrumbInner.prototype['slug'] = undefined;

/**
 * Meta page title
 * @member {String} title
 */
PageBreadcrumbInner.prototype['title'] = undefined;






export default PageBreadcrumbInner;

