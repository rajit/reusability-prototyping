'use strict';

module.exports = function (req, res) {
    // @response.status
    res.statusCode(200);
    // @response.header...???
    res.headers({"Content-Type", "text/plain"})
    // @response.header...???
    res.contentType("text/plain");
    // @response.body
    res.send('Hello, world\n');
    // Implicit end?
    // Auto-call at end of func???
};
