var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "Priyansh0518",
    database: "burgers_db"
  });
}

connection.connect(function() {
  console.log(`Connected to database!`);
});

module.exports = connection;
