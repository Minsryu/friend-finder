var friends = require("../data/friends.js")


module.exports = function(app){

	app.get("/api/friends",function(req,res){
		res.json(friends);
	});

	app.post("/api/friends", function(req,res){
		console.log("this post route");
		console.log(req.body);
		console.log(req);
		friends.push(req.body);
		
		// console.log(req);
		res.json("this worked");
	});

};

