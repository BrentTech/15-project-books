'use-strict';

const books = require('../../models/book.js');

module.exports = (req, res, next) => {
  books.delete(req.params.id)
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.redirect('/');
    })
    .catch( next );
}
