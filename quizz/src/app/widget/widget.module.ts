import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { ShowMaxLengthComponent } from './show-max-length/show-max-length.component';



@NgModule({
  declarations: [AutofocusDirective, ShowMaxLengthComponent],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, ShowMaxLengthComponent]
})
export class WidgetModule { }
