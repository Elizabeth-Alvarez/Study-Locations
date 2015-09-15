var users = require('../server/controllers/users.js')();
var location = require('../server/controllers/locations.js')();
var discussion = require('../server/controllers/discussions.js')();
var comment = require('../server/controllers/comments.js')();

module.exports = function(app) {

	app.get('/users', function(req, res) {
		users.show(req, res);
	})

	app.post('/addUser', function(req, res) {
		users.insert(req, res);
	})
	app.get('/getUser', function(req, res) {
		users.show(req, res);
	})

	app.get('/userid/:user_id', function(req, res) {
		users.showid(req, res);
	})

	app.get('/location', function(req, res) {
		location.show(req, res);
	})

	app.post('/addlocation', function(req, res) {
		location.insert(req, res);
	})

	app.post('/removeLocation', function(req, res) {
		location.remove(req, res);
	})

	app.get('/id/:id', function(req, res) {
		location.showid(req, res);
	})

	app.get('/discussions', function(req, res) {
		discussion.show(req, res);
	})

	app.post('/addDiscussion', function(req, res) {
		discussion.insert(req, res);
	})

	app.post('/removeDiscussions', function(req, res) {
		discussion.remove(req, res);
	})

	app.post('/addUpvote',function(req,res) {
		discussion.upvote(req, res);
	})

	app.post('/addDownvote',function(req,res) {
		discussion.downvote(req, res);
	})

	app.get('/did/:disId', function(req, res) {
		discussion.showid(req, res);
	})

	app.get('/comment', function(req, res) {
		comment.show(req, res);
	})

	app.post('/addComment', function(req, res) {
		comment.insert(req, res);
	})

	app.post('/removeComments', function(req, res) {
		comment.remove(req, res);
	})

	app.post('/addUpvotes',function(req,res) {
		comment.upvote(req, res);
	})

	app.post('/addDownvotes',function(req,res) {
		comment.downvote(req, res);
	})


}
