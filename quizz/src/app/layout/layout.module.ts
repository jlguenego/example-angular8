import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, BodyComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent, HeaderComponent, FooterComponent, BodyComponent]
})
export class LayoutModule { }
