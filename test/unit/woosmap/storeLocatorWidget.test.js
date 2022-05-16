'use strict';

const assert = require('assert');
const proxyquire = require('proxyquire').noCallThru();

let SiteStub = {
    current: {
        getCustomPreferenceValue: function (params) {
            if (params === 'enableSLW') {
                return true;
            }
            if (params === 'woosmapPublicApiKey') {
                return 'woos-XXX-YYY';
            }
            if (params === 'mobileBreakPoint') {
                return 900;
            }
            if (params === 'storeLocatorWidgetConf') {
                return {
                    maps: {
                        provider: 'woosmap'
                    }
                };
            }
            return {};
        }
    }
};

describe('SLW Conf scripts test', function () {
    const SLWConfPath = '../../../cartridges/int_woosmap/cartridge/scripts/slwConf';
    const SLWConf = proxyquire(SLWConfPath, {
        'dw/system/Site': SiteStub
    });

    var expectedConf = {
        enableSLW: true,
        woosmapPublicApiKey: 'woos-XXX-YYY',
        mobileBreakPoint: 900,
        storeLocatorWidgetConf: {
            maps: {
                provider: 'woosmap'
            }
        }
    };
    describe('getSLWConfJSON', function () {
        it('should get Store Locator Widget Conf JSON string', function () {
            var currentConf = SLWConf.getSLWConfJSON();
            assert.equal(currentConf, JSON.stringify(expectedConf, null, 4));
        });
    });
});
