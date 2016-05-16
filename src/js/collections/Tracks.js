var $ = require('jquery');
var Backbone = require('backbone');
var Track    = require('../models/Track');

Backbone.$ = $;

var Tracks = Backbone.Collection.extend({
    model:Track
});



module.exports = Tracks;
