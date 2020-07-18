import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TimerComponent } from 'projects/widget/src/public-api';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @ViewChild(TimerComponent) timer: TimerComponent;

  f = new FormGroup({
    answer: new FormControl('', Validators.required)
  });

  constructor(public quizz: QuizzService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    console.log('submit');
    if (this.f.value.answer === this.quizz.current.questions[this.quizz.progress.questionId].correctAnswer) {
      this.quizz.progress.score++;
    }
    this.quizz.progress.questionId++;
    this.quizz.saveProgress();
    if (this.quizz.progress.questionId === this.quizz.current.questions.length) {
      this.router.navigateByUrl('/score');
      return;
    }
    this.f.reset();
    this.router.navigateByUrl(`/question/${this.quizz.progress.questionId + 1}`);
  }

  interrupt() {
    this.submit();
    this.timer.start();
  }

}
