var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.selectAll("*", "burgers", function(result) {
      cb(result);
    });
  },
  insert: function(set) {
    orm.insertOne("burgers", set);
  },
  update: function(set, where) {
    orm.updateOne("burgers", set, where);
  }
};

module.exports = burger;
