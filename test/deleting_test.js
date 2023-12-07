const assert = require('assert')
const MarioChar = require('../models/mariochar')

describe('Deleting records', function () {
    var char

    beforeEach(function (done) {
        char = new MarioChar({
            name: 'Mario'
        })
        char.save().then(function () {
            assert(char.isNew === false)
            done()
        })
    })

    // Create test case: deleting a reord
    it('Deleting a record', function (done) {
        MarioChar.findOneAndDelete({ name: 'Mario' }).then(function () {
            MarioChar.findOne({ name: 'Mario' }).then(function (result) {
                assert(result === null)
                done()
            })
        })
    })
    
})