# [Http Module](https://nodejs.org/docs/latest-v17.x/api/http.html)

We can use http module to create a backend server for any front-end service.
## Port
Port number will decide which application will get which data or which application is sending which data!

# A http code that explains it all
```js
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

```