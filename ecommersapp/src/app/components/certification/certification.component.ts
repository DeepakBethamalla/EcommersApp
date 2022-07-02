import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  constructor() { }
    
  certification:any; // form name
   
  ngOnInit(): void {

    this.certification= new FormGroup({
      "firstName" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastName" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "emailId" : new FormControl(null,[Validators.required,Validators.email]),
      "mobileNumber" : new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "paymentId" : new FormControl(null,[Validators.required,Validators.minLength(3)]),
    });

  }

  //  submit function
  submitData(){
    console.log(this.certification.value);

    if(this.certification.vaild)
    {
       alert(`Thank you ${this.certification.value.firstName}`);
      alert(`Thank you` );
    } 

  }

  get firstname() {return this.certification.get('firstName');}
  get lastname() {return this.certification.get('lastName');}
  get emailid() {return this.certification.get('emailId');}
  get mobilenumber() {return this.certification.get('mobileNumber');}
  get paymentid() {return this.certification.get('paymentId');} 

}
function Thank(Thank: any, you: any) {
  throw new Error('Function not implemented.');
}

function you(Thank: (Thank: any, you: any) => void, you: any) {
  throw new Error('Function not implemented.');
}

function ngif(vaild: any) {
  throw new Error('Function not implemented.');
}

