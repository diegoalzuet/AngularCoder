import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  usuarioRegistradoForm = new FormGroup({
    user: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(10)])
  });

  userControl = this.usuarioRegistradoForm.controls['user'];
  passwordControl = this.usuarioRegistradoForm.controls['password'];

  constructor() { }

  ngOnInit(): void {
  }

  loguear(){
    console.log(this.usuarioRegistradoForm.value);
  }

}
