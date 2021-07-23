import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentUser:string;
  constructor(public currentRoot:ActivatedRoute) {

    this.currentUser="";
  }

  ngOnInit(): void {

    this.currentRoot.params.subscribe(params=>{
        this.currentUser= params["username"];
    });
  }

}
