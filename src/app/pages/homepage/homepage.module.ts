import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {PokemonListModule} from '../../shared/components/pokemon-list/pokemon-list.module';
import {HomepageRoutingModule} from './homepage-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from '../../utils/pipes/search.pipe';

@NgModule({
  declarations: [HomepageComponent, SearchPipe],
  imports: [
    CommonModule,
    PokemonListModule,
    HomepageRoutingModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule
  ],
})
export class HomepageModule { }
