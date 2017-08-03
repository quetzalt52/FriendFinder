var path = require('path');

// Routes
// =============================================================
module.exports = function(app) {
	// Basic route that leads to html page 
	app.get("/survey", function(req, res) {
      // res.send("Welcome to the Star Wars Page!")
  	  res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

	// use route to the home page 
	app.use("/",function (req, res){
	  res.sendFile(path.join(__dirname,  "/../public/home.html"));
	});
};

