import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private adminService : AdminServiceService, private router : Router) { }

  ngOnInit() {
  }

  addRoute(){

    alert(JSON.stringify(this.route));
    alert(JSON.stringify("Route Added Successfully"));
    this.adminService.addRoute(this.route).subscribe(response =>{
      alert(JSON.stringify(this.response));
    })

  }
  goBack(){
    this.router.navigate(['admin-options']);
  }

}
