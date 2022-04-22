'use strict';

/**
 * @description Controller that renders the store locator widget page.
 * @module controllers/StoreLocatorWidget
 */

var server = require('server');
var Logger = require('dw/system/Logger');
var Site = require('dw/system/Site');

var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var WoosmapLogger = Logger.getLogger('WoosmapLogger', 'WoosmapLogger');

var slwConf = require('*/cartridge/scripts/slwConf');


/**
 * @description Provides required data for store locator and renders the start template.
 */
server.get(
    'Show',
    server.middleware.https,
    cache.applyDefaultCache,
    consentTracking.consent,
    function (req, res, next) {
        var isSLWEnabled = Site.current.getCustomPreferenceValue('enableSLW');
        if (isSLWEnabled) {
            var woosmapPublicApiKey = Site.current.getCustomPreferenceValue('woosmapPublicApiKey');
            if (woosmapPublicApiKey && woosmapPublicApiKey.startsWith('woos-')) {
                try {
                    var storeLocatorWidgetConf = slwConf.getSLWConfJSON();
                    res.render('woosmap/storeLocatorWidget', {
                        storeLocatorWidgetConf: storeLocatorWidgetConf
                    });
                    next();
                } catch (e) {
                    WoosmapLogger.error('StoreLocatorWidget Controller Error: {0}', e.toString());
                }
            } else {
                WoosmapLogger.error('StoreLocatorWidget Invalid Woosmap API Key');
            }
        } else {
            res.base.redirect(require('dw/web/URLUtils').url('Stores-Find', 'showMap', true, 'horizontalView', true, 'isForm', true));
        }
    }
);

module.exports = server.exports();

