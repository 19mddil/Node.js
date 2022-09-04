const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from express");
});
app.get('/api/students', (req, res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        console.log(data);
        res.send(data);
    });
});
app.post('/api/students', (req, res) => {
    console.log(req.body);
    res.send("Posted");
});
const port = 3000;

app.listen(port, () => {
    console.log("Listening on port 3000");
})

// console.log(app);

// console.log(express);

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.write("hello world");
//         res.end(); 
//     }
// })

// server.listen(3000);
// console.log("litening on port 3000");
