import { Component, OnInit } from '@angular/core';
import { UpdateBus } from '../models/UpdateBus';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-bus-route',
  templateUrl: './update-bus-route.component.html',
  styleUrls: ['./update-bus-route.component.css']
})
export class UpdateBusRouteComponent implements OnInit {

  updateBus : UpdateBus = new UpdateBus();
  constructor(private adminService :AdminServiceService, private router : Router ){ }

  ngOnInit() {
  }

  updateRoute(){
   // alert(JSON.stringify(this.updateBus));
    alert("Route Updated Successfully");
    this.adminService.updateBus(this.updateBus).subscribe(response =>{
      alert(JSON.stringify("Route Updated Successfully"));
    })
  }

  goBack(){
    this.router.navigate(['admin-options']);
  }

}
