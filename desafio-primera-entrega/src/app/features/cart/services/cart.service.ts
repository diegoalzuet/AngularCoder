import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { moviesMock } from '../../movies/services/movies.mock';

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
