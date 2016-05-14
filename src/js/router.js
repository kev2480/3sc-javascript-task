var Backbone = require('backbone');
var HomeView = require('./views/home.view');
var ResultView = require('./views/result.view');
var TracksList = require('./collections/TracksList');

(function () {

  var Router = Backbone.Router.extend({
    routes: {
      '*path': 'default'
    },

    initialize: function() {
      Backbone.history.start();
    },

    default: function() {

    }
  });

  module.exports = Router;
})();

$('#searchTracks').submit(function(event){
    event.preventDefault();
    var view = new ResultView();
    view.render();
});

/*var Tracks = Backbone.Collection.extend({

    initialize: function(){
      console.log("Tracks initialized");
    },

    parse: function(response){
        console.log(response);
        return response.tracks;
    }
});

var tracksList = new Tracks();
tracksList.url = 'https://api.spotify.com/v1/search?&type=track&q=never%20gonna%20give%20you%20up';
tracksList.fetch();*/
