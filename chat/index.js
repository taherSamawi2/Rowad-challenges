var webSocket = require('ws');
var server = webSocket.Server;
var socket = new server( {port:3250} );// open ,connection ,message ,close ..... 

socket.on('connection',(ws)=>{ //ws have info about client that connetion
	console.log('client is connect');
	ws.on('message',(message)=> {
		var info =JSON.parse(message);
		
		socket.clients.forEach((c)=>{
			if(ws!=c)
			c.send(info.sender + " : " +info.data);
			
		
		});
	});
	
});