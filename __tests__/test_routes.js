 'use strict';

 
 
 // API routes plz don't change
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
 
 function createShelf(bookshelf) {
   return shelf.post(bookshelf);
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