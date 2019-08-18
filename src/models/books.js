const db = require('../config/db')

module.exports = {
    // GET ALL BOOKS AND SORT BY TITLE AND LIMIT 0, 7 (default)
    getAllBooks: (page, limit) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT books.id, books.title, books.description, books.author, \
            available.availability, genres.genre, released FROM (books LEFT JOIN available \
                ON books.available_id = available.id) LEFT JOIN genres ON books.genre_id = genres.id \
                ORDER BY title LIMIT ${page}, ${limit} `, (err, result) =>{
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    // ADD BOOK
    insertBook: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT books SET ?`, data, (err, result) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    // UPDATE BOOK
    updateBook: (data, id) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE books SET ? WHERE id = ?`, [data, id], (err, result) => {
                if(!err) {
                    resolve(data, id)
                } else {
                    reject(err)
                }
            })
        })
    }, 
    // DELETE BOOK
    deleteBook: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM books WHERE id = ?`, id, (err, result) => {
                if(!err) {
                    resolve(`Books with id ${id} has been deleted`)
                } else {
                    reject(err)
                }
            })
        })
    },
    // SHOW AVAILABLE BOOKS
    getAvailableBooks: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM books WHERE available_id = 2`, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    // SORT BY ... & SEARCH
    searchBook: (title, page, limit) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM books WHERE title LIKE ? ORDER BY released LIMIT ${page}, ${limit}`, ["%"+title+"%"], (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    // BORROW BOOK
    borrowBook: (id, available_id) => {
        return new Promise((resolve,  reject) => {
            db.query(`SELECT * FROM books WHERE id = ? && available_id = 2`, id, (err, result) => {
                if(!err) {
                    if(result != '') {
                        db.query(`UPDATE books SET available_id = 1 WHERE id = ?`, id, (err, result) => {
                            if(!err) {
                                resolve(result) // respons tdk standar
                            } else {
                                res.send(`Sorry, book you are looking for unvailable this time`)
                            }
                        })
                    }
                } else {
                    reject(err)
                }
            })
        })
    },
    // RETURN BOOK
    returnBook: (id, available_id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM books WHERE id = ? && available_id = 1`, id, (err, result) => {
                if(!err) {
                    if(result != '') {
                        db.query(`UPDATE books SET available_id = 2 WHERE id = ?`, id, (err, result) => {
                            if(!err) {
                                resolve(result) // respons tdk standar
                            } else {
                                res.send(`Sorry, book was returned before.`)
                            }
                        })
                    }
                } else {
                    reject(err)
                }
            })
        })
    },
    // SHOW ALL GENRES
    getAllGenres: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM genres ORDER BY genre ASC`, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    insertGenre: (genre) =>{
        return new Promise((resolve, reject) => {
            db.query(`INSERT genres SET ?`, genre, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    updateGenre: (id, genre) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE genres SET ? WHERE id = ?`, [genre, id], (err, result) => {
                if(!err) {
                    resolve(result)
                } else{
                    reject(err)
                }
            })
        })
    },
    deleteGenre: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM genres WHERE id = ?`, id, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}