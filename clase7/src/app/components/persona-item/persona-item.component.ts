import { Persona } from './../../models/persona.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona-item',
  templateUrl: './persona-item.component.html',
  styleUrls: ['./persona-item.component.scss']
})
export class PersonaItemComponent implements OnInit {

  @Input() persona: Persona={nombre:'Nombre', apellido:'Apellido',edad:22}

  constructor() { }

  ngOnInit(): void {
  }

}
