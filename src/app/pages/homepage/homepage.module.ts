import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {PokemonListModule} from '../../shared/components/pokemon-list/pokemon-list.module';
import {HomepageRoutingModule} from './homepage-routing.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    PokemonListModule,
    HomepageRoutingModule
  ],
})
export class HomepageModule { }
