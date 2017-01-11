var sql = require("./sqlHelper.js")

module.exports.login = function(email, password, callback) {
	queryInfo = {"email": email, "password": password }
	sql.query("SELECT * FROM user where ?", queryInfo, function(err, rows, fields){
		if (err || result.length < 1) {  callback(null)  } else {
			callback( { "email": result[0].email } )
		}
	})
}



