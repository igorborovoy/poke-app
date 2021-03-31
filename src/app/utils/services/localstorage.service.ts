import { Injectable } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(item: Pokemon): void {
    const storage = this.getItems();
    try {
      if (!storage) {
        localStorage.setItem('pokemons', JSON.stringify([item]));
        return;
      }
      if (storage.find(elem => elem.name === item.name)) {
        return;
      }
      localStorage.clear();
      localStorage.setItem('pokemons', JSON.stringify([...storage, item]));
      return;
    } catch ( error ) {
      throw Error(`Error in local storage: ${error}`);
    }
  }

  public getItems(): Pokemon[]{
    return JSON.parse(localStorage.getItem('pokemons') as string);
  }

  public deleteItem(item: Pokemon): void {
    try {
      const storage = this.getItems().filter( (elem) => {
        return item.name !== elem.name;
      });
      localStorage.clear();
      localStorage.setItem('pokemons', JSON.stringify(storage));
    } catch ( error ) {
      throw Error(`Error in local storage: ${error}`);
    }
  }
}
