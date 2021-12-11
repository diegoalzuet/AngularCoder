import { PersonService } from './../../services/person.service';
import { PersonaItemComponent } from './../persona-item/persona-item.component';
import { Persona } from 'src/app/models/persona.model';

import { Component, Input, OnInit, Output, EventEmitter, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit, AfterViewInit {

  @Input() personas: Persona[]=[];
  @Output() selected= new EventEmitter<Persona>();

  selectedPersona: Persona = {nombre:'',apellido:''};

  constructor(private personService: PersonService) { }
  ngAfterViewInit(): void {

    this.personaItems.forEach((persona: any)=> console.log(persona));
  }

  @ViewChildren(PersonaItemComponent) personaItems: QueryList<PersonaItemComponent> | any;

  ngOnInit(): void {
    this.personService.getList();
  }

  clickPersona(persona: Persona){
    this.selectedPersona = persona;
    this.selected.emit(persona);
  }
  isSelected(persona:Persona):boolean{
    return persona.nombre== this.selectedPersona.nombre && persona.apellido==this.selectedPersona.apellido;
  }

}
