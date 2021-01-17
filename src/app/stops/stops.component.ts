import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { AddStop } from '../models/AddStop';
import { Stop } from '../models/Stop';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {

  addstop : AddStop = new AddStop(1);
  stops: Stop = new Stop();
  stopsCount : number [] = [1];
  constructor(private adminService:AdminServiceService) { }

  ngOnInit() {

  }

  addStop(){
    alert(JSON.stringify(this.addstop));

    this.adminService.addStop(this.addstop).subscribe(response => {
      alert(JSON.stringify(response));

    })
  }

}
