var express = require("express");
var burger = require("../models/burger");
var path = require("path");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(result) {
    var data = {
      burgers: result
    };
    res.render("index", data);
  });
});

router.post("/", function(req, res) {
  var setValue = req.body;

  burger.insert(setValue);
  res.redirect("/");
});

router.put("/burger/:id", function(req, res) {
  var update = { id: req.params.id };

  var set = {
    devoured: true
  };

  burger.update(set, update);
  res.sendStatus(200);
});

module.exports = router;
