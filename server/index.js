const express = require ('express');
const app = express();
const db = require('./db.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json);

app.get('/get-course-list', function (req, res) {
	  db.getAllCourses(req.body, function (rows){
		  console.log('Getting list of all courses');
		  res.send(rows);
	  });
  });

app.post('/add-course-employee', function(req,res){
    const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const courseID = req.body.courseID;

	if(firstName && lastName && email && courseID){
        db.insertCourseEmployee(firstName,lastName,email,courseID,function(messsage){
			Console.log('Booking employee on course');
			res.send(message);
        });
    }
});

app.listen(8002, function () {
	console.log('Express API listening on port 8002...')
});
