var http = require('http');
var fs = require('fs');
var extract = require('./extract'); // include file(module) that have control url 
var ws = require('./websockets-server'); // include file(module) that have  websockets-server
var chatClient = require('./chatbot'); // include file(module) that have  chatbot-server
var mime = require('mime');

const server = http.createServer((req, res) => {
	var handleError = function (err, res) {
		res.writeHead(404);
		res.end();
	};
	var filePath = extract(req.url); // will send url that user entry and do process for path by extract file(model)

	fs.readFile(filePath, (err, data) => {
		if (err) {
			fs.readFile("./app/404.html", (err, data) => {
				res.end(data);
			});
		}
		//
		//
		//		//		if (err) {
		//		//			handleError(err, res);
		//		//			return;
		//		//		} 
		else {
			var dataType = filePath.split('.').pop();
			console.log(dataType);
			res.setHeader('Content-Type', mime.getType(dataType));
			res.write(mime.getType(dataType));
			res.end(data);
		}
	});
});

server.listen(3000, console.log("server is run"));
