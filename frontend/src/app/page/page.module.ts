import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    CoreModule
  ]
})
export class PageModule { }
