'use strict';

/**
 * @description Controller that renders the store locator widget page.
 * @module controllers/StoreLocatorWidget
 */

var server = require('server');

var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

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
        var storeLocatorWidgetConf = slwConf.getSLWConfJSON();

        res.render('woosmap/storeLocatorWidget', {
            storeLocatorWidgetConf: storeLocatorWidgetConf
        });
        next();
    }
);

module.exports = server.exports();
