import { Component, OnInit } from '@angular/core';
import { ApiLoggerService } from './api-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'basics';
  constructor(public loggerService:ApiLoggerService){

  }
  //Life Cycle Hook
  ngOnInit(){

     this.loggerService.write("App Component Instantiated");
  }
}
