'use strict';

// TODO: link this up with server.js
// Lab 14 index.js code
// ~~~~~~~~~~~~~~~~~~~~~~~~~

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};

mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

require('./src/app.js').start(process.env.PORT);

// ~~~~~~~~~~~~~~~~~~~~~~~~~



