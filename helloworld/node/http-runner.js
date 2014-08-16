'use strict';

var http = require('http'),
    interfaces = require('interfaces'),
    FormalRequestBuilder = interfaces.FormalRequestBuilder,
    FormalResponseBuilder = interfaces.FormalResponseBuilder,
    bindTo = interfaces.bindTo;

/**
 * @...?
 */
http.createServer(function (request, response) {
    // TODO: Map request => FormalRequest
    var formalRequest = new FormalRequestBuilder()
        // .headers(...)
        .build();
    var formalResponse = new FormalResponseBuilder()
        // No need to implement .status, since it just gets saved until .headers is called
        .headers(function (headers) {
            response.writeHead(this.status, headers); })
        .body(function (body) {
            response.write(body); })
        .end(function () {
            response.end(); })
        .build();
    bindTo({
        request: formalRequest,
        response: formalResponse
    });
}).listen(3000, function () { console.log('Server started') });
