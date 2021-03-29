import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';


const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'favorites', loadChildren: () => import('../pages/favorites/favorites.module').then( m => m.FavoritesModule)
      },
      {
        path: '', redirectTo: '/favorites'
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }
