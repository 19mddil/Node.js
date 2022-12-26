const mongoose = require('mongoose');

const studentSchemaType = {
    firstName: String,
    lastName: { type: String, required: [true, "please enter last name"] },
    hobbies: {
        type: Array,
        of: String,
        validate: {
            validator: value => value.length > 0,
            message: "There must be at least one hobby my man"
        }
    }
}
const studentSchema = new mongoose.Schema(studentSchemaType);//The Schema is defined

const Student = mongoose.model('Students', studentSchema);//The Schema is converted to class

module.exports.Student = Student;