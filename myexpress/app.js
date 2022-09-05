const express = require('express');
const { dbGetStudents } = require('./db');

const app = express();
const db = require('./db');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from express");
});
app.get('/api/students', (req, res) => {
    db.dbGetStudents('db.json').then(students => res.send(students));
});
app.post('/api/students', (req, res) => {
    const student = req.body;
    db.dbPostStudent('db.json', student).then(data => res.send(data));
});
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
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
