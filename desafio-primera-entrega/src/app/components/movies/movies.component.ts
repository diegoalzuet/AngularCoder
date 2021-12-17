import { Router} from '@angular/router';
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
  movieToCart: Movie[]|any =[];
  show : boolean=false;
  showCart: boolean = false;

  constructor(
    private movieService: MovieService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.movieService.getList().subscribe(movies=> this.movies = movies);
  }
  showDetail(id:string){
    this.router.navigate(['peliculas',id]);
  }
  addToCart(id:string){
    // this.cartService.add(id)
    // .subscribe( movie => {
    //   console.log(typeof movie)
    //   console.log(typeof this.movieToCart)
    //  this.movieToCart.push(movie);
    //   console.log(this.movieToCart)

    //   this.showCart=true;
    // });
    this.router.navigate(['carrito',id]);
  }
}
