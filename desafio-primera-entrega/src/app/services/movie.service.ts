import { moviesMock } from './movies.mock';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getList() : Observable<Movie[]>{
    return of(moviesMock);
  }

  getDetail(id: string): Observable<Movie | undefined> {
    return of(moviesMock.find(movie => movie.id === id ))
  }
}
