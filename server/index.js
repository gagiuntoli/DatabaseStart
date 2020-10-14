const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const privateData = require('./config/config.js');

const db = mysql.createPool({
  host: "localhost",
  user: privateData[0],
  password: privateData[1],
  database: "mydb",
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res)=> {
  const german = req.body.german;
  const english = req.body.english;
  const sqlInsert =  `INSERT INTO words (german, english) VALUES ('${german}','${english}')`
  db.query(sqlInsert, (err, result)=>{
    console.log(err)
  })
})

app.listen(3001, () => {
  console.log("running on port 3001")
})
