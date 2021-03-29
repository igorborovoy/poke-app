import { NgModule } from '@angular/core';
import { FavoritesComponent } from './favorites.component';
import {FavoritesRoutingModule} from './favorites-routing.module';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    FavoritesRoutingModule,
    CommonModule
  ]
})
export class FavoritesModule { }
