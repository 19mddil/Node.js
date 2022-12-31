const mysql = require('mysql');
require('dotenv/config');

const dbconfig = {
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD
}

let dbConnect = async (obj) => {
    try {
        await mysql.createConnection(obj).connect(e => {
            if (e) {
                console.log(e);
            } else {
                console.log("Connection Successful");
            }
        })
    } catch (e) {
        console.log(e);
    }
}

dbConnect(dbconfig);


