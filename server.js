var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");

var port = process.env.port || 3000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public/")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(port, function() {
  console.log(`server running on ${port}`);
});
