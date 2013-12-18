var databaseUrl = "localhost:27017/db";
var collections = ["users", "statistics"];
var db = require("mongojs").connect(databaseUrl, collections);

db.users.find(find, function(err, users) {
  if( err || !users) console.log("No female users found");
  else users.forEach( function(matches) {
    console.log(matches);
  } );
});

db.users.save(obj, function(err, saved) {
  if( err || !saved ) console.log("User not saved");
  else console.log("User saved");
});

db.users.update(find, set, function(err, updated) {
  if( err || !updated ) console.log("User not updated");
  else console.log("User updated");
});

exports = module.exports = db;