import { NgModule } from '@angular/core';
import { FavoritesComponent } from './favorites.component';
import {FavoritesRoutingModule} from './favorites-routing.module';
import {CommonModule} from '@angular/common';
import {PokemonListModule} from '../../shared/pokemon-list/pokemon-list.module';



@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    FavoritesRoutingModule,
    CommonModule,
    PokemonListModule
  ]
})
export class FavoritesModule { }
