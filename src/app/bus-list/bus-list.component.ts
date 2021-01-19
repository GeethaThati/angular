import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Bus } from '../models/bus';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  buses : Bus[] = [];
  constructor(private adminService : AdminServiceService, private router : Router) { }

  ngOnInit() {
    this.adminService.fetchBuses().subscribe(response=>{
     
      sessionStorage.setItem('busList',JSON.stringify(response));
      this.buses = JSON.parse(sessionStorage.getItem('busList'));
      alert(JSON.stringify(this.buses));

    })
  }

  goBack(){
    this.router.navigate(['dashboard']);
  }

}
