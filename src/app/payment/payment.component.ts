import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  response : any ;

  constructor(private paymentService : PaymentService, private router : Router) { 
   
  }

  
  ngOnInit() {
    this.payment.ticketId = parseInt(sessionStorage.getItem('ticketId'));
   // alert(this.payment.ticketId);
    this.payment.userId = parseInt(sessionStorage.getItem('customerId'));
    // this.book = JSON.parse(sessionStorage.getItem('BoardinDetails'));
    this.payment.amount = parseInt(sessionStorage.getItem('amount'));
   // this.payment.paymentType = event.target.value;
    //alert(this.payment.amount);
  }

payNow(){

  alert(JSON.stringify(this.payment));

  
  this.paymentService.payNow(this.payment).subscribe(response =>{
    this.response = response;
  sessionStorage.setItem('transactionId',String(this.response.trasactionId));
   alert(JSON.stringify(response));
  alert(sessionStorage.getItem('transactionId'));
   this.router.navigate(['view-ticket']);

})

  }

  goBack(){
    this.router.navigate(['passengers']);
  }

}
