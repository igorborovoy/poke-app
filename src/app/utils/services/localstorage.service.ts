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
      if (storage.find(elem => elem.name === item.name)) {
        return;
      }
      localStorage.setItem('pokemons', JSON.stringify([...storage, item]));
      return;
    } catch ( error ) {
      throw Error(`Error in local storage: ${error}`);
    }
  }

  public getItems(): Pokemon[]{
    const storage = localStorage.getItem('pokemons');
    return storage ? JSON.parse((storage)) : [];
  }

  public deleteItem(item: Pokemon): void {
    try {
      const storage = this.getItems().filter( (elem) => item.name !== elem.name );
      localStorage.setItem('pokemons', JSON.stringify(storage));
    } catch ( error ) {
      throw Error(`Error in local storage: ${error}`);
    }
  }

  public getItem(item: Pokemon): boolean {
    /*return this.getItems().find( elem =>
      elem.name === item.name
    );*/
    return this.getItems().some( elem => item.name === elem.name);
  }
}
