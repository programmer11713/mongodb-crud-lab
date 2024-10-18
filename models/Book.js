// TASK 2: DEFINE SCHEMA, CREATE MODEL AND EXPORT
// Importing the required module
const mongoose = require('mongoose');

// Defining the Schema
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    pages: {
        type: Number,
        required: true,
        min: 1,
    },
    publishedDate: {
        type: Date,
    },
    genres: {
        type: [String],
    }
});

// Creatin a Model from the Schema and exporting it
const Book = mongoose.model('Book', schema);
module.exports = Book;