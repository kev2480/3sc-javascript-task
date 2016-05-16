var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../templates/playlists.template.hbs');
var templateModal = require('../templates/playlistsmodal.template.hbs');
var Playlists = require('../collections/Playlists');
var Playlist = require('../models/Playlist');
var Tracks = require('../collections/Tracks');
var Track = require('../models/Track');


Backbone.$ = $;
//var playlists = new Playlists();
var playlists = new Playlists([]);


var PlaylistView = Backbone.View.extend( {
  el: '#playlists',
  template: template,


  initialize: function(){
    this.render();
  },

  render: function() {
    this.$el.html(template(
      //Render using json format.
      {playlists: playlists.toJSON()}
    ));
    $('#modalPlaylists').html(templateModal(
      //Render using json format.
      {playlists: playlists.toJSON()}
    ));
  },

  add: function(playlistName){
    var tracks = new Tracks([]);
    var playlist = new Playlist();
    playlist.set({"title" : playlistName})
    playlist.set({"tracks": tracks});
    playlist.set({"ID" : this.getID()});
    playlists.add(playlist);
    this.render();
    console.log(playlists.toJSON());
    window.playlists = playlists;
  },

  getID: function(){
    var id = 0;
    for (var i = 0; i < playlists.length; i++)
    {
      if (playlists.at(i).get("ID") > id)
      {
        id = playlists.at(i).get("ID");
      }
    }

    return id + 1;
  }
});

module.exports = PlaylistView;
