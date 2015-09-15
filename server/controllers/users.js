var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function() {
 return {

 	show: function(req, res) {
    User.find({}, function(err, results) {
      if(err) {
        console.log(err);
      } else {
        res.json(results);
      }
   	})
  },

  showid: function(req,res){
   User.find({_id: req.params.id}, function(err, id){
      if(err){
        console.log(err);
      } else{
        res.json(id)
      }
    })
  },

	insert: function(req, res) {
    var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, user_name: req.body.user_name, email: req.body.email, password: req.body.password});
    user.save(function(err, results) {
      if(err) {
        console.log('oops', err);
      }
      else {
        res.send(JSON.stringify(results)); //json used to bring back data from db
      }
    })
  }

  } //closes return
} //closes exports
