import { Router} from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie.model';
import { Component, Input, OnInit, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit,AfterViewInit,OnDestroy,OnChanges {

  movies: Movie[]=[];
  movieInfo: Movie|any;
  movieToCart: Movie[]|any =[];
  show : boolean=false;
  showCart: boolean = false;

  private subscription: Subscription | undefined;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {
    console.log('MOVIES - CONSTRUCTOR')
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('MOVIES - ON CHANGES',changes)
  }
  ngAfterViewInit(): void {
    console.log('MOVIES - AFTER VIEW INIT');
  }
  ngOnDestroy(): void {
    console.log('MOVIES - ON DESTROY');
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    console.log('MOVIES - ON INIT')
    this.subscription = this.movieService.getList().subscribe(movies=> this.movies = movies);
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
