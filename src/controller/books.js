const booksModel = require('../models/books')

module.exports = {
    // GET ALL BOOKS AND SORT BY TITLE AND LIMIT 0, 7(default)
    getBooks: (req, res) => {
        const page = req.query.page || 0
        const limit = req.query.limit || 7 

        booksModel.getAllBooks(page, limit)
        .then(result => res.json(result))
        .catch(err => console.log(err))
    },
    // ADD BOOK
    insertBook: (req, res) => {
        const data = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            image: req.body.image,
            genre_id: req.body.genre_id,
            available_id: req.body.available_id,
            released: new Date()
        }
        booksModel.insertBook(data)
        .then(result => res.json(result))
        .catch(err => {console.log(err)})
    },
    // UPDATE BOOK
    updateBook: (req, res) => {
        const data = {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            image: req.body.image,
            genre_id: req.body.genre_id,
            available_id: req.body.available_id,
            released: new Date()
        }
        const id = req.body.id

        booksModel.updateBook(data, id)
        .then(result => res.json(result))
        .catch(err => {console.log(err)})
    },
    // DELETE BOOK
    deleteBook: (req, res) => {
        const id = req.query.id

        booksModel.deleteBook(id)
        .then(result => res.json(result))
        .catch(err => {console.log(err)})
    },
    // SHOW AVAILABLE BOOK
    getAvailableBooks: (req, res) => {
        const page = req.query.page || 0
        const limit = req.query.limit || 7 

        booksModel.getAvailableBooks(page, limit)
        .then(result => res.json(result))
        .catch(err => {console.log(err)})
    },
    // SORT BY DATE RELEASED & SEARCH
    searchBook: (req, res) => {
        const title = req.query.title
        const page = req.query.page || 0
        const limit = req.query.limit || 7

        
        booksModel.searchBook(title, page, limit)
        .then(result => res.status(200, 'Sukes').json(result))
        .catch(err => {console.log(err)})
    },
    // BORROW BOOK
    borrowBook: (req, res) => {
        const id = req.body.id
        const available_id = req.body.available_id

        booksModel.borrowBook(id, available_id)
        .then(result => res.json(result))
        .catch(err => {console.log(err)})
    },
    // RETURN BOOK
    returnBook: (req, res) => {
        const id = req.body.id
        const available_id = req.body.available_id

        booksModel.returnBook(id, available_id)
        .then(result => res.json(result))
        .catch(err => {console.log(err)})
    },
    // SHOW ALL GENRES
    getAllGenres: (req, res) => {
        booksModel.getAllGenres()
        .then(result => res.json(result))
        .catch(err => {console.log(err)})
    },
    insertGenre: (req, res) => {
        const genre = { genre: req.body.genre }

        booksModel.insertGenre(genre)
        .then(result => res.json(result))
        .catch(err => {console.log(err)})
    },
    updateGenre: (req, res) => {
        const id = req.body.id
        const genre = { genre: req.body.genre }

        booksModel.updateGenre(id, genre)
        .then(result => res.json(result))
        .catch(err => {console.log(err)})
    },
    deleteGenre: (req, res) => {
        const id = req.body.id

        booksModel.deleteGenre(id)
        .then(result => res.json(result))
        .catch(err => {console.log(err)})
    }
}