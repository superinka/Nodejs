var movieJSON = require('../movies.json');


// Home
exports.home = function(req, res) {

    var movies = movieJSON.movies;

    res.render('home', {
        title: "Star Wars Movies",
        movies: movies
    });
};

// Movie_single
exports.movie_single = function(req, res) {
    var episode_number = req.params.episode_number;
    res.send("this is page for episode " + episode_number);
};

//not found
exports.notfound = function(req, res) {
    res.send("This is not the page you are looking for");
};