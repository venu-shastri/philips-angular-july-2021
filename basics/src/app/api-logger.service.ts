import { Inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiLoggerService {

  logUrl:string;
  constructor(@Inject("logUrl")remoteAddress:string) {
    console.log("ApiLoggerService Instantited");
    this.logUrl=remoteAddress;

  }
  write(content:string){
    console.log(`Writing ${content}  to ${this.logUrl}`);
  }

}
