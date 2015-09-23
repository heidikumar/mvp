var app = require('./mixtape.js');
var Playlist = require('./playlist.js');
// var SC = require('node-soundcloud');

//This is stuff to later work with Soundcloud

// Connect user to authorize application

exports.initOAuth = function(req, res) {
  var url = SC.getConnectUrl();
  res.writeHead(301, url);
  res.end();
};


exports.setTokenAndInitSC = function(request, response){
	var code = request.query.code;

	return new Promise(function(response, reject){
		SC.authorize(code, function(err, accessToken){
			if (err) {reject(err);}
			else {
				resolve(accessToken);
			}
		})
	})
	.then(function(accessToken){
		// Initialize connection with soundcloud
		SC.init({
		  id: '0e43e893359fed215845522dc5893aca',
		  secret: '965993d4c4751cbcd470ddf46894dd21', 
		  token: accessToken
		  // uri: 'your SoundCloud redirect URI'
		});
	});
};

exports.addPlaylist = function(obj){

	console.log("I just got this: ", obj.body);
	// console.log(Playlist); 
	//Now I just have to add that to MongodB

	var input = obj.body.data;

	var pl = new Playlist(input);
	pl.save();


	// Playlist.findOne({title: obj.title}, function(err, playlist){
	// 	if(err){
	// 		console.log(err);
	// 	} else {
	// 		// console.log(playlist);
	// 		if (!playlist){
	// 			console.log('no playlist');
	// 			var newPlaylist = new Playlist(obj);
	// 			newPlaylist.save()
	// 			// .then(function(newPlaylist){
	// 			// 	console.log("New playlist", newPlaylist);
	// 			// })
	// 			// .catch(function(err){
	// 			// 	console.log("new playlist error: ", err);
	// 			// })
	// 		} else {
	// 			console.log('Not a unique playlist name.');
	// 		}
	// 	}

	// })
	// .catch(function(err){
	// 	console.log(err);
	// 	throw err;
	// });

};