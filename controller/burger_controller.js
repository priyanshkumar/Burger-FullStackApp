var express = require("express");
var burger = require("../models/burger");
var path = require("path");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("../views/index.handlebars");
});

module.exports = router;
