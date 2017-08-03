var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Create a basic server using Express.JS
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Starts server to begin listening

//routing 
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});
/*
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, './app/routing/apiRoutes.js'));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, './app/routing/apiRoutes.js'));
});
 // Get all reservations

//view JSON objects

app.get("/api/friends", function(req, res) {
  res.json(friends);
});

*/