import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MyserviceService {

  constructor(private http: HttpClient) { }
  getusers() {
    return(this.http.get('https://jsonplaceholder.typicode.com/posts'));
  }

}
