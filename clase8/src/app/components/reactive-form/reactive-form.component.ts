import { PersonService } from './../../services/person.service';
import { PersonaListComponent } from './../persona-list/persona-list.component';
import { Persona } from './../../models/persona.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, AfterViewInit {

  selectedPersona: Persona = { nombre: '', apellido: '' };

  personas: Persona[] = [];

  personaForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl('')
  });

  nombreControl = this.personaForm.controls['nombre'];
  @ViewChild(PersonaListComponent) personaList: any;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    // this.personaForm.controls['nombre'].valueChanges.subscribe(values => console.log('value changes', values));
    // this.personas = this.personService.getList();

    this.personService.getList().subscribe(
      personas => this.personas=personas
    );
    console.log(this.personaList);
  }
  ngAfterViewInit(): void {
    console.log(this.personaList)
    setTimeout(() => this.personaList.selectedPersona = this.personas[1], 0);
  }

  personaSelected(persona: Persona) {
    this.personaForm.setValue(persona);
  }
  guardar() {
    this.selectedPersona = this.personaForm.value;
    console.log(this.personaForm.value);
  }
}
