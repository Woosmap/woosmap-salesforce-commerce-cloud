/* globals WebApp */

'use strict';

/**
 * Uses woosmap store locator widget to render a map
 */
function loadStoreLocatorWidget() {
    var slwConf = JSON.parse(document.getElementById('slw-conf').innerText);
    var storeLocatorWidget = new WebApp('store-locator-widget', slwConf.woosmapPublicApiKey);
    storeLocatorWidget.setConf(slwConf.storeLocatorWidgetConf);
    var isMobile = document.querySelector('body').clientWidth < 900;
    storeLocatorWidget.render(isMobile);
}

module.exports = {
    init: function () {
        loadStoreLocatorWidget();
    }
};
