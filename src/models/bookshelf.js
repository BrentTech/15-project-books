'use strict';

const schema = require('./bookshelf-schema.js');
const model = require('./model.js');

class BookShelf extends model { }

module.exports = new BookShelf(schema);
