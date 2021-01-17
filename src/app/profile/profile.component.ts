import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
import { Customer } from '../models/Customer';
import { RegisterService } from '../register.service';
import { User } from '../models/User';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  userId:number;
  user:User = new User();
  customer:Customer=new Customer();
  message:string;

  constructor(private profileService:ProfileService,private router:Router,private registerService:RegisterService) { }
  
  
  
  profile(){
    this.profileService.profile(this.userId).subscribe(response=>
      {
      alert(JSON.stringify(response));
      this.user=response;
      alert(JSON.stringify(this.user));
      }
  
    
    );
  }
  register(){
    this.registerService.register(this.user).subscribe(response=>{
      alert(JSON.stringify(response))
      alert(response.status)
      if(response.status = 'SUCCESS'){
        this.router.navigate(['thankyou']);
      }
      else{
        this.message = "Registration failed";
      }}
    );

  }
}
