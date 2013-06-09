/**
 * Created with JetBrains WebStorm.
 * User: Greg
 * Date: 6/8/13
 * Time: 3:04 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http');

http.createServer(function requestListener(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');