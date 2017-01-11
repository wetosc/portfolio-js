const sql = require("../sqlHelper.js")()
const userObject = require("./UserObject.js")

module.exports.withID = function(id, callback) {

	queryInfo = { "id": id }
	
	sql.query("SELECT * FROM project where ?", queryInfo, function(err, rows, fields){
		
		if (err || result.length < 1) {  callback(null)  } else {
		
			callback( fromSQL(result[0]) )
		
		}
	})
}

module.exports.projectsForUser = function(id, callback) {

	queryInfo = { "userID": id }
	
	sql.query("SELECT * FROM project_user where ?", queryInfo, function(err, rows, fields){
		
		if (err || result.length < 1) {  callback(null)  } else {
			var arr = Array()
			for (const line of result) {
				arr.append(fromSQL(line))
			}
			callback( arr )
		}
	})
}

module.exports.usersForProject = function(id, callback) {

	queryInfo = { "projectID": id }
	
	sql.query("SELECT * FROM project_user where ?", queryInfo, function(err, rows, fields){
		
		if (err || result.length < 1) {  callback(null)  } else {
			var arr = Array()
			for (const line of result) {
				arr.append(userObject.fromSQL(line))
			}
			callback( arr )
		}
	})
}


module.exports.fromSQL = function(sqlObj) {
	var result = { "id": sqlObj.id, "name": sqlObj.name, "type": sqlObj.type, "description": sqlObj.description }
	return result
}



/*  SQL 

CREATE TABLE project (
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL, 
	type varchar(50) NOT NULL,
	description varchar(50),

	PRIMARY KEY (id)
);

CREATE TABLE project_user (
	projectID INT NOT NULL,
	userID INT NOT NULL,

	FOREIGN KEY (projectID) REFERENCES project(id),
	FOREIGN KEY (userID) REFERENCES user(id)
);

*/


