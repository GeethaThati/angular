import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  num:number;
  constructor() { }

  ngOnInit() {
    this.num=JSON.parse(sessionStorage.getItem('seat'));
  }

}
