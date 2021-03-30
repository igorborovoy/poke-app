import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {PokemonListModule} from '../../shared/pokemon-list/pokemon-list.module';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    PokemonListModule
  ]
})
export class HomepageModule { }
