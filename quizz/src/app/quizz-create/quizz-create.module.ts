import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzCreateRoutingModule } from './quizz-create-routing.module';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    QuizzCreateRoutingModule
  ]
})
export class QuizzCreateModule { }
