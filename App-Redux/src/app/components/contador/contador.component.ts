import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DECREMENTAR, INCREMENTAR, RESET } from 'src/app/store/contador.actions';
import { ContadorState } from 'src/app/store/contador.state';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  contador$: Observable<number>

  constructor(private store: Store<ContadorState>) {
    this.contador$ = this.store.select('contador')
  }
  ngOnInit(): void { }

  incrementar() {
    this.store.dispatch(INCREMENTAR());
  }
  decrementar() {
    this.store.dispatch(DECREMENTAR());
  }
  reset() {
    this.store.dispatch(RESET());
  }
}
