const mongoose = require('mongoose');
const student = require('./student');
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        let flag = await mongoose.connect('mongodb://localhost:27017/my-students');
        console.log("Connected to Database successfully");
    } catch (error) {
        console.log(error.message);
    }
}



module.exports.connectDB = connectDB;
