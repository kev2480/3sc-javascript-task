#3SC JavaScript/Backbone Task - Playlist Panda.

### Getting Started
 - Fork this task repository
 - Clone your repository
 - Install node/npm.
 - Run `npm install` from the project directory
 - Run `npm install gulp` from the project directory
 - Run `gulp watch` to listen for changes and build.
 - Go to `dist/index.html` and open.
 - Push your commits to the forked repository

### What is it?!

Playlist Panda is a playlisting utility that connects to spotify and makes use of the [Backbone MVC framework](http://backbonejs.org).

So far the current features are:

- Add / Edit and Delete playlists.
- Search tracks from spotify.
- Add searched tracks to a created playlist.
- Listen to a tracks preview music.
- Open the track directly in spotify.

Future ideas:
- Localstorage. Making use of Backbone.Localstorage would be a key feature that
  this project would benefit from. I would need to investigate how to save the
  Playlists Collection and the Tracks Collection together.
  [Backbone.localStorage](https://github.com/jeromegn/Backbone.localStorage)
- Another option would be implementing this to a RESTful backend API that performs
  CRUD operations to and from a small SQL database. As the structure is quite simple
  we could also potentially use a NoSql setup.
- Album artwork, delivering album artwork from spotify would be a nice way to give
  the application a more interesting experience.
- Importing user spotify playlists.
- Exporting playlists into a readable format, maybe an excel spreadsheet?
