const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hi, this is the home page.");
})

//something we fetch from databases
app.get('/api/students', (req, res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        res.send(JSON.parse(data).students);
        res.end();
    })
})

// something is comming from form
app.post('/api/students', (req, res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        const students = JSON.parse(data);
        students.students.push(req.body);
        fs.writeFile('./db.json', JSON.stringify(students, null, 2), err => {
            res.send(students);
            res.end();
        })
    })
})

const port = 3000;

app.listen(port, () => {
    console.log("Listening on 3000...")
})