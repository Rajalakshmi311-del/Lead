import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeadserviceService {

  constructor(private http:HttpClient) { }

 getdata(){
  return this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
 }


}
