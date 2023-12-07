const assert = require('assert')
const MarioChar = require('../models/mariochar')


describe('Updating records', function () {
    var char

    beforeEach(function (done) {
        char = new MarioChar(
            {
                name: 'Mario',
                weight: 50
            })
        char.save().then(function () {
            // assert(char.isNew === false)
            done()
        })
    })

    it('Updating a record in the database', function (done) {
        MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(function () {
            MarioChar.findOne({ _id: char._id }).then(function (result) {
                console.log(result)
                assert(result.name === 'Luigi')
                done()
            })
        })
    })

    it('Increments the weights by 1', function (done) {
        MarioChar.updateOne({}, { $inc: { weight: 1 } }).then(function () {
            MarioChar.findOne({name: 'Mario'}).then(function (record) {
                assert(record.weight === 51)
                done()
            })
        })
    })

    // it('Updating a record in the database', async function () {
    //     try {
    //         const updateResult = await MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }, { new: true });
    //         console.log('Update Result:', updateResult);

    //         // 等待一段时间，确保数据库完成更新
    //         // await new Promise(resolve => setTimeout(resolve, 5000)); // 等待1秒钟

    //         const updatedResult = await MarioChar.findOne({ _id: char._id });
            
    //         // const updatedResult = await MarioChar.findOne({ _id: updateResult._id });
    //         console.log('Updated Result-findOne:', updatedResult);

    //         assert(updatedResult.name === 'Luigi');
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     });

})