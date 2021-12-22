import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie.model';
import { Component, Input, OnInit, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  movies: Movie[] = [];
  cart: Movie[] = [];
  // movieInfo: Movie | any;
  // movieToCart: Movie[] | any = [];
  // show: boolean = false;
  // showCart: boolean = false;

  private subscription: Subscription | undefined;

  constructor(
    private movieService: MovieService,
    private cartService: CartService,
    private router: Router
  ) {
    console.log('MOVIES - CONSTRUCTOR')
    localStorage['carrito'] ? this.cart = JSON.parse(localStorage['carrito']) : console.log('carrito vacio');

  }

  ngOnInit(): void {
    console.log('MOVIES - ON INIT')
    this.subscription = this.movieService.getList().subscribe(movies => this.movies = movies);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('MOVIES - ON CHANGES', changes)
  }

  ngAfterViewInit(): void {
    console.log('MOVIES - AFTER VIEW INIT');
  }

  ngOnDestroy(): void {
    console.log('MOVIES - ON DESTROY');
    this.subscription?.unsubscribe();
  }

  showDetail(id: string) {
    this.router.navigate(['peliculas', id]);
  }
  addToCart(id: string) {

    this.subscription = this.cartService.add(id)
      .subscribe(movie => {
        movie != null ? this.cart.push(movie) : console.log('no se agrego');
        localStorage['carrito'] = JSON.stringify(this.cart);
      })

    this.router.navigate(['carrito', id]);
  }
}
