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

  render: function() {
          this.$el.html(template(
            this.playlist.toJSON()
          ));
  }
});

module.exports = PlaylistTracksView;
