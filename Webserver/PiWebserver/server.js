/**
 * Created with JetBrains WebStorm.
 * User: Greg
 * Date: 6/8/13
 * Time: 3:04 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http');
var url = require("url");

function start(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("[Server]Request for " + pathname + " received");

        route(handle, pathname);

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write("Hello World!");
        response.end();
    }

    http.createServer(onRequest).listen(1337, '127.0.0.1');
    console.log('[Server]Server started at http://127.0.0.1:1337/');

}

exports.start = start;