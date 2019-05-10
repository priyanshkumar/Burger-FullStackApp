var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "Priyansh0518",
  database: "burgers_db"
});

connection.connect(function() {
  console.log(`Connected to database!`);
});

module.exports = connection;
