'use strict';

var Site = require('dw/system/Site');

/**
 * @description Get Store Locator Widget Conf from Custom Preferences
 * @returns {string} stringified json of Config
 */
function getSLWConfJSON() {
    var slwConf = {
        enableSLW: Site.current.getCustomPreferenceValue('enableSLW'),
        woosmapPublicApiKey: Site.current.getCustomPreferenceValue('woosmapPublicApiKey'),
        mobileBreakPoint: Site.current.getCustomPreferenceValue('mobileBreakPoint'),
        storeLocatorWidgetConf: Site.current.getCustomPreferenceValue('storeLocatorWidgetConf')
    };

    return JSON.stringify(slwConf, null, 4);
}

module.exports = {
    getSLWConfJSON: getSLWConfJSON
};
