<h1 align="center">ExpressJS - Simple Library App RESTfull API</h1>



Library App is a simple application specially for backend only. Built with NodeJs using the ExpressJs Framework.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)
## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.17.1-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16.12-green.svg?style=rounded-square)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-v.2.17.1-green.svg?style=rounded-square)](https://www.mysql.com/)

## Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server in this case I used <a href="https://www.apachefriends.org/index.html">XAMPP</a>

## How to run the Library App ?
1. Open app's directory in CMD or Terminal
2. Type `npm init` then hit enter, next `npm install --save express body-parser mysql` make sure your computer connected on the internet
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name **library**, and Import file [library.sql](library.sql) to **phpMyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Start the App on the termial or CMD using `node app.js`
8. Choose HTTP Method and enter request url.(ex. localhost:8000/books)
9. You can see all the end point [here](#end-point)

## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :
```
PORT = 8000
HOST = 'localhost'
USER = 'root' // default
PASS = ''     // default
DATABASE = 'library'
NODE_ENV = development node server.js
```

## End Point
![GET](https://raw.githubusercontent.com/nursyahidke/restful-api-with-nodejs-expresjs-and-mysql/master/Screenshoot/GET.PNG)
**1. GET**
* `/books`
* `/books?search=Harry&sort=ASC&limit=7&page=0`
* `/books/available` (Get book by availability)
* `/books/borrow`
* `/books/return`
* `/books/genres` (Get all genre)


**2. POST**
![POST](https://raw.githubusercontent.com/nursyahidke/restful-api-with-nodejs-expresjs-and-mysql/master/Screenshoot/POST.PNG)
* `/books`
    * ``` { "title": "Party", "description": "Full magic", "author": "J.K. Rowling", "image": "image", "genre_id": "Fiction" } ```

* `/genres`
    * ``` { "genre": "Fiction" } ```

**3. PATCH**
![PATCH](https://raw.githubusercontent.com/nursyahidke/restful-api-with-nodejs-expresjs-and-mysql/master/Screenshoot/UPDATE.PNG)
* `/genres` (Update genre by id)
   * ``` { "id": 1, "genre": "Fiction" } ```
* `/books` (Update book by id)
   * ``` { "title": "Party", "description": "Full magic", "author": "J.K. Rowling", "image": "image", "genre_id": "Fiction" } ```

**4. DELETE**
![DELETE](https://raw.githubusercontent.com/nursyahidke/restful-api-with-nodejs-expresjs-and-mysql/master/Screenshoot/DELETE.PNG)
* `/books` (Delete book by id)
* `/genres` (Delete genre by id)
