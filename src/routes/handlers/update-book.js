'use strict';

const books = require('../../models/book.js');

module.exports = (req, res, next) => {
  books.put(req.params.id, req.body)
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.redirect(`/books/${req.params.id}`);
    })
    .catch( next );
}
