/**
 * Created with JetBrains WebStorm.
 * User: Greg
 * Date: 6/9/13
 * Time: 9:26 PM
 * To change this template use File | Settings | File Templates.
 */

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/jarvis"] = requestHandlers.jarvis;
handle["/css/ink.css"] = requestHandlers.inkcss;
handle["/css/quick-start.css"] = requestHandlers.cssquickstart;
handle["/js/holder.js"] = requestHandlers.jsholder;
handle["/js/ink.min.js"] = requestHandlers.inkminjs;
handle["/js/ink-ui.min.js"] = requestHandlers.inkuiminjs;
handle["/js/autoload.js"] = requestHandlers.autoloadjs;

server.start(router.route, handle);
