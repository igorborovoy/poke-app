import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {

  counter$ = new BehaviorSubject(0);

  constructor() {  }

  public increment(): void {
    const copy = this.counter$.value + 1;
    this.counter$.next(copy);
  }

  public decrement(): void {
    const copy = this.counter$.value - 1;
    this.counter$.next(copy  > 0 ? copy : 0);
  }
}
