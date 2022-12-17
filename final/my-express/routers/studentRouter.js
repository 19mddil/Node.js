const express = require('express');
const router = express.Router();
const db = require('../db.js')

const studentList = (req, res) => {
    db.getDbStudents().then(data => res.send(data));
}

const postStudent = (req, res) => {
    db.insertDbStudents(req.body).then(data => res.send(data));
}

const studentDetail = (req, res) => {
    db.getStudentDetail(req.params.id).then(data => {
        if (data) {
            res.send(data);
        }
        else {
            res.status(404).send("Not actually found!");
        }
    })
}

const studentUpdate = (req, res) => {
    const updatedStudent = req.body;
    console.log(updatedStudent);
    db.updateStudentDetail(req.params.id, updatedStudent).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send("Not Found");
        }
    })
};

const studentDelete = (req, res) => {
    db.deleteStudentDetail(req.params.id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send("Not found anything to delete");
        }
    })
};

router.route('/')
    .get(studentList)
    .post(postStudent);

router.route('/:id')
    .get(studentDetail)
    .put(studentUpdate)
    .delete(studentDelete);

module.exports = router;

