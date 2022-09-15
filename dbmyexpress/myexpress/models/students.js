const { Schema, model } = require('mongoose');

const Student = model('Student', Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 2 },
    hobbies: {
        type: Array,
        of: String,
        validate: {
            validator: value => value.length > 0,
            message: "There must be at least one hobby",
        }
    }
}));

exports.Student = Student;
