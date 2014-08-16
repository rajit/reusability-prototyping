'use strict';

var express = require('express'),
    interfaces = require('interfaces'),
    FormalRequestBuilder = interfaces.FormalRequestBuilder,
    FormalResponseBuilder = interfaces.FormalResponseBuilder,
    bindTo = interfaces.bindTo,
    app = express();

/**
 * @...?
 */
app.get(/^\/.*$/, function (request, response) {
     // TODO: Map request => FormalRequest
     var formalRequest = new FormalRequestBuilder()
         // .headers(...)
         .build();
     var formalResponse = new FormalResponseBuilder()
         .status(function (status) {
             response.status(status); })
         .headers(function (headers) {
             Object.keys(headers).forEach(function (header) {
                 response.header(header, headers[header]);
             }); })
         .body(function (body) {
             response.send(body); })
         .end(function () { })
         .build();
     bindTo({
         request: formalRequest,
         response: formalResponse
     });
});

var server = app.listen(3000, function () {
    console.log('Server started on port ' + server.address().port);
});
