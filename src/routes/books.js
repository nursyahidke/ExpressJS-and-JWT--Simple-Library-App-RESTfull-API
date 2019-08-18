const express = require('express')
const Route = express.Router()

const booksController = require('../controller/books')


Route
    // RESTful BOOK
    .get('/', booksController.getBooks)
    .post('/', booksController.insertBook)
    .patch('/', booksController.updateBook)
    .delete('/', booksController.deleteBook)
    .get('/available', booksController.getAvailableBooks)
    .get('/search', booksController.searchBook)

    // BORROW & RETURN BOOK
    .get('/borrow', booksController.borrowBook)
    .get('/return', booksController.returnBook)

    // BOOKS GENRES
    .get('/genres', booksController.getAllGenres)
    .post('/genres', booksController.insertGenre)
    .patch('/genres', booksController.updateGenre)
    .delete('/genres', booksController.deleteGenre)

module.exports = Route
