const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const errors = e => {
    let errorArray = [];
    for (err in e.errors) {
        errorArray.push(e.errors[err].message);
    }
    return errorArray;
}


const userCreate = async (req, res) => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect('mongodb://localhost:27017/my_students');
        }
        let alreadyExistingUser = await User.findOne({ email: req.body.email });
        if (alreadyExistingUser) return res.status(400).send('User already exists');
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        let user = await User.create(req.body);

        res.status(201).send(jwt.sign({ _id: user.id, email: user.email }, 'secretKey'));
    } catch (e) {
        res.status(400).send(errors(e));
    }
}


router
    .route('/')
    .post(userCreate);

module.exports = router;