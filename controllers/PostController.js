const pug = require('pug')

const postModel = require('../models/PostObject.js')

const index = pug.compileFile("./views/index.pug")
const postView = pug.compileFile("./views/post.pug")

module.exports.get = function (req,res) {
	var html = index({})
	res.send(html)
}

module.exports.search = function (req,res) {
	res.end()
}

module.exports.getPost = function (req, res) {
	res.end()
}
