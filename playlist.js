var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Playlists');
// mongoose.connect('mongodb://localhost/Playlists'); I've tried it this way as well

mongoose.connection.on('connected', function(){
	console.log('Mongoose is connected!');
})

var playlistSchema = mongoose.Schema({
	title: {type: String, required: true}
});

var Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;