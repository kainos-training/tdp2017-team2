const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'world'  //replace this with connection to your own DB
});

db.connect(function(err) {
    if(err) throw err;
    console.log("Connected to MySQL");
});
