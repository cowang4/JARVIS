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

    var body = '<html>'+'<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input name="upload" type="file"></input>'+
        '<input type="submit" value="Upload File" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();


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

exports.start = start;
exports.upload = upload;
exports.show = show;