'use-strict';

function modelFinder(req,res,next) {
  console.log(`in the model finder`);

  req.model = require(`../models/${req.params.model}.js`);
  next();
};

module.exports = modelFinder;