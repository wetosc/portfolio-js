const sql = require("../sqlHelper.js")()

module.exports.withID = function(id, callback) {

	queryInfo = { "id": id }
	
	sql.query("SELECT * FROM memo where ?", queryInfo, function(err, rows, fields){
		
		if (err || result.length < 1) {  callback(null)  } else {
		
			callback( fromSQL(result[0]) )
		
		}
	})
}

module.exports.fromSQL = function(sqlObj) {
	var result = { "id": sqlObj.id, "author": sqlObj.author, "title": sqlObj.title, "body": sqlObj.body }
	return result
}




/*  SQL 

CREATE TABLE memo (
	id INT NOT NULL AUTO_INCREMENT,
	author int NOT NULL, 
	title varchar(200) NOT NULL,
	body varchar(500),

	FOREIGN KEY (author) REFERENCES user(id),
	PRIMARY KEY (id)
);

*/


