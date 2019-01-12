'use strict';

const schema = require('./book-schema.js');
const model = require('./model.js');

class Book extends model { }

module.exports = new Book(schema);
