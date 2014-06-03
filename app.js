var express = require('express')
var path = require('path')
var db = require('./app/mongo-settings')

var app = express()

app.configure(function () {
  app.use(express.methodOverride())
  app.use(express.json())
  app.use(express.urlencoded())
  app.use(app.router)
  app.use(express.static(__dirname + '/public'))
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }))
  app.set('view engine', 'jade')
})

app.get('/api', function (req, res) {
  res.send('Tyve API is running')
})

/* CRUD API */
/* The below API is out of date and for example purposes */
app.get('/api/products', function (req, res) {
  return db.ProductModel.find(function (err, products) {
    if (!err) {
      return res.send(products)
    } else {
      return console.log(err)
    }
  })
})

app.post('/api/products', function (req, res) {
  var product = new db.ProductModel({
    title: req.body.title,
    description: req.body.description,
    style: req.body.style,
  })
  product.save(function (err) {
    if (!err) {
      console.log('POST:')
      console.log(req.body)
      return console.log("created")
    } else {
      return console.log(err)
    }
  })
  return res.send(product)
})

app.get('/api/products/:id', function (req, res) {
  return db.ProductModel.findById(req.params.id, function (err, product) {
    if (!err) {
      return res.send(product)
    } else {
      return console.log(err)
    }
  })
})

app.put('/api/products/:id', function (req, res) {
  return db.ProductModel.findById(req.params.id, function (err, product) {
    product.title = req.body.title
    product.description = req.body.description
    product.style = req.body.style
    return product.save(function (err) {
      if (!err) {
        console.log("updated")
      } else {
        console.log(err)
      }
      return res.send(product)
    })
  })
})

app.delete('/api/products/:id', function (req, res) {
  return db.ProductModel.findById(req.params.id, function (err, product) {
    return product.remove(function (err) {
      if (!err) {
        console.log("removed")
        return res.send('')
      } else {
        console.log(err)
      }
    })
  })
})

app.listen(3000)
