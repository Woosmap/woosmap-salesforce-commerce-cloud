/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(module) {



module.exports = function (include) {
    if (typeof include === 'function') {
        include();
    } else if (typeof include === 'object') {
        Object.keys(include).forEach(function (key) {
            if (typeof include[key] === 'function') {
                include[key]();
            }
        });
    }
};


/***/ }),
/* 2 */
/***/ (function(module) {

/* globals WebApp */



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


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {


var processInclude = __webpack_require__(1);

$(document).ready(function () {
    processInclude(__webpack_require__(2));
});

}();
/******/ })()
;