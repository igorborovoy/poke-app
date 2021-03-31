import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import {ChangeColorDirective} from '../../directives/change-color.directive';


@NgModule({
  declarations: [PokemonComponent, ChangeColorDirective],
  exports: [
    PokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
