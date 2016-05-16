var Backbone = require('backbone');
var HomeView = require('./views/home.view');
var ResultView = require('./views/result.view');
var PlaylistView = require('./views/playlist.view');
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
