import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'




@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent  implements OnInit  {
  
  

  hide: boolean = false;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {}
  
  loginForm: FormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  })
  
  
  onLogin() {
      if (!this.loginForm.valid) {
        return;
      }
      console.log(this.loginForm.value);
  }
  
  

}

