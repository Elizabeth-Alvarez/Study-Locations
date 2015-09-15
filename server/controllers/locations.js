var mongoose = require('mongoose');
var Location = mongoose.model('Location');


module.exports = function() {
	 return {

	show: function(req,res){
		Location.find({}, function(err, results){
			if(err){
				console.log(err);
			} else{
				// res.json(results);
				res.send(JSON.stringify(results));
			}
		})
	},

	showid: function(req,res){
		Location.find({_id: req.params.id}, function(err, id){
				if(err){
				console.log(err);
			} else{
				res.json(id)
			}
		})
	},

	insert: function(req,res){
		console.log("req" + req);
		var location = new Location({name:req.body.name, description:req.body.description, category:req.body.category, rating:req.body.rating, wifi:req.body.wifi, noiselevel:req.body.noiselevel, location:req.body.location, date:req.body.date });
		console.log("location: mab" + location);
		location.save(function(err, results){
			if(err){
				console.log(err);
			}
			else {
				res.send(JSON.stringify(results)); //json used to bring back data from db user: req.body.user
			}
		})
	},

	remove: function(req, res) {
	Location.remove({_id: req.body._id }, function(err,results) {
			if(err) {
			console.log(err);
			}
			else {
				res.end();
			}
	})
}

	} //closes return
} //closes exports
