import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import {Node} from './node';

@Component({
  selector: 'app-node-register',
  templateUrl: './node-register.component.html',
  styleUrls: ['./node-register.component.css'],
  providers: [HttpService]
})

export class NodeRegisterComponent {

  groupName: string;
  response: any;
  constructor(private httpService: HttpService){}
  submit(){

  }
  
}
