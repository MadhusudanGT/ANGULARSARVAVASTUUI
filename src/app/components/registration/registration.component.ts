import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

ngOnInit(): void {
  }

  firstname:string;
  middlename:string;
  lastname:string;
  mail:string;
  mobile:string;

  constructor() {

  }

  registration(){
    console.log(this.firstname)
  }
  
}