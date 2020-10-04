const privateData = require('./config/config.js');

var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: privateData[0],
	password: privateData[1],
	database: "mydb",
});

connection.connect((err)=>{
	if(err) throw err;
	console.log("connected!");
	const sql = "SELECT * FROM words";
	connection.query(sql, function(err, result) {
		if (err) throw err;
		console.log(result);
	});
})
