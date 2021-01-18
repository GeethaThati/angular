import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  userId:number;
  user:User = new User();
  constructor(private profileService:ProfileService,private router:Router) { }

  update(){
    this.profileService.profileUpdate(this.user).subscribe(response =>
      {
        alert(JSON.stringify(response));
      }
      );
  }

  ngOnInit() {
    this.userId = parseInt(sessionStorage.getItem('customerId'));
    alert(this.userId);
    this.profileService.profile(this.userId).subscribe(response=>
      {
      //alert(JSON.stringify(response));
      this.user=response;
      alert(JSON.stringify(this.user));
      }
    );
  }

 goBack(){
   this.router.navigate(['dashboard']);
 }

}
