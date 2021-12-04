import { UsuarioRegistrado } from './../../models/usuariosRegistrados.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  usuario: UsuarioRegistrado = {
    user: "Diego",
    password: "1234567890"
  }


  usuarioRegistradoForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  userControl = this.usuarioRegistradoForm.controls['user'];
  passwordControl = this.usuarioRegistradoForm.controls['password'];

  constructor() { }

  ngOnInit(): void {
  }

  loguear() {

    if (this.usuarioRegistradoForm.controls['user'].value == this.usuario.user && this.usuarioRegistradoForm.controls['password'].value == this.usuario.password)
      console.log("Bienvenido. Login exitoso");
    else
      console.log('Error en las credenciales')
  }

}
