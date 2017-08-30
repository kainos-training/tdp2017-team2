const express = require ('express');
const app = express();
const db = require('./db.js');

app.listen(8002, function () {
	console.log('Express API listening on port 8002...')
});

app.get('/get-course-list', function (req, res) {
	
	  db.getAllCourses(function (rows){
		  console.log('Getting list of all courses ');
		  res.send(rows);
	  });
  });
