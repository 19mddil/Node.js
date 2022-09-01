const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello world');
        response.end();
    }
})

server.listen(8000);