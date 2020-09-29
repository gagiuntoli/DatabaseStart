const privateData = require('./config/config.js');

var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: privateData.username,
	password: privateData.password
});

connection.connect((err)=>{
	if(err) throw err;
	console.log("connected!");
})
