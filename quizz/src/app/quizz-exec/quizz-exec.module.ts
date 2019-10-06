import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { QuizzExecRoutingModule } from './quizz-exec-routing.module';
import { ListComponent } from './list/list.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from 'projects/widget/src/public-api';


@NgModule({
  declarations: [ListComponent, QuestionComponent, ScoreComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    WidgetModule,
    QuizzExecRoutingModule
  ]
})
export class QuizzExecModule { }
