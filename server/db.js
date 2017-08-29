const mysql = require('mysql');
const config = require('./config.json');

const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: 'KainosMAP'
});

db.connect(function (err) {
    if(err) throw err;
    console.log("Connection to mysql Successful");
});

exports.insertCourseEmployee = function(courseID, employeeID, callback){
    db.query(
        "INSERT INTO courseEmployee(courseID, employeeID)" +
        "VALUES ?,? "
        [courseID, employeeID],
        function(err){
            if(err) throw err;
            callback("Employee Book Course Successful.");
        }
    );
};
