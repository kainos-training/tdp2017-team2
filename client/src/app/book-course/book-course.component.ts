import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {SwitchboardService } from '../switchboard.service';
import { Subscription } from "rxjs/Subscription";
import {Employee} from '../employee';
import {Course} from '../course';
import {DataService} from '../data.service';

@Component({
  selector: 'map-book-course',
  templateUrl: './book-course.component.html',
  styleUrls: ['./book-course.component.css']
})
export class BookCourseComponent implements OnInit, OnDestroy{

  switchboard: SwitchboardService;
  subCourse : Subscription;
  //@Input() course : Course;
  attendee : Employee ={};
  data: DataService;

  constructor(dataService: DataService) {
  	this.data = dataService;
  }

  ngOnInit(): void {
    //need to subscribe to course variable
/*     this.subCourse = this.switchboard.course$.subscribe((c) => {
      this.course = c;
    }); */

    
  }

  onSave(): void {
    this.data.BookCourse(this.attendee, 1);
  }

  ngOnDestroy(): void {
    //this.subCourse.unsubscribe();
  }

}
