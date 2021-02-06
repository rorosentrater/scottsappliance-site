import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  inBusinessString;
  constructor() { }

  ngOnInit(): void {
    try {
      const thisYear = (new Date()).getFullYear();
      const yearsInBusiness = thisYear - environment.established;
      this.inBusinessString = 'for over ' + yearsInBusiness + ' years!';
    } catch (error) {
      console.error('Could not get current date. Using alternative established string!');
      console.error(error);
      this.inBusinessString = 'since ' + environment.established;
    }
  }

}
