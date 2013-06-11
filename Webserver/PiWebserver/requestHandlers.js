/**
 * Created with JetBrains WebStorm.
 * User: Greg
 * Date: 6/10/13
 * Time: 8:28 PM
 * To change this template use File | Settings | File Templates.
 */

function start(){
    console.log("[ReqHan]Request handler 'start' was called")
}

function upload(){
    console.log("[ReqHan]Request handler 'upload' was called")
}

exports.start = start;
exports.upload = upload;