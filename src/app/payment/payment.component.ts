import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/Payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment : Payment = new Payment();
  

  constructor(private paymentService : PaymentService) { 
   
  }

  ngOnInit() {
    
  }

payNow(){

 alert(JSON.stringify(this.payment));

  this.paymentService.payNow(this.payment).subscribe(response =>{
  alert(JSON.stringify(response));
})

  }

}
