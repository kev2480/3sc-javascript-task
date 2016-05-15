var $ = require('jquery');
var Backbone = require('backbone');
var Tracks = require('../collections/Tracks')

var Playlist = Backbone.Model.extend({

  tracks: new Tracks (),

  initialize: function(){
      console.log("Playists are the answer");
  }
});


module.exports = Playlist;
