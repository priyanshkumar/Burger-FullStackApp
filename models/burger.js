var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.selectAll("*", "burgers", function(result) {
      cb(res);
    });
  },
  insert: function(set, cb) {
    orm.insertOne("burgers", set, function(result) {
      cb(result);
    });
  },
  update: function(set, where, cb) {
    orm.updateOne("burgers", set, where, function(result) {
      cb(result);
    });
  }
};

module.exports = burger;
