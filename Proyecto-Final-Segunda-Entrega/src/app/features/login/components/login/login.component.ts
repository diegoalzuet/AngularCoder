import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit,OnDestroy {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  userControl = this.loginForm.controls['username'];
  passwordControl = this.loginForm.controls['password'];

  constructor(
    private loginService : LoginService
  ) { }
  ngAfterViewInit(): void {
    console.log('LOGIN - AFTER VIEW INIT');
  }
  ngOnDestroy(): void {
    console.log('LOGIN - ON DESTROY')
  }

  ngOnInit(): void {
    console.log('LOGIN - ON INIT')
  }

  loguear() {
    const user = this.loginForm.controls['username'].value;
    const password= this.loginForm.controls['password'].value;
    if(this.loginService.validateUser(user,password)){
      alert('Bienvenido. Login valido');
      this.loginForm.reset();
    }
    else
    alert('Error en las credenciales');
  }

}
