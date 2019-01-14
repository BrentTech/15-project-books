'use strict';

const express = require('express');
const modelFinder = require('../middleware/model-finder.js');
const superagent = require('superagent');
const books = require('../models/book.js');
const shelf = require('../models/bookshelf.js')
const router = express.Router();

const deleteBook = require('./handlers/delete-book.js');
const updateBook = require('./handlers/update-book.js');
const createBook = require('./handlers/create-book.js');
const newSearch = require('./handlers/new-search.js');
const getBook = require('./handlers/get-book.js');
const getAllBooks = require('./handlers/get-all-books.js');
const fetchBookFromApi = require('./handlers/fetch-books-from-api.js');

router.param('model', modelFinder);

//Routes
router.get('/', getAllBooks);
router.post('/searches', fetchBookFromApi);
router.get('/searches/new', newSearch); // enter search data

router.get('/books/:id', getBook);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;
