/* globals WebApp */

'use strict';

/**
 * @description Uses woosmap store locator widget to render a map
 */
function loadStoreLocatorWidget() {
    var slwConf = JSON.parse(document.getElementById('slw-conf').innerText);
    var storeLocatorWidget = new WebApp('store-locator-widget', slwConf.woosmapPublicApiKey);
    storeLocatorWidget.setConf(JSON.parse(slwConf.storeLocatorWidgetConf));
    var isMobile = document.querySelector('body').clientWidth < slwConf.mobileBreakPoint;
    storeLocatorWidget.render(isMobile);
}

module.exports = {
    init: function () {
        loadStoreLocatorWidget();
    }
};
