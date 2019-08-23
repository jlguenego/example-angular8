import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  answer = {
    A: 'Paris',
    B: 'Londres',
    C: 'Berlin',
    D: 'Bucarest'
  };

  constructor() { }

  ngOnInit() {
  }

}
