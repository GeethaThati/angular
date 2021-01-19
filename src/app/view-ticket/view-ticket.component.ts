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
  transactionId : number;
  source : string;
  constructor() { }

  ngOnInit() {
    this.transactionId = parseInt(sessionStorage.getItem('transactionId'));
    this.ticketId = parseInt(sessionStorage.getItem('ticketId'));
    this.book = JSON.parse(sessionStorage.getItem('boardingDetails'));
    alert(this.book);
    // this.source = this.book.source;

  }

}
