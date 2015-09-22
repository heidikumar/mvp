
var app = angular.module('mixtapeApp', ['draganddrop']);

app.controller('playlistController', function($scope, SavePlaylist){

  	$scope.tracks = ["Foo Fighters - My Hero", "Ani DiFranco - Heartbreak Even", "Rufus Wainwright - Dinner at Eight"];

  	$scope.addTrack = function(){
      console.log("addTrack was clicked!");
      var artist = $scope.artist;
      var song = $scope.song;
      var track = artist + " - " + song;

      //here I would like to search for the song through the Soundcloud API. Probably won't get to that now.

      $scope.tracks.push(track);
    };

    $scope.sendList = function(){

      var tracks = $scope.tracks;
      var playlistObj = {
        title: $scope.title
      };

      for (var i=0; i<tracks.length; i++){
        var newTrack = tracks[i].split(' - ');
        playlistObj["track" + i] = {artist: newTrack[0], song: newTrack[1]};
      };
      // console.log(playlistObj); THIS IS WORKING! YAY

      SavePlaylist.SavePlaylist(playlistObj);

      $scope.tracks = [];
    }
  });

app.factory('SavePlaylist', function($http, $q){

  var SavePlaylist = function(playlist){
    //this is taking in an object  which I want to send in a post request
    // playlist = JSON.stringify(playlist);
    // $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    return $q(function(resolve, reject){
     $http({
        method: 'POST', 
        url:'/savePlaylist', 
        data : {'playlist' : playlist}
      });
    })
    .then(function(response){
      if (response){
        resolve(response.data);
      } else {
        reject(err);
      }
    });

  };
  
  return {SavePlaylist:SavePlaylist};

});




  // .directive('rxDrag', function($document, $window, rx) {
  //   return function(scope, element, attrs) {
  //     // Get the three major events
  //     var mouseup   = rx.Observable.fromEvent(element,   'mouseup');
  //     var mousemove = rx.Observable.fromEvent($document, 'mousemove');
  //     var mousedown = rx.Observable.fromEvent(element,   'mousedown').map(function (event) {
  //         // calculate offsets when mouse down
  //         event.preventDefault();
  //         return {
  //             left: event.clientX - element[0].getBoundingClientRect().left,
  //             top:  event.clientY - element[0].getBoundingClientRect().top,
  //         };
  //     });

  //     // Combine mouse down with mouse move until mouse up
  //     var mousedrag = mousedown.selectMany(function(imageOffset) {
  //         return mousemove.map(function (pos) {
  //             // calculate offsets from mouse down to mouse moves
  //             return {
  //                 left: pos.clientX - imageOffset.left,
  //                 top:  pos.clientY - imageOffset.top
  //             };
  //         }).takeUntil(mouseup);
  //     });

  //     mousedrag.subscribe (function (pos) {
  //         // Update position
  //         element.css({top: pos.top + 'px', left: pos.left + 'px'});
  //     });

  //   };
  // });



    // // Drop handler. 
    // $scope.onDrop = function (data, event) {
    // // Get custom object data. 
    // var customObjectData = data['json/custom-object']; // {foo: 'bar'} 
 
    // // Get other attached data. 
    // var uriList = data['text/uri-list']; // http://mywebsite.com/.. 
 
    // // ... 
    // };
 
    // // Drag over handler. 
    // $scope.onDragOver = function (event) {
    // // ... 
    // };