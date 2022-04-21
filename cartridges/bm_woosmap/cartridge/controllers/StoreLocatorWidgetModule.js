'use strict';

/* global empty session response */

/**
 * Controller for managing the Woosmap Store Locator Widget Business Manager module
 * @module controllers/StoreLocatorWidget
 */

var Transaction = require('dw/system/Transaction');
var Site = require('dw/system/Site');
var ISML = require('dw/template/ISML');
var URLUtils = require('dw/web/URLUtils');

/**
 * @description this function renders / handles the configuration form
 */
exports.Config = function () {
    var form = session.forms.slwconfig;
    var currentSite = Site.current;
    if (!empty(form.submittedAction) && form.valid) {
        Transaction.wrap(function () {
            currentSite.setCustomPreferenceValue('woosmapPublicApiKey', form.woosmapPublicApiKey.value);
            currentSite.setCustomPreferenceValue('mobileBreakPoint', form.mobileBreakPoint.value);
            currentSite.setCustomPreferenceValue('storeLocatorWidgetConf', form.storeLocatorWidgetConf.value);
        });
        response.redirect(URLUtils.url('StoreLocatorWidgetModule-Config'));
    } else if (empty(form.submittedAction)) {
        form.clearFormElement();
        form.woosmapPublicApiKey.value = currentSite.getCustomPreferenceValue('woosmapPublicApiKey');
        form.mobileBreakPoint.value = currentSite.getCustomPreferenceValue('mobileBreakPoint');
        form.storeLocatorWidgetConf.value = currentSite.getCustomPreferenceValue('storeLocatorWidgetConf');
    }

    ISML.renderTemplate('storeLocatorWidget/config', {
        navigation: 'config'
    });
};
exports.Config.public = true;
