'use strict';

const books = require('../../models/book.js');
const shelf = require('../../models/bookshelf.js')

module.exports = (req,res,next) => {
  const promises = [
    shelf.post({ name: req.body.bookshelf }),
    books.post(req.body)
  ];

  Promise.all(promises)
    .then( (output)=> {
      res.redirect(`/books/${output[1]._id}`);
    })
    .catch( next );
}