var mongoose = require('mongoose');

//Genre Scheme

var genreSchema = mongoose.Schema({
  name:{
    type: String,
    reuqired: true
  }, create_date:{
    type: Date,
    default: Date.now
  }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get genres
module.exports.getGenres = function (callback, limit){
  Genre.find(callback).limit(limit);
}
