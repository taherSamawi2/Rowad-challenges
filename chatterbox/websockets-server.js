var webSocket = require('ws');
var prompt = require('prompt');
var webSocketServe = webSocket.Server;
var chatClient = new webSocket('http://localhost:3001');

var port = 3001;
var ws = new webSocketServe({
	port: port // option paramater
});

var messages = []; //store for message
console.log('websockets server started');
ws.on('connection', (socket) => { // listen to connection
	
	
chatClient.on('open', function open() {
  chatClient.send('Please Enter Password For Contunie');
});

	
	
	messages.forEach(function (msg) { // any one is  connect show previce message
		socket.send(msg);
	});
	///////////////////////////////////////////////////////////
	console.log('client connection established');
	var counter = -1;
	socket.on('message', (data) => {
		console.log('message received: ' + data);
		messages.push(data);
		ws.clients.forEach(function (clientSocket) { // when send message sending to all
			clientSocket.send(data)
		});

		//		if (messages.push(data)) { // add message to array store
		//			counter++;
		//			for (x = 0; x <= counter; x++) {
		//				ws.clients.forEach(function (clientSocket) { // when send message sending to all
		//
		//					clientSocket.send(data)
		//
		//				});
		//			}
		//		}

	});
});
