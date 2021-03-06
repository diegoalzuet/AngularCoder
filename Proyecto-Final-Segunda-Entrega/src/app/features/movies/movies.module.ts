import { MoviesComponent } from './components/movies/movies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    MoviesComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule
  ]
})
export class MoviesModule { }
