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

app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    // console.log("here " + db.dbGetStudentDetail('db.json', id));
    db.dbGetStudentDetail('db.json', id).then(
        student => {
            // console.log(student);
            if (!student[1]) {
                res.status(404).send("No student found with this id");
                return;
            }
            // console.log(student);
            res.send(student[1]);
        }
    );
})
app.put('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedStudent = req.body;
    console.log(updatedStudent);
    db.dbUpadteStudentDetail('db.json', id, updatedStudent).then(
        student => {
            if (!student) {
                res.status(404).send("that student doesn't exist");
            }
            else {
                res.send(student);
            }
        }
    )
})
app.delete('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.dbDeleteStudent('db.json', id)
        .then(s => {
            if (!s) {
                res.status(404).send("Not found to delete");
            }
            else {
                res.send(s);
            }
        });
})
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
