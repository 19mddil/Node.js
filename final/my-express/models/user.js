const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})

userSchema.methods.genJWT = function () {
    return jwt.sign({ _id: this.id, email: this.email, role: this.role }, process.env.SECRETKEY);
}

const User = model('User', userSchema)

module.exports.User = User;