import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
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
  isShowDiv = true;
  isRoute = true;
  boarding:Stop[] =[];
  var:Stop[]=[];
  dropping:Stop[]=[];
  book:Book = new Book();
  amount:any;
  routeId:any;

  toggle(){
    this.isShowDiv= !this.isShowDiv;
  }

  seatsBook(){
    this.amount= document.getElementById("fare").innerHTML;
    this.routeId = document.getElementById("routeId").innerHTML;
    this.book.fare = this.amount;
    this.book.routeId = this.routeId;
   // alert(this.routeId);
    //this.book.fare = this.book.noOfSeats*this.arr[0].fare;
    alert(JSON.stringify(this.book));
    sessionStorage.setItem("BoardingDetails",JSON.stringify(this.book));
<<<<<<< HEAD
    this.router.navigate(['passengers']);
=======
    
>>>>>>> 2abc5a36d69a0cd87e1b03c265ceab218b245740
  }

  constructor(private busService:BusService, private router : Router) { }

  ngOnInit() {
    //alert(sessionStorage.getItem('routeDetails'));
    this.arr=JSON.parse(sessionStorage.getItem('routeDetails'));
    alert(JSON.stringify(this.arr));
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
}
