var frisby = require('frisby')

var host = 'http://localhost:8080'

frisby.create('Testing api endpoints')
  .get(host + '/')
  .expectStatus(200)
.toss()