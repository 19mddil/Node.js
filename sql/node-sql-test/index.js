const mysql = require('mysql');
require('dotenv/config');

const dbconfig = {
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "shcool"
}

const conn = mysql.createConnection(dbconfig);

let student = {
    class: "9",
    name: "Md.Dilshad"
}

const createData = (conn, obj) => {
    let sql = `INSERT INTO shcool.student (class,name) VALUES ("${obj.class}", "${obj.name}");`
    conn.query(sql, e => {
        if (e) console.log(e);
        else console.log(`insert successfull : ${obj.name}`);
    });
}

conn.connect(e => {
    if (e) {
        console.log(e);
    } else {
        console.log("Connection Successful");
        createData(conn, student);
    }
})





