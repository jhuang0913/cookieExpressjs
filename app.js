var express = require("express");
var http = require("http");
var path = require("path");
var cookieParser = require("cookie-parser");
var morgan = require('morgan');
var session = require('express-session');
var port = process.env.PORT || 3000;


var app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
  secret: "anystringoftext",
  saveUninitialized: true,
  resave: true
}));



app.use('/', function (req, res) {
  res.send('yay!');
  console.log(req.cookies);
  console.log('==========================');
  console.log(req.session);
});

app.listen(port);
console.log("App is listening on port: " + port);