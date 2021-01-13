import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './search-bus/search-bus.component';
import { Observable } from 'rxjs';
import { tripDetails } from './models/tripDetails';
import { StopDetails } from './models/StopDetails';
import { Route } from './models/Route';
import { Stop } from './models/Stop';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http:HttpClient) { }

  searchBus(search:Search):Observable<Route[]>{
    let url="http://localhost:8081/project/api/search";
    return this.http.post<Route[]>(url,search);
  }

  searchStops(city:string,routeId:number):Observable<Stop>{
    let url="http://localhost:8081/project/api/stops?city="+city+"&id="+routeId;
    return this.http.get<Stop>(url);
  }
}
