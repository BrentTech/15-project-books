'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const book = mongoose.Schema({
  title: { type:String, required:true },
  author: { type:String, required:true },
  isbn: {type:String, required:true},
  image_url: {type:String, required:true},
  description: {type:String, required:true},
  //bookshelf id? Maybe some way to hook and virtual to a bookshelf?
});


// team.virtual('players', {
//   ref: 'players',
//   localField: 'name',
//   foreignField: 'team',
//   justOne: false,
// });

// team.pre('find', function() {
//   try {
//     this.populate('players');
//   }
//   catch(e) {console.log('Find Error', e); }
// });

module.exports = mongoose.model('book', book);
