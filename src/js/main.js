var Router = require('./router');
var Backbone = require('backbone');
var HomeView = require('./views/home.view');
var ResultView = require('./views/result.view');
var PlaylistView = require('./views/playlist.view');
var PlaylistTracksView = require('./views/playlistTracks.view');
var TracksList = require('./collections/TracksList');
var Track = require('./models/Track');
var $ = require('jquery');

new Router();
new HomeView().render();

var playlistView = new PlaylistView();
var currentTrack;
var currentPlaylist;

//Search for tracks
$('#searchTracks').submit(function(event){
    event.preventDefault();
    var view = new ResultView();
    view.render();
});

//Add new playlist on submit
$('#addPlaylist').submit(function(event){
    event.preventDefault();
    playlistView.add($('#addPlaylistInput').val());
    //Close
    $('.navbar-nav').toggleClass('slide-in');
    $('.side-body').toggleClass('body-slide-in');
    $('#search').removeClass('in').addClass('collapse').slideUp(200);
});

//Delete a track from a playlist.
window.deleteTrack = function (id){
  var playlist = window.playlists.get(currentPlaylist);
  var tracks = playlist.get("tracks");
  var track = tracks.get(id);
  window.playlists.get(currentPlaylist).get("tracks").remove(track);
  loadPlaylist(currentPlaylist);
}

//Load playlist on click
window.loadPlaylist = function (id){
  new PlaylistTracksView(window.playlists.get(id));
  currentPlaylist = id;
}

//Update a playlist's name
window.updateName = function (id){
  window.playlists.get(id).set({"title" : $('#titleInput').val()});
  playlistView = new PlaylistView();
}

//Update a playlist's genre
window.updateGenre = function (id){
  window.playlists.get(id).set({"genre" : $('#genreInput').val()});
}

//Delete a playlist
window.deletePlaylist = function (id){
  window.playlists.remove(window.playlists.get(id));
  playlistView = new PlaylistView();
  new HomeView().render();
}

//On open dialog. Store track reference
window.openAddDialog = function(index) {
     currentTrack = index;
}

//Modal for adding tracks to a playlist
$('#modalPlaylists').on('click', 'button', function(event){
   var playlistid = $(this).data("id");
   //Create a new track and add it to the selected playlist.
   var track = new Track({
     ID: window.searchedTracks.tracks.items[currentTrack].id,
     artist: window.searchedTracks.tracks.items[currentTrack].artists[0].name,
     title: window.searchedTracks.tracks.items[currentTrack].name,
     preview_url: window.searchedTracks.tracks.items[currentTrack].preview_url,
     spotify_link: window.searchedTracks.tracks.items[currentTrack].external_urls.spotify
   });

   window.playlists.get(playlistid).get("tracks").add(track);

   //Namespace conflict workaround here to close modal.
   jQuery(document).ready(function($) {
     $('#addTrackDialog').modal('toggle');
     });
});
