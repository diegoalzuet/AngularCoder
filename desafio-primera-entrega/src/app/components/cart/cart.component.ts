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

  // @Input() movie: Movie|any;
  // @Input() showCart:boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.add(this.activatedRoute.snapshot.params['id'])
      .subscribe(movie => this.cart.push(movie));
  }

}
