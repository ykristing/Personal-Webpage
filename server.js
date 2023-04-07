const http = require('http');
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser"); 

const express = require("express"); 

const portNumber = 5000;

const app = express();
app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "templates"));
app.use(express.static(__dirname + '/templates'));
process.stdin.setEncoding("utf8");
app.use(bodyParser.urlencoded({extended:false}));

// Define a route that renders an EJS template
app.get('/', function(req, res) {
  res.render('main.ejs');
});

app.get("/about", (request, response) => {
    response.render("about");
});

app.get("/interests", (request, response) => {
  response.render("about");
});

app.get("/contact", (request, response) => {
  response.render("about");
});

// Start the server
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});