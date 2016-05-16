var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

  //Collection of Tracks from spotify
  var TracksList = Backbone.Collection.extend({

      initialize: function(){
        console.log("Searched Tracks initialized");
      },

      parse: function(response){
          return response.tracks;
      }
  });

module.exports = TracksList;
