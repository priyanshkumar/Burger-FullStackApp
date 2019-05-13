var express = require("express");
var burger = require("../models/burger");
var path = require("path");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("../views/index.handlebars");
});

router.post("/", function(req, res) {
  var setValue = req.body;
  var data = {
    ordered: [],
    devoured: []
  };

  burger.insert(setValue);
  burger.all(function(result) {
    for (var i = 0; i < result.length; i++) {
      if (!result[i].devoured) {
        data.ordered.push(result[i]);
      } else {
        data.devoured.push(result[i]);
      }
    }
    res.render("index", data);
  });
});

router.put("/", function(req, res) {
  var update = req.body;
  var data = {    
    ordered: [],
    devoured: []
  };

  burger.update(update.set, update.where);
  burger.all(function(result) {
    for (var i = 0; i < result.length; i++) {
      if (!result[i].devoured) {
        data.ordered.push(result[i]);
      } else {
        data.devoured.push(result[i]);
      }
    }
    res.render("index", data);
  });
});

module.exports = router;
