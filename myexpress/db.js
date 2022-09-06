const fs = require('fs');
const { resolve } = require('path');
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
function dbPostStudent(fileName, studentObject) {
    let s = './' + fileName;
    return dbGetStudents(fileName).then(students => new Promise(resolve => {
        students.push(studentObject);
        let jsonStudent = JSON.stringify(students, null, 4);
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
                let i = students.findIndex(s => s.id === id);
                // console.log(student);
                // console.log(i);
                // console.log(typeof [i, students[i]]);
                // let x = [i, students[i]];
                // console.log(typeof x);
                resolve([i, students[i]]);
            })
    );
}
function dbUpadteStudentDetail(fileName, id, updatedStudent) {
    let s = './' + fileName;
    return dbGetStudents(fileName).then(
        students => {
            return new Promise(resolve => {
                dbGetStudentDetail(fileName, id).then(
                    student => {
                        if (!student[1]) {
                            resolve(student[1]);
                        }
                        else {
                            console.log(updatedStudent);
                            students[student[0]] = updatedStudent;
                            fs.writeFile(s, JSON.stringify(students, null, 4), (err) => {
                                console.log(student[1]);
                                resolve(student[1]);
                            });
                            // resolve(student[1]);
                        }
                    }
                )
            })
        }
    );
}
function dbDeleteStudent(fileName, id) {
    let s = './' + fileName;
    return dbGetStudentDetail(fileName, id)
        .then(studentObject => new Promise(resolve => {
            if (!studentObject[1]) {
                resolve(studentObject[1]);
            }
            else {
                dbGetStudents(fileName)
                    .then(students => new Promise(resolve => {

                        let updatedStudents = students.filter(s => id !== s.id);
                        resolve(updatedStudents);
                    }))
                    .then(students =>
                        fs.writeFile(s, JSON.stringify(students, null, 4), (err) => {

                        })
                    );
                resolve(studentObject[1]);
            }
        }))
}

module.exports.dbDeleteStudent = dbDeleteStudent;
module.exports.dbUpadteStudentDetail = dbUpadteStudentDetail;
module.exports.dbGetStudentDetail = dbGetStudentDetail;
module.exports.dbGetStudents = dbGetStudents;
module.exports.dbPostStudent = dbPostStudent;