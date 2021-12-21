import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,AfterViewInit,OnDestroy {

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

  constructor() {
    console.log('REGISTER - CONSTRUCTOR');
  }
  ngAfterViewInit(): void {
    console.log('REGISTER - AFTER VIEW INIT');
  }
  ngOnDestroy(): void {
    console.log('REGISTER - ON DESTROY');
  }

  ngOnInit(): void {
    console.log('REGISTER - ON INIT');
  }
  register(){

    (this.passwordControl1.value===this.passwordControl2.value)? console.log('REGISTRO COMPLETO'):console.log('Las contraseñas no coinciden');
    console.log(this.passwordControl1.value);
    console.log(this.passwordControl2.value);
  }

}
