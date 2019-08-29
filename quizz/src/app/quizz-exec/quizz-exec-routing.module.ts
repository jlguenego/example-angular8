import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { MustHaveCurrentGuard } from '../must-have-current.guard';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'question/:id', component: QuestionComponent, canActivate: [MustHaveCurrentGuard] },
  { path: 'score', component: ScoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzExecRoutingModule { }
