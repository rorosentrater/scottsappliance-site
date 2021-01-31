import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() {
    console.log(environment.production); // Logs false for default environment
  }
  nhContact = environment.nhContact; // TODO: make a phone number pipe?
  nhContactString = environment.nhContactString;
  maContact = environment.maContact;
  maContactString = environment.maContactString;




  ngOnInit(): void {
  }

}
