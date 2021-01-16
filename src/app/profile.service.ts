import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './register/register.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  profile(userId:number):Observable<Users>{
    let url="http://localhost:8005/project/api/profile/?userId="+userId;
    return this.http.get<Users>(url);
  }
}
