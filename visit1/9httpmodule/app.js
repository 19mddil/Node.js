const http = require('http');
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write("Hello World");
        response.end();
    } else if (request.url === '/students') {
        response.write(JSON.stringify([
            { name: "Karim" },
            { name: "Raad" }
        ]))
        response.end();
    } else {
        response.write("Url not found brah");
        response.end();
    }
})

server.listen('3000');