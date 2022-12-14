const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello from our server');
        res.end();
    }
    if (req.url === '/students') {
        res.write("hello from students");
        res.end();
    }
});
server.listen(3000);
