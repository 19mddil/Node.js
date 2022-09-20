const express = require('express');
const { Student } = require('../models/students');//{ Student: Model { Student } }
const router = express.Router();

const studentList = async (req, res) => {
    console.log(req.header);
    try {
        const studentList = await Student.find().sort({ name: 1 });
        res.send(studentList);
    } catch (err) {
        let errMsgs = [];
        for (field in err.errors) {
            errMsgs.push(err.errors[field].message);
        }
        return res.status(400).send(errMsgs);
    }
};
const newStudentAdd = async (req, res) => {
    const student = new Student(req.body);
    try {
        let studentData = await student.save();
        res.send(studentData);
    } catch (err) {
        let errMsgs = [];
        for (field in err.errors) {
            errMsgs.push(err.errors[field].message);
        }
        return res.status(400).send(errMsgs);
    }
};
const studentDetail = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).send("Id not found");
        }
        res.send(student);
    } catch (err) {
        return res.status(404).send("Id not found");
    }
}
const studentUpdate = async (req, res) => {
    const id = req.params.id;
    const updatedStudent = req.body;
    // console.log(updatedStudent);
    try {
        const student = await Student.findByIdAndUpdate(id, updatedStudent, {
            new: true,
            useFindAndModify: false,
        });
        if (!student) {
            console.log("here");
            return res.status(404).send("Id not found");
        }
        res.send(student);
    } catch (err) {
        console.log("here");
        return res.status(404).send("Id not found");
    }

};
const studentDelete = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            console.log("here");
            return res.status(404).send("Id not found");
        }
        res.send(student);
    } catch (err) {
        console.log("here");
        return res.status(404).send("Id not found");
    }

};

router.route('/')
    .get(studentList)
    .post(newStudentAdd);
router.route('/:id')
    .get(studentDetail)
    .put(studentUpdate)
    .delete(studentDelete);

module.exports = router;