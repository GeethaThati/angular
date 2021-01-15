import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {

  email:string;
  ticketId:number;
  response:any;
  cancel(){
    //alert(this.ticketId);
    this.busService.cancelTicket(this.ticketId).subscribe(response=>{
     // alert(JSON.stringify(response));
     this.response = response;
     alert(this.response.message);
     }
    );

  }

  constructor(private busService:BusService,private router:Router) { }

  ngOnInit() {
  }

}
