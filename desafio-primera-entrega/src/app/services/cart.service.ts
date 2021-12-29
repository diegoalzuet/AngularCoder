import { Observable, of } from 'rxjs';
import { Movie } from './../models/movie.model';
import { Injectable } from '@angular/core';
import { moviesMock } from '../features/movies/services/movies.mock';

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
