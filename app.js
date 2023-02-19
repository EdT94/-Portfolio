const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});


app.get("/projects", function(req, res) {
  res.render("projects");
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 80;
}

app.listen(port, function() {
  console.log("Server has started");
});
