var http = require('http');

var nStatic = require('node-static');

var fileServer = new nStatic.Server('./dist');

http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(process.env.PORT || 3000);