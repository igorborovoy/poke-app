import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Pokemon} from '../../../utils/interfaces/pokemon.interfaces';
import {LocalStorageService} from '../../../utils/services/localstorage.service';
import {CounterService} from '../../../utils/services/counter.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [CounterService]
})
export class PokemonComponent implements OnInit, OnDestroy {

  sub: Subscription;
  @Input() pokemon: Pokemon;
  constructor(private storageService: LocalStorageService, private counterService: CounterService) {  }

  ngOnInit(): void {
    this.sub = this.counterService.init()
      .subscribe(data => console.log(`Data: ${data} from ${this.pokemon.name} pokemon`));
  }

  public addToFav(item: Pokemon): void {
    this.storageService.setItem(item);
  }

  public delFromFav(item: Pokemon): void {
    this.storageService.deleteItem(item);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
