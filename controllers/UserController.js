const pug = require('pug')

const userView = pug.compileFile("./views/index.pug")
const searchView = pug.compileFile("./views/searchResult.pug")

module.exports.get = function (req,res) {
	var html = userView({})
	res.send(html)
}

module.exports.search = function (req,res) {
	var html = //searchView({searchResults: [{id: 8465, name: "wasea"}]})
	searchView({})
	res.send(html)
}