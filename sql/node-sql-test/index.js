const mysql = require('mysql');
require('dotenv/config');

const dbconfig = {
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD
}
console.log(process.env.PASSWORD);