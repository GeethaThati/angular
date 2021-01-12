import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { tripDetails } from '../models/tripDetails';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  search:Search = new Search();
  trip:tripDetails = new tripDetails();
  details:tripDetails[] = [];
  constructor(private busService:BusService,private router:Router) { }

  ngOnInit() {
  }

  searchBus(){
    alert(JSON.stringify(this.search));
    this.busService.searchBus(this.search).subscribe(response=>{
     alert(JSON.stringify(response));
    sessionStorage.setItem('routeDetails',JSON.stringify(response));
      this.router.navigate(['view-bus']);
    }
      );
  }

}

export class Search{
  source:string;
  destination:string;
  date:Date;
}