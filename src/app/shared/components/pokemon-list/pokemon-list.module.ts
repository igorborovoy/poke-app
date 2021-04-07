import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import {PokemonModule} from '../pokemon/pokemon.module';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [PokemonListComponent],
  exports: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    PokemonModule,
    MatCardModule
  ]
})
export class PokemonListModule { }
