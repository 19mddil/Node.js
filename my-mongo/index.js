
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-students', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to mongodb successfully");
    })
    .catch(() => {
        console.log("Connection failed");
    })

const studentSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: String,
    dob: Date,
    entryDate: { type: Date, default: Date.now },
    passed: Boolean,
    hobbies: [String],// all entries will be string here,
    parents: {
        father: String,
        mother: String,
    },
    subjects: [{ name: String, mark: { type: Number, min: 0, max: 100 } }],
    example: {
        a: String,
        type: { type: String },
    }
});