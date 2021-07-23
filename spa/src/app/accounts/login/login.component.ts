import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:any;
  password:any;

  constructor(public routerService:Router) {
    this.userName="";
    this.password="";
   }

  ngOnInit(): void {
  }

  onSubmit(){

    //for valid credentials - redirect->main path
    this.routerService.navigate(["main",this.userName]);
  }
}
