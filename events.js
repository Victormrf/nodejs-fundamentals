const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new EventEmitter();

myEmitter.on('newSale', () => {
    console.log('New sale event emitted');
});

myEmitter.on('newSale', () => {
    console.log('Costumer Name: Victor');
});	

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items ins stock`);
});

myEmitter.emit('newSale', 9);

///////////////////////////////////////////////////////////////

// 1) Creating a server

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received!');
    console.log(req.url);
    res.end('Request received');
});

server.on('request', (req, res) => {
    console.log('Another request');
});

server.on('close', () => {
    console.log('Server closed');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Waiting for requests...')
});