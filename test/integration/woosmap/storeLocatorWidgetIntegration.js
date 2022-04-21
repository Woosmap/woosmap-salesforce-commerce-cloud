var assert = require('chai').assert;
var cheerio = require('cheerio');
var request = require('request-promise');
var config = require('../it.config');

describe('Store Locator Widget Integration', function () {
    this.timeout(5000);

    describe('StoreLocatorWidget display', function () {
        it('should returns successful response with non empty woosmapPublicApiKey', function (done) {
            var url = config.baseUrl + '/StoreLocatorWidget-Show';
            var myRequest = {
                url: url,
                method: 'GET',
                rejectUnauthorized: false,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            };

            request(myRequest, function (error, response) {
                assert.equal(response.statusCode, 200, 'Expected statusCode to be 200.');
                var $ = cheerio.load(response.body);
                var slwConf = JSON.parse($('#slw-conf').text());
                assert.isTrue(slwConf.woosmapPublicApiKey.startsWith('woos-'));
                done();
            });
        });
    });
});
