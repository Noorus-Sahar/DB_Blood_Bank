const mysql = require('mysql');
const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "12M@y2001",
    database: "blood_bank_management",
    port: "3306",
});

module.exports =db;
