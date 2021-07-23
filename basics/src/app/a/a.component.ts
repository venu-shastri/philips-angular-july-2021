import { Component, OnInit } from '@angular/core';
import { ApiLoggerService } from '../api-logger.service';

@Component({
  selector: 'a-comp',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  dataForChild:string;
  myName:string;
  constructor(public loggerService:ApiLoggerService) {

this.dataForChild="";
this.myName="";
   }

   onChildNotification(data:string){
    this.loggerService.write(`Data Recevied From Child: ${data}`);
   }

  ngOnInit(): void {

    this.dataForChild="Hi child";
    this.myName="Your Parent Component Namen is A";
    this.loggerService.write("AComponent Instantiated");
  }

}
