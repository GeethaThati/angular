import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { tripDetails } from '../models/tripDetails';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Egmore,Chennai', 'Borivali,Mumbai', 'Electronic City,Banglore',
'Panaji,Goa','Adyar,Chennai','Kukatpally,Hyderabad','Warangal,Hyderabad','Thane,Mumbai','Cochin,Kerala'];
  filteredOptions: Observable<string[]>;

  search:Search = new Search();
  trip:tripDetails = new tripDetails();
  details:tripDetails[] = [];

  img1 : any ="../assets/images/cover4.jpg";
  offer1 : any ="../assets/images/offer1.png";
  offer2: any = "../assets/images/offer3.jpg";
  offer3: any = "../assets/images/offer4.jpg";
  offer4: any = "../assets/images/offer5.png";
  route : any ="../assets/images/route.png";
  bus:any = "../assets/images/bus.png";
  happy: any = "../assets/images/happy.png";
  refund: any = "../assets/images/refund.jpg";
  help: any ="../assets/images/customer.jpg";
  
  constructor(private busService:BusService,private router:Router) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  searchBus(){
    //alert(JSON.stringify(this.search));
    this.busService.searchBus(this.search).subscribe(response=>{
     //alert(JSON.stringify(response));
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