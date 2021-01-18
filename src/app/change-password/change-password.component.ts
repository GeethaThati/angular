import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../confirmed.validator';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  contactForm:FormGroup;
  password:Password = new Password();
  pass:string;
  email:string;
  constructor(private busService:BusService,private router:Router,private formBuilder:FormBuilder) { 
    this.contactForm = formBuilder.group({
      // pwd : new FormControl(),
      // emailid: new FormControl()
      pwd:['',[Validators.required,Validators.minLength(8)]],
      emailid : ['',[Validators.required,Validators.email]],
      confirmPassword: ['', [Validators.required,Validators.minLength(8)]]

    }
  );
  }

  changePassword(){
    alert(JSON.stringify(this.password));
    this.busService.changePassword(this.email,this.pass).subscribe(response=>
      {
        alert(JSON.stringify(response));
        
      });
  }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['dashboard']);
  }

}

export class Password{
  email:string;
  pass:string;
}
