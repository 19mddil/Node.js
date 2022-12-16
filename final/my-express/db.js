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

getStudentDetail = id => new Promise((resolve, reject) => {
    getDbStudents().then(students => {
        students = JSON.parse(students);
        id = parseInt(id);
        const student = students.students.find(s => s.id === id);
        resolve(student);
    })
})

updateStudentDetail = (id, updatedStudent) => new Promise((resolve, reject) => {
    getStudentDetail(id).then(data => {
        if (data) {
            getDbStudents().then(students => {
                students = JSON.parse(students);
                id = parseInt(id) - 1;
                students.students[id] = updatedStudent;
                fs.writeFile('./db.json', JSON.stringify(students, null, 2), () => {

                })
            })
        }
        resolve(data);
    })
})

module.exports.getDbStudents = getDbStudents;
module.exports.insertDbStudents = insertDbStudent;
module.exports.getStudentDetail = getStudentDetail;
module.exports.updateStudentDetail = updateStudentDetail;