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
	const sql = "INSERT INTO words (german, english) VALUES ('Die Miete', 'The rent')";
	connection.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Element Inserted:" + result.message);
	});
})
