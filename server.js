const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
	host: 'localhost',
	port: 8000
});

// Add the route
server.route({
	method: 'GET',
	path: '/',
	handler: (request, h) => {
		return "Hello World!"
	}
});

// Start the server
async function start() {
	try {
		await server.start();
	} catch (err) {
		console.log(err);
		process.exit(1);
	}

	console.log('Server running at:', server.info.uri);
}

start();


// Might work like this. Define action functions in a different file?
// server.route({
// 	method: 'GET',
// 	path: '/',
// 	handler: (request, h) => {
// 		return a.getTasks()
// 	}
// });

