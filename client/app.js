
var app = angular.module('mixtapeApp', ['draganddrop']);

app.controller('playlistController', function($scope){

	$scope.tracks = ["Ani DiFranco - You Had Time","Ani DiFranco - Subdivision","Ani DiFranco - God's Country", "Ani DiFranco - Heartbreak Even", "Ani DiFranco - My IQ"];

	$scope.addTrack = function(){
		console.log("addTrack was clicked!");
		var artist = $scope.artist;
		var song = $scope.song;
		var track = artist + " - " + song;
		$scope.tracks.push(track);
	};
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