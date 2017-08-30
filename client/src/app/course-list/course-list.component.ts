import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Course } from '../course';
@Component({
  selector: 'map-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  course: Course;
  //data: DataService;
  constructor(/*dataService: DataService*/) { /*this.data = dataService;*/ }
  
  ngOnInit() {
  }

}
