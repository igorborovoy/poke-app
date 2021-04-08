import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {LayoutComponent} from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LayoutComponent, FooterComponent, HeaderComponent],
    imports: [
        CommonModule,
        CoreRoutingModule,
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class CoreModule { }
