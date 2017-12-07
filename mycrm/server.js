var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');

var env = require('dotenv').load();
var exphbs = require('express-handlebars');

var path = require('path');
// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('welcome to Passport with Sequelize');
});

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

//For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); //session secret
app.use(passport.initialize());
app.use(passport.session());

//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Models
var models = require("./app/models");

//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database update")
});

//set up port website
app.listen(5000, function(err) {
    if (!err)
        console.log("Site is live");
    else console.log(err)
});