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
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SibApiV3Sdk);
  }
}(this, function(expect, SibApiV3Sdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SibApiV3Sdk.CreateEmailCampaign();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateEmailCampaign', function() {
    it('should create an instance of CreateEmailCampaign', function() {
      // uncomment below and update the code to test CreateEmailCampaign
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be.a(SibApiV3Sdk.CreateEmailCampaign);
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property htmlContent (base name: "htmlContent")', function() {
      // uncomment below and update the code to test the property htmlContent
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property htmlUrl (base name: "htmlUrl")', function() {
      // uncomment below and update the code to test the property htmlUrl
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "templateId")', function() {
      // uncomment below and update the code to test the property templateId
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property scheduledAt (base name: "scheduledAt")', function() {
      // uncomment below and update the code to test the property scheduledAt
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property replyTo (base name: "replyTo")', function() {
      // uncomment below and update the code to test the property replyTo
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property toField (base name: "toField")', function() {
      // uncomment below and update the code to test the property toField
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "recipients")', function() {
      // uncomment below and update the code to test the property recipients
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property attachmentUrl (base name: "attachmentUrl")', function() {
      // uncomment below and update the code to test the property attachmentUrl
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property inlineImageActivation (base name: "inlineImageActivation")', function() {
      // uncomment below and update the code to test the property inlineImageActivation
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property mirrorActive (base name: "mirrorActive")', function() {
      // uncomment below and update the code to test the property mirrorActive
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property recurring (base name: "recurring")', function() {
      // uncomment below and update the code to test the property recurring
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property footer (base name: "footer")', function() {
      // uncomment below and update the code to test the property footer
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property header (base name: "header")', function() {
      // uncomment below and update the code to test the property header
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property utmCampaign (base name: "utmCampaign")', function() {
      // uncomment below and update the code to test the property utmCampaign
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

    it('should have the property params (base name: "params")', function() {
      // uncomment below and update the code to test the property params
      //var instane = new SibApiV3Sdk.CreateEmailCampaign();
      //expect(instance).to.be();
    });

  });

}));
