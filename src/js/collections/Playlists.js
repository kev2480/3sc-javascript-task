
var $ = require('jquery');
var Backbone = require('backbone');
var Playlist = require('../models/Playlist');

/*
 * Playlist definition: Track > Tracks > Playlist > Playlists
 */

var Playlists = Backbone.Collection.extend({
    model: Playlist,

});

module.exports = Playlists;
