var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../templates/playlists.template.hbs');
var Playlists = require('../collections/Playlists');
var Playlist = require('../models/Playlist');
var Tracks = require('../collections/Tracks');
var Track = require('../models/Track');


Backbone.$ = $;
//var playlists = new Playlists();


var PlaylistView = Backbone.View.extend( {
  el: '#playlists',
  template: template,

  initialize: function(){
    this.render();
  },

  render: function() {
    //Populate some test data.
    var track1 = new Track({ID: 0, artist: "b", title: "baaaT", preview_url: "bpu", spotify_link: "bsl"});
    var track2 = new Track({ID: 1, artist: "b", title: "bT", preview_url: "bpu", spotify_link: "bsl"});

    //Put tracks into a tracks collection.
    var tracks = new Tracks([track1, track2]);

    //Put into a playlist.
    var playlist = new Playlist();
    playlist.set({"tracks": tracks});
    playlist.set({"title" : "playlist name!"});

    var playlist2 = new Playlist();
    playlist2.set({"tracks": tracks});
    playlist2.set({"title" : "Road trip playlist!"});

    console.log(playlist.get("tracks").toJSON());

    //Put playlists into a collection of playlists.
    var playlists = new Playlists([playlist, playlist2]);

    console.log(playlists.toJSON());

    this.$el.html(template(
      //Render using json format.
      {playlists: playlists.toJSON()}
    ));
  }
});

module.exports = PlaylistView;
