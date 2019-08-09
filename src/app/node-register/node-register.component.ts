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

  noder: Node=new Node(); // данные вводимого пользователя
  
    done: boolean = false;
    constructor(private httpService: HttpService){}
    submit(noder: Node){
        this.httpService.postData(noder)
                .subscribe(
                    (data: Node) => window.alert(data),
                    error => console.log(error)
                );
    }
  //constructor() { }
  
  //ngOnInit() {
  //}
  
}
