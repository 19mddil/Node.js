const express = require('express');
const { User } = require('../models/users');//{ Student: Model { Student } }
const router = express.Router();
const bcrypt = require('bcrypt');

function genErr(err) {
    let errMsgs = [];
    for (field in err) {
        errMsgs.push(err[field].message);
    }
    return errMsgs;
}

const newUser = async (req, res) => {
    let user = await User.findOne({
        email: req.body.email
    });
    if (user) {
        return res.status(400).send("Already user exist");
    }
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    try {
        const result = await user.save();
        const token = user.generateJWT();
        res.send({
            token: token,
            data: {
                name: result.name,
                email: result.email
            }
        });
    }
    catch (err) {
        // let errMsgs = [];
        // for (field in err.errors) {
        //     errMsgs.push(err.errors[field].message);
        // }
        // return res.status(400).send(errMsgs);
        return res.status(400).send(genErr(err.errors));
    }
}

router.route('/')
    .post(newUser);

module.exports = router;