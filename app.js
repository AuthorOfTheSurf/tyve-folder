var http = require('http');
var express = require('express');

var databaseUrl = "tyvedb";
var collections = ["users", "statistics"];
var db = require('mongojs').connect(databaseUrl, collections);

var User = (require('./objects/User'));
var Activity = (require('./objects/Activity'));

var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');

db.users.save({email: "srirangan@gmail.com", password: "iLoveMongo", sex: "male"}, function(err, saved) {
  if( err || !saved ) console.log("User not saved");
  else console.log("User saved");
});

db.users.update({email: "srirangan@gmail.com"}, {$set: {password: "iReallyLoveMongo"}}, function(err, updated) {
  if( err || !updated ) console.log("User not updated");
  else console.log("User updated");
});