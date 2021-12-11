import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarioRegistrado: User = {
    user: 'diego@gmail.com',
    password: '0123456789'
  }

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  userControl = this.loginForm.controls['user'];
  passwordControl = this.loginForm.controls['password'];

  constructor() { }

  ngOnInit(): void {
  }

  loguear() {

    if (this.loginForm.controls['user'].value == this.usuarioRegistrado.user && this.loginForm.controls['password'].value == this.usuarioRegistrado.password)
      console.log("Bienvenido. Login exitoso");
    else
      console.log('Error en las credenciales')
  }

}