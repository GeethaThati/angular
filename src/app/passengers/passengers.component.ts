import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/booking';
import { Passenger } from '../models/passenger';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  s :number [] = [1,2,3];
  booking : Booking = new Booking();
  passenger : Passenger = new Passenger();
  pas :Passenger[];
  num:number;
  constructor() { }

  ngOnInit() {
    this.num=JSON.parse(sessionStorage.getItem('seat'));
    alert(this.num);
  }

  passengers(){

  alert(JSON.stringify(this.booking));

}

}
