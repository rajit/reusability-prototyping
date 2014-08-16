'use strict';

module.exports = function (req, res) {
    res.statusCode(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello, world\n');
};
