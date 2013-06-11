/**
 * Created with JetBrains WebStorm.
 * User: Greg
 * Date: 6/10/13
 * Time: 4:06 PM
 * To change this template use File | Settings | File Templates.
 */

function route(handle, pathname){
    console.log("[Router]About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }
    else {
        console.log("[Router]No request handler found for " + pathname);
    }
}

exports.route = route;