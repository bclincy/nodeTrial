var mongoose = require('mongoose');

//book Scheme

var bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String
  },
  pages: {
    type: Number
  },
  img_url: {
    type: String
  },
  buy_url: {
    type: String
  },
   create_date:{
    type: Date,
    default: new mongoose.Types.ObjectId().getTimestamp()
  }
});

var Books = module.exports = mongoose.model('books', bookSchema);

// Get Book data
module.exports.getBooks = function (callback, limit){
  Books.find(callback).limit(limit);
}
module.exports.getBookById = function (id, callback){
  Books.findById(id, callback);
}

// Add Genre
module.exports.addBook = function (book, callback){
  Books.create(book, callback);
}
