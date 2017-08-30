import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Employee } from './employee';
import { Course } from './course';

@Injectable()
export class DataService {
  http;

  constructor(http: HttpClient) { this.http = http;}

  getCourseList(): Course[]{
    return this.http.post("/api/get-course-list/").subscribe();
  }

  BookCourse(attendee: Employee, thisCourseID: number): void{
    alert("Employee Name: " + attendee.firstName + " " + attendee.lastName + "\nEmail: " + attendee.email + "\nCourse ID: " + thisCourseID);
    const bookDetails = {firstName: attendee.firstName, lastName: attendee.lastName, email: 
      attendee.email, courseID: thisCourseID};
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    this.http.post("/api/add-course-employee", bookDetails, options).subscribe();
  }

  alertFunction(): void
  {
    alert("This Works");
  }
}
