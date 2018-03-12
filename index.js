var http = require('http'),
	fs = require('fs'),
	express = require('express'),
	server = http.createServer()


server.on('request', function (request, response) { //eventEmmiter ustaiony na nasłuchiwanie odpytywania klienta
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/index') {
    	fs.readFile('./index.html', 'utf-8', function(err, data) {
    	response.write(data);
    	});
    } else {
    	var app = express();
    	response.statusCode = 404;
    	response.write('<h1>404: Zła ścieżka!<h1>');
    	app.get(/*'?'*/, function(req, res) {
			res.sendFile('./cup.jpg');
			console.log('ok');
	});
    	 response.end();
    }
});
server.listen(9000);


