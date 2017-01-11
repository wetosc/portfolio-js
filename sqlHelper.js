var fs = require("fs")
var mysql = require('mysql');

var config = JSON.parse(fs.readFileSync("mysql-config.json"))

var pool  = mysql.createPool(config);

module.exports = function() {
	return pool
}