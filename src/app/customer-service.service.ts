import { Injectable } from '@angular/core';
import { Login } from './models/Login';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  login(login: Login) {
    let url = "http://localhost:8005/project/api/login";
   return this.http.post(url, login); 
  }
}
