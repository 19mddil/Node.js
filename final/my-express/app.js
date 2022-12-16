const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hi, this is the home page.");
})

//something we fetch from databases
app.get('/api/students', (req, res) => {
    db.getDbStudents().then(data => res.send(data));
})

// something is comming from form
app.post('/api/students', (req, res) => {
    db.insertDbStudents(req.body).then(data => res.send(data));
})

const port = 3000;

app.listen(port, () => {
    console.log("Listening on 3000...")
})