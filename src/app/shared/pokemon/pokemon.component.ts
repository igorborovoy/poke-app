import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../utils/interfaces/pokemon.interfaces';
import {LocalStorageService} from '../../utils/services/localstorage.service';
import {CounterService} from '../../utils/services/counter.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [CounterService]
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;
  constructor(private storageService: LocalStorageService, private counterService: CounterService) {  }

  ngOnInit(): void {
    this.counterService.init(this.pokemon.name);
  }

  public addToFav(item: Pokemon): void {
    this.storageService.setItem(item);
  }

  public delFromFav(item: Pokemon): void {
    this.storageService.deleteItem(item);
  }
}
