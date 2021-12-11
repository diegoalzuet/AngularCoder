import { Movie } from './../../models/movie.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() movie: Movie|any;
  @Input() showCart:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
