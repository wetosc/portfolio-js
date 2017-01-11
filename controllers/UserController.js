const pug = require('pug')
const userModel = require('../models/UserObject.js')

const index = pug.compileFile("./views/index.pug")
const searchView = pug.compileFile("./views/searchResult.pug")
const userView = pug.compileFile("./views/userView.pug")

module.exports.get = function (req,res) {
	var html = index({})
	res.send(html)
}

module.exports.search = function (req,res) {
	
	userModel.withName(req.query.name, function(data) {
			
			var viewModel = {searchResults: data}
			var html = searchView(viewModel)
			// var html = searchView({searchResults: [{id: 8465, name: "wasea"}]})
			res.send(html)
	} )
}

module.exports.getUser = function (req, res) {
	var html = userView({})
	res.send(html)
}

