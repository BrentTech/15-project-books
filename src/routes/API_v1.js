'use strict';

const util = require('util');
const express = require('express');
const modelFinder = require('../middleware/model-finder.js');
const superagent = require('superagent');
const books = require('../models/book.js');
const shelf = require('../models/bookshelf.js')

const router = express.Router();
router.param('model', modelFinder);



router.get('/', getBooks);
router.get('/searches/new', newSearch); // enter search data
router.post('/searches', fetchBookFromApi);

//outer.post('/books', createBook);

// function createBook(req,res,next){
//   // how do we retrieve the data from the 'save book' form ?
//   console.log('im in the createBook function');
//   console.log(`${req}`);
//   // create shelf
//   shelf.post(req.body.????);
//   books.post(req.body)
//     .then( data => {
//       const output = {
//         count: data.length,
//         results: data,
//       };
//       // if it successfully saved , render the detail page of that book
//       res.redirect(`/books/${output.results.id}`);
//     })
//     .catch( next );
// }


// app.get('/books/:id', getBook);
// app.post('/books', createBook);
// app.put('/books/:id', updateBook);
// app.delete('/books/:id', deleteBook);

// book constructor, for making books, after they come from the API
function Book(info) {
  console.log({info});
  let placeholderImage = 'https://i.imgur.com/J5LVHEL.jpg';

  this.title = info.title || 'No title available';
  // TODO: handle when the authors array doesn't exist
  this.author = info.authors[0]|| 'No authors available'
  this.isbn = info.industryIdentifiers ? `ISBN_13 ${info.industryIdentifiers[0].identifier}` : 'No ISBN available';
  this.image_url = info.imageLinks ? info.imageLinks.smallThumbnail : placeholderImage;
  this.description = info.description || 'No description available';
}


////////////New Search Form////////////
function newSearch(request, response) {
  response.render('pages/searches/new');
}

function getBooks(req, res, next) {
  books.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      if (output.count){
        res.render('pages/index', {books: output.results});
      }else{
        res.render('pages/searches/new');
      }
    })
    .catch( next );

}

///////////Submit the Form and Fetch from API////////
function fetchBookFromApi(req, res, next){
  console.log('im in the fetchBookFromApi function');
  let url = 'https://www.googleapis.com/books/v1/volumes?q=';

  if (req.body.search[1] === 'title') { url += `+intitle:${req.body.search[0]}`; }
  if (req.body.search[1] === 'author') { url += `+inauthor:${req.body.search[0]}`; }

  superagent.get(url)
    .then(apiResponse => apiResponse.body.items.map(bookResult => new Book(bookResult.volumeInfo)))
    .then(results => res.render('pages/searches/show', {results: results}))
    .catch( next );
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// v routes for testing the database v
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// router.get('/api/:model', handleGetAll);
router.post('/api/:model', handlePost);
router.put('/api/:model/:id', handlePut);
router.delete('/api/:model/:id', handleDelete);

// function handleGetAll(req,res,next) {
//   req.model.get()
//     .then( data => {
//       const output = {
//         count: data.length,
//         results: data,
//       };
//       res.status(200).json(output);
//     })
//     .catch( next );
// }

function handlePost(req,res,next) {
  req.model.post(req.body)
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch( next );
}

function handlePut(req,res,next) {
  req.model.put(req.params.id, req.body)
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch( next );
}

function handleDelete(req,res,next) {
  req.model.delete(req.params.id)
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch( next );
}

module.exports = router;
