import { Injectable } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(item: Pokemon): void{
    localStorage.setItem(item.name, JSON.stringify(item));
  }

  public getItems(): Pokemon[]{
    const pokArr = [];
    const keys = Object.keys(localStorage);
    for (const key of keys) {
      pokArr.push(JSON.parse(localStorage.getItem(key) as string));
    }
    return pokArr;
  }
}
