import { Subscription } from 'rxjs';
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
  private subscription : Subscription | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private moviesService: MovieService
  ) { }
  ngAfterViewInit(): void {
    console.log('MOVIE DETAIL - AFTER VIEW INIT')
  }
  ngOnDestroy(): void {
    console.log('MOVIE DETAIL - ON DESTROY')
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    console.log('MOVIE DETAIL - ON INIT')
    this.subscription = this.moviesService.getDetail(this.activateRoute.snapshot.params['id'])
      .subscribe(movie => {
        this.movie = movie
      });
  }
}
