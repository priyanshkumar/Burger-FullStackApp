var connection = require("./connection");

var orm = {
  selectAll: function(column, table, cb) {
    var query = "Select ?? from ??";
    connection.query(query, [column, table], function(err, result) {
      if (err) throw err;

      cb(result);
    });
  },
  insertOne: function(table, value) {
    var query = "Insert into ?? set ?";
    connection.query(query, [table, value], function(err) {
      if (err) throw err;
    });
  },
  updateOne: function(table, set, where) {
    var query = "Update ?? set ? where ?";

    connection.query(query, [table, set, where], function(err) {
      if (err) throw err;
    });
  }
};

module.exports = orm;
