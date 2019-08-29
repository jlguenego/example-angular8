import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { ShowMaxLengthComponent } from './show-max-length/show-max-length.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [AutofocusDirective, ShowMaxLengthComponent, RadioInputComponent, TimerComponent],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, ShowMaxLengthComponent, RadioInputComponent, TimerComponent]
})
export class WidgetModule { }
