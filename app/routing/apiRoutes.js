var showfriends = require('../data/friends.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(showfriends);
  });

  app.post('/api/friends', function(req, res){
  	var userInput = req.body.scores;
  	//console.log('friendScores = ' + friendScores);
  	

  	var matchName = '';
  	var matchImage = '';
  	var scoreDiff = 50;

  	// new friend list 
  	for(var i = 0; i < showfriends.length; i++){
  		var diff = 0;
  		for(var j = 0; j < userInput.length; j++){
  			//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  			diff += Math.abs(showfriends[i].scores[j] - userInput[j]);
  			console.log("diff" + diff);
		}//end of jloop

		if(diff < scoreDiff){
			console.log("show diff" + diff);
			matchName = friends[i].name;
			matchImage = friends[i].photo

		}
  	}//endof if(i)

  	// add new friends
  	showfriends.push(userInput);

  	// send response
  	res.json({status:'OK'});
});
};  
