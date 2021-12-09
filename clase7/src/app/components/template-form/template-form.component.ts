import { Persona } from './../../models/persona.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  // persona: Persona = {
  //   nombre:'',
  //   apellido:'',
  //   edad:undefined,
  // }
  persona: Persona = {
    nombre:'Diego',
    apellido:'Lopez',
    edad:34,
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregarPersona(datos:any){
    console.log(datos)

  }

}
