import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from './models/passenger';
import { Observable } from 'rxjs';
import { Booking } from './models/booking';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http:HttpClient) { }

  addPassenger(booking: Booking){
    let url="http://localhost:8081/project/api/passenger";
    return this.http.post(url,booking);
  }

}
