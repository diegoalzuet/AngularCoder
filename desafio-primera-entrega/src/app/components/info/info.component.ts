import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  movie: Movie |any;

  constructor(
    private activateRoute: ActivatedRoute,
    private moviesService: MovieService
  ) { }

  ngOnInit(): void {
    this.moviesService.getDetail(this.activateRoute.snapshot.params['id'])
      .subscribe(movie => {
        this.movie = movie
      });
  }
}
