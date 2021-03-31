import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable()
export class CounterService {
  stream$ = interval(3000);

  constructor() {  }

  public init(name: string): void {
    this.stream$.subscribe( data => console.log(`Data: ${data} from ${name} pokemon`));
  }

/*  public increment(): void {
    this.stream$.next(this.counter++);
  }

  public decrement(): void {
    this.stream$.next(this.counter--);
  }*/
}
