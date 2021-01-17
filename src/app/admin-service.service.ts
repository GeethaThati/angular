import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Bus } from './models/bus';
import { UpdateBus } from './models/UpdateBus';
import { DeleteBus } from './models/deleteBus';
import { AdminLogin } from './models/Adminlogin';
import { Route } from './models/Route';
import { AddStop } from './models/AddStop';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http : HttpClient) { }

  addBusDetails(bus : Bus){
    let url = "http://localhost:8080/project/api/addbus";
    return this.http.post(url,bus);
  }

  updateBus(updateBus :UpdateBus){
    let url = "http://localhost:8080/project/api/updateBusRoute";
    return this.http.put(url,updateBus);
  }

  deleteBus(delBus :DeleteBus){
    let url = "http://localhost:8080/project/api/deleteBus";
    return this.http.delete(url+delBus.busId);
  }
  login(login: AdminLogin){
    let url = "http://localhost:8080/project/api/admin";
   return this.http.post(url, login); 
  }

  addRoute(route: Route){
    let url = "http://localhost:8080/project/api/addroute";
   return this.http.post(url, route); 
  }

  addStop(Stop: AddStop){
    let url = "http://localhost:8080/project/api/addstop";
    return this.http.post(url,stop);
  }
}
