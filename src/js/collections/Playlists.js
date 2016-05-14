
var $ = require('jquery');
var Backbone = require('backbone');

/*
 * Playlist definition: Tracks > Playlist > Playlists
 */
var Track Backbone.Model.extend({
  defaults: {
    artist: '',
    title: '',
    preview_url: '',
    spotify_link: ''
  },

  initialize: {
    console.log("Track created");
  }
});

var Playlist = Backbone.Model.extend({
  model: Track,

  defaults: {
    name: '',
    creation_time: '',
    genre: '',
  },

  initialize: {
    console.log("Playlist created");
  }

});

var Playlists = Backbone.Collection.extend({
  model: Playlist
});
