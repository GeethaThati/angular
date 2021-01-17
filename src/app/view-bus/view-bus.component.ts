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

  toggle(bus:Bus){
    if(this.elementsShowing.has(bus)){
      this.elementsShowing.delete(bus);
      this.view = "View Seats";
    }
    else{
      this.elementsShowing.add(bus);
      
      this.view = "Hide Seats";
    }
    //this.isShowDiv= !this.isShowDiv;
    
    // alert(JSON.stringify(bus));
    // //alert(JSON.stringify(route));
    // alert(d);
  }

  seatsBook(bus:Bus,d:Route){
    //alert(JSON.stringify(bus));
    //alert(d.dateOfDepature);
    this.amount= document.getElementById("fare").innerHTML;
  //  this.routeId = document.getElementById("routeId").innerHTML;
   // this.r = document.getElementById("r").innerHTML;
    // alert(this.r);
    this.book.fare = this.amount;
    this.book.routeId = d.id;
    this.book.busName = bus.busName;
    this.book.date = d.dateOfDepature;
    this.book.duration = d.duration;
    this.book.busId = bus.busId;
    this.book.source = d.source;
    this.book.destination = d.destination;
  // this.book.routeId= this.arr[this.r].id;
  //  this.book.date = this.arr[this.r].dateOfDepature;
   // this.book.busName = this.arr[this.r].buses[this.bus].busName;
   // alert(this.routeId);
    //this.book.fare = this.book.noOfSeats*this.arr[0].fare;
    alert(JSON.stringify(this.book));
    sessionStorage.setItem("BoardingDetails",JSON.stringify(this.book));
    this.router.navigate(['passengers']);
    
  }

  constructor(private busService:BusService, private router : Router) { }

  ngOnInit() {
    //alert(sessionStorage.getItem('routeDetails'));
    this.arr=JSON.parse(sessionStorage.getItem('routeDetails'));
    alert(JSON.stringify(this.arr));
    this.num = this.arr.length;
    //alert(this.num);
   // alert(this.arr[0].destination);
    for(let val of this.arr){
      //alert(val.source);
      this.busService.searchStops(val.source,val.id).subscribe(
        response=> {
          sessionStorage.setItem('sourceStops',JSON.stringify(response));
          this.boarding= JSON.parse(sessionStorage.getItem('sourceStops'));
          // this.boarding.push(response[0]);
          // this.boarding.push(response[1]);
          //this.var.push(response);
          // for(let val of this.var){
          //   this.boarding.push(val);
          // }
         // alert(response[0]);
          //this.boarding.push(response[0]);
          alert(JSON.stringify(response));
          //alert(this.boarding[0].stop);
          
          
        }
        
      );

      this.busService.searchStops(val.destination,val.id).subscribe(
          response => {
            sessionStorage.setItem('destStops',JSON.stringify(response));
            this.dropping= JSON.parse(sessionStorage.getItem('destStops'));
           //alert(JSON.stringify(response));
           //this.dropping.push(response);
           // alert(this.dropping[0].stop);
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
