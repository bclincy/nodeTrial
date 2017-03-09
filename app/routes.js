// Require express
var express = require('express');
var path = require('path');
var _ = require('lodash');
// Create a router Object
var router = express.Router();
// export our router
module.exports = router;
//Load the models
Genre = require('../models/genre');
Books = require('../models/books');
// Get homepage
router.get('/', function (req, resp){
  var array = [1, 2, 4, [3]];
  var other = _.concat(array, 2, [3], [[4]]);
  console.log(other);
  console.log(array);
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
//Genres Routes
router.get('/api/genres', function (req, res) {
  Genre.getGenres(function(err, genres){
    if(err) {
      throw err;
    }
    res.json(genres);
  })
});
router.post('/api/genres', function (req, res) {
  var genre = req.body;
  if ("name" in genre) {
    genre.name = genre.name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();});
    Genre.addGenre(genre, function(err, genre){
      if(err) {
        throw err;
      }
      res.json(genre);
    })
  }
  else {
    var err = 'Error no Genre name to add!';
    throw err;
  }
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
    res.json(book);
  });
});
