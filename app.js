var http = require('http');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tyvedb');
mongoose.connection.on('error', function (req, res) {
  //dunno what to put here right now
});
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

app.listen(3000);
console.log('Listening on port 3000');