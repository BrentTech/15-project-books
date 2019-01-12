'use strict';

const util = require('util');
const express = require('express');
const modelFinder = require('../middleware/model-finder.js');

const router = express.Router();
router.param('model', modelFinder);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// v routes for testing the database v
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

router.get('/api/:model', handleGetAll);
router.post('/api/:model', handlePost);
router.put('/api/:model/:id', handlePut);
router.delete('/api/:model/:id', handleDelete);

function handleGetAll(req,res,next) {
  req.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch( next );
}

function handlePost(req,res,next) {
  req.model.post(req.body)
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch( next );
}

function handlePut(req,res,next) {
  req.model.put(req.params.id, req.body)
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch( next );
}

function handleDelete(req,res,next) {
  req.model.delete(req.params.id)
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch( next );
}



module.exports = router;