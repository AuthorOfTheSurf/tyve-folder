var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tyve_database')

var Schema = mongoose.Schema

var Product = new Schema({  
  title: {
    type: String,
    required: true
  },  
  description: {
    type: String,
    required: true
  },  
  style: {
    type: String,
    unique: true
  },  
  modified: {
    type: Date,
    default: Date.now
  }
});

var catalog = {}

/* Creates a product model, as well as a place to
   store them on the db */
catalog.ProductModel = mongoose.model('Product', Product)

module.exports = catalog
