require('dotenv').config()

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const booksRoute = require('./src/routes/books')
const loger = require('morgan')
const authRoute = require('./src/routes/auth')
const app = express()

const PORT = process.env.PORT || 3030

app.listen(PORT, () => { console.log('Server running on PORT ' + PORT) })

app.use(cors())
app.use(loger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Route to JWT authorization & validation
app.use('/auth', authRoute)
// Route for books API
app.use('/books', booksRoute)