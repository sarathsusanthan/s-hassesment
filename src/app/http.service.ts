import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }
  getGames(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
