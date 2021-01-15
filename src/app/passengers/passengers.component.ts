import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../models/booking';
import { Passenger } from '../models/passenger';
import { PassengerService } from '../passenger.service';
import { Book } from '../view-bus/view-bus.component';


@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  seats :number[] = [];
  booking : Booking;
  passenger : Passenger = new Passenger();
  num:number;
  response : any;
  book: Book = new Book();

  constructor(private passengerService  : PassengerService, private router : Router) { }

  ngOnInit() {

    this.book=JSON.parse(sessionStorage.getItem('BoardingDetails'));
    this.num = this.book.noOfSeats;
    this.booking = new Booking(this.num);
    this.booking.routeId= this.book.routeId;
    this.booking.userId = parseInt(sessionStorage.getItem('customerId'));
    //alert(JSON.stringify(this.booking));
   // alert(this.booking.userId);
    
     for(let x=1; x <=this.num; x++){
        //alert(x);
          this.seats.push(x);
      }
      //alert(JSON.stringify(this.seats));
    //this.booking.routeId=parseInt(sessionStorage.getItem('routeDetails'));
   // alert(this.booking.routeId);
  }

  
  addPassenger() {

  alert(JSON.stringify(this.booking))
  
  this.passengerService.addPassenger(this.booking).subscribe(response =>{
    alert(JSON.stringify(this.response));
    this.router.navigate(['payment']);
  })

}

}
