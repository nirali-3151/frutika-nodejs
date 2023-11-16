require('dotenv').config()
const mysql = require("mysql")

let connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERDATA,
  password:process.env.PASSWORD,
  database: process.env.DATABASE
}).on("error", (err) => {
  console.log("Failed to connect to Database - ", err);
});

module.exports = connection

