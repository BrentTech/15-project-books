'use strict';

const books = require('../../models/book.js');

module.exports = (req, res, next) => {
  books.get(req.params.id)
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.render(`pages/books/show`, {book: output.results[0], bookshelves: []});
    })
    .catch( next );
};
