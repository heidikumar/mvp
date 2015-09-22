var app = require('mixtape.js');
// var SC = require('node-soundcloud');

//This is stuff to later work with Soundcloud

// Connect user to authorize application

var initOAuth = function(req, res) {
  var url = SC.getConnectUrl();
  res.writeHead(301, url);
  res.end();
};

app.get('/', function(request, response){		
	console.log('requesting authorization');
	initOAuth();
	setTokenAndInitSC();
	console.log('app.get was called');
});

var setTokenAndInitSC = function(request, response){
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