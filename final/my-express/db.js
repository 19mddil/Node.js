const fs = require('fs');

getDbStudents = () => new Promise((resolve, reject) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        resolve(data);
    })
});

insertDbStudent = student => new Promise((resolve, reject) => {
    getDbStudents().then(students => {
        students = JSON.parse(students);
        students.students.push(student);
        fs.writeFile('./db.json', JSON.stringify(students, null, 2), err => {
            resolve(students);
        })
    })
});

module.exports.getDbStudents = getDbStudents;
module.exports.insertDbStudents = insertDbStudent;