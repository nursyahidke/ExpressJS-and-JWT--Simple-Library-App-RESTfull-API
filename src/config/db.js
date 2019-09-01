require('dotenv').config()

const mysql = require('mysql')

const conn = mysql.createConnection({
    host: process.env.DB_HOST || 'remotemysql.com' ,
    user: process.env.DB_USER || 'ZOZgkFHa2q',
    password: process.env.DB_PASSWORD || 'm1go6I3Ytq',
    database: process.env.DB_NAME || 'ZOZgkFHa2q'
})

module.exports = conn