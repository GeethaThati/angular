import { Component, OnInit } from '@angular/core';
import { tripDetails } from '../models/tripDetails';

@Component({
  selector: 'app-view-bus',
  templateUrl: './view-bus.component.html',
  styleUrls: ['./view-bus.component.css']
})
export class ViewBusComponent implements OnInit {


  trip:tripDetails = new tripDetails();
  arr:tripDetails[];

  constructor() { }

  ngOnInit() {
    //alert(sessionStorage.getItem('routeDetails'));
    this.arr=JSON.parse(sessionStorage.getItem('routeDetails'));
    alert(JSON.stringify(this.arr));
  }

}
