import { Component, OnInit } from '@angular/core';
import { Login } from '../models/Login';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();
  message: string;
  response:any;
  constructor(private customerService: CustomerServiceService, private router: Router,private busService: BusService) { }

  forgotPassword(){
    alert(this.login.email);
    this.busService.forgotPassword(this.login.email).subscribe(response=>{
      alert(JSON.stringify(response));
    });

  }

  loginCheck() {
    console.log(this.login);
    this.customerService.login(this.login).subscribe(response => {
      alert(JSON.stringify(response));
      console.log(response);
      this.response =response;
      if(this.response.status == 'SUCCESS') {
        let customerId = this.response.customerId;
        let customerName = this.response.customerName;
        sessionStorage.setItem('customerId', String(customerId));
        sessionStorage.setItem('customerName', customerName);
        this.router.navigate(['dashboard']);
      }
      else
        this.message = this.response.message;
    })
  }

goBack(){
  this.router.navigate(['home']);
}

}
