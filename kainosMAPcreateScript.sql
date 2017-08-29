CREATE DATABASE IF NOT EXISTS kainosMAP;

USE kainosMAP;

CREATE TABLE IF NOT EXISTS Course
(
	courseID  SMALLINT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	dateOfCourse DATETIME NOT NULL,
	location ENUM('Belfast', 'Derry', 'Dublin', 'London', 'Gdansk', 'Amsterdam', 'Boston', 'Frankfurt') NOT NULL
);

CREATE TABLE IF NOT EXISTS Employee
(
	employeeID SMALLINT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS CourseEmployee
(
	courseID SMALLINT,
    employeeID SMALLINT,
    FOREIGN KEY (courseID) REFERENCES Course(courseID),
    FOREIGN KEY (employeeID) REFERENCES Employee(employeeID)
);