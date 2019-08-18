require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const booksRoute = require('./src/routes/books')
const loger = require('morgan')
const app = express()

const port = process.env.SERVER_PORT || 3030

app.listen(port, () => {
    console.log('Server running on port ' + port)
})

app.use(loger('dev'))
app.use(bodyParser.urlencoded({extended: false}))

app.use('/books', booksRoute)