var http = require('http')
	fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) { //eventEmmiter ustaiony na nasłuchiwanie odpytywania klienta
    response.write('Hello world!');
    response.end();
});
server.listen(9000);
