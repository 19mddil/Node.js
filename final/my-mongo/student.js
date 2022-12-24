const mongoose = require('mongoose');
const db = require('./database');

db.connectDB();

const studentSchemaType = {
    firstName: String,
    lastName: { type: String, required: [true, "please enter last name"] },
    dob: Date,
    entryDate: { type: Date, default: Date.now },
    passed: Boolean,
    hobbies: {
        type: Array,
        of: String,
        validate: {
            validator: value => value.length > 0,
            message: "There must be at least one hobby my man"
        }
    },
    parents: {
        father: String,
        mother: String,
    },
    subjects: [
        { name: String, marks: { type: Number, min: 0, max: 100 } }
    ]
}
const studentSchema = new mongoose.Schema(studentSchemaType);//The Schema is defined

const Student = mongoose.model('Students', studentSchema);//The Schema is converted to class

const createStudent = async () => {
    try {
        let data = await Student.create({
            firstName: "Keanu",
            dob: new Date("27 April 89"),
            passed: true,
            hobbies: [],
            parents: {
                father: "Rahman",
                mother: "Alia",
            },
            subjects: [
                {
                    name: "Bangla",
                    marks: 90,
                },
                {
                    name: "Astrology",
                    marks: 87,
                }
            ]
        })
        console.log(data);
    } catch (e) {
        for (field in e.errors) {
            console.log(e.errors[field].message);
        }
    }
}

const fetchStudents = async () => {
    try {
        let studentData = await Student.find().select({ firstName: 1, lastName: 1, passed: 1 });
        console.log(studentData);
    } catch (e) {
        console.log(e._message);
    }
}

const updateStudent = async (id) => {
    try {
        fetchStudents();
        let updatedStudent = await Student.updateOne({ _id: id }, {
            $set: { passed: false }
        });
        fetchStudents();
        console.log(updatedStudent);
    } catch (e) {
        console.log(e._message);
    }
}

const deleteStudent = async (id) => {
    try {
        fetchStudents();
        await Student.deleteOne({ _id: id });
        fetchStudents();
    } catch (e) {
        console.log(e._message);
    }
}

module.exports.createStudent = createStudent;
module.exports.fetchStudents = fetchStudents;
module.exports.updateStudent = updateStudent;
module.exports.deleteStudent = deleteStudent;