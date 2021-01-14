import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Route } from '../models/route';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {

  route : Route = new Route();
  response : any;

  constructor(private adminService : AdminServiceService) { }

  ngOnInit() {
  }

  addRoute(){

    alert(JSON.stringify(this.route));
    this.adminService.addRoute(this.route).subscribe(response =>{
      alert(JSON.stringify(this.response));
    })

  }

}
