import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/services/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:any;
  password:any;
errorMessage:string
  constructor(public routerService:Router,public httpProxy:HttpClient) {
    this.userName="";
    this.password="";
    this.errorMessage="";
   }

  ngOnInit(): void {
  }

  onSubmit(){

    this.httpProxy.get("api/users").subscribe((users:any)=>{
      let isValidUser:boolean;
      for(let i=0;i<users.length;i++){
            if(users[i].username==this.userName && users[i].password==this.password){
              //for valid credentials - redirect->main path
              this.routerService.navigate(["main",this.userName]);
              break;
            }
      }
    },(e)=>{console.log(`Http request reuslted errror ${e}`);},
        ()=>{ console.log("Http request completed");});




  }
}

