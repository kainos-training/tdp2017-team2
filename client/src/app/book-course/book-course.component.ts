import { Component, OnInit } from '@angular/core';
//import {SwitchboardService } from '../switchboard.service';
//import { Subscription } from "rxjs/Subscription";
import {Employee} from '../employee';

@Component({
  selector: 'map-book-course',
  templateUrl: './book-course.component.html',
  styleUrls: ['./book-course.component.css']
})
export class BookCourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave(newEmployee: Employee): void {
    //this.switchboard.updateCity(newCity);
  }

}
