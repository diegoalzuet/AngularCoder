import { Movie } from './../../models/movie.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() movie: Movie|any;
  @Input() show: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }


}
