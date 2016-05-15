
var $ = require('jquery');
var Backbone = require('backbone');
var Playlist = require('../models/Playlist');

/*
 * Playlist definition: Tracks > Playlist > Playlists

var Track = Backbone.Model.extend({
  defaults: {
    artist: '',
    title: '',
    preview_url: '',
    spotify_link: ''
  },

  initialize: function(){
    console.log("Track initialized");
  },
});

module.exports = Track;

var Tracks = Backbone.Collection.extend({
  model: Track,
  initialize: function(){
    console.log("Tracks initialized");
  },
});

var Playlist = Backbone.Model.extend({
  defaults: {
    name: '',
    creation_time: '',
    genre: ''
  },
  tracks: new Tracks(),

  initialize: function(){
    console.log("Playlist initialized");
  },

});

var Playlists = Backbone.Collection.extend({
  model: Playlist,
  initialize: function(){
    console.log("Playlists initialized");
  },
});*/


var Playlists = Backbone.Collection.extend({
    model: Playlist,
    
});

module.exports = Playlists;
//module.exports = Playlists;
