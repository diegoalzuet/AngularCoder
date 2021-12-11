import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password1: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(10)]),
    check: new FormControl(false, [Validators.requiredTrue])
  });

  userControl = this.loginForm.controls['email'];
  passwordControl1 = this.loginForm.controls['password1'];
  passwordControl2 = this.loginForm.controls['password2'];
  checkControl = this.loginForm.controls['check'];

  constructor() { }

  ngOnInit(): void {
  }

}
