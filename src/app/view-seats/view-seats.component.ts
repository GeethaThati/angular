import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-view-seats',
  templateUrl: './view-seats.component.html',
  styleUrls: ['./view-seats.component.css']
})
export class ViewSeatsComponent implements OnInit {

  seat: Seat = new Seat();
  seats:number;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  savePassengersCount(){
    alert(JSON.stringify(this.seat.seatNo));
    sessionStorage.setItem('seat',JSON.stringify(this.seat.seatNo));
    this.router.navigate(['passengers']);
  }
}
export class Seat{
 seatNo :number;
}