import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-email-ticket',
  templateUrl: './email-ticket.component.html',
  styleUrls: ['./email-ticket.component.css']
})
export class EmailTicketComponent implements OnInit {

  email:string;
  ticketId:number;

  emailTicket(){
    //alert(this.email);
    //alert(this.ticketId);
    this.busService.emailTicket(this.ticketId,this.email).subscribe(response=>
      {
        alert(response);
        
      });
  }
  constructor(private busService:BusService,private router:Router) { }

  ngOnInit() {
  }

}
