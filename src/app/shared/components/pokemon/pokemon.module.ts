import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import {ChangeColorModule} from '../../directives/change-color/change-color.module';
import {LikesPipe} from '../../../utils/pipes/likes.pipe';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




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
    ChangeColorModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PokemonModule { }
