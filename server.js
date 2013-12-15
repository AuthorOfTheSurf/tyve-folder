var fs = require("fs");
var host = "127.0.0.1";
var port = 1337;
var express = require("express");

var app = express();
app.use(app.router);
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	response.send("Hello!!");
});

app.listen(port, host);