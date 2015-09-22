var mongoose = require('mongoose');

var playlistSchema = mongoose.Schema({
	title: {type: String, required: true}
});

var Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;