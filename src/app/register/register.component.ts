import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import {FormControl,FormGroup,Validators,FormBuilder,NgForm} from '@angular/forms';
import { User } from '../models/User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
   
  user:  User = new User();
  message:string;
  constructor(private registerService:RegisterService,private router:Router) { }
  register(){
    alert(JSON.stringify(this.user));
    this.registerService.register(this.user).subscribe(response=>{
      alert(JSON.stringify(response))
      alert(response.status)
      if(response.status = 'SUCCESS'){
       // this.router.navigate(['thankyou']);
      }
      else{
        this.message = "Registration failed";
      }
      
    })
    }

    goBack(){
      this.router.navigate(['home']);
    }
    
  }
export class Users{
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  contact:number;
  gender:string;
  dob:Date;
  wallet:number;
  
}

