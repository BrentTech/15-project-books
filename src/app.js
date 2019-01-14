'use strict';

// Application Dependencies
const express = require('express');
const router = require('./routes/v1.js');

// Middleware
const methodOverride = require('./middleware/method-override.js');
const handleError = require('./middleware/error.js');
const handleNotFound = require('./middleware/404.js');

// Application Setup
const app = express();

// Application Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());
app.use(methodOverride)

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

app.use(router);
app.get('*', handleNotFound)
app.use( handleError);

let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {
    if( ! isRunning ) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`Server Up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
};
