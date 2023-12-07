const mongoose = require('mongoose')

// Connect to the database before test run
before(function (done) {
    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo')

    mongoose.connection.once('open', ()=>{
        console.log('Connection has been made, now make fireworks...')
        done()
    }).on('error', (error)=>{
        console.log('Connection error:', error)
    }) 
})

// Drop the characters collections before each each test case
beforeEach(function (done) {
    mongoose.connection.collections.mariochars.drop(function () {
        done()
    })
})