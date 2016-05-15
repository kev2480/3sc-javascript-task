
var $ = require('jquery');
var Backbone = require('backbone');

var Track = Backbone.Model.extend({
    defaults: {
      ID: "",
      artist: "",
      title: "",
      preview_url: "",
      spotify_link: ""
    },

    idAttribute: "ID",

    initialize: function(){
        console.log("Music is the answer");
    }
});


module.exports = Track;
