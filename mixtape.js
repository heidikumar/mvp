
var express = require('express');
// var SC = require('node-soundcloud');
// var Promise = require('bluebird');
var morgan = require('morgan');
var bodyParser = require('body-parser')
app = express();

app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

// Connect user to authorize application
// var initOAuth = function(req, res) {
//   var url = SC.getConnectUrl();
//   res.writeHead(301, url);
//   res.end();
// };

// app.get('/', function(request, response){
// 	setTokenAndInitSC();
// 	console.log('app.get was called');
// });

// var setTokenAndInitSC = function(request, response){
// 	var code = request.query.code;

// 	return new Promise(function(response, reject){
// 		SC.authorize(code, function(err, accessToken){
// 			if (err) {reject(err);}
// 			else {
// 				resolve(accessToken);
// 			}
// 		})
// 	})
// 	.then(function(accessToken){
// 		// Initialize connection with soundcloud
// 		SC.init({
// 		  id: '0e43e893359fed215845522dc5893aca',
// 		  secret: '965993d4c4751cbcd470ddf46894dd21', 
// 		  token: accessToken
// 		  // uri: 'your SoundCloud redirect URI'
// 		});
// 	});
// };

app.listen(3000);
console.log('App listening on port 3000');

//client is now authorized to make requests.

//getting a track
// SC.get('/tracks/164497989', function(err, track) {
//   if ( err ) {
//     // throw err;
//   } else {
//     console.log('track retrieved:', track.uri);
//   }
// });