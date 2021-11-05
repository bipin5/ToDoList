//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
//const request = require("request");

const app = express();

var items = ["Go to Market","Cook Food", "Eat Food"];
//app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  //res.send("Hello");
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day,newListItems: items});

});

app.post("/", function(req, res){
  var item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server running on port 3000.");
});
