'use strict';

var interfaces = require('interfaces'),
    v = interfaces.v;

/**
 * @request=...
 * @response=...
 */
module.exports = function (request, response) {
    // write/set status code
    response.status(v.OK);
    // write HTTP header
    response.header(v.CONTENT_TYPE, v.TEXT_PLAIN);
    // write body
    response.body('Hello, worldssssss\n');
    // end
    response.end();
};
