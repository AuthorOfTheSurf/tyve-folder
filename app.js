var http = require('http');
var express = require('express');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  var kittySchema = mongoose.Schema({
    name: String
  });
  kittySchema.methods.speak = function () {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name"
    console.log(greeting);
  }
  var Kitten = mongoose.model('Kitten', kittySchema);
  var silence = new Kitten({name: 'Silence'});
  console.log(silence.name)
  var fluffy = new Kitten({ name: 'fluffy' });
  fluffy.save(function (err, fluffy) {
    if (err) {
      console.log('There was an error saving fluffy');
    }
  });
  Kitten.find(function (err, kittens) {
    if (err) {
      console.log('There was an error finding Kittens');
    }
    console.log(kittens)
  });
});


var User = (require('./objects/User'));
var Activity = (require('./objects/Activity'));

var app = express();

app.get('/hello.txt', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');