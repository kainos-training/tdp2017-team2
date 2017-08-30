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
}
