

// Dependencies
// ====================================================================
var express = require("express");
var path = require("path");

// Set up the Express App
// ====================================================================
var app = express();

// Set up the Express app to handle data parsing
// This helps Express translate the JSON data so it can be requested/posted from the form and pushed into the friends array
app.use(express.urlencoded({extended : true}));
app.use(express.json());

var PORT = process.env.PORT || 3000; // This sets the PORT to 3000 if not specified by Heroku



// Create a friends array to push data to
friends = [];

// Route URL to display friendsList as JSON 
app.get('/api/friends', function(req, res){
    res.json(friends); 
});

// Trying to use EXTERNAL ROUTES
// var http = require("http").Server(app);
// require("./htmlRoutes")(app);

// Route to home.html
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// Route to survey.html
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Request/POST data to push into friends array
app.post("/api/friends", function(req, res){
    var friendInfo = req.body;
    friends.push(friendInfo);
});




// Connect server to PORT
app.listen(PORT, function(){
    console.log("app listening on Port: " + PORT);
});


