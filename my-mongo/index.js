
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/STUDENTDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to mongodb successfully");
    })
    .catch(() => {
        console.log("Connection failed");
    })

const studentSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
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

// Model
const Student = mongoose.model('apprentices', studentSchema); //Class
const student = new Student({
    id: 3,
    firstName: "Raju",
    lastName: "Mostan",
    dob: new Date("29 September 1978"),
    passed: true,
    hobbies: ["Swimming", "Singing"],
    parents: {
        father: "A",
        mother: "B",
    },
    subjects: [{ name: "Math", mark: 80 }, { name: "English", mark: 90 }],
});

// async function saveStudent() {
//     try {
//         let studentData = await student.save();
//         console.log(studentData);
//         mongoose.connection.close();
//     } catch (err) {
//         console.log(err);
//     }

// }
// saveStudent();

student.save().then(data => console.log(data)).catch(err => console.log(err));