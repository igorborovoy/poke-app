import {Component, Input, OnDestroy, OnInit } from '@angular/core';
import {Pokemon} from '../../../utils/interfaces/pokemon.interfaces';
import {LocalStorageService} from '../../../utils/services/localstorage.service';
import {CounterService} from '../../../utils/services/counter.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [CounterService]
})
export class PokemonComponent implements OnInit, OnDestroy {

  likes: Observable<number> = this.counterService.counter$;
  isOnFav: boolean;

  @Input() pokemon: Pokemon;

  constructor(private storageService: LocalStorageService, private counterService: CounterService) {  }

  ngOnInit(): void {
    this.isOnFav = this.storageService.getItem(this.pokemon);
  }

  public addToFav(item: Pokemon): void {
    this.storageService.setItem(item);
    this.isOnFav = !this.isOnFav;
  }

  public delFromFav(item: Pokemon): void {
    this.storageService.deleteItem(item);
    this.isOnFav = !this.isOnFav;
  }

  public incLikes(): void {
    this.counterService.increment();
  }

  public decLikes(): void {
    this.counterService.decrement();
  }

  ngOnDestroy(): void {
  }
}
