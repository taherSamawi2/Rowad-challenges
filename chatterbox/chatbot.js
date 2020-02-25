const WebSocket = require('ws');

var chatClient = new WebSocket('http://localhost:3001');

//chatClient.on('open', function open() {
//  chatClient.send('something');
//});

chatClient.on('message', function incoming(data) {

	if (data == "what is your name") {
		chatClient.send('my name is boot');

	} else if (data == "how are you") {
		chatClient.send('i am fine');

	} else if (data == "hi") {
		chatClient.send('hi -_- ');

	}


});
