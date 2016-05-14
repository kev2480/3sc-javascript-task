var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../templates/playlists.template.hbs');
var Playlists = require('../collections/');

Backbone.$ = $;



var PlayListView = Backbone.View.extend( {
  el: '#playlists',
  template: template,

  initialize: function(){
    var searchString = $('#inputBar').val();
    console.log(searchString);
    tracks.url = 'https://api.spotify.com/v1/search?&type=track&q=' + searchString;
  },

  render: function() {
    tracks.fetch({
      success: function(collection, response) {
          console.log(response);
          $('#listResults').html(template(
            //{title: 'Interactively loaded title here!'}
            response
          ));
      }
    });
  }
});

module.exports = ResultView;
