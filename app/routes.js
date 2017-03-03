// Require express
var express = require('express');
var path = require('path');
// Create a router Object
var router = express.Router();
// export our router
module.exports = router;
//Load the models
Genre = require('../models/genre');
Books = require('../models/books')
// Get homepage
router.get('/', function (req, resp){
  resp.render('pages/index');
});

// About us
router.get('/about', function (req, resp){
  resp.render('pages/about');
})

router.get('/contact', function (req, resp){
  resp.render('pages/contact');
});
router.post('/contact', function (req, resp){

});
router.get('/api/genres', function (req, res) {
  Genre.getGenres(function(err, genres){
    if(err) {
      throw err;
    }
    res.json(genres);
  })
});

router.get('/api/books', function (req, res) {
  Books.getBooks(function(err, books){
    if(err) {
      throw err;
    }
    res.json(books);
  })
});
router.get('/api/books/:_id', function (req, res) {
  Books.getBookById(req.params._id, function(err, book){
    if(err) {
      throw err;
    }
    res.json(books);
  })
});
