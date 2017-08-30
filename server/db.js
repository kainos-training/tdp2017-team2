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

exports.getAllCourses = function (callback){
    db.query(
        "select title, CAST(dateOfCourse AS DATE) as dateOfCourse, location from Course order by dateOfCourse, title ASC",
        [],
        function (err, rows) {
            if(err) { console.log("Error with query"); throw err; } 
            callback (rows);
        });
};

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
