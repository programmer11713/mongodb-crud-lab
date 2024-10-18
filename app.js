// TASK 1: CONNECTION TO MONGODB

// Importing other modules
const mongoose = require('mongoose');
require('dotenv').config();

// Connection to MONGODB
mongoose.connect(process.env.MONGODB_STRING)
    .then(() => console.log("Connected to MongoDB..."))
    .catch(e => console.error("There is some error...Please fix the issue => ", e.errmsg));


// IMPLEMENT OPERATIONS
const Book = require('./models/Book');
const { count } = require('console');

// Writing a function to create new book
async function createNewBook() {
    // Adding values to the Model
    const book = new Book({
        // NOTE: This is just for the assignment. There is no as such book or intention to create such book
        title: "Becoming the most kind person ever",
        author: "Abhinav Singh",
        pages: 1008,
        publishedDate: new Date('2024-10-08'),
        genres: ['Spiritual', 'Humanity', 'Reality']
    });

    // Trying to Save it
    try {
        await book.save();
        console.log("Added the Book to the server!");
    } catch (e) {
        console.error("Please fix the issue before adding it =>", e._message);
    }
}

createNewBook();

// Writing a Function to Read all the books
async function readBooks() {
    try {
        const books = await Book.find();
        console.log("========== Book Log ==========")
        console.log('Total Books: ', books.length);
        for (let i in books) {
            console.log(`"Book ${Number(i)+1}: `, books[i]);
        }
    } catch (e) {
        console.error('Please Fix this issue =>', error._message);
    }
}

readBooks();

// Writing a Function to Update the total pages in the book
async function updateTotalPages(bookTitle, newTotalPages) {
    try {
        const bookAfterUpdation = await Book.updateOne({
            title: bookTitle
        }, {pages: newTotalPages});
        console.log("Updated Succesfully");
    } catch (e) {
        console.error('Please fix this issue =>', error._message);
    }
}

updateTotalPages("Becoming the most kind person ever", 108);

// Writing a function to delete the book based on it's title
async function deleteBook(bookTitle) {
    try {
        const book = await Book.deleteOne({title: bookTitle});
        let message =  book.deletedCount > 0 ? `Deleted successfully: ${bookTitle}` : "No book found with the given name..."
        console.log(message);
    } catch (error) {
        console.error("Please fix this issue =>", error._message);
    }
}

deleteBook("Becoming the Most wanted Criminal");

// Writing a function to add Pagination and Sorting
async function getPageNumber(pageNumber) {
    const itemsOnPage = 2;
    let skip = (pageNumber - 1) * itemsOnPage; 
    try {
        const bookToDisplay = await Book.find()
            // Sort by Descending Order
            .sort({publishedDate: -1}) 
            .skip(skip)
            .limit(itemsOnPage);

        console.log(`========== Books on Page ${pageNumber} ==========`);
        for (let book of bookToDisplay) {
            console.log(book);
        }
    } catch (e) {
        console.error("Please Fix this issue =>", error._message);
    }
}

getPageNumber(1);
getPageNumber(2);