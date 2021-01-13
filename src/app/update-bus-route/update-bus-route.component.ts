import { Component, OnInit } from '@angular/core';
import { UpdateBus } from '../models/UpdateBus';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-update-bus-route',
  templateUrl: './update-bus-route.component.html',
  styleUrls: ['./update-bus-route.component.css']
})
export class UpdateBusRouteComponent implements OnInit {

  updateBus : UpdateBus = new UpdateBus();
  constructor(private adminService :AdminServiceService) { }

  ngOnInit() {
  }

  updateRoute(){
    alert(JSON.stringify(this.updateBus));
    this.adminService.updateBus(this.updateBus).subscribe(response =>{
      alert(JSON.stringify(response));
    })
  }

}
