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

exports.getAllCourses = function (courseID, callback){
    db.query(
        "SELECT * FROM Course"
        [courseID],
        function (err) {
            if(err) throw err;
            callback ('Get all courses Successful.');
        });
};

exports.insertCourseEmployee = function(firstName, lastName,email, courseID){
    console.log('In Insert course employee query method');
    db.query(
        "INSERT INTO CourseEmployee (firstName, lastName, email, courseID) " +
        "VALUES (?,?,?,?) ",
        [firstName, lastName, email, courseID]
    );
};
