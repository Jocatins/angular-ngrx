import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {}
  public increment() {
    this.store.dispatch(increment());
  }
  public decrement() {
    this.store.dispatch(decrement());
  }
  public reset() {
    this.store.dispatch(reset());
  }
}
