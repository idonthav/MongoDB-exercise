const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Create Schema and Model: Book
const BookSchema = new Schema({
    title: String,
    page: Number
})

// Create Schema and Model: Author
const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
})

const Author = mongoose.model('author', AuthorSchema)
module.exports = Author