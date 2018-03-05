var http = require('http'),
	fs = require('fs'),
	server = http.createServer()


server.on('request', function (request, response) { //eventEmmiter ustaiony na nasłuchiwanie odpytywania klienta
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/index') {
    	fs.readFile('./index.html', 'utf-8', function(err, data) {
    	response.write(data);
    		response.end();
    	});
    } else {
    	response.statusCode = 404;
    	response.write('<h1>404: Zła ścieżka!<h1>');
    	fs.readFile('./cup.jpg', function(err, data) {
    		if (err) throw err;
    		response.write(data);
    	});
    		response.end();
    }
});
server.listen(9000);


