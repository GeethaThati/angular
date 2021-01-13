import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { Route } from '../models/Route';
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
  boarding:StopDetails[] =[];
  stop:StopDetails = new StopDetails();
  t:StopDetails[]=[];
  dropping:StopDetails[]=[];

  toggle(){
    this.isShowDiv= !this.isShowDiv;
  }

  constructor(private busService:BusService) { }

  ngOnInit() {
    //alert(sessionStorage.getItem('routeDetails'));
    this.arr=JSON.parse(sessionStorage.getItem('routeDetails'));
    alert(JSON.stringify(this.arr));
    // for(let val of this.arr){
    //   this.busService.searchStops(val[1],val[0]).subscribe(
    //     response=> {
    //       this.boarding.push(response);
    //       // for(let val of this.t){
    //       //   this.boarding.push(val);
    //       // }
    //      // alert(response[0]);
    //       //this.boarding.push(response[0]);
    //       alert(this.boarding);
    //     }
        
    //   );

    //   this.busService.searchStops(val[2],val[0]).subscribe(
    //       response => {
    //        // alert(JSON.stringify(response));
    //        this.dropping.push(response);
    //        alert(this.dropping);
    //       }
    //   );
    // }
   

    
    
  }

}
