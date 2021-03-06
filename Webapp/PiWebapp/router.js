/**
 * Created with JetBrains WebStorm.
 * User: Greg
 * Date: 6/10/13
 * Time: 4:06 PM
 * To change this template use File | Settings | File Templates.
 */

function route(handle, pathname, response, request){
    console.log("[Router]About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function'){
        return handle[pathname.toLowerCase()](response, request);
    }
    else {
        console.log("[Router]No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found")
        response.end();
    }
}

exports.route = route;