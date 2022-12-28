const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const errors = e => {
    let errorArray = [];
    for (err in e.errors) {
        errorArray.push(e.errors[err].message);
    }
    return errorArray;
}

const userAuthentication = async (req, res) => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect('mongodb://localhost:27017/my_students');
        }
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send("email or password error");
        const boolvar = await bcrypt.compare(req.body.password, user.password);
        if (boolvar) {
            res.status(201).send(jwt.sign({ _id: user.id, email: user.email }, 'secretKey'));
        } else {
            res.status(200).send("username or password error");
        }

    } catch (e) {
        res.status(400).send(errors(e));
    }
}

router
    .route('/')
    .post(userAuthentication);

module.exports = router;