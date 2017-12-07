var express = require('express');
var app = express();

//Route

//Home
app.get('/', function(req, res) {
    res.send("This is server response");
});

app.get('/darth', function(req, res) {
    res.send("This is server reponse at darth");
});

app.listen(5000, function(err) {
    if (!err)
        console.log("Server is running at port 5000")
    else
        console.log(err)
});