import { PersonaListComponent } from './../persona-list/persona-list.component';
import { Persona } from './../../models/persona.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, AfterViewInit{
  selectedPersona : Persona ={nombre:'',apellido:''};

  personas: Persona[] = [
    {nombre:'Diego',apellido:'Alzuet',edad:33},
    {nombre:'Juan',apellido:'Lopez',edad:23},
    {nombre:'Lore',apellido:'Daldosso',edad:33},
  ];

  personaForm = new FormGroup({
    nombre:new FormControl(''),
    apellido:new FormControl(''),
    edad:new FormControl('')
  });

  nombreControl = this.personaForm.controls['nombre'];
  @ViewChild(PersonaListComponent) personaList: any;

  constructor() { }

  ngOnInit(): void {
    this.personaForm.controls['nombre'].valueChanges.subscribe(values => console.log('value changes', values));
    console.log(this.personaList);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.personaList)
    setTimeout(() => this.personaList.selectedPersona = this.personas[1],0);
  }

  personaSelected(persona:Persona){
    this.personaForm.setValue(persona);
  }
  guardar(){
    this.selectedPersona = this.personaForm.value;
    console.log(this.personaForm.value);
  }
}
