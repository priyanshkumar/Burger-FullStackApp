var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");

var port = process.env.PORT || 3000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controller/burger_controller");
app.use(routes);

app.listen(port, function() {
  console.log(`server running on ${port}`);
});
