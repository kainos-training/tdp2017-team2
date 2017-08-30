import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'map-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}
