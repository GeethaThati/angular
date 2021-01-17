import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import {FormControl,FormGroup,Validators,FormBuilder,NgForm} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
   
  user:Users=new Users();
  message:string;
  constructor(private registerService:RegisterService,private router:Router) { }
  register(){
    this.registerService.register(this.user).subscribe(response=>{
      alert(JSON.stringify(response))
      alert(response.status)
      if(response.status = 'SUCCESS'){
        this.router.navigate(['thankyou']);
      }
      else{
        this.message = "Registration failed";
      }
      
    })
    }
    registerForm=new FormGroup({
      firstname:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
    })
    get firstname(){return this.registerForm.get('firstName')}
    get lastname(){return this.registerForm.get('lastName')}
    get email(){return this.registerForm.get('email')}
    get password(){return this.registerForm.get('password')}
    
  }
export class Users{
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  contact:number;
  gender:boolean;
  dob:Date;
  wallet:number;
  
}


