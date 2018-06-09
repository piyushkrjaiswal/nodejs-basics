
var http = require("http");
var date = require('./myfirstmodule');


function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World ' + date.myDateTime());
	response.end();
};

http.createServer(onRequest).listen(8000);