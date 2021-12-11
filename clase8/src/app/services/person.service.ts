import { Persona } from './../models/persona.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() {}

  // getList(): Persona[] {
  //   return [
  //     { nombre: 'Diego', apellido: 'Alzuet', edad: 33 },
  //     { nombre: 'Juan', apellido: 'Lopez', edad: 23 },
  //     { nombre: 'Lore', apellido: 'Daldosso', edad: 33 },
  //   ];
  // }

  getList(): Observable<Persona[]>{
    return of([
      { nombre: 'Diego', apellido: 'Alzuet', edad: 33 },
      { nombre: 'Juan', apellido: 'Lopez', edad: 23 },
      { nombre: 'Lore', apellido: 'Daldosso', edad: 33 },
    ]);
  }
}
