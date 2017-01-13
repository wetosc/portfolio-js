const pug = require('pug')
const userModel = require('../models/UserObject.js')

const index = pug.compileFile("./views/index.pug")
const searchView = pug.compileFile("./views/searchResult.pug")
const userView = pug.compileFile("./views/userView.pug")
const loginView = pug.compileFile("./views/login.pug")

module.exports.get = function (req,res) {
	res.redirect('/');
}

module.exports.search = function (req,res) {
	
	userModel.withName(req.query.name, function(data) {
			
			var viewModel = {searchResults: data}
			var html = searchView(viewModel)
			res.send(html)
	} )
}

module.exports.getUser = function (req, res) {
	
	userModel.withID(req.params.userID, function(data) {
		if ( !data ) {  res.end()  }
		var html = userView({user: data})
		res.send(html)
	} )
}

module.exports.login = function (req, res) {
	if (req.method == "GET") {
		if (req.session.user){
			res.redirect('/');
		} else {
			res.send(loginView())
		}

	} else if (req.method == "POST") {

		userModel.login(req.body.email, req.body.password, function(data){

			if ( !data ) {
				var html = loginView({error: "Wrong username or password."})
				res.send(html)
			} else {
				var html = userView({user: data})
				req.session.user = data;
				res.send(html)
			}
		})
	}
}

module.exports.logout = function (req, res) {
	req.session.reset();
	res.redirect('back');
}