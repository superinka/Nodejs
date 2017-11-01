var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home
app.get('/', routes.home);

// Movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//not found
app.get('*', routes.notfound);

app.listen(3000, function() {
    console.log("the app is running at port 3000");
})