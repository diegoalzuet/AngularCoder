import { CartService } from './../../services/cart.service';
import { Movie } from './../../models/movie.model';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit, OnDestroy {

  cart: Movie[] | any = [];
  constructor(
    private cartService: CartService
  ) {
    console.log('CARRITO - CONSTRUCTOR');
    if (localStorage['carrito'])
      this.cart = JSON.parse(localStorage['carrito'])
  }
  ngAfterViewInit(): void {
    console.log('CARRITO - AFTER VIEW INIT')
  }
  ngOnDestroy(): void {
    console.log('CARRITO - ON DESTROY');
  }

  ngOnInit(): void {
    console.log('CARRITO - ON INIT')
  }

  vaciarCarrito() {
    this.cartService.vaciarCarrito();
    location.reload();
  }

}
