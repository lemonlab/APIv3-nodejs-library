/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetWebhook = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetWebhook model module.
   * @module model/GetWebhook
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>GetWebhook</code>.
   * @alias module:model/GetWebhook
   * @class
   * @param url {String} URL of the webhook
   * @param id {Number} ID of the webhook
   * @param description {String} Description of the webhook
   * @param events {Array.<String>} 
   * @param type {module:model/GetWebhook.TypeEnum} Type of webhook (marketing or transac)
   * @param createdAt {Date} Creation date of the webhook (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param modifiedAt {Date} Last modification date of the webhook (YYYY-MM-DDTHH:mm:ss.SSSZ)
   */
  var exports = function(url, id, description, events, type, createdAt, modifiedAt) {
    var _this = this;

    _this['url'] = url;
    _this['id'] = id;
    _this['description'] = description;
    _this['events'] = events;
    _this['type'] = type;
    _this['createdAt'] = createdAt;
    _this['modifiedAt'] = modifiedAt;
  };

  /**
   * Constructs a <code>GetWebhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWebhook} obj Optional instance to populate.
   * @return {module:model/GetWebhook} The populated <code>GetWebhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('events')) {
        obj['events'] = ApiClient.convertToType(data['events'], ['String']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * URL of the webhook
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * ID of the webhook
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Description of the webhook
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<String>} events
   */
  exports.prototype['events'] = undefined;
  /**
   * Type of webhook (marketing or transac)
   * @member {module:model/GetWebhook.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Creation date of the webhook (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * Last modification date of the webhook (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "marketing"
     * @const
     */
    "marketing": "marketing",
    /**
     * value: "transac"
     * @const
     */
    "transac": "transac"  };


  return exports;
}));


