import { Injectable } from '@angular/core';
import {BehaviorSubject, interval} from 'rxjs';

@Injectable()
export class CounterService {
  stream$ = interval(3000);

  constructor() {  }

  public init(name: string): void {
    this.stream$.subscribe( data => console.log(`Data: ${data} from ${name} pokemon`));
  }

  /*

   second implementation

  */

  /*stream$ = new BehaviorSubject(0);
  counter: number;
  constructor() {  }

  public init(name: string): void {
    this.counter = 0;
    this.stream$.subscribe( data => console.log(`Data: ${data} from ${name} pokemon`));
    this.increment();
  }

  public increment(): void {
    setInterval(() => {
      this.stream$.next(this.counter++);
    }, 2000);
  }

  public unSubcribe(): void {
    this.stream$.unsubscribe();
  }*/

/*  public increment(): void {
    this.stream$.next(this.counter++);
  }

  public decrement(): void {
    this.stream$.next(this.counter--);
  }*/
}