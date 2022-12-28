const express = require('express');
const router = express.Router();
const { Student } = require('../models/student');
const mongoose = require('mongoose');
const authorize = require('../middlewares/authorize');

const errors = e => {
    let errorArray = [];
    for (err in e.errors) {
        errorArray.push(e.errors[err].message);
    }
    return errorArray;
}

const studentList = async (req, res) => {
    console.log(req.user);
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect('mongodb://localhost:27017/my_students');
        }
        let students = await Student.find();
        res.status(200).send(students);
    } catch (e) {
        res.status(400).send(errors(e));
    }
}

const studentCreate = async (req, res) => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect('mongodb://localhost:27017/my_students');
        }
        let student = await Student.create(req.body);
        res.status(201).send(student);
    } catch (e) {
        res.status(400).send(errors(e));
    }
}

const studentDetail = async (req, res) => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect('mongodb://localhost:27017/my_students');
        }
        let student = await Student.find({ _id: req.params.id });
        res.status(200).send(student);
    } catch (e) {
        res.status(400).send(errors(e));
    }
}

const studentUpdate = async (req, res) => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect('mongodb://localhost:27017/my_students');
        }
        let updatedStudent = await Student.updateOne({ _id: req.params.id }, {
            $set: req.body
        });
        res.send(200).status(updatedStudent);
    } catch (e) {
        res.status(400).send(errors(e));
    }
};

const studentDelete = async (req, res) => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect('mongodb://localhost:27017/my_students');
        }
        let student = await Student.deleteOne({ _id: req.params.id });
        res.status(200).send(student);
    } catch (e) {
        res.status(400).send(errors(e));
    }
};

router.route('/')
    .get(authorize, studentList)
    .post(authorize, studentCreate);

router.route('/:id')
    .get(authorize, studentDetail)
    .put(authorize, studentUpdate)
    .delete(authorize, studentDelete);

module.exports = router;

