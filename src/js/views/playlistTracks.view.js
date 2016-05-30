var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../templates/playlist.template.hbs');

Backbone.$ = $;

var PlaylistTracksView = Backbone.View.extend( {
  el: '#listResults',
  template: template,

  initialize: function(playlist){
    console.log("Playlist view initialized.");
    this.playlist = playlist;
    this.render();
  },

  // events
  // ===========================================================================
  events: {
      "click .delete-button": "deleteTrack"
  },

  deleteTrack: function(e) {
    trackID = $(e.currentTarget).data("id");
    var tracks = this.playlist.get("tracks");
    var track = tracks.get(trackID);
    tracks.remove(track);
    this.render();
  },

  render: function() {
          this.$el.html(template(
            this.playlist.toJSON()
          ));
  }
});

module.exports = PlaylistTracksView;
