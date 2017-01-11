const pug = require('pug')

const projectModel = require('../models/ProjectObject.js')

const index = pug.compileFile("./views/index.pug")
const projectView = pug.compileFile("./views/project.pug")

module.exports.get = function (req,res) {
	var html = index({})
	res.send(html)
}

module.exports.search = function (req,res) {
	res.end()
}

module.exports.getProject = function (req, res) {
	res.end()
}
