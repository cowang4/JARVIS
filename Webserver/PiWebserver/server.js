/**
 * Created with JetBrains WebStorm.
 * User: Greg
 * Date: 6/8/13
 * Time: 3:04 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http');

function start(){
    function onRequest(req, response){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end("Hello World!");
    }

    http.createServer(onRequest).listen(1337, '127.0.0.1');
    console.log('Server started at http://127.0.0.1:1337/');

}

exports.start = start;