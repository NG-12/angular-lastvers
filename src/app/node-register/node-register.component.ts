import { Component, OnInit } from '@angular/core';
//import {HttpService} from './http.service';
import {Node} from './node';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-node-register',
  templateUrl: './node-register.component.html',
  styleUrls: ['./node-register.component.css'],
  providers: [HttpClient]
})

export class NodeRegisterComponent {

  postData: {"nodeGroupId": "UZ_Megafon"};
  groupName: string;
  response: any;
  //url: 'https://api.github.com/users/';
  url= 'http://localhost:8080/node/test';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })}

  constructor(private http: HttpClient){}
  submit(){
    //this.http.get(this.url + this.groupName)
    this.http.post(this.url, this.postData, this.httpOptions)
    .subscribe
    ((response)=>{this.response = response;
    //console.log(this.response);
    });
    
  }
  
}
