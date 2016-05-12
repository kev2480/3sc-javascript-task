#3SC JavaScript/Backbone Task

### Getting Started
 - Fork this task repository
 - Clone your repository
 - Install node/npm
 - Run `npm install` from the project directory
 - Push your commits to the forked repository

### Task

You will be building a simple playlist manager using the [Backbone MVC framework](http://backbonejs.org).

A boilerplate project has already been created.

- The application should provide a simple HTML interface displaying a table of playlists created by the user.
- The user should be able to create new playlists.
- The user may add and remove tracks from each playlist.

Each playlist should store the following properties:

 - Name
 - Creation Date/Time
 - Genre
 - Tracks []

Each track should store the following:
 - Artist
 - Title
 - Preview URL

When populating a playlist, the application should allow the user to search track names using the [Spotify Web API](https://developer.spotify.com/web-api/). When selected, the track properties should be populated from the response data, before being saved to the playlist.

Example search: https://api.spotify.com/v1/search?&type=track&q=never%20gonna%20give%20you%20up

The application should run in a web browser. Data persistence is optional (e.g. localStorage), however **a backend API is not required**.

**NOTE:**
 - You may use any additional third-party JavaScript or CSS components or dependencies. 
 - You may use any resources at your disposal for guidance, please add any URLs to the NOTES.md file.

### Feedback
In the **NOTES.md** file, please provide feedback on your experience with the task. For example, any problems you encountered or solved. How might you refactor or extend your project to persist data to a backend API?