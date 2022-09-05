const fs = require('fs');

function dbGetStudents(fileName) {
    let s = './' + fileName;
    return new Promise((resolve, reject) => {
        fs.readFile(s, 'utf-8', (err, data) => {
            const students = JSON.parse(data);
            resolve(students);
        })
    })
}
function dbPostStudent(fileName, studentObject,) {
    let s = './' + fileName;
    return dbGetStudents(fileName).then(students => new Promise(resolve => {
        students.push(studentObject);
        let jsonStudent = JSON.stringify(students);
        fs.writeFile(s, jsonStudent, (err) => {
            resolve(studentObject);
        })
    }));
}
module.exports.dbGetStudents = dbGetStudents;
module.exports.dbPostStudent = dbPostStudent;