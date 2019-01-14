'use strict';

const books = require('../../models/book.js');

module.exports = (req, res, next) => {
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
