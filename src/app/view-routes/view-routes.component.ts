import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-routes',
  templateUrl: './view-routes.component.html',
  styleUrls: ['./view-routes.component.css']
})
export class ViewRoutesComponent implements OnInit {

  routes:any[]=[];

  constructor(private adminservice: AdminServiceService,private router:Router) { }

  ngOnInit() {
    this.adminservice.viewRoutes().subscribe(response=>{
      alert(JSON.stringify(response));
      this.routes.push(response);
      alert(this.routes);
    });

  }

}
