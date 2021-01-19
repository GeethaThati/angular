import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from './models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  payNow(payment : Payment){
    let url = "http://localhost:8080/project/api/payment";
    return this.http.post(url,payment);
  }
}
