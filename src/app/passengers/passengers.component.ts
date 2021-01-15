import { Component, OnInit } from '@angular/core';
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

  constructor(private passengerService  : PassengerService) { }

  ngOnInit() {

    this.book=JSON.parse(sessionStorage.getItem('BoardingDetails'));
    this.num = this.book.noOfSeats;
    this.booking = new Booking(this.num);
   // alert(JSON.stringify(this.num));
    
     for(let x=1; x <=this.num; x++){
        //alert(x);
          this.seats.push(x);
      }
      //alert(JSON.stringify(this.seats));
    this.booking.routeId=parseInt(sessionStorage.getItem('num'));
  }

  
  addPassenger() {

  alert(JSON.stringify(this.booking))
  this.passengerService.addPassenger(this.booking).subscribe(response =>{
    alert(JSON.stringify(this.response));
  })

}

}
