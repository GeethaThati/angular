import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { Bus } from '../models/bus';
import { Route } from '../models/Route';
import { Stop } from '../models/Stop';
import { StopDetails } from '../models/StopDetails';
import { tripDetails } from '../models/tripDetails';

@Component({
  selector: 'app-view-bus',
  templateUrl: './view-bus.component.html',
  styleUrls: ['./view-bus.component.css']
})
export class ViewBusComponent implements OnInit {

  seats: number=1;
  trip:tripDetails = new tripDetails();
  arr:Route[] =[];
  isShowDiv = false;
  isRoute = true;
  boarding:Stop[] =[];
  var:Stop[]=[];
  dropping:Stop[]=[];
  book:Book = new Book();
  amount:any;
  routeId:any;
  num:number;
  r:any;
  view:any = "View Seats";
  hide:any[]=[];
  elementsShowing = new Set<Bus>();
  response:Stop;

  toggle(bus:Bus){
    if(this.elementsShowing.has(bus)){
      this.elementsShowing.delete(bus);
      this.view = "View Seats";
    }
    else{
      this.elementsShowing.add(bus);
      
      this.view = "Hide Seats";
    }
  }

  seatsBook(bus:Bus,d:Route){
    this.amount= document.getElementById("fare").innerHTML;
    this.book.fare = this.amount;
    this.book.routeId = d.id;
    this.book.busName = bus.busName;
    this.book.date = d.dateOfDepature;
    this.book.duration = d.duration;
    this.book.busId = bus.busId;
    this.book.source = d.source;
    this.book.destination = d.destination;
    //alert(JSON.stringify(this.book));
    sessionStorage.setItem("BoardingDetails",JSON.stringify(this.book));
    this.router.navigate(['passengers']);
    
  }

  constructor(private busService:BusService, private router : Router) { }

  ngOnInit() {
    this.arr=JSON.parse(sessionStorage.getItem('routeDetails'));
   // alert(JSON.stringify(this.arr));
    this.num = this.arr.length;
  
    for(let val of this.arr){
      this.busService.searchStops(val.source,val.id).subscribe(
        response=> {
    
          sessionStorage.setItem('sourceStops',JSON.stringify(response));
          this.boarding=JSON.parse(sessionStorage.getItem('sourceStops'));
          //alert(JSON.stringify(this.boarding));
         
        }
        
      );

      this.busService.searchStops(val.destination,val.id).subscribe(
          response => {
      
            sessionStorage.setItem('destStops',JSON.stringify(response));
            this.dropping=JSON.parse(sessionStorage.getItem('destStops'));
         // alert(JSON.stringify(this.dropping));
        
          }
      );
    } 
  }

}

export class Book{
  noOfSeats:number;
  boarding:string;
  dropping:string;
  fare:number;
  routeId:number;
  busName:string;
  date:string;
  duration:string;
  busId:number;
  source:string;
  destination:string;
}
