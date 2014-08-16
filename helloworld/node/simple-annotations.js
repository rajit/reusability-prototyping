'use strict';

module.exports = function (req, res) {
    // @response.status(num)
    res.statusCode(200);
    // @response.header(key, val)
    res.setHeader('Content-Type', 'text/plain');
    // @response.body(body)
    res.send('Hello, world\n');
    // Implicit end?
    // @finally=response.end
};
