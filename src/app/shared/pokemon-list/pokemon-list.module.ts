import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonComponent } from '../pokemon/pokemon.component';



@NgModule({
  declarations: [PokemonListComponent],
  exports: [
    PokemonListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonListModule { }
