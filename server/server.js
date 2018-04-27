const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=> {

	socket.on('createMessage', (message) => {
		console.log('createEmail', message);
		io.emit('newMessage', {
			from: message.from,
			text: message.text,
			createdAt: new Date().getTime()
		})
	})
	socket.on('disconnect', () => {
		console.log('User was disconencted')
	})
	console.log('New user connected');
})

console.log(publicPath);



server.listen(port, () => {
	console.log(`Started port ${port}`);
})