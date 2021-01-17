import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './search-bus/search-bus.component';
import { Observable } from 'rxjs';
import { tripDetails } from './models/tripDetails';
import { StopDetails } from './models/StopDetails';
import { Route } from './models/Route';
import { Stop } from './models/Stop';
import { Trip } from './models/Trip';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http:HttpClient) { }

  searchBus(search:Search):Observable<Route[]>{
    let url="http://localhost:8080/project/api/search";
    return this.http.post<Route[]>(url,search);
  }

  searchStops(city:string,routeId:number):Observable<StopDetails>{
    let url="http://localhost:8080/project/api/stops?city="+city+"&id="+routeId;
    return this.http.get<StopDetails>(url);
  }

  cancelTicket(ticketId:number):Observable<any>{
    let url="http://localhost:8080/project/api/cancel?ticketId="+ticketId;
    return this.http.get<any>(url);
  }

  fetchTrips(userId:number):Observable<Trip[]>{
    let url = "http://localhost:8080/project/api/myTrips?userId="+userId;
    return this.http.get<Trip[]>(url);
  }

  changePassword(email:string,password:string):Observable<any>{
    let url = "http://localhost:8081/project/api/changePassword?email="+email+"&pass="+password;
    return this.http.get<any>(url);
  }

}
