var http, onRequest, portnum, restFunc, returnCode;

portnum = 3000;

restFunc = function(method, tablename, recid, bodyStr, sendResponseCallback){
    var insertObj, outobj;
    outobj = {
        success:true
    };
    if(!tablename || tablename !== 'senchacon'){
        outobj.success = false;
        outobj.message = "REST error: Table name is missing or invalid";
    } else if(method === "POST" || method === "PUT" ){
        insertObj = JSON.parse(bodyStr);
    }
    if(!outobj.success){
        return outobj;
    }
};

onRequest = function(req, res){
    var bodyStr = '', sendOutput;

    sendOutput = function(outstr){
        res.end(outstr);
    };

    req.on('data',function(chunk){
        bodyStr += chunk.toString();
    });

    req.on('end',function(){
        var argArray, buflen, contenttype, outobj, outputRestObj, outputStr, recid, tablename, url, urlparse, urlpathname, writeHeader;

        outputStr = "Hello World<br>\n";
        outputStr += "method: " + req.method + "\n";
        outputStr += "Posted data is: " + bodyStr + "\n";

        urlparse = require('url');

        url = urlparse.parse(req.url, true);
        urlpathname = url.pathname;

        outputStr += "URL pathname: " + urlpathname + "\n";

        argArray = urlpathname.split('/');
        outputStr += "URL split array:" + JSON.stringify(argArray) + "\n";

        tablename = argArray[1];
        recid = argArray[2];
        outputStr += "tablename: " +  tablename + "\n";
        outputStr += "record id: " + recid + "\n";

        returnCode = 200;
        contenttype = 'text/html';

        writeHeader = function(){
            buflen = Buffer.byteLength(outputStr, 'utf-8');

            res.writeHead(returnCode,{
                'Connection':'close',
                'Content-Type':"" + contenttype + "; charset=utf-8",
                'Access-Control-Allow-Headers':'X-Requested-With,Content-Type',
                'Access-Control-Allow-Methods':'OPTIONS,GET,POST,PUT,DELETE',
                'Access-Control-Allow-Origin':'*',
                'Content-Length': buflen
            });

        };

        outputRestObj = function(restObj){
            contenttype = 'application/json';
            outputStr = '';

            if(restObj){
                outputStr = JSON.stringify(restObj);
                outputStr += "\n";
            }
            writeHeader();

            sendOutput(outputStr);
        };

        restFunc(req.method, tablename, recid, bodyStr, outputRestObj);
        return;

        writeHeader();

        sendOutput(outputStr);
    });
};

http = require('http');
http.createServer(onRequest).listen(portnum);

console.log("Server started, listening on port# " + portnum);