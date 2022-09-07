const express = require('express');
const db = require('../db');
const router = express.Router();

const studentList = (req, res) => {
    db.dbGetStudents('db.json').then(students => res.send(students));
};
const newStudentAdd = (req, res) => {
    const student = req.body;
    db.dbPostStudent('db.json', student).then(data => res.send(data));
};
const studentDetail = (req, res) => {
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
}
const studentUpdate = (req, res) => {
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
};
const studentDelete = (req, res) => {
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
};

router.route('/')
    .get(studentList)
    .post(newStudentAdd);
router.route('/:id')
    .get(studentDetail)
    .put(studentUpdate)
    .delete(studentDelete);

module.exports = router;