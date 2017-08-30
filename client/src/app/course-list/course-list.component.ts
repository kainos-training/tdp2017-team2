import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Course } from '../course';
import { DataService } from '../data.service';

@Component({
  selector: 'map-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  showInfo: boolean;

  courses: Course[];
  data: DataService;
  constructor(dataService: DataService) { 
    this.data = dataService;
    this.data.getCourseList();
    this.courses = this.data.courses;
    this.showInfo = false;
  }

  change() {
    this.showInfo = true;
  }
  
  ngOnInit() {
  }

}
