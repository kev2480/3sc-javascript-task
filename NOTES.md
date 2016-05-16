Resources used:
Side menu:  http://bootsnipp.com/snippets/featured/admin-side-menu
jquery
bootstrap
Nice looking list items: http://jsfiddle.net/cdog/EpG7x/
Fancy input boxes: https://scotch.io/tutorials/google-material-design-input-boxes-in-css3

Challenges Faced:
- Learning backbone was probably the first main challenge. Instead of diving in
  straight to this project I deviced to have a quick practice on something simpler:
  https://github.com/kev2480/Backbone-example

  This gave me a quick and easy intro into creating a model and delivering that to a
  view.

- Side menu (search bar) initially got in the way of "Playlist Panda" header.
  Fixed by adjusting positioning and z-indexes.

- Defining a structure that allows a collection of playlists where each playlist
  contains multiple track models. This was eventually solved by having a structure
  whereby A Playlists collection contains playlist models. A Playlist model contains
  a Tracks collection. A Tracks collection contains Track models.
  This stackoverflow proved helpful: http://stackoverflow.com/questions/10388199/backbone-js-collection-of-collections


What's next?
- Localstorage. Making use of Backbone.Localstorage would be a key feature that
  this project would benefit from. I would need to investigate how to save the
  Playlists Collection and the Tracks Collection together.
  https://github.com/jeromegn/Backbone.localStorage

- Another option would be implementing this to a RESTful backend API that performs
  CRUD operations to and from a small SQL database. As the structure is quite simple
  we could also potentially use a NoSql setup.

- Album artwork, delivering album artwork from spotify would be a nice way to give
  the application a more interesting experience.

- Importing user spotify playlists.

- Exporting playlists into a readable format, maybe an excel spreadsheet?
