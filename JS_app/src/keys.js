const mysql = require('mysql');

const con= mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"bd_js"
});

module.exports = con;