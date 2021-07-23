import { Component, OnInit } from '@angular/core';
import { ApiLoggerService } from '../api-logger.service';
import { DataCommunicatorService } from '../data-communicator-.service';

@Component({
  selector: 'c-comp',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  constructor(public loggerService:ApiLoggerService,public mediator:DataCommunicatorService) { }

  ngOnInit(): void {
    this.loggerService.write("CComponent Instantiated");

  }
  onTextChange(data:string){
    //Notify D component
    this.mediator.publish(data);
  }

}
