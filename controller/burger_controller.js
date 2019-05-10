var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/index.handelbars"));
});

module.exports = router;
