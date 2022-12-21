const mongoose = require('mongoose');

const studentSchemaType = {
    firstName: String,
    lastName: String,
    dob: Date,
    entryDate: { type: Date, default: Date.now },
    passed: Boolean,
    hobbies: [String],
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

const student = new Student({
    firstName: "Rahim",
    lastName: "Ahmed",
    dob: new Date("27 April 1990"),
    passed: true,
    hobbies: ["Kiting", "Forest Bathing"],
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
            marks: 100,
        }
    ]
})

const saveStudent = async () => {
    try {
        let data = await student.save();
        console.log(data);
    } catch (e) {
        return e.message;
    }
}

module.exports.saveStudent = saveStudent;