var mongoose = require('mongoose');

//Genre Scheme

var genreSchema = mongoose.Schema({
  name:{
    type: String,
    reuqired: true
  }, create_date:{
    type: Date,
    default: new mongoose.Types.ObjectId().getTimestamp()
  }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get genres
module.exports.getGenres = function (callback, limit){
  Genre.find(callback).limit(limit);
}

// Add Genre
module.exports.addGenre = function (genre, callback){
  console.log(genre);
  Genre.create(genre, callback);
}
