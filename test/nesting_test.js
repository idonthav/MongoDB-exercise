const assert = require('assert')
const mongoose = require('mongoose')
const Author = require('../models/author')

describe('Nesting records', function () {

    // A hook: drop 'author' table before each test case
    beforeEach(function (done) {
        mongoose.connection.collections.authors.drop(function () {
            done()
        })
    })

    // Create a test
    it('Creates an author with sub-document', function (done) {
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', page: 400}]
        })
        pat.save().then(function () {
            Author.findOne({ name: 'Patrick Rothfuss' }).then(function (record) {
                assert(record.books.length === 1)
                done()
            })
        })
    })

    // Create a test: Add a new book to Author-Patrick Rothfuss
    it('Adds a new book to an author', function (done) {
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', page: 400}]
        })
        pat.save().then(function(){
            Author.findOne({ name: 'Patrick Rothfuss' }).then(function (record) {
                // Add a new book
                record.books.push({ title: "Wise Man's Fear", page: 500 })
                record.save().then(function () {
                    Author.findOne({ name: 'Patrick Rothfuss' }).then(function (result) {
                        assert(result.books.length === 2)
                        done()
                    })
                })
            })
        })
    })
})