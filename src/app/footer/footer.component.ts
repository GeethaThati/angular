import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebook : any ="../assets/images/facebook.jpg";
  twitter: any ="../assets/images/twitter.png";
  constructor() { }

  ngOnInit() {
  }

}
