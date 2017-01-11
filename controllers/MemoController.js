const pug = require('pug')

const memoModel = require('../models/MemoObject.js')

const index = pug.compileFile("./views/index.pug")
const memoView = pug.compileFile("./views/memo.pug")

module.exports.get = function (req,res) {
	var html = index({})
	res.send(html)
}

module.exports.search = function (req,res) {
	res.end()
}

module.exports.getMemo = function (req, res) {
	res.end()
}
