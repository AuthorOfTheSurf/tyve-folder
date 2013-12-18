var http = require('http');
var express = require('express');

var User = (require('./objects/User'));
var Activity = (require('./objects/Activity'));

var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

var  lessMiddleware = require("less-middleware");
 
app.use(lessMiddleware({
    src: __dirname + "/less",
    dest: __dirname + "/css",
    prefix: "/css",
    force: true
}));
app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log('Listening on port 3000');