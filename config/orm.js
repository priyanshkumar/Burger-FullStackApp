var connection = require("./connection");

var orm = {
  selectAll: function(column, table, cb) {
    var query = "Select ?? from ??";
    connection.query(query, [column, table], function(err, result) {
      if (err) throw err;

      cb(result);
    });
  },
  insertOne: function(table, value, cb) {
    var query = "Insert into ?? set ?";
    connection.query(query, [table, value], function(err) {
      if (err) throw err;

      var result = "Updated to Database!";
      cb(result);
    });
  },
  updateOne: function(table, set, where, cb) {
    var query = "Update ?? set ? where ?";

    connection.query(query, [table, set, where], function(err) {
      if (err) throw err;

      var result = "Updated to Database!";
      cb(result);
    });
  }
};
