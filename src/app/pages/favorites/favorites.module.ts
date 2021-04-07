import { NgModule } from '@angular/core';
import { FavoritesComponent } from './favorites.component';
import {FavoritesRoutingModule} from './favorites-routing.module';
import {CommonModule} from '@angular/common';
import {PokemonListModule} from '../../shared/components/pokemon-list/pokemon-list.module';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    FavoritesRoutingModule,
    CommonModule,
    PokemonListModule,
    MatCardModule
  ]
})
export class FavoritesModule { }
