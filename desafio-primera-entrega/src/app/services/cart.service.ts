import { Observable, of } from 'rxjs';
import { moviesMock } from './movies.mock';
import { Movie } from './../models/movie.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  add(id: string): Observable<Movie | undefined> {
    return of(moviesMock.find(movie => movie.id === id ))
  }
  vaciarCarrito(){
    localStorage.clear();
  }
}
