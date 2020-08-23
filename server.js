//require express 
var express = require("express");
var exphbs = require("express-handlebars")

var PORT = process.env.PORT || 8010;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//make visible the public folder to the rest of the files
app.use(express.static("public"));

//controller routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  