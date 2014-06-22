var frisby = require('frisby')

var host = 'http://localhost:8080'

frisby.create('Testing api endpoints')
  .get(host + '/')
  .expectStatus(200)
.toss()

frisby.create('Testing api endpoints')
  .get(host + '/login')
  .expectStatus(200)
.toss()

frisby.create('Testing api endpoints')
  .get(host + '/signup')
  .expectStatus(200)
.toss()

frisby.create('Testing api endpoints')
  .post(host + '/signup', {
    username: "JohnnyRocketfingers",
    password: "livestrong"
  }, { json: true })
  .expectStatus(302)
.toss()