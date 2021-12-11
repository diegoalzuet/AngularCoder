import { CartService } from './../../services/cart.service';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[]=[];
  movieInfo: Movie|any;
  movieToCart: Movie[]|any;
  show : boolean=false;
  showCart: boolean = false;
  constructor(
    private movieService: MovieService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.movieService.getList().subscribe(movies=> this.movies = movies);
  }
  showDetail(id:string){
    this.movieService.getDetail(id)
    .subscribe( movie => {
      this.movieInfo=movie
      this.show=true;
    });
  }
  addToCart(id:string){
    this.cartService.add(id)
    .subscribe( movie => {
     this.movieToCart = movie;
      this.showCart=true;
    });
  }
}
