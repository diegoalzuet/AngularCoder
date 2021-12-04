import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Bievenidos al ejemplo de hola mundo en angular';
  // titleClass = 'dark-mode';
  // estado = false;

  // activarDarkMode(){
  //   this.estado=!this.estado;
  // }
  // createTitle(){
  //   return 'Hola Alumnos: ' + this.title;
  // }
  // cambiarTitulo(){
  //   this.title = 'Se cambio el titulo';
  // }
  // cambiarClase(){
  //   this.titleClass = this.titleClass==='dark-mode'?'light-mode':'dark-mode';
  // }
  // agregarBorde(){
  //   this.titleClass = this.titleClass + ' rounded-border';
  // }

  empleados = [
    {
      nombre:'Diego',
      puesto:'Developer',
      team: 'Backoffice App',
      foto: 'assets/descarga.png'
    },
    {
      nombre:'Soledad',
      puesto:'UX',
      team: 'Backoffice App',
      foto:''
    },
    {
      nombre:'Maria',
      puesto:'QA',
      team: '',
      foto:''
    }
  ]
  agregarEmpleado(nombre:string){
    this.empleados.push( {
      nombre:nombre,
      puesto:'',
      team:'',
      foto:''
    })
  }

}
