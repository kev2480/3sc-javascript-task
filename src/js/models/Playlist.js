var $ = require('jquery');
var Backbone = require('backbone');
var Tracks = require('../collections/Tracks')

var Playlist = Backbone.Model.extend({
  defaults: {
    ID: '',
    title: 'A playlist',
    creation_date: getDate(),
    genre: 'Generic'
  },
  idAttribute: "ID",

  tracks: new Tracks (),

  initialize: function(){
      console.log("Playists are the answer");
      this.set({"creation_date": getDate()});
  }
});

function getDate() //http://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
{
  var rightNow = new Date();
  var res = rightNow.toISOString().slice(0,10).replace(/-/g,"/");;
  return res;
}

module.exports = Playlist;
