import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiLoggerService } from '../api-logger.service';
import { DataCommunicatorService } from '../data-communicator-.service';

@Component({
  selector: 'b-comp',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  viewProviders:[
    {provide:ApiLoggerService,useClass:ApiLoggerService},
    {provide:"logUrl",useValue:"http://pic.in/newaddress"},
    {provide:DataCommunicatorService,useClass:DataCommunicatorService}
  ]
})
//<b-comp [inputData]=""  [parentComponentName]=""></b-comp>
export class BComponent implements OnInit {

  @Input()
  inputData:string;
  @Input()
  parentComponentName:string
  @Output()
  onDataChange=new EventEmitter<string>();
  constructor(public loggerService:ApiLoggerService) {
    this.inputData="";
    this.parentComponentName="";
   }

   notifyParent(data:string){
        //Update Parent
        this.onDataChange.emit(data); //Event Trigger
   }
  ngOnInit(): void {
    this.loggerService.write(`BComponent Instantiated and Recieved Data:${this.inputData} From Parent Component:${this.parentComponentName}`);
  }

}
