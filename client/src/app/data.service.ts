import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './course';

@Injectable()
export class DataService {
  http;

  constructor(http: HttpClient) { this.http = http;}
  courses: Course[];
  getCourseList(): void {
    this.courses = this.http.get("api/get-course-list/");
  }
}
