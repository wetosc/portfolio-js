const pug = require('pug')

const index = pug.compileFile("./views/index.pug")

module.exports.get = function (req,res) {
	var viewModel = {loggedIn: req.session.user != null}
	var html = index(viewModel)
	res.send(html)
}

