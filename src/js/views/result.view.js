var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../templates/result.template.hbs');
var TracksList = require('../collections/TracksList');

Backbone.$ = $;
var tracks = new TracksList();


var ResultView = Backbone.View.extend( {
  el: '#listResults',
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
          window.searchedTracks = response;
      }
    });
  }
});

module.exports = ResultView;
