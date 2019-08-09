import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Node} from './node';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    postData(node: Node){
        const body = {name: node.name};
        return this.http.post('http://localhost:8080/node/add', body); 
    }
}