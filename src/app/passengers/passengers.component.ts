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
    this.booking.boarding = this.book.boarding;
   // alert(JSON.stringify(this.book.boarding));
    this.booking.droping = this.book.dropping;
    this.booking.amount = this.book.fare;
    this.booking.duration = this.book.duration;
    this.booking.busName=this.book.busName;
    this.booking.date = this.book.date;

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

  alert(JSON.stringify(this.booking));
  this.passengerService.addPassenger(this.booking).subscribe(response =>{
    this.response = response;
    //alert(JSON.stringify(response));
    sessionStorage.setItem('ticketId',String(this.response.ticketId));
    alert(sessionStorage.getItem('ticketId'));
    sessionStorage.setItem('amount',String(this.book.fare));
    this.router.navigate(['payment']);
  })

}

}
