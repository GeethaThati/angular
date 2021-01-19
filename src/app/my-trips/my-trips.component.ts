import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { Trip } from '../models/Trip';
// import { Trip } from './models/Trip';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {

  userId:number;
  trip:Trip[] = [];

  constructor(private busService:BusService,private router:Router) { }

  ngOnInit() {
    this.userId = JSON.parse(sessionStorage.getItem('customerId'));
    this.busService.fetchTrips(this.userId).subscribe(response=>
      {
        //alert(JSON.stringify(response));
        this.trip=response;
      });
  }

goBack(){
  this.router.navigate(['dashboard']);
}

}
