var assert = require('chai').assert;
var chaiSubset = require('chai-subset');
var chai = require('chai');
chai.use(chaiSubset);

var request = require('request');
var config = require('../it.config');


describe('Store Locator Widget Integration', function () {
    this.timeout(5000);

    describe('StoreLocatorWidget display', function () {

        it('should returns succesful response', function (done) {

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
                done();
            });
        });

    });
});
