import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import {ChangeColorModule} from '../../directives/change-color/change-color.module';



@NgModule({
  declarations: [PokemonComponent],
  exports: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    ChangeColorModule
  ]
})
export class PokemonModule { }
