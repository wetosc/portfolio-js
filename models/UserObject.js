const sql = require("../sqlHelper.js")()

module.exports.login = function(email, password, callback) {

	queryInfo = {"email": email, "password": password }
	
	sql.query("SELECT * FROM user where ?", queryInfo, function(err, rows, fields){
		
		if (err || rows.length < 1) {  callback(null)  } else {
		
			callback( fromSQL(rows[0]) )
		
		}
	})
}

module.exports.withID = function(id, callback) {

	queryInfo = { "id": id }
	
	sql.query("SELECT * FROM user where ?", queryInfo, function(err, rows, fields){
		
		if (err || rows.length < 1) {  callback(null)  } else {
			
			var arr = Array()
			for (const line of rows) {
				arr.push(fromSQL(line))
			}
			callback( arr )
		}
	})
}

module.exports.withName = function(name, callback) {

	queryInfo = { "name": name }
	
	sql.query("SELECT * FROM user where ?", queryInfo, function(err, rows, fields){

		if (err || rows.length < 1) {  callback(null)  } else {
			
			var arr = Array()
			for (const line of rows) {
				arr.push(fromSQL(line))
			}
			callback( arr )
		}
	})
}

module.exports.fromSQL = fromSQL

function fromSQL(sqlObj) {
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


