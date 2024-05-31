'use strict';

var assert = require('chai').assert;
var cheerio = require('cheerio');
var axios = require('axios');
var config = require('../it.config');

describe('Store Locator Widget Integration', function () {
    this.timeout(5000);

    describe('StoreLocatorWidget display', function () {
        it('should render the Store Locator Template with Configuration', function (done) {
            var url = config.baseUrl + '/StoreLocatorWidget-Show';
            var myRequest = {
                url: url,
                method: 'GET',
                rejectUnauthorized: false,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            };

            axios.request(myRequest).then((response) => {
                assert.equal(response.status, 200, 'Expected statusCode to be 200.');
                var $ = cheerio.load(response.data);
                var slwConf = JSON.parse($('#slw-conf').text());
                assert.isTrue(slwConf.woosmapPublicApiKey.startsWith('woos-'));
                done();
            });
        });
    });
});
