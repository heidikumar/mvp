
var express = require('express');
// var SC = require('node-soundcloud');
// var Promise = require('bluebird');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var requestHandler = require('requestHandler.js');


app = express();

app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

//I need to write getters and setters here using stuff from the 
	//requestHandler 
app.get('/', function(request, response){		
	console.log('requesting authorization');
	initOAuth();
	setTokenAndInitSC();
	console.log('app.get was called');
});

app.post('/savePlaylist', requestHandler.addPlaylist);

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