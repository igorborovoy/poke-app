import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {PokemonListModule} from '../../shared/components/pokemon-list/pokemon-list.module';
import {HomepageRoutingModule} from './homepage-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    PokemonListModule,
    HomepageRoutingModule,
    MatButtonModule,
    MatProgressBarModule
  ],
})
export class HomepageModule { }
