import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  
  register(users:Users):Observable<any>{
    let url="http://localhost:8005/project/api/register";
    return this.http.post(url,users);
  }
  
}
