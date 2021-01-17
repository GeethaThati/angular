import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/Payment';
import { PaymentService } from '../payment.service';
import { Book } from '../view-bus/view-bus.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment : Payment = new Payment();
  book: Book = new Book();
  

  constructor(private paymentService : PaymentService) { 
   
  }

  
  ngOnInit() {
    this.payment.ticketId = parseInt(sessionStorage.getItem('ticketId'));
   // alert(this.payment.ticketId);
    this.payment.userId = parseInt(sessionStorage.getItem('customerId'));
    // this.book = JSON.parse(sessionStorage.getItem('BoardinDetails'));
    this.payment.amount = parseInt(sessionStorage.getItem('amount'));
    alert(this.payment.amount);
  }

payNow(){

  alert(JSON.stringify(this.payment));

  this.paymentService.payNow(this.payment).subscribe(response =>{
  alert(JSON.stringify(response));
})

  }

}
