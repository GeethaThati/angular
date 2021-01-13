import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from './models/passenger';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http:HttpClient) { }

  searchBus(passenger:Passenger[]):Observable<any>{
    let url="http://localhost:8081/project/api/passenger";
    return this.http.post(url,passenger);
  }

}
