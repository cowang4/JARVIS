/**
 * Created with JetBrains WebStorm.
 * User: Greg
 * Date: 6/10/13
 * Time: 8:28 PM
 * To change this template use File | Settings | File Templates.
 */

var exec = require("child_process").exec;//unused, for reference later on
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response, postData){
    console.log("[ReqHan]Request handler 'start' was called")

    /*var body = '<html>'+'<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input name="upload" type="file"></input>'+
        '<input type="submit" value="Upload File" />'+
        '</form>'+
        '</body>'+
        '</html>';*/
    fs.readFile('../My Webpage/main_pages/main.html', function (err, html){
        if (err) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.end(err + "\n");
        }
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    });


}

function upload(response, postData){
    console.log("[ReqHan]Request handler 'upload' was called")

    var form = new formidable.IncomingForm();
    form.parse(response, function(error, fields, files){
        console.log("parsing done");

        fs.rename(files.upload.path, "/tmp/upload.png", function(error){
            if(error){
                fs.unlink("/tmp/test.png");
                fs.rename(files.upload.path, "/tmp/upload.png");
            }
        });

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image: <br/>");
        response.write("<img src='/show' />");
        response.end();
    });

}

function show(response, postData){
    console.log("[ReqHan]Request handler 'show' was called")
    fs.readFile("/tmp/upload.png", "binary", function(error, file){
       if (error){
           response.writeHead(500, {"Content-Type": "text/plain"});
           response.end(error + "\n");
       }
       else{
           response.writeHead(200, {"Content-Type": "image/png"});
           response.end(file, "binary");
       }
    });
}

function jarvis(response, postData){
    console.log("[ReqHan]Request Handler 'jarvis' was called")

    fs.readFile('../My Webpage/main_pages/JARVIS.html', function (err, html){
        if (err) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.end(err + "\n");
        }
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    });
}

function inkcss(response, postData){
    console.log("[ReqHan]Request Handler 'inkcss' was called")

    fs.readFile('../My Webpage/css/ink.css', function (err, css){
        if (err) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.end(err + "\n");
        }
        response.writeHeader(200, {"Content-Type": "text/css"});
        response.write(css);
        response.end();
    });
}

function cssquickstart(response, postData){
    console.log("[ReqHan]Request Handler 'cssquickstart' was called")

    fs.readFile('../My Webpage/css/quick-start.css', function (err, css){
        if (err) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.end(err + "\n");
        }
        response.writeHeader(200, {"Content-Type": "text/css"});
        response.write(css);
        response.end();
    });
}

function jsholder(response, postData){
    console.log("[ReqHan]Request Handler 'jsholder' was called")

    fs.readFile('../My Webpage/js/holder.js', function (err, js){
        if (err) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.end(err + "\n");
        }
        response.writeHeader(200, {"Content-Type": "application/javascript"});
        response.write(js);
        response.end();
    });
}

function inkminjs(response, postData){
    console.log("[ReqHan]Request Handler 'inkminjs' was called")

    fs.readFile('../My Webpage/js/ink.min.js', function (err, js){
        if (err) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.end(err + "\n");
        }
        response.writeHeader(200, {"Content-Type": "application/javascript"});
        response.write(js);
        response.end();
    });
}

function inkuiminjs(response, postData){
    console.log("[ReqHan]Request Handler 'inkuiminjs' was called")

    fs.readFile('../My Webpage/js/ink-ui.min.js', function (err, js){
        if (err) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.end(err + "\n");
        }
        response.writeHeader(200, {"Content-Type": "application/javascript"});
        response.write(js);
        response.end();
    });
}

function autoloadjs(response, postData){
    console.log("[ReqHan]Request Handler 'autoloadjs' was called")

    fs.readFile('../My Webpage/js/autoload.js', function (err, js){
        if (err) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.end(err + "\n");
        }
        response.writeHeader(200, {"Content-Type": "application/javascript"});
        response.write(js);
        response.end();
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
exports.jarvis = jarvis;
exports.inkcss = inkcss;
exports.cssquickstart = cssquickstart;
exports.jsholder = jsholder;
exports.inkminjs = inkminjs;
exports.inkuiminjs = inkuiminjs;
exports.autoloadjs = autoloadjs;