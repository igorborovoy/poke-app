import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../utils/interfaces/pokemon.interfaces';
import {LocalStorageService} from '../../utils/services/localstorage.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: any;
  constructor(private storageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  public addToFav(item: Pokemon): void {
    this.storageService.setItem(item);
  }
}
