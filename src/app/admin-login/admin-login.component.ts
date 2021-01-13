import { Component, OnInit } from '@angular/core';
import { AdminLogin } from '../models/Adminlogin';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLogin :AdminLogin = new AdminLogin();
  message : String;
  response : any;

  constructor(private adminService :AdminServiceService, private router :Router) { }

  ngOnInit() {
  }

  loginCheck() {
    console.log(this.adminLogin);
    this.adminService.login(this.adminLogin).subscribe(response => {
      alert(JSON.stringify(response));
      console.log(response);
      this.response = response;
      if(this.response.status == 'SUCCESS') {
        let id = this.response.id;
        let name = this.response.name;
        sessionStorage.setItem('id', String(id));
        sessionStorage.setItem('name', name);
        this.router.navigate(['admin-options']);
      }
      else
        this.message = this.response.message;
    })
  }

}
