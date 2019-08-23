import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuizzService } from 'src/app/quizz.service';
import { Question } from 'src/app/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  f = new FormGroup({
    label: new FormControl('Quelle est la capitale de la France ?', Validators.required),
    answerA: new FormControl('Paris', Validators.required),
    answerB: new FormControl('Londres', Validators.required),
    answerC: new FormControl('Berlin', Validators.required),
    answerD: new FormControl('Madrid', Validators.required),
    correctAnswer: new FormControl('', Validators.required)
  });
  constructor(private quizz: QuizzService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    console.log('submit');
    this.quizz.addQuestion(this.f.value as Question);
    this.router.navigate(['/', 'setup']);
  }

}
