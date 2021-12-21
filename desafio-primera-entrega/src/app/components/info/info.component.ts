import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie.model';
import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit,AfterViewInit,OnDestroy {

  movie: Movie |any;

  constructor(
    private activateRoute: ActivatedRoute,
    private moviesService: MovieService
  ) { }
  ngAfterViewInit(): void {
    console.log('MOVIE DETAIL - AFTER VIEW INIT')
  }
  ngOnDestroy(): void {
    console.log('MOVIE DETAIL - ON DESTROY')
  }

  ngOnInit(): void {
    console.log('MOVIE DETAIL - ON INIT')
    this.moviesService.getDetail(this.activateRoute.snapshot.params['id'])
      .subscribe(movie => {
        this.movie = movie
      });
  }
}
