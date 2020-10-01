const privateData = require('./config/config.js');

var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: privateData[0],
	password: privateData[1],
});

connection.connect((err)=>{
	if(err) throw err;
	console.log("connected!");
	connection.query("CREATE DATABASE mydb", function(err, result) {
		if (err) throw err;
		console.log("Database created");
	});
})
