import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import {  FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
 
  regestration: any

  constructor() {
    const form = "document.getElementById('form')";
    const username = "document.getElementById('username')";
    const email = "document.getElementById('email')";
    const phone = "document.getElementById('phone')";
    const password = "document.getElementById('password')";
    const cpassword = "document.getElementById('cpassword')";
  }
  ngOnInit(): void {
   
    addEventListener('submit',(Event)=>{
      validate();
      console.log("its working when submitng the button");
    })
  }

}

const validate = () =>{
   
}





