const pug = require('pug')

const userView = pug.compileFile("./views/login.pug")

module.exports.get = function (req,res) {
	var html = userView({})
	res.send(html)
}