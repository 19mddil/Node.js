const express = require('express');
const { User } = require('../models/users');//{ Student: Model { Student } }
const router = express.Router();
const bcrypt = require('bcrypt');

const authUser = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email');
    const validUser = await bcrypt.compare(req.body.password, user.password);
    if (!validUser) return res.status(400).send('Invalid password');
    res.send('login successfull');
}

router.route('/')
    .post(authUser);

module.exports = router;