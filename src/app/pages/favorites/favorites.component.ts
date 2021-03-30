import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../utils/interfaces/pokemon.interfaces';
import {LocalStorageService} from '../../utils/services/localstorage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  constructor(private storageService: LocalStorageService) { }

  ngOnInit(): void {
    this.getFavoritePokemons();
  }

  private getFavoritePokemons(): void {
    this.pokemons = this.storageService.getItems();
  }
}
