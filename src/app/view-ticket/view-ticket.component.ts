import { Component, OnInit } from '@angular/core';
import { Book } from '../view-bus/view-bus.component';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  ticketId:number;
  book:Book = new Book();
  constructor() { }

  ngOnInit() {
    this.ticketId = parseInt(sessionStorage.getItem('ticketId'));
    this.book = JSON.parse(sessionStorage.getItem('boardingDetails'));

  }

}
