import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import {ChangeColorModule} from '../../directives/change-color/change-color.module';
import {LikesPipe} from '../../../utils/pipes/likes.pipe';




@NgModule({
  declarations: [
    PokemonComponent,
    LikesPipe
  ],
  exports: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    ChangeColorModule
  ]
})
export class PokemonModule { }
