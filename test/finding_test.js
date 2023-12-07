const assert = require('assert')
const MarioChar = require('../models/mariochar')


describe('Finding records', function () {

    var char

    beforeEach(function (done) {
        char = new MarioChar({
            name: 'Mario'
        })

        char.save().then(function(){
            assert(char.isNew === false)
            done()
        })
    })

    //Create test case：find records by 'name'
    it('Finds one record from the database', function (done) {
        MarioChar.findOne({ name: 'Mario' }).then(function(result){
            assert(result.name === 'Mario')
            done()
        })
    })

    // Creat test case: find records by 'id'
    it('Find one record by ID from the database', function (done) {
        // this.timeout(5000)
        MarioChar.findOne({ _id: char._id}).then(function (result) {
            assert(result._id.toString() === char._id.toString())
            done()
        })
    })
})