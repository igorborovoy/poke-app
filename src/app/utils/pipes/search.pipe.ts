import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon.interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(pokemons: Pokemon[], searchStr: string = ''): Pokemon[] {
    if (!searchStr.trim()) {
      return pokemons;
    }

    return pokemons.filter( pok => {
      return pok.name.toLowerCase().includes(searchStr.toLowerCase());
    });
  }

}
