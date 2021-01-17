import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Bus } from '../models/bus';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  bus : Bus = new Bus();
  response :any;
  constructor(private adminService : AdminServiceService, private router: Router) { }

  ngOnInit() {
  }

  addBus(){
    //alert(JSON.stringify(this.bus));
    alert("Bus Added Successfully !!")
    this.adminService.addBusDetails(this.bus).subscribe(response =>{
      
    })
  }
  goBack(){
    this.router.navigate(['admin-options']);
  }
}
