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
    lastName: { type: String, required: [true, "Pleae Kindly Enter the lastname please"] },
    dob: {
        type: Date, validate: {
            validator: (value) => value >= new Date("1 January 2000"),
            message: "Your date must be greater than 1 January 2000",
        }
    },
    entryDate: { type: Date, default: Date.now },
    passed: Boolean,
    hobbies: {
        type: Array,
        of: String,
        validate: {
            validator: (value) => value.length > 0,
            message: "There must be at least one hobby",
        }
    },// all entries will be string here,
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


async function saveStudent() {
    try {
        const data = await Student.create({
            id: 5,
            firstName: "Dana",
            // lastName: "Moore",
            dob: new Date("29 September 1998"),
            passed: true,
            hobbies: [],
            parents: {
                father: "A",
                mother: "B",
            },
            subjects: [{ name: "Math", mark: 80 }, { name: "English", mark: 90 }],
        });
        console.log(data);

    } catch (err) {
        for (field in err.errors) {
            console.log(err.errors[field].message);
        }
    }
}
saveStudent();