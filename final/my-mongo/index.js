const db = require('./database');
const student = require('./student');

db.connectDB();
student.saveStudent();