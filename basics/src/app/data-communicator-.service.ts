import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicatorService {
private dataSource=new Subject<string>();
dataSourceObeservable;
  constructor() {

    this.dataSourceObeservable=this.dataSource.asObservable();
  }
  publish(data:string):void{
    this.dataSource.next(data);
  }
}
