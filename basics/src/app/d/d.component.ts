import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiLoggerService } from '../api-logger.service';
import { DataCommunicatorService } from '../data-communicator-.service';

@Component({
  selector: 'd-comp',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit,OnDestroy {

  subscriptionRef:any;
  constructor(public loggerService:ApiLoggerService,public mediator:DataCommunicatorService) {

   // this.onNextData=this.onNextData.bind(this);
  }

  ngOnInit(): void {

    this.loggerService.write("DComponent Instantiated");
   this.subscriptionRef= this.mediator.dataSourceObeservable.subscribe((data)=>{
        this.loggerService.write(`Data Recieved From Mediator ${data}`);
  });

  }
  ngOnDestroy(){
    this.subscriptionRef.unSubscribe();
  }
  onNextData(data:string){
    //console.log(`Data Recieved From Mediator ${data}`);
   this.loggerService.write(`Data Recieved From Mediator ${data}`);
  }


}
