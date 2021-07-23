import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class UserdataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let users=[
      {id:1,username:"tom",password:"tom@123"},
      {id:2,username:"hary",password:"hary@123"},
      {id:3,username:"jack",password:"jack@123"},
      {id:4,username:"james",password:"james@123"},
    ]
    return {users};
  }
}
