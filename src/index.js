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


import ApiClient from './ApiClient';
import Block from './model/Block';
import BlockSlots from './model/BlockSlots';
import ConfigResponse from './model/ConfigResponse';
import ConfigResponseContainersValue from './model/ConfigResponseContainersValue';
import ConfigResponseNitro from './model/ConfigResponseNitro';
import Entity from './model/Entity';
import EntityInterface from './model/EntityInterface';
import EntityMetric from './model/EntityMetric';
import EntityinterfaceInner from './model/EntityinterfaceInner';
import Meta from './model/Meta';
import Page from './model/Page';
import PageBreadcrumbInner from './model/PageBreadcrumbInner';
import PageProperty from './model/PageProperty';
import PagesInner from './model/PagesInner';
import VersionResponse from './model/VersionResponse';
import ConfigApi from './api/ConfigApi';
import EntitiesApi from './api/EntitiesApi';
import PagesApi from './api/PagesApi';
import SearchApi from './api/SearchApi';
import SitemapApi from './api/SitemapApi';
import VersionApi from './api/VersionApi';


/**
* This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \&quot;Locations\&quot; section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \&quot;og-descriptions.\&quot; Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var FlyoNitroJs = require('index'); // See note below*.
* var xxxSvc = new FlyoNitroJs.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new FlyoNitroJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new FlyoNitroJs.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new FlyoNitroJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0-beta.164
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Block model constructor.
     * @property {module:model/Block}
     */
    Block,

    /**
     * The BlockSlots model constructor.
     * @property {module:model/BlockSlots}
     */
    BlockSlots,

    /**
     * The ConfigResponse model constructor.
     * @property {module:model/ConfigResponse}
     */
    ConfigResponse,

    /**
     * The ConfigResponseContainersValue model constructor.
     * @property {module:model/ConfigResponseContainersValue}
     */
    ConfigResponseContainersValue,

    /**
     * The ConfigResponseNitro model constructor.
     * @property {module:model/ConfigResponseNitro}
     */
    ConfigResponseNitro,

    /**
     * The Entity model constructor.
     * @property {module:model/Entity}
     */
    Entity,

    /**
     * The EntityInterface model constructor.
     * @property {module:model/EntityInterface}
     */
    EntityInterface,

    /**
     * The EntityMetric model constructor.
     * @property {module:model/EntityMetric}
     */
    EntityMetric,

    /**
     * The EntityinterfaceInner model constructor.
     * @property {module:model/EntityinterfaceInner}
     */
    EntityinterfaceInner,

    /**
     * The Meta model constructor.
     * @property {module:model/Meta}
     */
    Meta,

    /**
     * The Page model constructor.
     * @property {module:model/Page}
     */
    Page,

    /**
     * The PageBreadcrumbInner model constructor.
     * @property {module:model/PageBreadcrumbInner}
     */
    PageBreadcrumbInner,

    /**
     * The PageProperty model constructor.
     * @property {module:model/PageProperty}
     */
    PageProperty,

    /**
     * The PagesInner model constructor.
     * @property {module:model/PagesInner}
     */
    PagesInner,

    /**
     * The VersionResponse model constructor.
     * @property {module:model/VersionResponse}
     */
    VersionResponse,

    /**
    * The ConfigApi service constructor.
    * @property {module:api/ConfigApi}
    */
    ConfigApi,

    /**
    * The EntitiesApi service constructor.
    * @property {module:api/EntitiesApi}
    */
    EntitiesApi,

    /**
    * The PagesApi service constructor.
    * @property {module:api/PagesApi}
    */
    PagesApi,

    /**
    * The SearchApi service constructor.
    * @property {module:api/SearchApi}
    */
    SearchApi,

    /**
    * The SitemapApi service constructor.
    * @property {module:api/SitemapApi}
    */
    SitemapApi,

    /**
    * The VersionApi service constructor.
    * @property {module:api/VersionApi}
    */
    VersionApi
};
