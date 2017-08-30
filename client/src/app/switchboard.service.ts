import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Course } from './course';
@Injectable()
export class SwitchboardService {

  constructor() { }
/*   private courseWatcher = new Subject<Course>();
  public course$ = this.courseWatcher.asObservable();

  public selectCourse(course: Course){
    if (course) {
      this.courseWatcher.next(course);
    }
  } */

}
