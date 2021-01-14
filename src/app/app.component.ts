import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder,NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bus-reservation';

  registerForm=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  get firstname(){return this.registerForm.get('firstname')}
  

  img1 : any = "assets/images/signin.png";

}
