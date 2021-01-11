import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './search-bus/search-bus.component';
import { Observable } from 'rxjs';
import { tripDetails } from './models/tripDetails';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http:HttpClient) { }

  searchBus(search:Search):Observable<tripDetails>{
    let url="http://localhost:8081/project/api/search";
    return this.http.post<tripDetails>(url,search);
  }
}
