
angular.module('mixtapeApp', [])
.controller('playlistController', function($scope){

	$scope.tracks= ["Song1", "Song2", "Song3"];

	$scope.addTrack = function(){
		console.log("addTrack was clicked!");
		var artist = $scope.artist;
		var song = $scope.song;
		var track = artist + " - " + song;
		$scope.tracks.push(track);
	};

});
