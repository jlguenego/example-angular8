import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LegalComponent } from './legal/legal.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [LegalComponent, HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
