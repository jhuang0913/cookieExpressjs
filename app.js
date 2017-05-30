var express = require("express");
var http = require("http");
var path = require("path");
var cookieParser = require("cookie-parser");

var app = express();

app.set("port", process.PORT || 3000);
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.use(express.static(path.join(__dirname, "public")));

app.get("/user/:user", function(req, res) {
  res
    .cookie("name", req.params.user)
    .cookie("password", req.params.password)
    .send('<p>Cookie Set: <a href="/user">View here</a></p>');
});

app.get("/user", function(req, res) {
  res.send(req.cookies.name), res.send(req.cookiess.password);
});

var server = http.createServer(app).listen(app.get("port"), function() {
  console.log("App is listening on port" + app.get("port"));
});
