import { CartService } from './../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './../../models/movie.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Movie[] | any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private cartService: CartService) {
    console.log(localStorage['carrito'])
    if (localStorage['carrito'])
      this.cart = JSON.parse(localStorage['carrito'])
  }

  ngOnInit(): void {
    this.cartService.add(this.activatedRoute.snapshot.params['id'])
      .subscribe(movie => {
        if (movie != null) {
          this.cart.push(movie);
          localStorage['carrito'] = JSON.stringify(this.cart);
        }
      });
  }

  vaciarCarrito() {
    this.cartService.vaciarCarrito();
  }

}
