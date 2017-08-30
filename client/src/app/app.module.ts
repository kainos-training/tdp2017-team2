import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BookCourseComponent} from './book-course/book-course.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SwitchboardService } from './switchboard.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, SwitchboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }