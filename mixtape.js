var express = require('express');
var SC = require('node-soundcloud');

/*I'm wanting to use this file to see how to get and post requests from SC. 

  Still working on understanding the authorization to get info from them.

*/

// Initialize client
SC.init({
  id: 'your SoundCloud client ID',
  secret: 'your SoundCloud client secret',
  uri: 'your SoundCloud redirect URI'
});
 
// Connect user to authorize application
var initOAuth = function(req, res) {
  var url = SC.getConnectUrl();
 
  res.writeHead(301, Location: url);
  res.end();
};