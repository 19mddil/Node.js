const fs = require('fs');
// const { resolve } = require('path');

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

function dbGetStudentDetail(fileName, id) {
    let s = './' + fileName;
    return dbGetStudents(fileName).then(
        students =>
            // console.log(students);
            new Promise(resolve => {
                let student = students.filter(s => s.id === id);
                // console.log(student);
                resolve(student[0]);
            })
    );
}
module.exports.dbGetStudentDetail = dbGetStudentDetail;
module.exports.dbGetStudents = dbGetStudents;
module.exports.dbPostStudent = dbPostStudent;