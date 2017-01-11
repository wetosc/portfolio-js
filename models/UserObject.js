const sql = require("../sqlHelper.js")()

module.exports.login = function(email, password, callback) {

	queryInfo = {"email": email, "password": password }
	
	sql.query("SELECT * FROM user where ?", queryInfo, function(err, rows, fields){
		
		if (err || result.length < 1) {  callback(null)  } else {
		
			callback( fromSQL(result[0]) )
		
		}
	})
}

module.exports.withID = function(id, callback) {

	queryInfo = { "id": id }
	
	sql.query("SELECT * FROM user where ?", queryInfo, function(err, rows, fields){
		
		if (err || result.length < 1) {  callback(null)  } else {
		
			callback( fromSQL(result[0]) )
		
		}
	})
}

module.exports.withName = function(name, callback) {

	queryInfo = { "name": name }
	
	sql.query("SELECT * FROM user where ?", queryInfo, function(err, rows, fields){
		
		if (err || result.length < 1) {  callback(null)  } else {
		
			callback( fromSQL(result[0]) )
		
		}
	})
}

module.exports.fromSQL = function(sqlObj) {
	var result = { "id": sqlObj.id, "email": sqlObj.email, "name": sqlObj.name }
	return result
}




/*  SQL 

CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
	email varchar(50) NOT NULL, 
	password varchar(30) NOT NULL,
	name varchar(30),

	PRIMARY KEY (id)
);
*/


